<!--
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-03 12:20:58
 * @LastEditTime: 2019-08-08 16:38:42
 * @LastEditors: Do not edit
 * @Description: 
 -->
###H5
1.DOCTYPE 和浏览器渲染模式
DOCTYPE，或者称为 Document Type Declaration（文档类型声明，缩写 DTD）
通常情况下，DOCTYPE 位于一个 HTML 文档的最前面的位置，位于根元素 HTML 的起始标签之前。
因为浏览器必须在解析 HTML 文档正文之前就确定当前文档的类型，以决定其需要采用的渲染模式，
不同的渲染模式会影响到浏览器对于 CSS 代码甚至 JavaScript 脚本的解析
到目前为止，各浏览器主要包含了三种模式。在 HTML5 草案中，更加明确的规定了模式的定义：
传统名称 HTML5 草案名称 document.compatMode 返回值
standards mode(strict mode) no-quirks mode CSS1Compat
almost standards mode limited-quirks mode CSS1Compat
quirks mode quirks mode BackCompat
document.compatMode
document.compatMode 属性最初由微软在 IE 中创造出来，这是一个只读的属性，返回一个字符串，
只可能存在两种返回值：
BackCompat：标准兼容模式未开启（怪异模式）
CSS1Compat：标准兼容模式已开启（标准模式）
在现代主流浏览器中，其实怪异模式的渲染和标准与几乎标准间没有太大的差别（ie9+ 谷歌 火狐 ...）
ie5.5 之前都是 ie 自己的渲染模式，怪异模式
ie6 才开始慢慢支持标准，标准模式，在 ie6 中怪异和标准模式的区别最大
ie7 8 9 都是基于标准模式升级的，他们理论上存在怪异模式
HTML5 提供的<DOCTYPE html>是标准模式，向后兼容的,等同于开启了标准模式，
那么浏览器就得老老实实的按照 W3C 的 标准解析渲染页面
一个不含任何 DOCTYPE 的网页将会以 怪异(quirks) 模式渲染。
2.DTD
<!DOCTYPE html>
当 doctype 信息如上时，表明该页面是遵守了 HTML5 规范的，浏览器会选择 Standards Mode，这种 doctype 是最推荐的一种，
我们平时设计页面都应该加上这一个 doctype。
HTML5 不基于 SGML,所以不需要引用 DTD,浏览器内部本身有对标签进行解析渲染验证的模块
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
当 doctype 如上时，浏览器同样会选择 Standards Mode，虽然和第一种 doctype 有一些区别，但是几乎可以认为是一样的。

    	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    	当 doctype 如上时，浏览器会选择 Almost Standards Mode，渲染时和标准会有一些区别

    	当 doctype 缺失的时候，浏览器会选择 Quirks Mode，这是非常不推荐的方式，
    	当 doctype上面有注释，标签或者空行时，某些浏览器都会认为该页面不具有doctype。
    	我们应该尽量避免 Quirks Mode，这对一个 web 应用是非常不利的地方。





    4.每种doctype在浏览器中对应的渲染模式
    	https://en.wikipedia.org/wiki/Quirks_mode
