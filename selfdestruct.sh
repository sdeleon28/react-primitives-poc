#!/bin/sh
# Run this script to clean your react-native environment if it's giving you
# "Unable to resolve module" problems.
DIR="$( cd "$( dirname "$0" )" && pwd )"
cd $DIR
rm -rf node_modules/
yarn install
watchman watch-del-all
rm -rf $TMPDIR/react-*
./node_modules/react-native/packager/packager.sh --reset-cache

