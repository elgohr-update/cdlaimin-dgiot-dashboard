// * @Author: h7ml
// * @Date: 2021-10-08 10:32:25
// * @LastEditors: h7ml
// * @LastEditTime: 2021-10-08 10:32:25
// * @Description:
// * @FilePath: src\config\local.config.js
// * @DocumentLink: http://prod.iotn2n.com/swagger/#/
let localUrl = {
  css: [
    'material_icons.css', // 谷歌字体图标
    'iview.css',
    'antd.min.css',
    'google.css',
    'materialdesignicons.min.css',
    'jsoneditor.min.css',
    'normalize.css',
    'nprogress.css',
    'style.min.css',
    'codemirror.css',
    'lint.css',
    'rubyblue.css',
    'prism-tomorrow.css',
    'prismeditor.min.css',
    'vue2-perfect-scrollbar.min.css',
    // 'aliplayer-min.css',
    //  amis 相关
    'amis/lib/themes/cxd.css',
    'amis/lib/helper.css',
    'amis/lib/themes/antd.css',
  ],
  js: [
    'vue.js', // 这里如果使用了min.js 则无法在控制台使用vue-devtools
    'vue-baidu-map.js',
    'mqttws31.js',
    'vue-router.min.js',
    'vue-i18n.min.js',
    'cos-js-sdk-v5.min.js',
    'nprogress.js',
    'md5.min.js',
    'ace.js',
    'ext-language_tools.js',
    'mode-json.js',
    'theme-monokai.js',
    'mode-erlang.js',
    'mode-sql.js',
    'theme-eclipse.js',
    'mode-json.js',
    'mode-text.js',
    'theme-gob.js',
    'theme-twilight.js',
    'mode-mysql.js',
    'mode-python.js',
    'vuedraggable.umd.min.js',
    'qs.js',
    'konva.min.js',
    'vue-konva.min.js',
    'mock.js',
    'base64.js',
    'vuex.min.js',
    'Sortable.min.js',
    'mqtt.min.js',
    'jszip.min.js',
    'jquery.min.js',
    'echarts.min.js',
    'index.min.js',
    'echarts-amap.min.js',
    'bmap.min.js',
    'macarons.js',
    'dayjs.min.js',
    'lodash.min.js',
    'clipboard.min.js',
    'axios.min.js',
    'js-cookie.js',
    'index.js',
    'moment.min.js',
    // 'xlsx.min.js', 加载速度慢 暂时用不上
    'screenfull.js',
    'jsplumb.min.js',
    'jsencrypt.min.js',
    'vuedraggable.umd.min.js',
    'app.js',
    'codemirror.js',
    'javascript.js',
    'json-lint.js',
    'vue-codemirror.js',
    // 'FileSaver.min.js', 加载速度慢 暂时用不上
    'index.js',
    'jsoneditor.min.js',
    'vue-flv-player.umd.min.js',
    'ezuikit-js.js',
    'f-render.js',
    'vue-ele-form.js',
    'fuzzy.js',
    'vue-prism-editor.js',
    'flv.min.js',
    'prism-clike.min.js',
    'prism-core.min.js',
    'vue2-perfect-scrollbar.js',
    'vue-multipane.js',
    'antd.min.js',
    'iview.min.js',
    'vuetify.min.js',
    'ace-builds.js',
    'resize-observer-polyfill.js',
    'vditor.js',
    // 'fabric.js', 加载速度慢 暂时用不上
    'aliplayer-min.js',
    // 'xterm.js', 加载速度慢 暂时用不上
    // 'xterm-addon-fit.js',
    // 'xterm-addon-attach.js',
    'vue-aliplayer-v2.js',
    // 'rutilsjs.js',
    // 'rdatejs.js',加载速度慢 暂时用不上
    'bcryptjs.js',
  ],
}
if (process.env.NODE_ENV !== 'development') {
  localUrl.js[0] = 'vue.min.js'
}

module.exports = { localUrl }
