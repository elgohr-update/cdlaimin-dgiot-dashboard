/*
 * @Author: h7ml
 * @Date: 2021-01-14 14:35:36
 * @LastEditTime: 2021-03-25 20:33:20
 * @LastEditors: h7ml
 * @FilePath: \shuwa_dashboard\src\store\acl.js
 * @Description:
 */
/**
 * @description 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突，请勿修改。
 */

Vue.use(Vuex)
// https://app.logrocket.com/wj9jpe/dgiot/settings/setup
import LogRocket from 'logrocket'
import createPlugin from 'logrocket-vuex'

LogRocket.init('wj9jpe/dgiot')
LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: 'lsxredrain',
  email: 'lsxredrain@163.com',
  subscriptionType: 'dgiot_dashboard',
})

const logrocketPlugin = createPlugin(LogRocket)
const files = require.context('./modules', false, /\.js$/)
const modules = {}
files.keys()
  .forEach((key) => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
  })
Object.keys(modules)
  .forEach((key) => {
    modules[key]['namespaced'] = true
  })
const store = new Vuex.Store({
  modules,
  // plugins: [createLogger()],
  plugins: [logrocketPlugin],
})
export default store
window.store = store
