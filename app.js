App({
  globalData: {
    /*用户信息*/
    userinfo: {},
    
    /*页面路由*/
    callbackUrl: {
      'index': '../pt-index/index',                       // 拼团首页
      'detail-prd': '../pt-detail-prd/index',             // 拼团商品详情
      'detail-grp': '../pt-detail-grp/index',             // 拼团详情
      'detail-order': '../pt-detail-order/index',         // 订单详情
      'confirm-order': '../pt-confirm-order/index',       // 订单确认
      'pay': '../pt-pay/index',                           // 支付呼出
      'login': '../pt-login/index'                        // 登录呼出
    },

    /*小程序所属*/
    appid:'wx84f1ea2525503203',
    secret:'6b6713318de0d14bbefe26d818eec0bc',
    brand: 'CJ',
    channelId:'800008'
  }
})