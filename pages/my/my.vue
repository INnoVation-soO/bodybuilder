<template>
  <view class="container">
    <view class="img-box" v-for="(item, i) in my.img" :key="i">
      <image :src="item" mode="widthFix"></image>
    </view>
    <view class="txt-box" v-for="(item, i) in my.txt" :key="i">
      <text>{{item}}</text>
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
        my:{
          img:[
            "https://img0.baidu.com/it/u=3092887744,4146162910&fm=253&fmt=auto&app=138&f=JPEG?w=668&h=500",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2FTAPspSHImZdhvxmXGjsI9MKAAezWEpBAh8oe0z%3DvgbHm51551507124250compressflag.jpg&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650524491&t=15b38ebe73cace1d56d767bbdbd72e00"
          ],
          txt:[
            "于我而言，或许健身一如生活：",
            "不可过急，急于求成则危险将至，事倍功半；",
            "亦不可懈怠，须知逆水行舟，不进则退。",
            "大抵如所谓持如履薄冰心，行勇猛精进事，一路且行且思而已。",
            "如有交流编程或者健身之类的想法可联系作者qq：972242768"
          ]
        }
      };
    }
  }
</script>
<style lang="scss">
  .container{
    background-color: #EEFFF8;
  }
  .img-box{
    display:flex;
    justify-content: center;
  }
  .txt-box{
    text-indent: 2em;
    font-size: 50rpx;
  }
</style>
