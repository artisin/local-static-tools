# include .env
# export $(shell sed 's/=.*//' .env)

# Make this help target the default target
.DEFAULT_GOAL := help
# Use phony target
.PHONY: help

install: ## Default install
	pnpm install

reinstall: ## Reinstalls all packages
	rm -rf 'node_modules'
	pnpm install

reinstall-full: ## Reinstalls all packages + deletes lock files /*
	rm -rf 'node_modules'
	rm 'pnpm-lock.yaml'
	pnpm install

build: ## Builds Server
# 	rm -rf dist
	pnpm run bundle


help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
