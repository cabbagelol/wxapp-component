const app = getApp();

Page({
  data: {
    head: {
      title: '单元格',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    }
  },
  
  onCellClick (e) {
    wx.showToast({
      title: 'Clicking Cell',
      icon: 'success',
      duration: 2000
    })
  }
})  