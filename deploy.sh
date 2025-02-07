#!/bin/bash

npm run build && aws s3 cp --recursive ./build/ s3://1d20.io/