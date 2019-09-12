#!/bin/bash
# This script runs the circle ci build on your local machine.
# You can install the circle ci commandline tool with the following commands:
#

# errcho echos to stderr
errcho(){
    echo -e "$@" >&2
}

# get the current directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if ! which circleci; then
    if ! which brew; then
        errcho "Please install the circleci commandline tool first."
        exit 1
    else
        errcho "Installing circleci"
        brew install circleci
    fi
fi

# check for environment variables
errs=false
if [ -z "$AWS_ACCESS_KEY_ID" ]; then
    errcho "Please set AWS_ACCESS_KEY_ID"
    errs=true
fi

if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
    errcho "Please set AWS_SECRET_ACCESS_KEY"
    errs=true
fi

$errs && exit 1

# Build locally using circle ci
(
    cd "$DIR/.."
    circleci local execute --env AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID   --env AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
)
