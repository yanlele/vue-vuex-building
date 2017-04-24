<template>
  <div>
    <input type="button" value="+1" @click="increment">
    <input type="button" value="-1" @click="decrement">
    <input type="button" value="奇数+1" @click="addOdd">
    <input type="button" value="偶数+1" @click="addEven">
    <input type="button" value="异步请求" @click="setTimeOut">
    <br>
    现在的数字为：{{count}}
  </div>
</template>
<style>

</style>
<script>
  import {mapActions, mapGetters} from 'vuex'

  export default{
    methods: mapActions([
      'increment',
      'decrement',
      'addOdd',
      'addEven',
      'setTimeOut'
    ]),
    computed: mapGetters([
      'count'
    ])
  }
</script>
