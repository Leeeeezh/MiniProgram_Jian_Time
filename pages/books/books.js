// pages/books/books.js
import {
  getHotBookData
} from '../../modules/getBookData.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],
    isSearching: false,
    flag: ''
  },
  showSearchPanel(){
    this.setData({
      isSearching: true
    })
  },
  hideSearchPanel(){
    this.setData({
      isSearching: false
    })
  },
  onLoad: function(options) {
    let hotBooks = wx.getStorageSync('hotBooks')
    if(hotBooks){
      this.setData({
        bookList:hotBooks
      })
      return
    }
    getHotBookData().then(res => {
      console.log(res.data)
      this.setData({
        bookList: res.data
      })
      wx.setStorageSync('hotBooks',res.data)
    }, err => {
      console.log(err)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    const flag = Math.random().toString()
    this.setData({
      flag: flag
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})