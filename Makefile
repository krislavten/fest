
yarn-install = yarn --registry=http://npm.zhenguanyu.com

clean-app:
	rm -rf dist

clean-client:
	rm -rf public && rm -rf config

clean: clean-app clean-client

install-app:
	${yarn-install}

install-client:
	cd client && ${yarn-install}

install: install-app install-client

dev:
	cd client && yarn dev

start:
	yarn dev