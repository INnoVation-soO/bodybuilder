<template>
  <view class="container">
    <button type="default" @click="buttonClick()" class="shoucang" style="color: red;background-color: #FFEEEE;" >{{button_now}}</button>
    <view class="img-box" v-for="(item, i) in kepu[id].img" :key="i">
      <image :src="item.src" mode="widthFix"></image>
    </view>
    <view class="txt-box" v-for="(item, i) in kepu[id].txt" :key="i">
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
        kepu:[
          {
            name:"蛋白质",
            id:0,
            img:[
              {
                src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F19268%2F20180126230156-1847046439_jpg%40670w_670_439_89292.jpg%2F0&refer=http%3A%2F%2Fpic.baike.soso.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650460199&t=b538edc78b0455562d015e3341af64e1",
                height:0,
                width:0
              },
              {
                src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fq_70%2Fimages01%2F20210731%2F4f07311fec1a4af583ac4090404a4a05.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650460199&t=2169a9b7f30a93e785a53ef895e7625f",
                height: 0 ,
                width: 0
              },
              {
                src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fb21bb051f8198618a997b83741ed2e738ad4e6b5.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650460199&t=e2ce90e44d44224a13e1860e852f92a6",
                height: 0,
                width: 0
              }
            ],
            txt:[
              {
                content:"蛋白质小贴士：",
              },
              {
                content:"1、动物蛋白多为完全蛋白，而植物蛋白多为不完全蛋白。完全蛋白是指含有人体所有所需氨基酸的蛋白质，因此从蛋白质角度讲，补充动物蛋白质比补充植物蛋白好",
              },
              {
                content:"2、健身人适宜摄入1.4g/kg体重的蛋白质。不需要摄入过多，因为无法消化吸收。而且因为没有相应的训练水平，身体也使用不了这么多氨基酸，脱氨会对身体有害。",
              },
              {
                content:"3、蛋白质最好分餐摄入，有利于人体吸收。比如一百g蛋白质分五餐吃，每次至少间隔两小时。",
              }
            ],
          },
          {
            name:"脂肪",
            id:0,
            img:[
              {
                src:"https://img0.baidu.com/it/u=3115275842,3563296940&fm=253&fmt=auto&app=138&f=JPEG?w=720&h=483",
                height:0,
                width:0
              },
              {
                src:"https://img2.baidu.com/it/u=202637419,2771639194&fm=253&fmt=auto&app=120&f=JPEG?w=1067&h=800",
                height: 0 ,
                width: 0
              },
              {
                src:"https://img2.baidu.com/it/u=1253173760,2078740295&fm=253&fmt=auto&app=120&f=JPEG?w=650&h=434",
                height: 0,
                width: 0
              }
            ],
            txt:[
              {
                content:"脂肪小贴士：",
              },
              {
                content:"1、很多人减脂（减肥）会对油脂避恐不及，但实际上，脂肪也有分类，不同类的脂肪各有其用，不可或缺。所以适量摄入均衡种类的脂肪才是健康的减脂方式。",
              },
              {
                content:"2、事实上除了“反式脂肪酸”，没有哪种脂肪是所谓“坏脂肪”。当然要注意均衡摄入：饱和脂肪酸、单不饱和脂肪酸、多不饱和脂肪酸最好达到1：1：1摄入。",
              },
              {
                content:"3、脂肪不可不吃，要想减肥，比起砍掉所有脂肪，适度少吃碳水尤其是精致碳水或许更是个好主意。加油，减脂人！",
              }
            ],
          },
          {
            name:"碳水化合物",
            id:0,
            img:[
              {
                src:"https://img0.baidu.com/it/u=1347544472,316927429&fm=253&fmt=auto&app=138&f=JPEG?w=720&h=480",
                height:0,
                width:0
              },
              {
                src:"https://img0.baidu.com/it/u=1561186241,3542744630&fm=253&fmt=auto&app=138&f=PNG?w=788&h=500",
                height: 0 ,
                width: 0
              },
              {
                src:"https://img1.baidu.com/it/u=182821869,780316157&fm=253&fmt=auto&app=138&f=JPEG?w=398&h=389",
                height: 0,
                width: 0
              },
              {
                src:"https://img1.baidu.com/it/u=3826076810,3806878916&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=305",
                height: 0,
                width: 0
              }
            ],
            txt:[
              {
                content:"碳水小贴士：",
              },
              {
                content:"1、作为一个北方人，主食实在是在生活中占据了一个不可割舍的地位。而碳水摄入超标果然是国人常态，因此在生活中有意识少吃主食，多吃肉蛋禽奶应是被提倡的。",
              },
              {
                content:"2、但碳水绝不是坏东西，因此虽然要控制摄入但不能过度少吃甚至不吃。缺少碳水会带来没有精力等困扰，长此以往，身体当然会崩",
              },
              {
                content:"3、精致碳水（如糖果白砂糖等）可以说确实不是好东西，绝对要少吃。一天摄入量最好不超过摄入碳水总量 的10%。同时适量吃些粗粮对身体有很多好处，大概20-30%是个不错的数字哦。",
              }
            ],
          },
          {
            name:"其他营养素",
            id:0,
            img:[
              {
                src:"https://img0.baidu.com/it/u=1589315379,2733128935&fm=253&fmt=auto&app=120&f=JPEG?w=754&h=500",
                height:0,
                width:0
              },
              {
                src:"https://img1.baidu.com/it/u=3813004339,4064910189&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                height: 0 ,
                width: 0
              },
              {
                src:"https://img1.baidu.com/it/u=2921469071,2279759970&fm=253&fmt=auto&app=138&f=JPEG?w=770&h=400",
                height: 0,
                width: 0
              }
            ],
            txt:[
              {
                content:"其他营养素：",
              },
              {
                content:"1、如果说，玩明白三大主要供能物能控制好热量摄入。那么补充够矿物质、维生素、水和膳食纤维则会使我们的身体更健康。",
              },
              {
                content:"2、七大营养素都不可或缺意味着我们需要均衡膳食，不挑食，尽可能多种类地吃蔬菜水果和豆制品等。",
              },
              {
                content:"3、当然，凡事过犹不及，也不需要今天知道那种营养素好就玩命补充。坚持营养均衡摄入才是长久之计。",
              }
            ],
          },
          {
            name:"均衡营养",
            id:0,
            img:[
              {
                src:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00726-149.jpg",
                height:0,
                width:0
              },
              {
                src:"https://img2.baidu.com/it/u=116130586,1953383348&fm=253&fmt=auto&app=138&f=JPEG?w=460&h=532",
                height: 0 ,
                width: 0
              },
              {
                src:"https://img2.baidu.com/it/u=892297003,1008256809&fm=26&fmt=auto",
                height: 0,
                width: 0
              }
            ],
            txt:[
              {
                content:"均衡饮食",
              },
              {
                content:"营养全面",
              },
              {
                content:"吃得健康",
              },
              {
                content:"过得快乐~",
              }
            ],
          },
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
    onLoad(options) {
      // 获取Id
      this.id = options.kepu_id
    },
    methods:{
      ...mapMutations('m_cart', ['addToCart']),
      ...mapMutations('m_cart', ['removeItemById']),
      buttonClick(e) {
        if(this.button_now==="✰收藏✰")
          {
            const items = {
               items_id: this.id,       
               items_class: "科普",  
               items_url:"/renwu/kepu_details/kepu_details?haowu_id=",
               items_name:this.kepu[this.id].name
            }
            this.addToCart(items)
            this.button_now="取消收藏"
          }
          else{
            const items = {
               id: this.id,       
               class: "科普",  
            }
            this.removeItemById(items)
            this.button_now="✰收藏✰"
          }
        }
    },
    onShow(){
      let f=0
      for(let i=0;i<this.collected.length;i++)
      {
        for(let j=0;j<this.collected[i].length;j++)
        {
          if(this.collected[i][j].class==="科普"&&this.collected[i][j].id===this.id)
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
  .shoucang{
      float: left;
      position: fixed;
      right: 10rpx;
      bottom: 66%;
      font-weight:bold;
    }
</style>
