# 安装

npm i little-canvas



# API

## resolveImgs(imgs)

```js
// 处理图片，返回onload后的图片
var imgs = [
    {
        id: 'imgID',
        value: ''
    }
]

resolveImgs(imgs).then((res) => {
    // { imgID: img }
    // eg: someCanvasContext2D.drawImage(res[imgID], 0, 0)
})
```

## drawClipImage(img, imgDrawWidth, imgDrawHeight, x, y, ctx)

> 让图片在一个范围内实现居中平铺，效果类似css中的
>
> background-size: cover;
>
> backgroud-position: 50% 50%;

```js
var img = new Image()
img.onload = function () {
	drawClipImage(
        img,
        200, // 图片宽度范围
        200, // 图片高度范围
        0, 0, // x和y坐标
        someCanvasContext2D
    )
}
```

## drawCircleImage(img, x, y, radius, ctx)

> 圆形图片

```js
var img = new Image()
img.onload = function () {
	drawCircleImage(
        img,
        x, y, // 图片左上角的坐标
        radius, // 半径
        someCanvasContext2D)
}
```



## drawRotateText(text, x, y, angle, ctx)

> 带旋转角度的文字

```
drawRotateText(
	text, // 文本
	x, y, // 文本左上角坐标
	angle, // 旋转角度
	someCanvasContext2D)
```



