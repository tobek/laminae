#!/bin/bash

git commit -am "🌿" && git push
echo
./utils/stats.sh
echo
python build.py
cp build/e-styleguide build/e-styleguide.html # TODO temp
echo
aws s3 sync --acl public-read build/ s3://thereitwas.com/laminae/
aws s3 cp  --content-type 'text/html' --acl public-read build/progress s3://thereitwas.com/bits/progress.html # TODO just redirect the latter to former

# NOTE: This is a hack to avoid .html endings for pages. Command requires `--recursive` and `--exclude` flags to select the desired files, which thus requires that only HTML files go in the top-level build directory.
aws s3 cp \
       s3://thereitwas.com/laminae \
       s3://thereitwas.com/laminae \
       --exclude '*/*' \
       --no-guess-mime-type \
       --content-type="text/html" \
       --metadata-directive="REPLACE" \
       --recursive

# (first 1,000 path invalidations per month are free, $0.005/path after that)
if [ $# -eq 1 ]
then
	echo
    aws cloudfront create-invalidation --distribution-id E3M8QKVDNJU97N --paths '/*'
fi
