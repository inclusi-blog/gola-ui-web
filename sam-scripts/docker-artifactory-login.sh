#!/usr/bin/env bash

export ARTIFACTORY_DOCKER_PUSH_URL=${ARTIFACTORY_DOCKER_REGISTRY}

echo "Login to Docker Artifactory ... "
docker login -u ${ARTIFACTORY_USER} -p ${ARTIFACTORY_PASSWORD}
