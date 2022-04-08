<template>
  <view class="container">
    <view class="floor-item" v-for="(item, i) in floorList" :key="i">
      <text class="floor-title" :style="{color:item.color}">{{item.title}}</text>
      <navigator class="order" v-for="(item2, i2) in item.txt" :key="i2" :url="item.url + i2">
          <view class="header">{{item2.miaoshu}}</view>
          <view class="tailer">{{item2.name}}</view>
      </navigator>
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
        floorList: [
          {
            title:"人物传奇",
            color:"#00CDFF",
            url:"/renwu/renwu_details/renwu_details?renwu_id=",
            txt:[
              {
                name:"陈康",
                miaoshu:"中国健美历史开创者"
              },
              {
                name:"凯圣王",
                miaoshu:"健身知识分享者"
              },
              {
                name:"施瓦辛格",
                miaoshu:"世界健美偶像"
              }
            ]
          },
          {
            title:"健身好物",
            color:"#FF4893",
            url:"/renwu/haowu_details/haowu_details?haowu_id=",
            txt:[
              {
                name:"健身房",
                miaoshu:"一天不去浑身刺挠"
              },
              {
                name:"杠铃",
                miaoshu:"别拦我，来个挺举"
              },
              {
                name:"哑铃",
                miaoshu:"小而美"
              },
              {
                name:"龙门架",
                miaoshu:"居家健身高性价比好物"
              },
              {
                name:"蛋白粉",
                miaoshu:"练前练后来两勺？"
              }
            ]
          },
          {
            title:"科普知识",
            color:"#00B386",
            url:"/renwu/kepu_details/kepu_details?kepu_id=",
            txt:[
              {
                name:"蛋白质",
                miaoshu:"健身人士的最爱"
              },
              {
                name:"脂肪",
                miaoshu:"又爱又恨的必需品"
              },
              {
                name:"碳水化合物",
                miaoshu:"必不可少的主食"
              },
              {
                name:"其他营养素",
                miaoshu:"一个都不能少"
              }
            ]
          }
        ],
        
      };
    },
    computed:{
      ...mapGetters('m_cart', ['total'])
    },
  }
</script>

<style lang="scss">
  .floor-title {
    height: 80rpx;
    line-height: 80rpx;
    font-size: 60rpx;
    width: 100%;
    display: flex;
    font-weight:bold;
    margin-left: 20rpx;
    text-shadow: 5rpx 5rpx 5rpx #000000;
  }
  .order{
    padding: 0rpx 15rpx 0rpx 100rpx;
    height: 60rpx;
    line-height: 50rpx;
    font-size: 40rpx;
    .header{
      float: left;
      color: #B8B0AD;
      width: 65%;
      font-style:italic;
    }
    .tailer{
      text-align: right;
      float: left;
      width: 35%;
      font-weight:bold;
    }
  }
</style>
