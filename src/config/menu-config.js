// module.exports = [{
//   name: '基础',
//   id: 'basic',
//   sub: [{
//     name: 'Layout 布局',
//     componentName: 'BasicLayout'
//   }, {
//     name: 'Container 布局容器',
//     componentName: 'BasicContainer'
//   }]
// }, {
//   name: 'Form',
//   id: 'form',
//   sub: [{
//     name: 'Radio 单选框',
//     componentName: 'FormRadio'
//   }, {
//     name: 'Checkbox 多选框',
//     componentName: 'FormCheckbox'
//   }]
// }]

// export需要声明变量类型，也可以写成 export default const menu 

export const menu= [
  {
    name: 'Mashup-MAP',
    id: 'mashup',
    sub: [{
      name: 'SearchMap',
      componentName: 'SearchMap'
    }, {
      name: 'LocationMap',
      componentName: 'LocationMap'
    }]
  },{
    name: 'MyScrapy',
    id: 'scrapy',
    sub: [{
      name: 'Scrapy1',
      componentName: 'Scrapy1'
    }]
  },{
    name: 'SomeCharts',
    id:'echarts',
    sub:[{
      name: 'Chart1',
      componentName: 'Chart1'
    },{
      name: 'Chart2',
      componentName: 'Chart2'
    }]
  }
]

