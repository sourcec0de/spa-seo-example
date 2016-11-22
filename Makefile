deploy-app:
	rm -rf deploy
	mkdir deploy
	cp -r dist deploy/dist
	cp index.html deploy/index.html