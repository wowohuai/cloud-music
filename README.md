## 1. git清空本地缓存
git rm -r --cached .

把yarn.lock  加入gitignore

## 2. 初始化

引入 reset.css 和 iconfont

配置jsconfig.json  让编辑器可以进行@别名提示



坑1： better-scroll在初始化有图片的列表时，外层应使用元素确定图片的宽高，而不应该是靠图片撑开容器的宽度。
这样better-scroll在DOM加载完成后便可以准确的计算出内容去的高度，从而实现滚动。