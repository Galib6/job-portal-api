#!/bin/bash
# Create the log directory and log file
mkdir -p /logs

# Run migrations and seeds from built files
node dist/cli.js migration validate
node dist/cli.js migration run
node dist/database/seeds/seed.js


node dist/main.js