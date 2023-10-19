// First Chart
// import * as echarts from 'echarts';
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            title: {
                text: 'stack'
            },
            legend:{
                data:['Email','Union Ads','PlayStore','Youtube','Chrome']
            },
           tooltip: {
            trigger:'axis',
            axisPointer:{
                type:'cross',
                lable:{
                    backgroundColor:'#6a7985'
                }
            }
           },
           grid:{
            left:'6%',
            riight:'4%',
            bottom:'6%',
            coontainLable:true
        },
            toolbox:{
                feature:{
                saveImage:{}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
            {
      name: 'Team 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: true,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: 'Team 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
    {
      name: 'Team 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220]
    },
    {
      name: 'Team 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 402, 231, 134, 190, 230, 120]
    },
    {
      name: ' 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: true,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 302, 181, 234, 210, 290, 150]
    }
            ]
        };
        option && myChart.setOption(option);
// first chart end.

// Second Chart
var chartDom2 = document.getElementById('barchart1');
var myChart2 = echarts.init(chartDom2);
var option2;

option2 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Email',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: 'series'
      },
      markLine: {
        lineStyle: {
          type: 'dashed'
        },
        data: [[{ type: 'min' }, { type: 'max' }]]
      }
    },
    {
      name: 'Baidu',
      type: 'bar',
      barWidth: 5,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120]
    },
    {
      name: 'Google',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 290, 230, 220]
    },
    {
      name: 'Bing',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [60, 72, 71, 74, 190, 130, 110]
    },
    {
      name: 'Others',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [62, 82, 91, 84, 109, 110, 120]
    }
  ]
};
option2 && myChart2.setOption(option2);
// second chart end

// Third Chart
var chartDom = document.getElementById('barchart3');
var myChart = echarts.init(chartDom);
var option;
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Affiliate Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
};
option && myChart.setOption(option);
// Third chart 

// four'th chart 
var chartDom = document.getElementById('barchart4');
var myChart = echarts.init(chartDom);
var option;

const builderJson = {
  all: 10887,
  charts: {
    map: 3237,
    lines: 2164,
    bar: 7561,
    line: 7778,
    pie: 7355,
    scatter: 2405,
    candlestick: 1842,
    radar: 2090,
    heatmap: 1762,
    treemap: 1593,
    graph: 2060,
    boxplot: 1537,
    parallel: 1908,
    gauge: 2107,
    funnel: 1692,
    sankey: 1568
  },
  components: {
    geo: 2788,
    title: 9575,
    legend: 9400,
    tooltip: 9466,
    grid: 9266,
    markPoint: 3419,
    markLine: 2984,
    timeline: 2739,
    dataZoom: 2744,
    visualMap: 2466,
    toolbox: 3034,
    polar: 1945
  },
  ie: 9743
};
const downloadJson = {
  'echarts.min.js': 17365,
  'echarts.simple.min.js': 4079,
  'echarts.common.min.js': 6929,
  'echarts.js': 14890
};
const themeJson = {
  'dark.js': 1594,
  'infographic.js': 925,
  'shine.js': 1608,
  'roma.js': 721,
  'macarons.js': 2179,
  'vintage.js': 1982
};
// const waterMarkText = 'Nandha';
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = canvas.height = 100;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.globalAlpha = 0.08;
ctx.font = '20px Microsoft Yahei';
ctx.translate(50, 50);
ctx.rotate(-Math.PI / 4);
// ctx.fillText(waterMarkText, 0, 0);
option = {
  backgroundColor: {
    type: 'pattern',
    image: canvas,
    repeat: 'repeat'
  },
  tooltip: {},
  title: [
    {
      text: 'Data Chart',
      subtext: '总计 ' + builderJson.all,
      left: '25%',
      textAlign: 'center'
    },
    {
      text: 'Data  Chart',
      subtext:
        '总计 ' +
        Object.keys(downloadJson).reduce(function (all, key) {
          return all + downloadJson[key];
        }, 0),
      left: '75%',
      textAlign: 'center'
    },
    {
      text: 'Data Chart',
      subtext:
        '总计 ' +
        Object.keys(themeJson).reduce(function (all, key) {
          return all + themeJson[key];
        }, 0),
      left: '75%',
      top: '50%',
      textAlign: 'center'
    }
  ],
  grid: [
    {
      top: 50,
      width: '50%',
      bottom: '45%',
      left: 10,
      containLabel: true
    },
    {
      top: '55%',
      width: '50%',
      bottom: 0,
      left: 10,
      containLabel: true
    }
  ],
  xAxis: [
    {
      type: 'value',
      max: builderJson.all,
      splitLine: {
        show: false
      }
    },
    {
      type: 'value',
      max: builderJson.all,
      gridIndex: 1,
      splitLine: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: Object.keys(builderJson.charts),
      axisLabel: {
        interval: 0,
        rotate: 30
      },
      splitLine: {
        show: false
      }
    },
    {
      gridIndex: 1,
      type: 'category',
      data: Object.keys(builderJson.components),
      axisLabel: {
        interval: 0,
        rotate: 30
      },
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      type: 'bar',
      stack: 'chart',
      z: 3,
      label: {
        position: 'right',
        show: true
      },
      data: Object.keys(builderJson.charts).map(function (key) {
        return builderJson.charts[key];
      })
    },
    {
      type: 'bar',
      stack: 'chart',
      silent: true,
      itemStyle: {
        color: '#eee'
      },
      data: Object.keys(builderJson.charts).map(function (key) {
        return builderJson.all - builderJson.charts[key];
      })
    },
    {
      type: 'bar',
      stack: 'component',
      xAxisIndex: 1,
      yAxisIndex: 1,
      z: 3,
      label: {
        position: 'right',
        show: true
      },
      data: Object.keys(builderJson.components).map(function (key) {
        return builderJson.components[key];
      })
    },
    {
      type: 'bar',
      stack: 'component',
      silent: true,
      xAxisIndex: 1,
      yAxisIndex: 1,
      itemStyle: {
        color: '#eee'
      },
      data: Object.keys(builderJson.components).map(function (key) {
        return builderJson.all - builderJson.components[key];
      })
    },
    {
      type: 'pie',
      radius: [0, '30%'],
      center: ['75%', '25%'],
      data: Object.keys(downloadJson).map(function (key) {
        return {
          name: key.replace('.js', ''),
          value: downloadJson[key]
        };
      })
    },
    {
      type: 'pie',
      radius: [0, '30%'],
      center: ['75%', '75%'],
      data: Object.keys(themeJson).map(function (key) {
        return {
          name: key.replace('.js', ''),
          value: themeJson[key]
        };
      })
    }
  ]
};
option && myChart.setOption(option);
// four'th Chart end 

// five'th chart 
var chartDom = document.getElementById('ch1');
var myChart = echarts.init(chartDom);
var option;
option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    data: [
      'Direct',
      'Marketing',
      'Search Engine',
      'Email',
      'Union Ads',
      'Video Ads',
      'Baidu',
      'Google',
      'Bing',
      'Others'
    ]
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],
      label: {
        position: 'inner',
        fontSize: 14
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1548, name: 'Search Engine' },
        { value: 775, name: 'Direct' },
        { value: 679, name: 'Marketing', selected: true }
      ]
    },
    {
      name: 'Access From',
      type: 'pie',
      radius: ['45%', '60%'],
      labelLine: {
        length: 30
      },
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      data: [
        { value: 1048, name: 'Baidu' },
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 251, name: 'Google' },
        { value: 234, name: 'Union Ads' },
        { value: 147, name: 'Bing' },
        { value: 135, name: 'Video Ads' },
        { value: 102, name: 'Others' }
      ]
    }
  ]
};
option && myChart.setOption(option);
// five'th chart 

// Sixth Chart
var chartDom6 = document.getElementById('ch2'); // Change variable name
var myChart6 = echarts.init(chartDom6); // Change variable name
var option6; // Change variable name

const upColor = '#ec0000';
const upBorderColor = '#8A0000';
const downColor = '#00da3c';
const downBorderColor = '#008F28';
const dataCount = 2e5;
const data = generateOHLC(dataCount);
option6 = {
  dataset: {
    source: data
  },
  title: {
    text: 'Data Amount: ' + echarts.format.addCommas(dataCount)
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line'
    }
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: false
      }
    }
  },
  grid: [
    {
      left: '10%',
      right: '10%',
      bottom: 200
    },
    {
      left: '10%',
      right: '10%',
      height: 80,
      bottom: 80
    }
  ],
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      // inverse: true,
      axisLine: { onZero: false },
      splitLine: { show: false },
      min: 'dataMin',
      max: 'dataMax'
    },
    {
      type: 'category',
      gridIndex: 1,
      boundaryGap: false,
      axisLine: { onZero: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      min: 'dataMin',
      max: 'dataMax'
    }
  ],
  yAxis: [
    {
      scale: true,
      splitArea: {
        show: true
      }
    },
    {
      scale: true,
      gridIndex: 1,
      splitNumber: 2,
      axisLabel: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false }
    }
  ],
  dataZoom: [
    {
      type: 'inside',
      xAxisIndex: [0, 1],
      start: 10,
      end: 100
    },
    {
      show: true,
      xAxisIndex: [0, 1],
      type: 'slider',
      bottom: 10,
      start: 10,
      end: 100
    }
  ],
  visualMap: {
    show: false,
    seriesIndex: 1,
    dimension: 6,
    pieces: [
      {
        value: 1,
        color: upColor
      },
      {
        value: -1,
        color: downColor
      }
    ]
  },
  series: [
    {
      type: 'candlestick',
      itemStyle: {
        color: upColor,
        color0: downColor,
        borderColor: upBorderColor,
        borderColor0: downBorderColor
      },
      encode: {
        x: 0,
        y: [1, 4, 3, 2]
      }
    },
    {
      name: 'Volumn',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      itemStyle: {
        color: '#7fbe9e'
      },
      large: true,
      encode: {
        x: 0,
        y: 5
      }
    }
  ]
};
function generateOHLC(count) {
  let data = [];
  let xValue = +new Date(2011, 0, 1);
  let minute = 60 * 1000;
  let baseValue = Math.random() * 12000;
  let boxVals = new Array(4);
  let dayRange = 12;
  for (let i = 0; i < count; i++) {
    baseValue = baseValue + Math.random() * 20 - 10;
    for (let j = 0; j < 4; j++) {
      boxVals[j] = (Math.random() - 0.5) * dayRange + baseValue;
    }
    boxVals.sort();
    let openIdx = Math.round(Math.random() * 3);
    let closeIdx = Math.round(Math.random() * 2);
    if (closeIdx === openIdx) {
      closeIdx++;
    }
    let volumn = boxVals[3] * (1000 + Math.random() * 500);
    // ['open', 'close', 'lowest', 'highest', 'volumn']
    // [1, 4, 3, 2]
    data[i] = [
      echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', (xValue += minute)),
      +boxVals[openIdx].toFixed(2),
      +boxVals[3].toFixed(2),
      +boxVals[0].toFixed(2),
      +boxVals[closeIdx].toFixed(2),
      +volumn.toFixed(0),
      getSign(data, i, +boxVals[openIdx], +boxVals[closeIdx], 4) // sign
    ];
  }
  return data;
  function getSign(data, dataIndex, openVal, closeVal, closeDimIdx) {
    var sign;
    if (openVal > closeVal) {
      sign = -1;
    } else if (openVal < closeVal) {
      sign = 1;
    } else {
      sign =
        dataIndex > 0
          ? // If close === open, compare with close of last record
            data[dataIndex - 1][closeDimIdx] <= closeVal
            ? 1
            : -1
          : // No record of previous, set to be positive
            1;
    }
    return sign;
  }
}
option6 && myChart6.setOption(option6);
// // six'th chart end

// Seventh Chart 
var chartDom7 = document.getElementById('ch3'); // Change variable name
var myChart7 = echarts.init(chartDom7); // Change variable name
var seventhOption; // Change variable name

seventhOption = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}'
      },
      data: [
        {
          value: 75,
          name: 'SCORE'
        }
      ]
    }
  ]
};
seventhOption && myChart7.setOption(seventhOption); // Set options for the seventh chart
// Seventh Chart end 
// Chart Script end


// Data Table script 
// first datatable 
// $(document)
//   .ready(function () {
//     $('#table_id')
//       .DataTable();
//   });


// const dataset = [
//     ["Harish", 34,123],
//     ["Sathish", 32,123],
//     ["Praveen", 23,123],
//     ["Nandha", 20,123],
// ];

// let table = new DataTable('#data', {
//     columns: [
//         { title: "name" },
//         { title: "age" },
//         {title:"num"},
//     ],
//     data: dataset
// })
// first datatable end 

// second dattable 

const tab = [
            ["John Doe", 30],
            ["Jane Smith", 25],
            ["Mike Johnson", 35],
            ["Emily Brown", 28],
];

// new DataTable('#data_tb',{
//   columns:[
//     {title:'name'},
//     {title:'age'},
//   ],
//   data:tab
// })

$(document).ready(function(){
  $('#data_tb').DataTable();
});
// second chart end 

// Third chart 
const fakeDataset = [
  ["Alice Johnson","canada", 29],
  ["Bob Williams","india", 31],
  ["Carol Davis","Isrel", 28],
  ["David Jones","america", 34],
  ["Eva Martinez","Isrel", 25],
  ["Frank Miller","china", 40],
  ["Grace Anderson","Isrel", 22],
  ["Hank White","canada", 37],
  ["Isabel Lee","Isrel", 32],
  ["Jack Brown","america", 27],
  ["David Jones","canada", 34],
  ["Eva Martinez","Isrel", 25],
  ["Frank Miller","Isrel", 40],
  ["Grace Anderson","US", 22],
  ["Hank White","india", 37],
  ["Isabel Lee","canada", 32],
  ["Jack Brown","Isrel", 27],
  ["David Jones","US", 34],
  ["Eva Martinez","canada", 25],
  ["Frank Miller","Isrel" ,40],
  ["Grace Anderson","China", 22],
  ["Hank White","canada", 37],
  ["Isabel Lee","Isrel" ,32],
  ["Jack Brown","canada", 27],
  ["David Jones","Isrel" ,34],
  ["Eva Martinez","Isrel" ,25],
  ["Frank Miller","canada", 40],
  ["Grace Anderson","Isrel", 22],
  ["Hank White","india", 37],
  ["Isabel Lee", "india",32],
  ["Jack Brown","india", 27],
  ["David Jones","Canada", 34],
  ["Eva Martinez","China", 25],
  ["Frank Miller","india", 40],
  ["Grace Anderson","china", 22],
  ["Hank White","india", 37],
  ["Isabel Lee","india", 32],
  ["David Jones", "india",34],
  ["Eva Martinez","america", 25],
  ["Frank Miller","america", 40],
  ["Grace Anderson","China", 22],
  ["Hank White", "US",37],
  ["Isabel Lee","North America", 32],
  ["Jack Brown","North America", 27],
  ["Jack Brown","South Koria", 27]
];

new DataTable('#fake',{
  columns:[
    {title:'Name'},
    {title:'Country'},
    {title:'age'}
  ],
  data:fakeDataset
})

$(document).ready(function(){
  $('#fake').DataTable();
});

// Third Table 
$(document).ready(function() { 
  $('#data_table').DataTable(); 
} ); 
$("#data_table_length").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  }})
  // Third Table 

  // Fourth Table
//   const data_table4 =[
//     ['Sasuri','Done','Active'],
//     ['EEdan','Done','Active'],
//     ['Kasume','Done','Pending'],
//     ['Itachi','Done','Active'],
//     ['Obito','Done','Inactive'],
//     ['Tobi','Done','Pending'],
//     ['Daidara','Done','Active'],
//     ['Zabusa','Done','Inactive']
//   ] 
  
// new DataTable('#ta4',{
//   columns:[
//     {title:'Name'},
//     {title:'Payment'},
//     {title:'Subscription'}
//   ],
//   data:data_table4
// })

// $(document).ready(function(){
//   $('#ta4').DataTable();
// });