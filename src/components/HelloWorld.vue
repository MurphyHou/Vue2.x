<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-button type="primary">Button</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
import { API } from '@/utils/api.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World'
    }
  },
  components:{
    [Button.name]:Button
  },
  mounted() {
    this.testData()
  },
  methods: {
    testData(){
      let params = {
       userId: "8C2112A0C4D51C49E0532A000A1ECED8"
      }
      API.testApi(params).then(res=>{
        console.log(res)
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
