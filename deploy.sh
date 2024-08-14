#!/bin/sh

# Automatically pulls the latest code from the repository and restarts the containers
# Running first time: chmod +x ./deploy.sh
# Running: ./deploy.sh

git pull

sudo docker stop nginx nextjs directus database cache

sudo docker compose up --build -d