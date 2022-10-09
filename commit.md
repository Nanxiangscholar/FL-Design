# 👇👇看这里👇👇

## 教程

### 1.克隆仓库到本地

1. Fork这个地址的仓库

![image-20220907201110292](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220907201110292.png)

2. 复制SSH地址

![image-20220907201215711](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220907201215711.png)

3. 新建一个文件夹(建议英文)，打开git终端
4. 执行命令`git clone 你刚刚复制的地址`将代码克隆到本地
   - `git clone git@github.com:Found-404/Fl-UI.git `
   - 该操作是将远程仓库克隆到本地

### 2.更新组件

1. 执行`yarn`下载所用到的第三方包
2. 修改组件的代码(就是确保你组件的开发正常进行)
3. ......*修改更新组件*......

### 3.上传到仓库

1. 执行命令`git status -s`       检查所有修改的部分
2. `git add .`       上传所有修改的文件到暂存区
   - 如果遇到错误`error: fsmonitor--daemon failed to start`见下文备注

3. `git commit -m "提交描述信息"`      将暂存区文件上传到仓库
4. `git push origin main`      上传仓库到远程仓库，注意此时远程仓库是没有实时更新你修改的代码的！

### 4.提交Pr

1. 在你拉取的仓库中点击   **Pull requests**

![image-20220907215533644](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220907215533644.png)

13. 点击New pull request创建拉取请求

![image-20220907215612891](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220907215612891.png)

14. 选择目标远程仓库的分支，以及本地仓库分支，点击**Create pull request**提交Pr
    - 请选择nav分支

![image-20220907222633006](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220907222633006.png)

14. 写好注释，一定要标记好更新的地方有哪些

![image-20220907222753185](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220907222753185.png)

15. 点击**Create pull request**提交pr等待审核通过

## 备注

[error: fsmonitor--daemon failed to start解决文档](https://blog.csdn.net/weixin_45944993/article/details/121462547)

