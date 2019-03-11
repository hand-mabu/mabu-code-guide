---
title: HTML
permalink: /frontend/HTML/
---

#### 1、语法

 - 缩进使用soft table（4个空格）；
 - 嵌套的节点应该缩进；
 - 在属性上，使用双引号，不要使用单引号；
 - 属性名全小写，用中划线做分隔符；
 - 不要在自动闭合标签结尾处使用斜线（[HTML5 规范](https://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 指出他们是可选的）；
 - 不要忽略可选的关闭标签，例`<li>`和`</body>`；
```
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <img src="images/company_logo.png" alt="Company">
        <h1 class="hello-world">Hello World!</h1>
    </body>
</html>
```

#### 2、HTML5 doctype

在页面开头使用这个简单地`doctype`来启用标准模式，使其在每个浏览器中尽可能一致的展现；

虽然`doctype`不区分大小写，但是按照惯例，`doctype`大写（[关于html属性，大写还是小写](https://stackoverflow.com/questions/15594877/is-there-any-benefits-to-use-uppercase-or-lowercase-letters-with-html5-tagname)）；
```
<!DOCTYPE html>
<html>
    ...
</html>
```

#### 3、lang 属性

根据HTML5 规范：
> 应在HTML5标签上加上`lang`属性，这会给语音工具和翻译工具有帮助，告诉它们应当怎么去发音和翻译。

更多关于`lang`属性的说明[在这里](http://w3c.github.io/html/semantics.html#the-html-element)。

在sitepoint上可以查到[语言列表](https://www.sitepoint.com/iso-2-letter-language-codes/)。

但sitepoint只是给出了语言的大类，例如中文只给出了zh，但是没有区分香港、台湾、大陆。而微软给出了一份更加[详细的语言列表](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/)，其中细分了`zh-cn`，`zh-hk`，`zh-tw`。
```
<!DOCTYPE html>
<html lang="en-us">
    ...
</html>
```

#### 4、字符编码
通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定位`UTF-8`。
```
<!DOCTYPEL html>
<html>
    <head>
        <meta charset="UTF-8">
    </head>
    ...
</html>
```

#### 5、IE 兼容模式
用`<meta>`标签可以指定页面应该用什么版本的IE来渲染。

如果想了解更多，请点击[这里](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do)。
不同的`doctype`在不同的浏览器下会触发不同的渲染模式（[这篇文章](https://hsivonen.fi/doctype/)总结的很到位）。
```
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    </head>
    ...
</html>
```

#### 6、引入CSS，JS
根据HTML5规范，通常在引入CSS和JS时不需要指明`type`，因为`text/css`和`type/javascript`分别是他们的默认值。

**HTML5 规范链接：**
- [使用 link](https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element)
- [使用 style](https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element)
- [使用 script](https://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element)

```
<!-- External CSS -->
<link rel="stylesheet" href="code_guide.css">

<!-- In-document CSS -->
<style>
    ...
</style>

<!-- External JS -->
<script src="code_guide.js"></script>

<!-- In-document JS -->
<script>
    ...
</script>
```

#### 7、属性顺序
属于应该按照特定的顺序出现以保证易读性；
- `class`
- `id`
- `name`
- `data-*`
- `src`、`for`、`type`、`href`、`value`、`max-length`、`max`、`min`、`pattern`
- `placeholder`、`title`、`alt`
- `aria-*`、`role`
- `required`、`readonly`、`disabled`

`class`是为高可复用组件设计的，所以应该处在第一位；

`id`更加具体且应该尽量少的使用，所以放在第二位；

```
<a class="..." id="..." data-modal="toggle" href="#">Example link</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

#### 8、boolean 属性
boolean 属性指不需要声明取值的属性，XHTML需要每个属性声明取值，但是HTML5并不需要；

更多内容可以参考[WhatWG section on boolean attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes)：
> boolean 属性的存在表示取值为true，不存在则表示取值为false。
```
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
    <option value="1" selected>1</option>
</select>
```

#### 9、JS 生成便签
在JS文件中生成标签会让内容变得更难查找，更难编辑，性能更差，应该尽量避免这种情况的出现。

#### 10、减少标签数量
在编辑HTML代码时，需要尽量避免多余的父节点；

很多时候，需要通过迭代和重构来使HTML变得更少。

```
<!-- Not well -->
<span class="avatar">
    <img src="...">
</span>
<!-- Better -->
<img class="avatar" src="...">
```

#### 11、实用高于完美
尽量遵循HTML标准和语义，但是不应该以浪费实用性为代价；

任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

---

**相关资料：**
 - [Code Guide by @AlloyTeam](http://alloyteam.github.io/CodeGuide/)