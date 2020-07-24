#!/usr/bin/env bash

SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Running Lint"

source $SOURCE_DIR/docker-artifactory-login.sh

docker run --rm \
    -u `id -u`:`id -g` \
    -v $SOURCE_DIR/..:/ui-web \
    node:10-alpine \
    sh -c "cd /ui-web && yarn ci"

retVal=$?
if [ $retVal -ne 0 ]; then
    echo "Lint failed"
    exit $retVal
fi

echo "Lint Done successfully"
