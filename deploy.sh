
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run docs:build
# 进入生成的文件夹
cd dist/

# 如果是发布到自定义域名
echo 'huangjihua.com.cn' > CNAME

# 提交master分支 回退上一级目录  配合master分支配置
# cd ..

git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:huangjihua/hanklog.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:huangjihua/hanklog.git master:gh-pages

 

#从子目录push到远程仓库（确认你有写权限）
# 推送子目录的变更有1条命令。
# 语法：git subtree push --prefix=<子目录名> <远程分支名> 分支
# git subtree push --prefix=dist origin gh-pages
cd -
