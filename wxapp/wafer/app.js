//app.js
App({
  onLaunch: function () {
    wx.setStorage({
      key: 'user-info',
      // data: e.detail.userInfo,
      success: (res) => {
        // console.log(res);
        this.globalData.userInfo = res.data;
      }
    })
  },
  globalData: {
    userInfo: null
  }
})