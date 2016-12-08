V ?= @
LOCALHOST := '127.0.0.1'
PORT := '4200'
VERSION := '0.0.1'
LOCALSERVER := 'http://localhost:4200'
ENV_DEVELOPMENT := 'development'
ENV_PRODUCTION := 'production'
ENV_TEST := 'test'

default:
	$(V)echo Please use \'make help\' or \'make ..any_parameters..\'

tag:
	$(V)git tag -d $(VERSION) 2>&1 > /dev/null
	$(V)git tag -d latest 2>&1 > /dev/null
	$(V)git tag $(VERSION)
	$(V)git tag latest

# push:
# 	$(V)git push --tags origin master -f

help:
	$(V)clear
	$(V)echo "\n\n\t Manual Makefile to start of the project:\n\n make start - Start App Development Environment.\n make test  - Start App Test Environment.\n"

clean:
	$(V)clear
	$(V)npm cache clean
	$(V)bower cache clean
	$(V)rm -rf ./dist
	$(V)rm -rf ./tmp/*
	$(V)clear

test: clean
	$(V)echo "\n\n\t Start $(ENV_TEST) Enviroment on $(LOCALSERVER)\n\n"
	$(V)ember test

start: clean
	$(V)echo "\n\n\t  Start App $(ENV_DEVELOPMENT) Enviroment\n\n\t\t$(LOCALSERVER)\n\n"
	$(V)ember server

start_dev: clean
	$(V)echo "\n\n\t Start $(ENV_DEVELOPMENT) Enviroment on $(LOCALSERVER)\n\n"
	$(V)ember server

start_test: clean
	$(V)echo "\n\n\t Start $(ENV_TEST) Enviroment on $(LOCALSERVER)\n\n"
	$(V)ember test

start_prod: clean
	$(V)clear
	$(V)echo "\n\n\t Start $(ENV_PRODUCTION) Enviroment on $(LOCALSERVER)\n\n"
	$(V)ember deploy production
