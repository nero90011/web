/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* jshint esversion:6 */
/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-09 15:56:39
 * @LastEditTime: 2019-08-20 13:43:10
 * @LastEditors: Do not edit
 * @Description:
 */

/**
 * ArrayBuffer对象
 */
const buffer = new ArrayBuffer(8);
buffer.byteLength;
/**
 * Blob对象
 */
const htmlFragment = ['<a id="a"><b id="b">hey!</b></a>'];
const myBlob = new Blob(htmlFragment, {
  type: 'text/html',
});
// Blob 保存JSON数据
const obj = {
  hello: 'world',
};
const blob = new Blob([JSON.stringify(obj)], {
  type: 'application/json',
});
// size type slice(0)

// 获取文件信息
function fileinfo(files) {
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    console.log(
      f.name, // 文件名，不含路径
      f.size, // 文件大小，Blob 实例属性
      f.type, // 文件类型，Blob 实例属性
      f.lastModifiedDate, // 文件的最后修改时间
    );
  }
}

// 下载文件
function getBlob(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    callback(xhr.response);
  };
  xhr.send(null);
}

// 生成URL
const droptarget = document.getElementById('droptarget');

droptarget.ondrop = function (e) {
  const files = e.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    const type = files[i].type;
    if (type.substring(0, 6) !== 'image/') { continue; }
    const img = document.createElement('img');
    img.src = URL.createObjectURL(files[i]);
    img.onload = function () {
      this.width = 100;
      document.body.appendChild(this);
      URL.revokeObjectURL(this.src);
    };
  }
};

// 读取文件
function readfile(f) {
  const reader = new FileReader();
  reader.readAsText(f);
  reader.onload = function () {
    const text = reader.result;
    const out = document.getElementById('output');
    out.innerHTML = '';
    out.appendChild(document.createTextNode(text));
  };
  reader.onerror = function (e) {
    console.log('Error', e);
  };
}

// 读取二进制文件
function typefile(file) {
  // 文件开头的四个字节，生成一个 Blob 对象
  const slice = file.slice(0, 4);
  const reader = new FileReader();
  // 读取这四个字节
  reader.readAsArrayBuffer(slice);
  reader.onload = function (e) {
    const buffer = reader.result;
    // 将这四个字节的内容，视作一个32位整数
    const view = new DataView(buffer);
    const magic = view.getUint32(0, false);
    // 根据文件的前四个字节，判断它的类型
    switch (magic) {
      case 0x89504E47:
        file.verified_type = 'image/png';
        break;
      case 0x47494638:
        file.verified_type = 'image/gif';
        break;
      case 0x25504446:
        file.verified_type = 'application/pdf';
        break;
      case 0x504b0304:
        file.verified_type = 'application/zip';
        break;
    }
    console.log(file.name, file.verified_type);
  };
}

/**
 * File对象 FileList对象 FileReader对象
 *
 * FileReader.error：读取文件时产生的错误对象
    FileReader.readyState：整数，表示读取文件时的当前状态。一共有三种可能的状态，0表示尚未加载任何数据，1表示数据正在加载，2表示加载完成。
    FileReader.result：读取完成后的文件内容，有可能是字符串，也可能是一个 ArrayBuffer 实例。
    FileReader.onabort：abort事件（用户终止读取操作）的监听函数。
    FileReader.onerror：error事件（读取错误）的监听函数。
    FileReader.onload：load事件（读取操作完成）的监听函数，通常在这个函数里面使用result属性，拿到文件内容。
    FileReader.onloadstart：loadstart事件（读取操作开始）的监听函数。
    FileReader.onloadend：loadend事件（读取操作结束）的监听函数。
    FileReader.onprogress：progress事件（读取操作进行中）的监听函数。
    FileReader.abort()：终止读取操作，readyState属性将变成2。
    FileReader.readAsArrayBuffer()：以 ArrayBuffer 的格式读取文件，读取完成后result属性将返回一个 ArrayBuffer 实例。
    FileReader.readAsBinaryString()：读取完成后，result属性将返回原始的二进制字符串。
    FileReader.readAsDataURL()：读取完成后，result属性将返回一个 Data URL 格式（Base64 编码）的字符串，代表文件内容。对于图片文件，这个字符串可以用于<img>元素的src属性。注意，这个字符串不能直接进行 Base64 解码，必须把前缀data:;base64,从字符串里删除以后，再进行解码。
    FileReader.readAsText()：读取完成后，result属性将返回文件内容的文本字符串。该方法的第一个参数是代表文件的 Blob 实例，第二个参数是可选的，表示文本编码，默认为 UTF-8。
 */
var file = document.getElementById('fileItem').files[0];
file instanceof File; // true
// 构造函数
var file = new File(
  ['foo'],
  'foo.txt', {
    type: 'text/plain',
  },
);
// 属性方法
const myFile = new File([], 'file.bin', {
  lastModified: new Date(2018, 1, 1),
});
myFile.lastModified; // 1517414400000
myFile.name; // "file.bin"
myFile.size; // 0
myFile.type; // ""
// FileList
const files = document.getElementById('fileItem').files;
files instanceof FileList; // true
// FileReader
const reader = new FileReader();
// 选择图片后显示
function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

/**
 * FormData对象
 * FormData.get(key)：获取指定键名对应的键值，参数为键名。如果有多个同名的键值对，则返回第一个键值对的键值。
FormData.getAll(key)：返回一个数组，表示指定键名对应的所有键值。如果有多个同名的键值对，数组会包含所有的键值。
FormData.set(key, value)：设置指定键名的键值，参数为键名。如果键名不存在，会添加这个键值对，否则会更新指定键名的键值。如果第二个参数是文件，还可以使用第三个参数，表示文件名。
FormData.delete(key)：删除一个键值对，参数为键名。
FormData.append(key, value)：添加一个键值对。如果键名重复，则会生成两个相同键名的键值对。如果第二个参数是文件，还可以使用第三个参数，表示文件名。
FormData.has(key)：返回一个布尔值，表示是否具有该键名的键值对。
FormData.keys()：返回一个遍历器对象，用于for...of循环遍历所有的键名。
FormData.values()：返回一个遍历器对象，用于for...of循环遍历所有的键值。
FormData.entries()：返回一个遍历器对象，用于for...of循环遍历所有的键值对。如果直接用for...of循环遍历 FormData 实例，默认就会调用这个方法。


// 触发整个表单的校验
form.checkValidity()

// 触发单个表单控件的校验
formControl.checkValidity()

控件元素的willValidate属性是一个布尔值，表示该控件是否会在提交时进行校验。
控件元素的validationMessage属性返回一个字符串，表示控件不满足校验条件时，浏览器显示的提示文本。以下两种情况，该属性返回空字符串。
控件元素的setCustomValidity()方法用来定制校验失败时的报错信息。它接受一个字符串作为参数，该字符串就是定制的报错信息。如果参数为空字符串，则上次设置的报错信息被清除。
控件元素的属性validity属性返回一个ValidityState对象，包含当前校验状态的信息。
    ValidityState.badInput：布尔值，表示浏览器是否不能将用户的输入转换成正确的类型，比如用户在数值框里面输入字符串。
ValidityState.customError：布尔值，表示是否已经调用setCustomValidity()方法，将校验信息设置为一个非空字符串。
ValidityState.patternMismatch：布尔值，表示用户输入的值是否不满足模式的要求。
ValidityState.rangeOverflow：布尔值，表示用户输入的值是否大于最大范围。
ValidityState.rangeUnderflow：布尔值，表示用户输入的值是否小于最小范围。
ValidityState.stepMismatch：布尔值，表示用户输入的值不符合步长的设置（即不能被步长值整除）。
ValidityState.tooLong：布尔值，表示用户输入的字数超出了最长字数。
ValidityState.tooShort：布尔值，表示用户输入的字符少于最短字数。
ValidityState.typeMismatch：布尔值，表示用户填入的值不符合类型要求（主要是类型为 Email 或 URL 的情况）。
ValidityState.valid：布尔值，表示用户是否满足所有校验条件。
ValidityState.valueMissing：布尔值，表示用户没有填入必填的值。

表单元素的 HTML 属性novalidate，可以关闭浏览器的自动校验。

enctype 属性
    GET 方法
    application/x-www-form-urlencoded
    text/plain 纯文本
    multipart/form-data 混合格式,可以一次选择多个文件


 */
// 除了点击submit控件提交表单，还可以用表单元素的submit()方法，通过脚本提交表单。

formElement.submit();
// 表单元素的reset()方法可以重置所有控件的值（重置为默认值）。

formElement.reset();
// var formdata = new FormData(form);
