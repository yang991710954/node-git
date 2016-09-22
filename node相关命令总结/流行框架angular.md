# 流行框架angular

### Angular开发流程

1. 下载angular.js  手动下载:`npm install angular --save`
2. 引入angular相关js文件
3. 在html标签上加入ng-app入口指令
4. 在js中创建控制器`angular.module('myApp',[])`,创建之后需要在ng-app的属性值加上模块名`ng-app="myApp"`
5. 在js中创建控制器`angular.module('myApp',[]).controller('demoController',function($scope){})`,在页面上加上`ng-controller="demoController"`
6. 初始化数据模型,`ng-model,{{}},ng-click ...`
7. 抽象数据模型（建模）
8. 书写js代码

### 双向数据绑定
-   指的是文本框的值改变会导致数据模型值的改变($scope的属性)
            数据模型的值的改变会导致页面文本框的值的改变，这种相互影响的关系，我们称之为双向数据绑定(双边数据绑定)
-   ng-model
    + ng-model是写在有value值的这些标签上，不能够写在没有value值的标签上。

### 单向数据绑定
- 如果表达式的值，只能由数据模型的值的改变，导致表达式值的改变，表达在页面输出的值不能改变，所以不能够反过来改变数据模型的值。

### angular常用指令

- 在 AngularJS 中将前缀为 ng- 这种属性称之为指令，其作用就是为 DOM 元素调用方法、定义行为绑定数据等。
- 简单说：当一个 Angular 应用启动，Angular e就会遍历 DOM 树来解析 HTML，根据指令不同，完成不同操作。

1. `ng-bind=""`:可以实现类似于表达式的功能，只能用在双标签上`ng-bind="name"`;

2. `ng-cloak `:这个指令是写在元素类样式名的位置`class="ng-cloak"`，angular在解析完成之后会移除所有元素的ng-cloak样式。

3. `ng-bind-html`:用来渲染html字符串，需要引入*angular-sanitize*插件，使用方式和ng-bind一样。

4. `ng-repeat`:用来循环某个元素，以输出数组中的数据，写法类似于for in循环.

   - 示例:`<li ng-repeat="item in data">{{item.name}}</li>`,data是我们的数据模型。写在其他元素上都可以.


+ ng-repeat也可以遍历key,value对象，写法也类于for-in循环
      示例:'<li ng-repeat="key in obj">{{obj[key]}}</li>'
+ 遍历的数组中如果有重复元素(引用数据类型不用加)，加上`track by $index`;
   + ng-repeat在遍历数组时会额外提供其他的数据
     *$even:表示当前数据是否是第偶数个，是从索引0开始计算的。
     *$odd: 表示当前数据是否是第奇数个，是从索引0开始计算的。
     *$first:表示当前数据是否是第一条数据
     *$last:表示当前数据是否是最后一条数据
     *$middle:表示当前数据不是第一条也不是最后一条。

1. `ng-class`:操作元素的类样式

   1. 动态的操作元素的样式，写法类似于从一个对象中取相应的value值 

      ```html
          *示例:`<li ng-class="{'A':'red','B':'green',C:'yellow'}['A']"></li>`
          angular会把取到的值添加到对应的class中。
      ```

   2. ng-class 可以从多种样式中选择多个样式：

      示例:`<li ng-class="{'red':true,'green':true,yellow:false}"><li>`

2. `ng-show` :需要提供一个布尔值，隐藏或显示元素，为true时显示

   ```html
     示例:ng-show="item.salary!='A++'"
   ```

3. `ng-hide` :需要提供一个布尔值，隐藏或显示元素，为true时隐藏

   ```html
     示例:ng-hide="item.salary=='A++'"
   ```

4. `ng-if` :也需要提供一个布尔值，移除或显示元素，为true显示元素，false时移除元素.

   ```h
     示例:ng-if="item.salary!='A++'"
   ```

5. `ng-switch` :根据值的不同显示不同的元素,配合ng-switch-when使用,类似于js中的switch case

   ```html
     <div ng-switch="name">
          <div ng-switch-when="小明">我是小明，我在这儿</div>
          <div ng-switch-when="小红">我是小红，我怕谁</div>
     </div>
   ```

   ​

### 其他常用指令
- ng-checked:
  + 单选/复选是否选中,ng-model双向数据绑定,ng-checked是单向
- ng-selected:
  + 是否选中
- ng-disabled：
  + 是否禁用
- ng-readonly:
  + 是否只读



### 常用事件指令

不同于以上的功能性指令，Angular还定义了一些用于和事件绑定的指令：

- ng-blur：//失去焦点事件
- ng-focus：// 获取焦点事件  .focus()
- ng-change：// 文本值改变事件
- ng-copy：// 复制事件
- ng-click：// 单击事件  ng-click="add()"
- ng-dblclick：//双击事件 
- ng-submit: // 表单提交



