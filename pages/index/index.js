const app = getApp()
const ptCommon = require('../pt.common.js')
Page({
  data: {},
  onLoad() {
    var gd = app.globalData
    this.setData({brand: gd.brand, channelId: gd.channelId})
    var userinfo = gd.userinfo
    if (!userinfo.openid) {
      console.log('will get openid from server...')
      ptCommon.getOpenid()
    }
  },
  onGotUserInfo() {
    console.log('onGotUserInfo')
    wx.getUserInfo({
      success: res => {
        console.log('-----wx.getUserInfo success')
        console.log(res.userInfo)
        wx.setStorageSync('userinfo', res.userInfo)
      },
      fail: res => {
        console.log('-----wx.getUserInfo fail')
        console.log(res)
      }
    })
  }
})