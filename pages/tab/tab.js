Page({
  data: {
    head: {
      title: '标签页',
      back: true
    },
    tab: {
      custom: false,
      scroll: true,
      animation: true,
      content: true,
      index: 2,
      title: '人才',
      data: [
        {
          title: '领袖',
          cont: '国家导航'
        },
        {
          title: '设计',
          cont: '人物互交'
        },
        {
          title: '人才',
          cont: '公司高层'
        },
        {
          title: '科技技能',
          cont: '城市推动力'
        },
        {
          title: '水源',
          cont: '人类来源',
          disabled: true
        },
        {
          title: '动物',
          cont: '生物链',
          disabled: true
        },
        {
          title: '代码',
          cont: '码农构建'
        },
      ]
    }
  },

  onTabChange (e) {
    this.setData({
      'tab.index': e.detail.index,
      'tab.title': e.detail.title
    })
  },

  onInput(e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  },

  onSwitch(e) {
    this.setData({
      [e.target.dataset.e]: e.detail.value
    })
  }
  
})