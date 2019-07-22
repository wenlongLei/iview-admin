import { ChartPie, ChartBar } from '_c/charts'
import { showTitle } from '_c/common/util.js'
import commonIcon from '_c/common-icon'
import countTo from '_c/count-to'
import cropper from '_c/cropper'
import dragDrawer from '_c/drag-drawer'
import dragList from '_c/drag-list'
import editor from '_c/editor'
import icons from '_c/icons'
import infoCard from '_c/info-card'
import loginFrom from '_c/login-form'
import main from '_c/main'
import markDown from '_c/markdown'
import parentView from '_c/parent-view'
import pasteEditor from '_c/paste-editor'
import splitPane from '_c/split-pane'
import tables from '_c/tables'
import treeSelect from '_c/tree-select'

// 存储组件列表
const components = [
  treeSelect,
  tables,
  splitPane,
  pasteEditor,
  parentView,
  markDown,
  main,
  loginFrom,
  infoCard,
  icons,
  editor,
  dragList,
  dragDrawer,
  cropper,
  countTo,
  commonIcon,
  showTitle,
  ChartPie,
  ChartBar
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  treeSelect,
  tables,
  splitPane,
  pasteEditor,
  parentView,
  markDown,
  main,
  loginFrom,
  infoCard,
  icons,
  editor,
  dragList,
  dragDrawer,
  cropper,
  countTo,
  commonIcon,
  common,
  charts
}
