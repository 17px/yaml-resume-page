<template>
  <div id="app">
    <p class="last-modify">最后更新时间：{{ lastModifyTime }}</p>
    <Pure :renderData="renderData" />
  </div>
</template>

<script>
// 引入主题组件
import Pure from '@/components/pure'
export default {
  components: { Pure },
  data() {
    return {
      renderData: {},
      lastModifyTime: ''
    }
  },
  methods: {
    async getConfData() {
      let [src, res] = [{}, '']
      src = await this.$http.get('conf.yml')
      try {
        res = this.$Y.safeLoad(src.data)
      } catch (e) {
        throw e
      }
      return res
    },
    /**
     * 设置全局根背景色
     */
    setThemeColor(color) {
      document.getElementsByTagName('body')[0].style.setProperty('--mainThemeColor', color)
    }
  },
  async created() {
    this.renderData = await this.getConfData()
    const { mainThemeColor, lastModifyTime, title } = this.renderData.conf
    this.setThemeColor(mainThemeColor)
    this.lastModifyTime = lastModifyTime
    document.title = title
  }
}
</script>

<style lang="less" scoped>
body {
  position: relative;
  -webkit-font-smoothing: antialiased;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.57142857;
  color: #333;
  padding-top: 5px;
  overflow: auto;
  @media screen and (max-width: 1024px) {
    padding-top: 0;
  }
  .last-modify {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 1000px;
    transform: translateX(-50%);
    text-align: right;
    font-size: 12px;
    color: #bbb;
    transition: all 0.2s ease-in-out;
    animation: fade 1.6s;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
}
</style>
