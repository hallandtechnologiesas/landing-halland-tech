.PHONY: build check dev format install lint start typecheck

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

format:
	npm run format

lint:
	npm run lint

typecheck:
	npm run typecheck

check:
	npm run check
