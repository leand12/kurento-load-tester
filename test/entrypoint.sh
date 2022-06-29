#!/bin/sh

echo "Waiting for selenium to start..."
while ! nc -z selenium 4444; do
  sleep 0.1
done
echo "Selenium started"

node /app/test.js
