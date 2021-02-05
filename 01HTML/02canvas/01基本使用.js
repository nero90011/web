/** @type {HTMLCanvasElement} */   // 即可拥有canvas全部代码提示
let canvas = document.getElementById('mycanvas')
// 得到画布的上下文  2d / 3d
// 所有的图像惠州都是通过ctx属性方法进行设置的
let ctx=canvas.getContext('2d')
// 设置颜色  必须先设置颜色
ctx.fillStyle='green'
// 绘制矩形
ctx.fillRect(100,100,200,50)


console.log(ctx)