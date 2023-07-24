#!/usr/bin/env sh

# 进入生成的文件夹
cd public
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:linxun14yhl9t/my-blog.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:linxun14yhl9t/my-blog.git master:gh-pages

cd -