#!/bin/bash
# Create the log directory and log file
mkdir -p /logs

yarn db:migration:validate
yarn db:migration:run
yarn db:seed
node dist/main.js