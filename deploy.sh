#!/bin/bash

if [ $# -eq 1 ]
  then msg="$1"
fi

echo -e "\033[0;32mStart Build...\033[0m"
hugo --cleanDestinationDir
sleep 0.1

echo -e "\033[0;32mCopy WEB data...\033[0m"
cd ../site
git rm -rf *
cp -rf ../web_workspace/public/* .
sleep 0.1

echo -e "\033[0;32mNow Uploading...\033[0m"
git add *
git commit -m "$msg"
git push
sleep 0.1

cd ../web_workspace
echo -e "\033[0;32mDONE!\033[0m"
