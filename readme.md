# 文档

## resolveImgs(imgs)

> imgs: array

```js
[
    {
        id: 'imgID',
        value: ''
    }
]
```

## drawClipImage(img, imgDrawWidth, imgDrawHeight, x, y, ctx)

> 让图片在一个范围内实现居中平铺，效果类似css中的
>
> background-size: cover;
>
> backgroud-position: 50% 50%;
>
> img：图片， imgDrawWidth：画布上的宽度范围, imgDrawHeight：画布上的高度范围, x, y, ctx