#!/bin/bash
set -euo pipefail

git commit -am "🌿" && git push
echo
./utils/stats.sh
echo
python build.py
echo
aws s3 sync build/ s3://laminae.org/

# NOTE: This is a hack to avoid .html endings for pages. Command requires `--recursive` and `--exclude` flags to select the desired files, which thus requires that only HTML files go in the top-level build directory.
aws s3 cp \
    s3://laminae.org \
    s3://laminae.org \
    --exclude '*/*' \
    --no-guess-mime-type \
    --content-type="text/html" \
    --metadata-directive="REPLACE" \
    --recursive

# (first 1,000 path invalidations per month are free, $0.005/path after that)
if [ $# -eq 1 ]
then
    echo
    aws cloudfront create-invalidation --distribution-id E139NY6STN19PZ --paths '/*'
fi
