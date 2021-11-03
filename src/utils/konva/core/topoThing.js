import Konva from 'konva'
import { uuid } from '@/utils'
import addNodeEvent from '@/utils/konva/common'
import Vue from 'vue'
/**
 * @description 组态物模型公共函数
 * @type {{create(*, *, *): Text, on(*)}}
 */
const topoThing = {
  on(args) {
    const params = {
      busTopicKey: dgiotBus.topicKey('dgiot_thing', 'dgiotThing'),
      msg: {
        type: 'bind_topo',
        id: args.getAttr('id'),
        text: args.findOne('Text').getAttr('text'),
      },
    }
    // console.log(params,Vue.prototype.$dgiotBus.emit(params.busTopicKey,params.msg))
    Vue.prototype.$baseEventBus.$emit(params.busTopicKey, params.msg)
  },
  /**
   * @description 创建文本
   * @document https://konvajs.org/docs/shapes/Text.html
   * @param productid
   * @param text
   */
  create(thing, saleInfo, randomXy) {
    const topoThing = new Konva.Text({
      x: randomXy(100, 50),
      y: randomXy(70, 30),
      text: `${thing.productid}_${uuid(3)}`,
      // fontSize: 18,
      fontFamily: 'Calibri',
      fill: 'yellow', // 没有绑定组态设置为黄色，绑定后改为绿色
      width: 300,
      padding: 20,
      scaleX: saleInfo.scaleX,
      scaleY: saleInfo.scaleY,
      align: 'center',
      draggable: true,
      attrs: {
        hidden: thing.hidden,
        id: `${thing.productid}_${uuid(4)}`,
        name: 'thing',
        x: randomXy(300, 10),
        y: randomXy(170, 30),
        draggable: true,
      },
      className: 'Label',
      children: [
        {
          attrs: {
            name: 'dblclick',
          },
          className: 'Tag',
        },
        {
          attrs: {
            id: `${thing.productid}_${uuid(5)}`,
            text: 'dgiot',
            // fontSize: 50,
            lineHeight: 1.2,
            padding: 10,
            fill: 'green',
          },
          className: 'Text',
        },
      ],
    })
    console.log('topoThing')
    console.log(topoThing)
    // return topoThing

    var simpleLabel = new Konva.Label({
      name: 'thing',
      x: randomXy(640, 10),
      y: randomXy(640, 10),
      id: thing.productid + '_flow',
      attrs: {
        id: thing.productid + '_flow',
        name: 'thing',
        x: randomXy(640, 10),
        y: randomXy(640, 10),
      },
    })

    simpleLabel.add(
      new Konva.Text({
        hidden: thing.hidden ? thing.hidden : false,
        fill: 'yellow',
        attrs: {
          draggable: true,
          id: thing.productid + '_flow_text',
          text: 'dgiot' + '_flow_text' + uuid(5),
          fontSize: 24,
          lineHeight: 1.2,
          padding: 10,
          fill: 'yellow',
        },
      })
    )

    simpleLabel.add(
      new Konva.Tag({
        attrs: {
          draggable: true,
          name: 'dblclick',
        },
      })
    )

    console.log('simpleLabel')
    console.log(simpleLabel)
    return simpleLabel
  },
  createdEvidence(args){
    // https://konvajs.org/api/Konva.Path.html#Path__anchor
    var path = new Konva.Path({
      name:"evidence",
      x: canvas.randomXy(640, 100),
      y: canvas.randomXy(640, 100),
      draggable:true,
      data:
        'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-18.2.3,4.352-22.33c7.5.0.3.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.8.2.33.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
      fill: 'black',
      // scale: {
      //   x: 2,
      //   y: 2,
      // },
    });

    // add the layer to the stage
    canvas.layer.add(path);
    console.error('111111111111',path,args)
  },
  /**
   * @description 绑定组态
   */
  bindTopo() {},
  /**
   * @description 保存组态
   */
  saveTopo() {},
  /**
   * @description 处理设备界面进入组态 设置组态不可点击移动等属性
   */
  deviceThing() {},
  /**
   * @description 更新组态
   */
  upTopo() {},
}

export default topoThing
