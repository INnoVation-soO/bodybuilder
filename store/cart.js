export default {
  // 为当前模块开启命名空间
  namespaced: true,

  // 模块的 state 数据
  state: () => ({
    // 收藏的数组，用来存储购物车中每个栏目的信息对象
    // 每个收藏的信息对象，都包含如下个属性：
    cart: JSON.parse(uni.getStorageSync('cart') || '[]')
  }),

  // 模块的 mutations 方法
  mutations: {
     addToCart(state, items) {
          // 根据提交的商品的Id，查询购物车中是否存在这件商品
          // 如果不存在，则 findResult 为 undefined；否则，为查找到的商品信息对象
          const findResult = state.cart.find((x) => x.items_id === items.items_id&&items.items_class===x.items_class)
          if (!findResult) {
            // 如果收藏中没有这条，则直接 push
            state.cart.push(items)
          } 
          // 通过 commit 方法，调用 m_cart 命名空间下的 saveToStorage 方法
             this.commit('m_cart/saveToStorage')
        },
        removeItemById(state, items) {
          // 调用数组的 filter 方法进行过滤
          state.cart = state.cart.filter(x => !(x.items_id === items.id&&items.class===x.items_class))
          // 持久化存储到本地
          this.commit('m_cart/saveToStorage')
        },
        // 将数据持久化存储到本地
        saveToStorage(state) {
           uni.setStorageSync('cart', JSON.stringify(state.cart))
        },
  },

  // 模块的 getters 属性
  getters: {
    total(state) {
          let c = 0
          // 循环统计商品的数量，累加到变量 c 中
          state.cart.forEach(items => c +=1)
          return c
       },
    collected(state) {
         let res=[]
         let c=[]
         for(let i=0;i<state.cart.length;i++){
           if(state.cart[i].items_class==="人物")
          {
            const tmp={
              name:state.cart[i].items_name,
              url:state.cart[i].items_url,
              id:state.cart[i].items_id,
              class:state.cart[i].items_class
            }
            c.push(tmp)
          }
         }
         res.push(c)
         c=[]
         for(let i=0;i<state.cart.length;i++){
           if(state.cart[i].items_class==="好物")
          {
            const tmp={
              name:state.cart[i].items_name,
              url:state.cart[i].items_url,
              id:state.cart[i].items_id,
              class:state.cart[i].items_class
            }
            c.push(tmp)
          }
         }
         res.push(c)
         c=[]
         for(let i=0;i<state.cart.length;i++){
           if(state.cart[i].items_class==="科普")
          {
            const tmp={
              name:state.cart[i].items_name,
              url:state.cart[i].items_url,
              id:state.cart[i].items_id,
              class:state.cart[i].items_class
            }
            c.push(tmp)
          }
         }
         res.push(c)
         return res
      },
  },
}