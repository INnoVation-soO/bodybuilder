<template>
  <view class="container">
    <button type="default" @click="buttonClick()" class="shoucang" style="color: red;background-color: #FFEEEE;" >{{button_now}}</button>
    <view class="img-box" v-for="(item, i) in haowu[id].img" :key="i">
      <image :src="item.src" mode="widthFix"></image>
    </view>
    <view class="txt-box" v-for="(item, i) in haowu[id].txt" :key="i">
      <text>{{item.content}}</text>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapMutations } from 'vuex'
  import { mapGetters } from 'vuex'
  
  export default {
    data() {
      return {
        button_now:"✰收藏✰",
        id:0,
        haowu:[
          {
            name:"健身房",
            id:0,
            img:[
              {
                src:"https://img2.baidu.com/it/u=3476514291,4045541303&fm=26&fmt=auto",
                height:0,
                width:0
              },
              {
                src:"https://img2.baidu.com/it/u=1768985439,821589095&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=326",
                height: 0 ,
                width: 0
              },
              {
                src:"https://img0.baidu.com/it/u=3540517583,2449824580&fm=253&fmt=auto&app=138&f=JPEG?w=666&h=500",
                height: 0,
                width: 0
              },
            ],
            txt:[
              {
                content:"经常有问题问道：不去健身房可以吗？",
              },
              {
                content:"对于以减脂或者健康为目的的运动者来说。健身房只是锦上添花，不去也不影响。",
              },
              {
                content:"但对于以肌肥大为目的的训练者（即通常所说的健身人士），健身房的各种器械还是很有必要的。",
              },
              {
                content:"居家健身并非不行，但存在诸如：效率不高，存在上限，部位受限（难练背）等问题。",
              }
            ],
          },
          {
            name:"杠铃",
            id:1,
            img:[
              {
                src:"https://img2.baidu.com/it/u=3659923014,130191285&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
                height:0,
                width:0
              },
              {
                src:"https://img2.baidu.com/it/u=1636273179,3381756831&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=300",
                height: 0 ,
                width: 0
              },
              {
                src:"https://img0.baidu.com/it/u=1631497905,3946090283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                height: 0,
                width: 0
              },
            ],
            txt:[
              {
                content:"用途无限，健身必备",
              },
              {
                content:"自由重量对肌肉的全面增长促进是固定重量无法比拟的。坚持杠铃训练你会获益匪浅（保证安全）。",
              }
            ],
          },
          {
            name:"哑铃",
            id:2,
            img:[
              {
                src:"https://img1.baidu.com/it/u=3814961731,1074206862&fm=253&fmt=auto&app=138&f=JPEG?w=773&h=500",
                height:0,
                width:0
              },
              {
                src:"https://img1.baidu.com/it/u=3447904658,3430153601&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                height: 0 ,
                width: 0
              },
              {
                src:"https://img0.baidu.com/it/u=4284186285,2551103248&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=380",
                height: 0,
                width: 0
              },
            ],
            txt:[
              {
                content:"百万动作所系，健身必备",
              },
              {
                content:"居家健身神器，建议家中常备。",
              }
            ],
          },
          {
            name:"龙门架",
            id:3,
            img:[
              {
                src:"https://img2.baidu.com/it/u=3425046000,3765071019&fm=253&fmt=auto&app=120&f=JPEG?w=310&h=310",
                height:0,
                width:0
              },
              {
                src:"https://img1.baidu.com/it/u=4247195765,53638852&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                height: 0,
                width: 0
              },
            ],
            txt:[
              {
                content:"多功能好物，健身房必备，可以训练多部位。",
              },
              {
                content:"有条件不妨家里整一个，一个器械练全身",
              }
            ],
          },
          {
            name:"蛋白粉",
            id:4,
            img:[
              {
                src:"https://img1.baidu.com/it/u=1942624892,3072896125&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350",
                height:0,
                width:0
              },
              {
                src:"https://img1.baidu.com/it/u=612085577,2583152814&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                height: 0 ,
                width: 0
              },
              {
                src:"https://img0.baidu.com/it/u=3935040977,3027524822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                height: 0,
                width: 0
              },
            ],
            txt:[
              {
                content:"首先反妖魔化，蛋白粉无害人体（正常补充前提下）",
              },
              {
                content:"其次反神器化，肌肉不是喝喝蛋白粉，随便动动就能长出的（生气）",
              },
              {
                content:"蛋白粉适合饭量较小的，吃不下足量食物的人补充蛋白质。同样也适合正餐间不方便加餐的人群快捷补充蛋白质。但如果有条件，食补还是强于蛋白粉的",
              },
              {
                content:"最后纠正：练后不需要立刻补充蛋白质。科学研究表面，练后补充快碳更好。蛋白质不妨在练后2小时补充",
              }
            ],
          }
        ]
      };
    },
    computed: {
        // 调用 mapState 方法，把 m_cart 模块中的 cart 数组映射到当前页面中，作为计算属性来使用
        // ...mapState('模块的名称', ['要映射的数据名称1', '要映射的数据名称2'])
        ...mapState('m_cart', ['cart']),
        ...mapGetters('m_cart', ['total']),
        ...mapGetters('m_cart', ['collected']),
      },
    methods:{
        ...mapMutations('m_cart', ['addToCart']),
        ...mapMutations('m_cart', ['removeItemById']),
        buttonClick(e) {
          if(this.button_now==="✰收藏✰")
          {
            const items = {
               items_id: this.id,       
               items_class: "好物",  
               items_url:"/renwu/haowu_details/haowu_details?haowu_id=",
               items_name:this.haowu[this.id].name
            }
            this.addToCart(items)
            this.button_now="取消收藏"
          }
          else{
            const items = {
               id: this.id,       
               class: "好物",  
            }
            this.removeItemById(items)
            this.button_now="✰收藏✰"
          }
        }
      },
    onLoad(options) {
      // 获取Id
      this.id = options.haowu_id
    },
    onShow(){
      let f=0
      for(let i=0;i<this.collected.length;i++)
      {
        for(let j=0;j<this.collected[i].length;j++)
        {
          if(this.collected[i][j].class==="好物"&&this.collected[i][j].id===this.id)
          {
            f=1
          }
        }
      }
      if(f===1)
      {
        this.button_now="取消收藏"
      }
    }
  }
</script>

<style lang="scss">
  .container{
    background-color: #F0FDFD;
  }
  .img-box{
    display:flex;
    justify-content: center;
  }
  .txt-box{
    text-indent: 2em;
    font-size: 50rpx;
  }
  .shoucang{
      float: left;
      position: fixed;
      right: 10rpx;
      bottom: 66%;
      font-weight:bold;
    }
</style>
