#!/bin/sh

docker-compose rm --env-file=./.env.test -f docker-compose.yml -f docker-compose.test.yml up