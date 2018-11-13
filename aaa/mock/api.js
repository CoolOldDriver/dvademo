//日志薄列表接口
//get('/api/getDailyLogList')
const getDailyLogList = {
    data:[{
            bg:"",
            createTime: '2018-2-2',
            id:1,
            week_teacher: "卢晓飞 Transtan",
            type:"dailycard",
            typeValue:"草稿状态",
            isRead:false,
            day_teacher:[
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"夏梓元 Emily"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"武瑞婷 Rita"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"Tom"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"helln"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"haha"
                }
            ]
        },
        {
            bg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg",
            createTime: '2018-2-3',
            id:2,
            week_teacher: "卢晓飞 Transtan",
            type:"dailycard",
            typeValue:"5小时前更新",
            isRead:false,
            day_teacher:[
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"夏梓元 Emily"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"武瑞婷 Rita"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"Tom"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"hela"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"haha"
                }
            ]
        },
        {
            bg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg",
            createTime: '2018-2-4',
            id:3,
            week_teacher: "卢晓飞 Transtan",
            type:"draftcard",
            typeValue:"20分钟前更新",
            isRead:true,
            day_teacher:[
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"夏梓元 Emily"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"武瑞婷 Rita"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"Tom"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"hela"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"haha"
                }
            ]
        },
        {
            bg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg",
            createTime: '2018-2-5',
            id:4,
            week_teacher: "卢晓飞 Transtan",
            type:"draftcard",
            typeValue:"1小时前更新",
            isRead:true,
            day_teacher:[
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"夏梓元 Emily"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"武瑞婷 Rita"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"Tom"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"hela"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"haha"
                }
            ]
        },
        {
            bg:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg",
            id:5,
            createTime: '2018-2-6',
            week_teacher: "卢晓飞 Transtan",
            type:"draftcard",
            typeValue:"1小时前更新",
            isRead:false,
            day_teacher:[
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"夏梓元 Emily"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"武瑞婷 Rita"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"Tom"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"hela"
                },
                {
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"haha"
                }
            ]
        }
    ],
    success:true,
    ifLogin: true,
    message:"请求失败"
}
//日志薄详情页-日志头部值周老师暖心墙内容
//get('/api/getWarmWallForweek?id=xx')  入参日志详情id
const getWarmWallForweek = {
    data:{
        dailyHeader:{
            createTime: '2018-02-02',
            week_teacher: "卢晓飞 Transtan",
            day_teacher:[
                {
                    isWrite:true,
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"夏梓元 Emily"
                },
                {
                    isWrite:true,
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"武瑞婷 Rita"
                },
                {
                    isWrite:false,
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"Tom"
                },
                {
                    isWrite:true,
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"hela"
                },
                {
                    isWrite:false,
                    image:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    name:"haha"
                }
            ],
            reader:{
                count:9,
                reader:[
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                ]
            }
        },
        WarmWallForweek :{
            id:1,
            bg: [],
            // bg:[{
            //     key:1,
            //     url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg",

            // },{
            //     key:2,
            //     url:"http://www.w3school.com.cn/i/eg_tulip.jpg"
            // }
            // ],
            author: {
                name:"田志卿",
                portrait:"http://userservice.api.yungu-inc.org/api/user/avatarUrl/1567994d-ddde-4118-a846-ae39a2b0482f"
            },
            portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
            value:"周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。今天的第一个亮点是七年级从今天开始，已经在使用阅读全文的开始，出现省略号了么出现了",
            heartCount:19,
            isPraise:false,
            reviewCount: 0
        }
    },
    success:true,
    ifLogin: true,
    message:"请求失败"
}
//日志薄详情页-值日老师暖心墙内容
//get('/api/getWarmWallForday?id=xx')  入参日志详情id
const getWarmWallFordayList={
    data:[
        {
            id:2,
            bg:[{
                key:1,
                url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg",

            },{
                key:2,
                url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
            }
            ],
            author: {
                name: '李永臣',
                portrait: "http://userservice.api.yungu-inc.org/api/user/avatarUrl/6e2ccf6d-61a0-4349-a68b-216a258e4ebc"
            },
            portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
            value:"“早晨，一年级的小谷粒下车时都会和爸爸妈妈告别，并和老师礼貌的问好。 午间运动时间，一年级的小谷粒有很多的创意，运用简单的运动器材自己DIY玩法，把跳绳和弹力球组合，把轮胎和绳子组合等等。老师也会在运动过程中关注孩子的行为习惯，及时给到反馈和提示，例如：运动器材的分享。”",
            heartCount:10,
            isPraise:true,
            reviewCount: 1
        },
        {
            id:3,
            bg:[{
                key:1,
                url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg",

            }
            ],
            author: {
                name: '托尼 Tony',
                portrait: "http://userservice.api.yungu-inc.org/api/user/avatarUrl/6e2ccf6d-61a0-4349-a68b-216a258e4ebc"
            },
            portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
            value:"“早晨，一年级的小谷粒下车时都会和爸爸妈妈告别，并和老师礼貌的问好。 午间运动时间，一年级的小谷粒有很多的创意，运用简单的运动器材自己DIY玩法，把跳绳和弹力球组合，把轮胎和绳子组合等等。老师也会在运动过程中关注孩子的行为习惯，及时给到反馈和提示，例如：运动器材的分享。”",
            heartCount:7,
            isPraise:false,
            reviewCount: 2
        },
        {
            id:4,
            author: {
                name: '杰克 Jack',
                portrait: "http://userservice.api.yungu-inc.org/api/user/avatarUrl/6e2ccf6d-61a0-4349-a68b-216a258e4ebc"
            },
            portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
            value:"“早晨，一年级的小谷粒下车时都会和爸爸妈妈告别，并和老师礼貌的问好。 午间运动时间，一年级的小谷粒有很多的创意，运用简单的运动器材自己DIY玩法，把跳绳和弹力球组合，把轮胎和绳子组合等等。老师也会在运动过程中关注孩子的行为习惯，及时给到反馈和提示，例如：运动器材的分享。”",
            heartCount:null,
            isPraise:false,
            reviewCount: 3
        },
        {
            id:5,
            bg:[{
                key:1,
                url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg",

            },{
                key:2,
                url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
            }
            ],
            author: {
                name: '海伦 Jack',
                portrait: "http://userservice.api.yungu-inc.org/api/user/avatarUrl/6e2ccf6d-61a0-4349-a68b-216a258e4ebc"
            },
            portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
            value:"“早晨，一年级的小谷粒下车时都会和爸爸妈妈告别，并和老师礼貌的问好。 午间运动时间，一年级的小谷粒有很多的创意，运用简单的运动器材自己DIY玩法，把跳绳和弹力球组合，把轮胎和绳子组合等等。老师也会在运动过程中关注孩子的行为习惯，及时给到反馈和提示，例如：运动器材的分享。”",
            heartCount:3,
            isPraise:true,
            reviewCount: 1
        },
    ],
    success:true,
    ifLogin: true,
    ifDataId: false,
    message:"请求失败"
}
//点赞
//get('/api/getHeartCount?id=xx') 入参值周或者值日老师卡片内容id
const getHeartCount = {
    data:19,
    success:true,
    message:"请求失败",
    ifLogin: true
}
//日志薄暖心墙编辑数据
//get('/api/getWarmWallEditList?userId=xxx') 入参 值日值周老师用户id
//返回当天值日或者值周老师的暖心墙卡片 没有content返回null
const getWarmWallEditList ={
    data:{
        isWeekTeacher:true,
        isPublish: false,
        content:[{
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            userName: "李明",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            userName: "陈锋",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            userName: "陈宏",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            userName: "陈宏",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            userName: "李唱",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            userName: "多啦",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            userName: "",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4001,
            isSelf:false,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:4002,
            isSelf:true,
            status:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            image:
                [
                    {
                        key:4,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:5,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:6,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
            }
        ],
    },
    success:true,
    ifLogin: true,
    message:"请求失败"
}
const getTranslate = {
    data:"How are you?I am fine,thank you!And you?",
    success:false,
    ifLogin: true,
    message:"请求失败"
}
const getQuestionPoolList = {
    data:[
            {
                id:2003,
                isSolved:false,
                isSelf:false,
                content:"七年级走廊阳台上的盆栽外围有很多残枝败叶，是否应该及时清理？",
                createTime:1529553302322,
                stateTime:1529664302322,
                staff:{
                    name:"杰瑞 Jerry",
                    portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                },
                Players:[
                    {
                        name:"杰克 Jack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"汤姆 Tom",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"瑟琳娜 Selina",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"海伦 Helln",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"迈克 Mack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"托尼 Tony",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                ]
            },
            {
                id:2004,
                isSolved:true,
                isSelf:true,
                content:"仍有许多一年级小朋友需要老师提醒才记得跟爸爸妈妈说再见。以及仍有个别家长在校门口停车时速度很快然后急刹，连值日老师都被吓到了。 ",
                createTime:1518553302322,
                stateTime:1519553302322,
                staff:{
                    name:"杰瑞 Jerry",
                    portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                },
                Players:[
                    {
                        name:"杰克 Jack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"汤姆 Tom",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"瑟琳娜 Selina",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"海伦 Helln",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"迈克 Mack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"托尼 Tony",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                ]
            },
            {
                id:2005,
                isSolved:false,
                isSelf:false,
                content:"This morning I witnessed a number of grade 1 children arriving in groups or pairs, this was very pleasing to see there,now we can solved this problems",
                createTime:1519553302322,
                stateTime:1520553302322,
                staff:{
                    name:"杰瑞 Jerry",
                    portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                },
                Players:[
                    {
                        name:"杰克 Jack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"汤姆 Tom",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"瑟琳娜 Selina",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"海伦 Helln",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"迈克 Mack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"托尼 Tony",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                ]
            },
            {
                id:2006,
                isSolved:false,
                isSelf:true,
                content:"仍有许多一年级小朋友需要老师提醒才记得跟爸爸妈妈说再见。以及仍有个别家长在校门口停车时速度很快然后急刹，连值日老师都被吓到了。应该出现省略号了么应该出现了那么你看了么如果你看到那就看到了",
                createTime:1530501001204,
                stateTime:1531253302322,
                staff:{
                    name:"杰瑞 Jerry",
                    portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                },
                Players:[
                    {
                        name:"杰克 Jack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"汤姆 Tom",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"瑟琳娜 Selina",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"海伦 Helln",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"迈克 Mack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"托尼 Tony",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                ]
            },
            {
                id:2007,
                isSolved:true,
                isSelf:false,
                content:"一年级走廊阳台上的盆栽外围有很多残枝败叶，是否应该及时清理？及时清理避免破坏环境",
                createTime:1523553302322,
                stateTime:1524553302322,
                staff:{
                    name:"杰瑞 Jerry",
                    portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                },
                Players:[
                    {
                        name:"杰克 Jack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"汤姆 Tom",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"瑟琳娜 Selina",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"海伦 Helln",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"迈克 Mack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"托尼 Tony",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                ]
            },
            {
                id:2008,
                isSolved:false,
                isSelf:true,
                content:"一年级走廊阳台上的盆栽外围有很多残枝败叶，是否应该及时清理？",
                createTime:1531221401204,
                stateTime:null,
                staff:{
                    name:"杰瑞 Jerry",
                    portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                },
                Players:[
                    {
                        name:"杰克 Jack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"汤姆 Tom",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"瑟琳娜 Selina",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"海伦 Helln",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"迈克 Mack",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                    {
                        name:"托尼 Tony",
                        portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg"
                    },
                ]
            }
        ],
    success:true,
    ifLogin: true,
    message:"请求失败"
}
const getQuestionPoolCard = {
    data:{
        "isSolved": false,
        review:{reviewCount: 1},
        "content": {
            "bg": [
                {
                    "key":1,
                    "url":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                },
                {
                    "key":2,
                    "url":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                }
            ],
            "value": "仍有许多一年级小朋友需要老师提醒才记得跟爸爸妈妈说再见。以及仍有个别家长在校门口停车时速度很快然后急刹，连值日老师都被吓到了。 ",
            "createTime": 1529553302322,
            "createName": "徐燕华 Camellia",
            "staffName": "",
            "sameFeelingCount":321,
            "foolowCount":1,
            "isSameFeeling":false,
            "isFollow":false,
            "isForWeek": true,//是否是值周老师，临时添加
            "processingInfo": {
              'userId': '23',
              'userName': '李明'
            }, //当前处理人信息
            'currentUserId': '23',
            "solution": "很赞同:)每位老师耐心地指出纠正孩子的行为规范,对孩子来说既是温柔而坚定地提醒。",
        }
    },
    success:true,
    ifLogin: true,
    message:"请求失败"
}
const getQuestionPoolEditList ={
    data:{
        isWeekTeacher:true,
        isPublish: false,
        content:[{
            id:3001,
            isSelf:false,
            is_solve:0,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            userName: "大名",
            image:
                [
                    {
                        key:1,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:2,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:3,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
        },
        {
            id:3002,
            isSelf:true,
            is_solve:1,
            value:"中午一年级在小操作今天运动挑战，好多好玩的项目，小朋友能够自觉排队等待。",
            userName: "风儿",
            image:
                [
                    {
                        key:4,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:5,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    },
                    {
                        key:6,
                        url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=78963069,1205252340&fm=27&gp=0.jpg"
                    }
                ]
            }
        ],
    },
    success:true,
    ifLogin: true,
    message:"请求失败"
}
const getPoolCradState = {
    data:"",
    success:true,
    ifLogin: true,
    message:"请求失败"
}
//评论
//get('/api/getReview?) 传参 id 问题池的问题id或者暖心墙卡片内容id
//                          type = "log" 日志薄  type="issue" 问题池
//返回对应的评论内容
const getReview = {
    data:[
            {
                id:1,
                authorName:"李明 Jefferey",
                portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                content:"周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。今天的第一个亮点是七年级从今天开始，已经在使用阅读全文的开始，出现省略号了么出现了",
                parentInfo:null,
                star:true

            },
            {
                id:2,
                authorName:"王君元 Juyuan Wang",
                portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                content:"很赞同:)每位老师耐心地指出纠正孩子的行为规范,对孩子来说既是温柔而坚定地提醒。",
                parentInfo:{
                    id:1,
                    authorName:"李明 Jefferey",
                    portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    content:"周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。今天的第一个亮点是七年级从今天开始，已经在使用阅读全文的开始，出现省略号了么出现了",
                },
                star:false
            },
            {
                id:3,
                authorName:"王君元 Juyuan Wang",
                portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                content:"很赞同:)每位老师耐心地指出纠正孩子的行为规范,对孩子来说既是温柔而坚定地提醒。",
                parentInfo:{
                    id:1,
                    authorName:"李明 Jefferey",
                    portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    content:"周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。今天的第一个亮点是七年级从今天开始，已经在使用阅读全文的开始，出现省略号了么出现了",
                },
                star:false
            },
            {
                id:4,
                authorName:"王君元 Juyuan Wang",
                portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                content:"很赞同:)每位老师耐心地指出纠正孩子的行为规范,对孩子来说既是温柔而坚定地提醒。",
                parentInfo:{
                    id:1,
                    authorName:"李明 Jefferey",
                    portrait:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg",
                    content:"周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。周二的值周重点仍旧是放在食物的节约与学习的状态上。今天的第一个亮点是七年级从今天开始，已经在使用阅读全文的开始，出现省略号了么出现了",
                },
                star:false
            }
        ],
    success:true,
    ifLogin: true,
    message:"请求失败"
}
const addReview = {
    success:true,
    ifLogin: true,
    message:"评论成功"
}
const data ={
    "success": true,
    "message": "请求失败",
    "ifLogin": true,
    "data": [
        {
            "key": "5b47094bNa102d09f.jpg",
            "url": "http://yungu-newsletter.oss-cn-beijing.aliyuncs.com/5b47094bNa102d09f.jpg"
          }
    ],
    "errorMsg": []
  }
const addIssue = {
    data:"",
    success:true,
    ifLogin: true,
    message:"添加成功"
}
const setRelease = {
    success:true,
    ifLogin: true,
    message:"发布成功"
}
const getMoreForIssue = {
    success:true,
    ifLogin: true,
    message:"请求成功"
}
const getMoreForLog = {
    success:true,
    ifLogin: true,
    message:"请求成功"
}
const deleteContent = {
    success:true,
    ifLogin: true,
    message:"删除成功"
}
const setStar = {
    success:true,
    ifLogin: true,
    message:"点赞成功"
}
const setSignIn = {
    success : true,
    ifLogin : true,
    message : '签到成功'
}
const getTeacherList = {
    success: true,
    ifLogin: true,
    message: '成功',
    data: [
        {
            id:1,
            teacherName: '李明'
        },
        {
            id:2,
            teacherName: '三毛'
        },
        {
            id:3,
            teacherName: '华为'
        },
        {
            id:4,
            teacherName: '李金华'
        }
    ]
}
const selectPerson = {
    success: true,
    message: '指派成功',
    ifLogin: true
}
const postSolved = {
    success:true,
    ifLogin: true,
    message:"提交成功"
}
const getSchedule = {
    success: true,
    ifLogin: true,
    message: '成功',
    data: [
        {
          dayTeacher: ["田志卿", "吴宁祥", "武瑞婷", "谢沙沙"],
          key: 4
        },{
          dayTeacher: ["田志卿", "吴宁祥", "武瑞婷", "谢沙沙"],
          key: 1
        },{
          dayTeacher: ["田志卿", "吴宁祥", "武瑞婷", "谢沙沙"],
          key: 2
        }]
}
const getScheduleList = {
    success: true,
    ifLogin: true,
    isForweek: true,
    message: '请求成功',
    data: [{
      key: 1,
      weekNumber: 1,
      list: [{
        key: '1-1',
        week: '星期一',
        time: "2018.08.23",
        dayTeacher: [{
            id: '11',
            name: '李丽'
        },{
            id: '22',
            name: '董东方'
        },{
            id: '33',
            name: '大西北'
        },{
            id: '44',
            name: '马上来'
        }]
      }, {
        key: '1-2',
        week: '星期二',
        time: "2018.08.23",
        dayTeacher: [{
            id: '1',
            name: '李丽2'
        },{
            id: '23',
            name: '董东方2'
        },{
            id: '34',
            name: '大西北2'
        },{
            id: '45',
            name: '马上来2'
        },{
            id: '56',
            name: '史密斯'
        }]
      }, {
        key: '1-3',
        week: '星期三',
        time: "2018.08.23",
        dayTeacher: [{
            id: '13',
            name: '李丽3'
        },{
            id: '24',
            name: '董东方3'
        },{
            id: '35',
            name: '大西北3'
        },{
            id: '46',
            name: '马上来3'
        },{
            id: '57',
            name: '史密斯'
        }]
      }]
    }]
}
const getScheduleDate =  {
    success: true,
    ifLogin: true,
    message: '请求成功',
    data: [
        {
            time: '2018.08.23',
            key: '2018.08.23'
        },{
            time: '2018.08.24',
            key: '2018.08.24'
        }
    ]
}
const personSource = {
    success: true,
    ifLogin: true,
    message: '请求成功',
    data: [
        {
          userName: '李大明',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        },
        {
          userName: '多啦A梦',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        },
        {
          userName: '周爱红',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        },
        {
          userName: '芳草',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        },
      ]
}

const sendChangeDate = {
    success: true,
    ifLogin: true,
    message: '请求成功'
}

const setLanguage = {
    success: true,
    ifLogin: true,
    message: '请求成功'
}

const switchCampus = {
    success: true,
    ifLogin: true,
    message: '请求成功',
}

const getCampus = {
    success: true,
    ifLogin: true,
    message: '请求成功',
    currentCampus: 2,
    data : [
        {   
            key: 1,
            id : 1,
            author : '111111',
            type : '11111',
            image : 'http://yungu-newsletter.oss-cn-beijing.aliyuncs.com/5b47094bNa102d09f.jpg',
            name :'你好啊'
        }
        
    ]
}
//日志log
const getLogList = {
    success: true,
    ifLogin: true,
    message: '请求成功',
    data : [
        {   
            key: 1,
            id : 1,
            author : 'Andy.Wu',
            content : "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            avatar : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg',
            image : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg',
        },
        {   
            key: 2,
            id : 2,
            author : 'Andy.Wu',
            content : "bbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            avatar : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg',
            image : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg',
        },
        {   
            key: 3,
            id : 3,
            author : 'Andy.Wu',
            content : "cccccccccccccccccccccccccccccccc",
            avatar : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg',
            image : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg',
        },
        {   
            key: 4,
            id : 4,
            author : 'Andy.Wu',
            content : "ddddddddddddddddddddddddddddddd",
            avatar : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg',
            image : 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2669266846,4020626580&fm=27&gp=0.jpg',
        },
        
    ],
}

//最需要解决的问题
const getQuestionList = {
    success: true,
    ifLogin: true,
    message: '请求成功',
    data : [
        {   
            key: 11,
            id : 11,
            author : 'Nick',
            name : '川溪',
            val : 'question_content question_content question_content question_content'
        },
        {   
            key: 22,
            id : 22,
            author : 'Nick',
            name : '川溪',
            val : '方法反啊啊啊的日好好学习天天向上'
        },
        {   
            key: 33,
            id : 33,
            author : 'Nick',
            name : '川溪',
            val : '方法反啊啊啊的日好好学习天天向上'
        },
        {   
            key: 44,
            id : 44,
            author : 'Nick',
            name : '川溪',
            val : '方法反啊啊啊的日好好学习天天向上'
        }
        
    ]
}
//阅读排行量
const getReadList = {
    success: true,
    ifLogin: true,
    message: '请求成功',
    data : [
        {   
            key: 111,
            id : 111,
            author : 'Nick',
            name : '川溪',
            val : 'question_content question_content question_content question_content'
        },
        {   
            key: 222,
            id : 222,
            author : 'Nick',
            name : '川溪',
            val : '方法啊啊啊的日好好学习天天向上'
        },
        {   
            key: 333,
            id : 333,
            author : 'Nick',
            name : '川溪',
            val : '方法啊啊啊的日好好学习天天向上'
        },
        {   
            key: 444,
            id : 444,
            author : 'Nick',
            name : '川溪',
            val : '方法啊啊啊的日好好学习天天向上'
        }
        
    ]
}
//提交暖心墙内容
const sendWallContent = {
    success: true,
    ifLogin: true,
    message: '发送成功',
}
//提交问题池的内容
const sendSubmitQuestion = {
    success: true,
    ifLogin: true,
    message: '发送成功',
}

//'/api/addIssue/' 添加问题接口
//mode:"new" // "edit"  编辑id dnId:""  data:"" images[{key,utl}]
//'/api/addReview' 发布评论接口
//reviewId 新评论0 type:1 //日志 2 问题池 data
///api/setRelease //值周老师发布接口
///api/getPoolCradState //跟进同感
//type:2 同感 3 跟进
export default {
    getDailyLogList,
    getWarmWallForweek,
    getWarmWallFordayList,
    getTranslate,
    getHeartCount,
    getQuestionPoolList,
    getQuestionPoolCard,
    getWarmWallEditList,
    getQuestionPoolEditList,
    getPoolCradState,
    getReview,
    addReview,
    data,
    addIssue,
    setRelease,
    getMoreForIssue,
    getMoreForLog,
    deleteContent,
    setStar,
    setSignIn,
    getTeacherList,
    selectPerson,
    postSolved,
    getSchedule,
    getScheduleList,
    personSource,
    setLanguage,
    getScheduleDate,
    sendChangeDate,
    switchCampus,
    getCampus,
    getLogList,
    getQuestionList,
    getReadList,
    sendWallContent,
    sendSubmitQuestion
};
