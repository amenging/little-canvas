function createImg (src) {
  const img = new Image()
  img.crossOrigin = "Anonymous" // 跨域 
  img.src = src

  return img
}

/** 批量处理图片，保证画布在绘画的时候图片加载完成
 * @params {array} imgs - 待处理的图片数组
 * @retuns {object} 返回一个promise对象，resolve处理完成的对象
 */
export function resolveImgs (imgs) {
  const imgMap = {}
  const promiseAll = []

  for (let k = 0; k < imgs.length; k ++) {
    let id = imgs[k].id
    let value = imgs[k].value

    // 区分地址和本地img对象
    if (typeof value === 'string') {
      value = createImg(value)
    }

    promiseAll.push(
      new Promise((resolve, reject) => {
        value.onload = function () {
          imgMap[id] = value
          resolve(value)
        }
      })
    )
  }

  return new Promise((resolve, reject) => {
    Promise.all(promiseAll).then(data => {
      resolve(imgMap)
    })
  })
}


/**
 * 实现图片居中平铺
 * @param {object} img 图片对象
 * @param {number} imgDrawWidth 图片宽度范围 
 * @param {number} imgDrawHeight 图片高度范围
 * @param {number} x 
 * @param {number} y 
 * @param {canvasContext2D} ctx
 */
export function drawClipImage (img, imgDrawWidth, imgDrawHeight, x, y, ctx) {
  const imgWidth = img.width
  const imgHeight = img.height

  let clipStartX, clipStartY, clipWidth, clipHeight

  if (imgWidth / imgHeight > imgDrawWidth / imgDrawHeight) {
    clipStartY = 0
    clipHeight = imgHeight
    clipWidth = Math.round(imgHeight * imgDrawWidth / imgDrawHeight)
    clipStartX = Math.round((imgWidth - clipWidth) / 2)
  } else {
    clipStartX = 0
    clipWidth = imgWidth
    clipHeight = Math.round(imgWidth * imgDrawHeight / imgDrawWidth)
    clipStartY = Math.round((imgHeight - clipHeight) / 2)
  }

  ctx.drawImage(img, clipStartX, clipStartY, clipWidth, clipHeight, x, y, imgDrawWidth, imgDrawHeight)
}

/**
 * 旋转文字
 * @param {string} text 
 * @param {number} x 
 * @param {number} y 
 * @param {number} angle 
 * @param {canvasContext2D} ctx 
 */
export function drawRotateText (text, x, y, angle, ctx) {
  ctx.save()
  ctx.textBaseline = 'top'
  ctx.translate(x, y)
  ctx.rotate(angle * Math.PI / 180)
  ctx.fillText(text, 0, 0)
  ctx.restore()
}

/**
 * 圆形图片
 * @param {img} img 
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 * @param {canvasContext2D} ctx 
 */
export function drawCircleImage (img, x, y, radius, ctx) {
  ctx.save()
  ctx.arc(x + radius, y + radius, radius, 0, 2 * Math.PI)
  ctx.clip()
  ctx.drawImage(data.avatar, x, y, radius * 2, radius * 2)
  ctx.restore()
}