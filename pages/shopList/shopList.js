Page({
    data:{
        flag:true,
        selected:false,
        test:[]
    },
    togglePop:function(){
        this.setData({flag:!this.data.flag})
        this.setData({selected:!this.data.flag})
    },
    onLoad:function(){
        console.log("onload");
        var that=this;
        wx.request({
            url: 'https://test.0575s.com:3001/getWaitingAlarm', //接口地址
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                 console.log(res.data)
                 that.setData({
                         test:res.data
                 })
            }
        })
    }
})