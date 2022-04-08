<template>
  <view class="container">
    <!-- 轮播图区域 -->
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
      <!-- 循环渲染轮播图的 item 项 -->
      <swiper-item v-for="(item, i) in swiperList" :key="i">
        <view class="swiper-item" @click="imageClick(i)">
          <!-- 动态绑定图片的 src 属性 -->
          <image :src="item.image_src"></image>
        </view>
      </swiper-item>
    </swiper>
    
    <!-- 分类导航区域 -->
    <view class="nav-list">
       <view class="nav-item" v-for="(item, i) in navList" :key="i" @click="navClickHandler(item)">
         <image :src="item.image_src" class="nav-img"></image>
         <text class="list-text" :style="{color:item.color}">{{item.txt}}</text>
       </view>
    </view>
    
    <!-- 楼层区域 -->
    <view class="floor-list">
      <!-- 楼层 item 项 -->
      <view class="floor-item" v-for="(item, i) in floorList" :key="i">
        <!-- 楼层标题 -->
        <text class="floor-title" :style="{color:item.color}">{{item.title}}</text>
        
        <!-- 楼层图片区域 -->
        <view class="floor-img-box">
          <!-- 左侧大图片的盒子 -->
          <navigator class="left-img-box" :url=" item.url + item.id">
            <image :src="item.left_img.img_src" :style="{width: item.left_img.wid + 'rpx', height: item.left_img.heigh+ 'rpx'}" ></image>
          </navigator>
          
          <!-- 右侧图片的盒子 -->
          <view class="right-img-box">
            <view class="right-img-item" v-for="(item2, i2) in item.right_img" :key="i2">
              <navigator :url="item.url + item2.id">
                <image :src="item2.img_src"  :style="{width: item2.wid + 'rpx',height: item2.heigh+ 'rpx'}"></image>
              </navigator>
            </view>
          </view>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
  import { mapGetters } from 'vuex'
  import badgeMix from '@/mixins/tabbar-badge.js'
  
  export default {
    mixins: [badgeMix],
    data() {
      return {
        // 1. 轮播图的数据列表
              swiperList: [
                {
                  image_src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp.ssl.qhimg.com%2Ft015075ce988e9683d4.jpg&refer=http%3A%2F%2Fp.ssl.qhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650357577&t=fe6643eaabfd63e589a67d7bd0912d96"
                },
                {
                  image_src:" https://img1.baidu.com/it/u=2263749796,1112146745&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
                },
                {
                  image_src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2F7071b3b1jw1f3zw80xn5jj21hc0u0njt.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650358184&t=49487a6a805c8987126a210728309e8d"
                },
                {
                  image_src:"https://img1.baidu.com/it/u=2544486041,3333602417&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281"
                },
              ],
              
              // 2. 分类导航的数据列表
              navList: [
                {
                  image_src:"../../static/fenlei/fenlei.png",
                  txt:"导航标",
                  color:"#3793DE"
                },
                {
                  image_src:"../../static/fenlei/renwu.png",
                  txt:"人物志",
                  color:"#1AFA29"
                },
                {
                  image_src:"../../static/fenlei/jianshen.png",
                  txt:"推荐物",
                  color:"#FF4893"
                },
                {
                  image_src:"../../static/fenlei/zhishi.png",
                  txt:"科普文",
                  color:"#00B386"
                }
              ],
              // 3.楼层信息：
              floorList: [
                {
                  title:"人物传奇",
                  color:"#00CDFF",
                  url:"/renwu/renwu_details/renwu_details?renwu_id=",
                  id:0,
                  left_img:{
                    img_src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190916%2F630c217feed44e46bc47cde49aa6b512.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650429987&t=c4eff991936654f8b369ca5a65e83d5b",
                    wid:240,
                    heigh:350
                  },
                  right_img:[
                   {
                     id:1,
                     img_src: "https://i0.hdslb.com/bfs/album/3e30f65b145f8566b3892662c1a10e32f8575db2.jpg@240w_320h_1e_1c.webp",
                     wid:237,
                     heigh:350
                   },{
                     id:2,
                     img_src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200214%2F8833c8926f8949a7a266dcce9a3c19c8.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650433943&t=d596577cafdf3472897b9c1c1363c952",
                     wid:237,
                     heigh:350
                   }
                  ]
                },
                {
                  title:"健身好物",
                  color:"#FF4893",
                  url:"/renwu/haowu_details/haowu_details?haowu_id=",
                  id:3,
                  left_img:{
                    img_src:"https://img0.baidu.com/it/u=324773673,3809900169&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                    wid:240,
                    heigh:350
                  },
                  right_img:[
                   {
                     id:1,
                     img_src: "https://img0.baidu.com/it/u=3369313455,3163916022&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                     wid:235,
                     heigh:162
                   },{
                     id:2,
                     img_src: "https://img1.baidu.com/it/u=1458551734,3468580350&fm=253&fmt=auto&app=138&f=JPEG?w=642&h=500",
                     wid:235,
                     heigh:162
                   },
                   {
                     id:4,
                     img_src: "https://t00img.yangkeduo.com/goods/images/2020-03-07/84198493-a600-4829-82e5-e9085d5d43b6.jpg",
                     wid:235,
                     heigh:162
                   },
                   {
                     id:0,
                     img_src: "https://img1.baidu.com/it/u=2519627348,1581154987&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                     wid:235,
                     heigh:162
                   }
                  ]
                },
                {
                  title:"科普知识",
                  color:"#00B386",
                  url:"/renwu/kepu_details/kepu_details?kepu_id=",
                  id:4,
                  left_img:{
                    img_src:"https://img1.baidu.com/it/u=542608163,3395746855&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=483",
                    wid:240,
                    heigh:350
                  },
                  right_img:[
                   {
                     id:1,
                     img_src: "https://img0.baidu.com/it/u=28527917,37766937&fm=253&fmt=auto&app=120&f=JPEG?w=630&h=416",
                     wid:235,
                     heigh:162
                   },{
                     id:0,
                     img_src: "https://img2.baidu.com/it/u=1103355845,3823559418&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333",
                     wid:235,
                     heigh:162
                   },
                   {
                     id:3,
                     img_src: "https://img0.baidu.com/it/u=1589315379,2733128935&fm=253&fmt=auto&app=120&f=JPEG?w=754&h=500",
                     wid:235,
                     heigh:162
                   },
                   {
                     id:2,
                     img_src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-5e826b89004a2bbadaa32b49428c9a66_hd.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650435698&t=89daa1b6a7a623f7b6f67878b2239bb5",
                     wid:235,
                     heigh:162
                   }
                  ]
                }
              ],
      };
    },
    methods:{
      navClickHandler(item) {
        // 判断点击的是哪个 nav
          uni.switchTab({
            url: '/pages/cate/cate'
          })
      },
      imageClick(i){
        if(i==0)
         return uni.showToast({
                  title: '阿诺 施瓦辛格（加州）！',
                  duration: 1500,
                  icon: 'none',
                })
        else if(i==1)
         return uni.showToast({
                  title: '海王！',
                  duration: 1500,
                  icon: 'none',
                })
        else if(i==2)
         return uni.showToast({
                  title: '蝙蝠侠！',
                  duration: 1500,
                  icon: 'none',
                })
        else if(i==3)
         return uni.showToast({
                  title: '美国队长！',
                  duration: 1500,
                  icon: 'none',
                })
      }
    }
  }
</script>

<style lang="scss">
    .container{
     width: 100%;
    }
    .container swiper{
     width: 100%;
    }
    swiper {
     height: 422rpx;
     .swiper-item,
     image {
       width: 100%;
       height: 100%;
     }
    }
    
    .nav-list {
      display: flex;
      justify-content: space-around;
      margin: 15px 0;
    
      .nav-img {
        width: 128rpx;
        height: 128rpx;
      }
      .list-text{
        display: flex;
        justify-content: center;
        width: 128rpx;
      }
    }
    .floor-title {     
      height: 60rpx;
      width: 100%;
      display: flex;
      font-weight:bold;
      margin-left: 20rpx;
      text-shadow: 5rpx 5rpx 5rpx #000000;
    }
    .right-img-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .right-img-item{
        padding: 6rpx;
      }
    }
     .left-img-box {
        padding: 6rpx;
     }
    .floor-img-box {
      display: flex;
    }
</style>
