#!/bin/bash

aws s3 sync . s3://www.caxap.design --acl public-read --cache-control "s-maxage=2592000, max-age=2592000, public" --exclude "upload.sh" --exclude ".git*" --exclude "README.md"
