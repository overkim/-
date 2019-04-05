const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function axios(url, params, method = "get") {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'json' // 默认值
      },
      method: method,
      success: function (res) {
        resolve(res);
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}

module.exports = {
  formatTime: formatTime,
  axios:axios
}
