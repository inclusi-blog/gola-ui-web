#!/usr/bin/env bash

SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Installing dependencies"

source $SOURCE_DIR/docker-artifactory-login.sh

echo "This is source directory $SOURCE_DIR"
docker run -u `id -u`:`id -g` -v "$SOURCE_DIR"/..:/gola-ui-web node:10-alpine sh -c "sleep 10000"

retVal=$?
if [ $retVal -ne 0 ]; then
    echo "Dependency installation failed"
    exit $retVal
fi

echo "Dependency installation successful"
