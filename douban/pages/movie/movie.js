// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   movie:{},
   type:[],
   yan:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;//缓存外层this
    console.log(that);
    const URL = 'https://douban.uieee.com/v2/movie/'+options.id;
    wx.request({
      url: URL,
      data: {

      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          movie: res.data,
          type:res.data.tags,
          yan: res.data.attrs.cast.splice(0,2)
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})