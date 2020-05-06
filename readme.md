### 一.目录结构
- mock 数据mock目录
- public 主页公用的文件
- src 组件及其他存放路径
   - assets (公用文件存放地)
        - css (公用的css和sass)
        - script (公用的脚本文件)
        - image (公用的图片)
   - components (不用于路由的组件)
   - views   (用于路由显示的组件)
      - use (公用的组件存放路径) 
         - table  (基于table的增删改差mixin 加 弹窗组件) 可用
         - login (登录的模板) 可用
         - vuexTest (演示Vuex) 可用
         - checkbox (选择框) 暂不可用
         - scroll (滚动组件) 暂不可用
         - tree (树组件)  暂不可用
   - util  (工具目录)
     - request (axios 配置目录) 
        -   config.js (axios 配置信息文件)
        -   request.js (axios 方法)
     - store  vuex
        - state.js (vuex 仓库)
        - index.js (vuex 提供外部使用的主文件)
        - getters.js (vuex getter)
        - mutations.js (vuex mutations)
        - mutations_type.js (vuex mutationType)
        - actions.js (vuex actions)
### 二 注释规范
```JAVASCRIPT
  /**
     * @method computedCanvasSize 
     * @params Imgwidth 图片的实际宽度(px)
     * @author zhoujianxu
     * @result 根据容器的高度 与图片高度计算比例 并计算出宽度 将结果赋给 canvasInfo 对象
     * @return 吐出函数结果
     * */
```
### 三 代码规范
```javascript
项目开启es-lint 请勿关闭提交到git时必须通过eslint效验
如特殊情况关闭eslint效验 如下方式
// 去下一行效验
Use // eslint-disable-next-line to ignore the next line.
// 去整个文件效验
Use /* eslint-disable */ to ignore all warnings in a file.
```
### 四 项目编写规范
- 减少代码量,增加代码注释
- 多次复用的组件分离成公用组件
- 尽量减少定时器的使用 如使用setInterval 记得在钩子里关闭
### 修改ui库样式 使用样式穿透如下
```javascript
1.deep
.text-box {
  /deep/ input {
    width: 166px;
    text-align: center;
  }
}
2. >>>
.wrapper >>> .swiper-pagination-bullet-active{
    background: red !important;

```