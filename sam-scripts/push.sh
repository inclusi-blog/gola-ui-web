#!/usr/bin/env bash
SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source $SOURCE_DIR/docker-artifactory-login.sh

echo "Pushing docker images to Artifactory"

docker login -u $ARTIFACTORY_USER -p $ARTIFACTORY_PASSWORD
docker tag gola-ui-web gola-ui-web:latest
docker push $ARTIFACTORY_USER/gola-ui-web:$GO_REVISION_GOLA_UI_WEB

echo "cleaning pushed docker image  ... "
docker rmi $ARTIFACTORY_USER/gola-ui-web:$GO_REVISION_GOLA_UI_WEB

if [ $retVal -ne 0 ]; then
    echo "Push of  docker image failed"
    exit $retVal
fi
echo "Push of Docker image Done Successfuly ... "
