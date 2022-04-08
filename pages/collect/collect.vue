<template>
  <view class="container">
    <uni-swipe-action>
      <view class="floor-item" v-for="(item, i) in collected" :key="i">
          <navigator class="order" v-for="(item2, i2) in item" :key="i2" :url="item2.url + item2.id">
            <uni-swipe-action-item class="slide" :right-options="options" @click="swipeActionClickHandler(i,i2)">
              <view class="header" :style="{color: color[i]}">{{item2.class}}</view>
              <view class="tailer" :style="{color: color[i]}">{{item2.name}}</view>
            </uni-swipe-action-item>
          </navigator>
      </view>
    </uni-swipe-action>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapMutations } from 'vuex'
  import { mapGetters } from 'vuex'
  import badgeMix from '@/mixins/tabbar-badge.js'
 
 export default {
   mixins: [badgeMix],
    data() {
      return {
        options: [{
              text: '删除', // 显示的文本内容
              style: {
                backgroundColor: '#C00000'
              }
            }],
        color:["#00CDFF","#FF4893","#00B386"]
      };
    },
    computed:{
      ...mapGetters('m_cart', ['collected']),
    },
    methods:{
         ...mapMutations('m_cart', ['removeItemById']),
      // 点击了滑动操作按钮
      swipeActionClickHandler(i,i2) {
        this.removeItemById(this.collected[i][i2])
        this.setBadge()
      }
    }
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
    padding: 20rpx 50rpx 20rpx 50rpx;
    height: 60rpx;
    line-height: 50rpx;
    font-size: 40rpx;
    border-bottom: 1rpx solid #C0C0C0;
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
