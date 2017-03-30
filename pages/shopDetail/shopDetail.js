Page({
    data:{
        selectedl:true,
        selectedr:false
        },
    selectedr:function(e){
        this.setData({
            selectedl:false,
            selectedr:true
        })
    },
    selectedl:function(e){
        this.setData({
            selectedr:false,
            selectedl:true,
        })
    }
    // onLoad:function(){
    //   console.log(getApp().globalData.windowHeight);
    //     this.setData({
    //         windowHeight:getApp().getWindowHeight()
    //     })
    // },
    
    
});