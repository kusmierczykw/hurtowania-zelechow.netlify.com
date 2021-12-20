#!/usr/bin/env bash

# Nazwa sieci
NETWORK_NAME=frontend

# Wyłączam kontener z obrazek Gatsby
cd docker
docker-compose down -v

# Jeśli istnieje sieć dla maszyny, to ją usuwam
if docker network list | grep $NETWORK_NAME; then
  docker network remove $NETWORK_NAME
fi
cd -
