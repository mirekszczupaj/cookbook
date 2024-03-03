start:
	docker compose up -d

start-force:
	docker compose up -d --build --force-recreate --remove-orphans --always-recreate-deps

kill:
	docker ps -a -q | xargs -n 1 -P 8 -I {} docker stop {}
