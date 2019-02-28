Component({
    properties: {
        src: String,
        style: String,
        imageslim: Boolean
    },

    data: {
        load: true
    },

    methods: {
        onError(e) {
            /**
             * 图片加载错误
             */
            this.setData({
                src: '',
                load: false
            })
        },

        onLoad (e) {
            /**
             * 加载成功
             */
            // console.info('load img:' + e.currentTarget.dataset.url)
            this.setData({
                load: false
            })
        }
    }
})
