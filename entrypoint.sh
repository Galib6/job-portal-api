#!/bin/bash
set -x
# Create the log directory and log file
mkdir -p /logs

# Run migrations and seeds from built files
{
  echo "Validating migrations...";
  node dist/cli.js migration validate;
} 2>&1 | tee -a /logs/entrypoint.log || true
{
  echo "Running migrations...";
  node dist/cli.js migration run;
} 2>&1 | tee -a /logs/entrypoint.log || true
{
  echo "Seeding database...";
  node dist/database/seeds/seed.js;
} 2>&1 | tee -a /logs/entrypoint.log || true

# Start main server
{
  echo "Starting main server...";
  node dist/main.js;
} 2>&1 | tee -a /logs/entrypoint.log || true