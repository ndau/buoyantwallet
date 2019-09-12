#!/bin/bash
# This script will build a base image for use in circle-ci.
# When updating remember to bump the version in the wallet-circle-ci.docker and in /.circle/config.yml

if ! grep -q 578681496768.dkr.ecr.us-east-1.amazonaws.com ~/.docker/config.json; then
    $(aws ecr get-login --no-include-email)
    if ! grep -q 578681496768.dkr.ecr.us-east-1.amazonaws.com ~/.docker/config.json; then
        echo "Please login to ecr first."
        exit 1
    fi
fi

IMG_NAME=wallet-circle-ci

# get the current directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Build this image
docker build -t $IMG_NAME . -f "$DIR"/wallet-circle-ci.docker

# get the version label from the docker image
VERSION=$(docker inspect $IMG_NAME | jq -jr '.[0].ContainerConfig.Labels["org.opencontainers.image.version"]')

# make a version tag
TAG=578681496768.dkr.ecr.us-east-1.amazonaws.com/$IMG_NAME:$VERSION

# tag the image we built and push it to ECR
docker tag $IMG_NAME "$TAG"
docker push "$TAG"
