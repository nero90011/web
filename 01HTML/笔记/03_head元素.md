<!--
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-03 12:20:58
 * @LastEditTime: 2019-08-08 16:52:57
 * @LastEditors: Do not edit
 * @Description: 
 -->
###head 元素
MIME 类型:
每当浏览器请求一个页面时，web 服务器会在发送实际页面内容之前，先发送一些头信息。
浏览器需要这些信息来决定如何解析随后的页面内容。
最重要的是 Content-Type
比如: Content-Type:text/html
text/html:即这个页面的"内容类型",或者称为 MIME 类型。这个头信息将唯一确定某个资源的本质是什么
也决定了它应该如何被呈现。
图片也有自己的 MIME 类型
jpg:image/jpeg  
 png:image/png
js 也有自己的 MIME 类型，css 也有自己的 MIME 类型，
任何资源都有自己的 MIME 类型，整个 web 都依靠 MIME 类型来运作
<meta charset="UTF-8">:
告诉浏览器你应该使用哪种编码来解析网页
