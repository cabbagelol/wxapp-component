const app = getApp();

Page({
  $: app.e.$,

  data: {
    head: {
      title: '步骤条',
      style: {
        background: 'linear-gradient(45deg, rgba(11, 156, 167, 0.89), rgba(24, 182, 193, 0.87))',
        textColor: '#FFF'
      },
      back: true
    },
  },
})
