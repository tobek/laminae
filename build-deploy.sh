#!/bin/bash

git commit -am "🌱" && git push
echo
./utils/stats.sh
echo
python build.py
echo
cp build/00-0-title.html build/index.html
aws s3 sync build/ s3://thereitwas.com/laminae/
aws s3 cp build/progress.html s3://thereitwas.com/bits/

# (first 1,000 path invalidations per month are free, $0.005/path after that)
if [ $# -eq 1 ]
then
	echo
    aws cloudfront create-invalidation --distribution-id E3M8QKVDNJU97N --paths '/*'
fi
