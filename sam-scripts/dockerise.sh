#!/usr/bin/env bash

SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Dockerising build"

if [ ! -d $SOURCE_DIR/../dist ]; then
    echo "Run install_dependencies.sh & build_dist.sh before dockerise"
    exit 1
fi

source $SOURCE_DIR/docker-artifactory-login.sh

docker build $SOURCE_DIR/.. -t gola-ui-web

retVal=$?
if [ $retVal -ne 0 ]; then
    echo "Dockerising failed"
    exit $retVal
fi

echo "Dockerising Done successfully"
