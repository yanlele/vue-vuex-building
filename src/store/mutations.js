
const INCREMENT='INCREMENT';//增加
const DECREMENT='DECREMENT';//减少

const state={
  count:10
};

const mutations={
  [INCREMENT](state){
    state.count++
  },
  [DECREMENT](state){
    state.count--
  }
};

const getters={
  count(state){
    return state.count
  }
};

export default {
  mutations,
  getters,
  state
}

