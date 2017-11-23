<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
     <div v-for="item in $store.state.musicList.data.playlist">
      {{item.xsong_name}}
     </div>
    <el-button  @click="open">点击打开 Message Box</el-button>
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  asyncData ({ store }) {
    return store.dispatch('getMusic')
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    open() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    }
  }
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
