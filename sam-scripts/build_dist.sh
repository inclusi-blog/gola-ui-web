#!/usr/bin/env bash

SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Running build"

if [ ! -d $SOURCE_DIR/../node_modules ]; then
    echo "Run install_dependencies.sh before build"
    exit 1
fi

source $SOURCE_DIR/docker-artifactory-login.sh

docker run --rm \
    -u `id -u`:`id -g` \
    -v jenkins_home:/gola \
    node:10-alpine \
    sh -c "cd /gola/gola-web-ui && yarn build"

retVal=$?
if [ $retVal -ne 0 ]; then
    echo "Build failed"
    exit $retVal
fi

echo "Build Done successfully"
