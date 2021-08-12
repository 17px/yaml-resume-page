<!-- pure主题 -->
<template>
  <div>
    <loading :show="loadingShow"></loading>
    <div id="wrapper" v-show="!loadingShow">
      <div class="basic">
        <section v-if="d.basic">
          <h1 class="left">
            {{ d.basic.cnName }}
            <small>{{ d.basic.enName }}</small>
          </h1>
          <h2 class="right">
            {{ renderData.basic.objective }}
            <small>/ {{ renderData.basic.city }}</small>
          </h2>
        </section>
        <div class="relative" v-if="d.basic">
          <div class="left">
            <div class="age">{{ renderData.basic.sex }} / {{ renderData.basic.birth }}</div>
            <div class="overall">{{ renderData.basic.overall }}</div>
            <div class="college">{{ renderData.basic.college }}</div>
          </div>
          <div class="right">
            <a :href="`tel:${renderData.basic.phone}`">
              <span>{{ renderData.basic.phone }}</span>
              <i class="fa fa-phone-square"></i>
            </a>
            <a :href="`https://www.${renderData.basic.git}`">
              <span>{{ renderData.basic.git }}</span>
              <i class="fa fa-git-square"></i>
            </a>
            <a :href="`https://www.${renderData.basic.homepage}`">
              <span>{{ renderData.basic.homepage }}</span>
              <i class="fa fa-h-square"></i>
            </a>
            <a :href="`Mailto:${renderData.basic.email}`">
              <span>{{ renderData.basic.email }}</span>
              <i class="fa fa-envelope-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="skill" v-if="d.skill">
        <h5>{{ d.conf.modules.skill }}</h5>
        <ul>
          <li v-for="item in d.skill" :key="item" v-html="inlineCompiler(item)"></li>
        </ul>
      </div>
      <div class="exp" v-if="d.exp">
        <h5>{{ d.conf.modules.exp }}</h5>
        <ul>
          <li v-for="(item, index) in d.exp" :key="index">
            <div class="title">
              <span class="name">{{ item.name }} • {{ item.role }}</span>
              <a v-if="item.link" :href="item.link" target="_blank" class="link">link</a>
            </div>
            <div class="bg" v-if="item.bg">
              <p>背景：{{ item.bg }}</p>
            </div>
            <div class="des">
              <span v-if="d.conf.modules.l4 !== ''">{{ d.conf.modules.l4 }}</span>
              <ul>
                <li v-for="(content, index) in item.des" :key="index">
                  <span>{{ index + 1 }}、 {{ content }}</span>
                </li>
              </ul>
            </div>
            <div class="ps">
              <p>{{ item.ps }}</p>
            </div>
            <div class="stack" v-if="item.stack">
              <span v-html="stackCompiler(item.stack)"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="project" v-if="d.project">
        <h5>{{ d.conf.modules.project }}</h5>
        <ul>
          <li v-for="(item, index) in d.project" :key="index">
            <a :href="item.link" target="_blank" class="name">{{ item.title }}</a>
            <span>：</span>
            <span>{{ item.des }}</span>
          </li>
        </ul>
      </div>
      <a class="pdf" href="resume.pdf"> <i class="fa fa-file-pdf-o"></i> PDF简历 </a>
    </div>
  </div>
</template>

<script>
import loading from '@/components/loading'
export default {
  components: { loading },
  computed: {
    stackCompiler() {
      return str => {
        let list = str.split(' ')
        list.forEach((item, index) => {
          list[index] = `<label class='tip'>${item}</label>`
        })
        return list.join('')
      }
    },
    inlineCompiler() {
      let re = /`{1,2}[^`](.*?)`{1,2}/g
      return str => {
        let res = str
        if (str.match(re)) {
          let temp = res
          str.match(re).forEach(item => {
            temp = temp.replace(new RegExp(item, 'g'), `<label class='tip-grey'>${item.replace(/`/g, '')}</label>`)
          })
          res = temp
        }
        return res
      }
    }
  },
  watch: {
    renderData: {
      handler(n) {
        this.d = n
        // 隐藏loading
        this.loadingShow = false
      },
      deep: true
    }
  },
  data() {
    return {
      d: {},
      loadingShow: true
    }
  },
  props: {
    renderData: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
// 核心样式表
@import '../assets/theme/pure/core.less';
// 打印样式表
@import '../assets/theme/pure/print.less';
</style>
