
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run docs:build
# 进入生成的文件夹
cd dist/

# 如果是发布到自定义域名
echo 'huangjihua.com.cn' > CNAME

#回退上一级目录
cd ..

# git init
# git add -A
# git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<huangjihua>/<REPO>.git master:gh-pages


# git subtree push --prefix=dist origin gh-pages
cd -
