#!/usr/bin/env bash

# Nazwa sieci
NETWORK_NAME=frontend

# Jeśli sieć dla maszyny nie została utworzona, to ją tworzę
if ! docker network list | grep $NETWORK_NAME; then
  docker network create $NETWORK_NAME
fi

# Uruchamiam kontener z obrazem Gatsby
cd docker
docker-compose up -d
docker-compose exec gatsby bash
cd -
