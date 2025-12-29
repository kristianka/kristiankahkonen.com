#!/bin/sh

# 🚀 Deploy Script
# Automatically updates the codebase, builds new containers, and restarts the services.
# Displays the downtime during deployment.
# Make the script executable with: chmod +x ./deploy.sh
# Run with: ./deploy.sh
# Run with: ./deploy.sh --force  (to force rebuild even without changes)

set -e  # Exit immediately if a command exits with a non-zero status

# Check for --force flag
FORCE_DEPLOY=false
if [ "$1" = "--force" ]; then
    FORCE_DEPLOY=true
    echo "🔧 Force deploy enabled, will rebuild regardless of changes."
fi

echo "📦 Fetching latest changes from the repository..."
git fetch

# Check if there are any changes
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse @{u})

if [ "$LOCAL" = "$REMOTE" ] && [ "$FORCE_DEPLOY" = false ]; then
    echo "✅ Already up to date. No deployment needed."
    exit 0
fi

echo "🔄 Changes detected! Pulling updates..."
git pull

echo "🔧 Building new Docker containers..."
sudo docker compose build

echo "⏳ Preparing to stop running containers..."
downtime_start=$(date +%s)  # Record the start time of downtime

sudo docker stop nginx nextjs directus database cache || echo "⚠️ Some containers may not be running, skipping stop step."

echo "🔄 Starting updated containers..."
sudo docker compose up -d

downtime_end=$(date +%s)  # Record the end time of downtime

downtime_duration=$((downtime_end - downtime_start))  # Calculate downtime in seconds
echo "✅ Deployment complete! 🚀"

# spaces don't render properly for some reason so two spaces
echo "⏱️  Downtime duration: ${downtime_duration} seconds."
echo "⚠️  IMPORTANT: Please check all pages that use pre-rendering to ensure data is displayed correctly!"
