<template>
  <view class="container">
    <button type="default" @click="buttonClick()" class="shoucang" style="color: red;background-color: #FFEEEE;" >{{button_now}}</button>
    <view class="img-box" v-for="(item, i) in renwu[id].img" :key="i">
      <image :src="item.src" mode="widthFix"></image>
    </view>
    <view class="txt-box" v-for="(item, i) in renwu[id].txt" :key="i">
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
        renwu:[
          {
            name:"陈康",
            id:0,
            img:[
              {
                src:"https://bkimg.cdn.bcebos.com/pic/b58f8c5494eef01f8489e5d3effe9925bc317d03?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto",
                height:0,
                width:0
              },
              {
                src:"https://bkimg.cdn.bcebos.com/pic/79f0f736afc37931dd1ea03fe4c4b74543a911b5?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto",
                height: 0 ,
                width: 0
              },
              {
                src:"https://bkimg.cdn.bcebos.com/pic/71cf3bc79f3df8dc7185a987c211728b4710286f?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto",
                height: 0,
                width: 0
              },
              {
                src:"https://bkimg.cdn.bcebos.com/pic/71cf3bc79f3df8dc7185a987c211728b4710286f?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto",
                height: 0,
                width: 0
              }
            ],
            txt:[
              {
                content:"陈康，男，1988年出生，湖北荆州人，中国健美运动员，IFBB职业联盟职业运动员。13年起他在国内斩获健美，古典健美冠军无数。",
              },
              {
                content:"在2019IFBB职业联盟奥林匹亚先生大赛，康神获得古典健美无差别级决赛第五名，创造中国健美历史。",
              },
              {
                content:"值得一提的是，这次奥赛陈康在办理签证时出现问题，导致其在赛前才乘长时间的飞机飞抵目的地。他的状态也因此未能调整到最佳，但也取得了赛会第五的好成绩。无数健身健美爱好者期待着他的未来表现。",
              },
              {
                content:"据悉，因为疫情两年未能成行奥赛的他会在2022扬帆起航，笔者真诚期待着他的表现。",
              }
            ],
          },
          {
            name:"凯圣王",
            id:1,
            img:[
              {
                src:"https://i0.hdslb.com/bfs/archive/fd800e7a4343bed1f39f48aa28a55c51b4560a98.jpg@320w_201h_1e_1c.webp",
                height: 0 ,
                width: 0
              },
              {
                src:"https://i0.hdslb.com/bfs/album/f7a83e47a428cba5c646480878dfbcad6bfb9fd8.jpg@240w_320h_1e_1c.webp",
                height: 0,
                width: 0
              },
              {
                src:"https://i0.hdslb.com/bfs/album/4fa27b0802f398bad36a625383e5cbd8272b377d.jpg@240w_320h_1e_1c.webp",
                height:0,
                width:0
              }
            ],
            txt:[
              {
                content:"凯圣王，自媒体创作者，一个从280斤减下来的运动营养师 健身从业12年授课25000+ 全国健美精英赛古典组第五 中国食品科学技术学会（运动营养师）课程培训师",
              },
              {
                content:"对于笔者来说，他是健身路上的重要指引者，他在b站的诸多课程'干货'满满。因此笔者也在这里将他推荐给有志于身材建设的诸位。无论您是想增肌或者减脂，只要耐得下心学习知识，找他没错",
              }
            ],
          },
          {
            name:"施瓦辛格",
            id:2,
            img:[
              {
                src:"https://img2.baidu.com/it/u=2610822978,4067402422&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=320",
                height:0,
                width:0
              },
              {
                src:"https://img1.baidu.com/it/u=2314027735,2763888937&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=300",
                height: 0 ,
                width: 0
              },
              {
                src:"https://img2.baidu.com/it/u=753466535,855112341&fm=253&fmt=auto&app=138&f=JPEG?w=833&h=500",
                height: 0,
                width: 0
              }
            ],
            txt:[
              {
                content:"阿诺德·施瓦辛格（Arnold Schwarzenegger），1947年7月30日生于奥地利，奥林匹亚先生 、健美运动员、力量举运动员、演员、导演、制片人、政治家，曾任加利福尼亚州州长，拥有美国/奥地利双重国籍。",
              },
              {
                content:"施瓦辛格幼时练习健美，1967年，获得了“环球健美及奥林匹亚先生”头衔。1968年，到美国发展后，在大学修习工商管理，并开班授课、拍摄健美录像带。1970年，进入影视圈，出演电影《大力神在纽约》。1984年，拍摄的《终结者》塑造了阿诺冷酷的银幕形象，之后接连拍摄多部动作片。 2003年，竞选加州州长获得成功，跨入政坛。2011年1月3日卸任，任期达7年。卸任后的施瓦辛格重返大银幕，继续接拍电影。",
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
                   items_class: "人物",  
                   items_url:"/renwu/renwu_details/renwu_details?renwu_id=",
                   items_name:this.renwu[this.id].name
                }
                this.addToCart(items)
                this.button_now="取消收藏"
              }
              else{
                const items = {
                   id: this.id,       
                   class: "人物",  
                }
                this.removeItemById(items)
                this.button_now="✰收藏✰"
              }
      }
    },
    onLoad(options) {
      // 获取 Id
      this.id = options.renwu_id
    },
    onShow(){
      let f=0
      for(let i=0;i<this.collected.length;i++)
      {
        for(let j=0;j<this.collected[i].length;j++)
        {
          if(this.collected[i][j].class==="人物"&&this.collected[i][j].id===this.id)
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
    background-color: #FFFFEE;
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
