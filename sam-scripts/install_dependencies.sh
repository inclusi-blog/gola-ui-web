#!/usr/bin/env bash
PROJECT="gola-ui-web"
SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Installing dependencies"

source $SOURCE_DIR/docker-artifactory-login.sh

docker-compose -f infrastructure/build.yml --project-name $PROJECT \
	run --rm build-env /bin/sh -c "yarn install --frozen-lockfile"

retVal=$?
if [ $retVal -ne 0 ]; then
    echo "Dependency installation failed"
    exit $retVal
fi

echo "Dependency installation successful"
