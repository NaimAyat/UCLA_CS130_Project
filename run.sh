#!/usr/bin/env bash
command -v docker-compose >/dev/null 2>&1 || { echo >&2 "Must install docker-compose"; exit 1; }
cd `dirname $0`
docker-compose up --build
