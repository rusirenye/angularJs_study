$(document).ready(function () {
    var params = {
        name: '业务指标',
        type: 'gauge',
        max: 100,
        min: 0,
        value: 75
    };
    var par = calculateOptio(params);
    var str = JSON.stringify(par);
    console.log(str);
    var echart_instance = echarts.init($('#p1').get(0));
    echart_instance.setOption(calculateOptio(params));


    function calculateOptio(params) {
        var offsetAngle = -35;
        var totalAngle = 250;
        var split = 75;
        var series = [];
        var asisWidth = 11;
        var fontSize = 30;

        // Defaults
        params = $.extend({
            min: 0,
            max: 100,
            value: 0,
            name: 'DOWNLOAD SPEED',
            type: 'gauge',
            data: [{
                value: 0,
                name: ''
            }]
        }, params);

        var startAngle = totalAngle + offsetAngle;
        var endAngle = startAngle - Math.floor((parseInt(params.value, 10) / (params.max - params.min)) * totalAngle);

        series.push({
            name: params.name,
            type: params.type,
            startAngle: startAngle,
            endAngle: endAngle,
            splitNumber: 1,
            // 轴线样式
            axisLine: {
                show: false,
                lineStyle: {
                    width: asisWidth,
                    opacity: 0
                }
            },
            // 分段样式
            splitLine: {show: false},
            // 刻度样式
            axisTick: {
                length: 30,
                // splitNumber: Math.floor((params.value / (params.max - params.min)) * split),
                splitNumber: 1000,
                lineStyle: {
                    color: {
                        image: $('img')[0],
                        repeat: 'no-repeat'
                    },
                    width: 5
                }
            },
            axisLabel: {show: false},
            pointer: {show: false},
            // 指针样式
            itemStyle: {},
            title: {
                fontSize: 8,
                offsetCenter: [0, '-35%'],
                color: '#999'
            },
            detail: {
                color: '#36444b',
                fontSize: fontSize,
                offsetCenter: [0, '20%'],
                formatter: function (val) {
                    return val.toFixed(2) + '\n{unit|Mbps}'
                },
                rich: {
                    unit: {
                        fontSize: 10,
                        color: '#999',
                        lineHeight: 30
                    }
                }
            },
            data: [{
                value: params.value,
                name: params.name
            }]
        });
        series.push({
            name: '',
            type: params.type,
            startAngle: endAngle,
            endAngle: offsetAngle,
            splitNumber: 1,
            axisLine: {
                show: false,
                lineStyle: {
                    width: asisWidth,
                    opacity: 0
                }
            },
            splitLine: {show: false},
            axisTick: {
                length: 30,
                splitNumber: 1000,
                lineStyle: {
                    color: '#998c6c',
                    width: 5
                }
            },
            axisLabel: {show: false},
            pointer: {show: false},
            // 指针样式
            itemStyle: {},
            title: {show: false},
            detail: {show: false}
        });
        var option = {
            series: series
        }

        return option;
    }

    var p2_option = {
        legend: {
            show: false
        },
        backgroundColor: 'rgba(0, 0, 0, 0)',
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            show: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
        },
        yAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },

            data: [
                {
                    value: '20180906',
                    textStyle: {
                        color: 'white'
                    }
                }
                , {
                    value: '20170906',
                    textStyle: {
                        color: 'white'
                    }
                }
            ]
        },
        series: [
            {
                name: '直接访问',
                type: 'bar',
                stack: '总量',
                color: 'blue',
                barWidth: 50,
                label: {
                    show: true,
                    position: 'top',
                    distance: 5,
                    formatter: '{c}%'
                },
                data: ['80', '10'],
                markLine: {}
            },
            {
                name: '邮件营销',
                type: 'bar',
                color: 'red',
                stack: '总量',
                label: {
                    show: true,
                    position: 'top',
                    distance: 15,
                    formatter: '{c}%'
                },
                data: ['10', '10']
            },
            {
                name: '邮',
                type: 'bar',
                color: 'green',
                stack: '总量',
                label: {
                    show: true,
                    position: 'top',
                    distance: 25,
                    formatter: '{c}%'
                },
                data: ['10', '80']
            }
        ]
    };
    var p3_option = {
        title: {
            text: '堆叠区域图'
        },

        backgroundColor: 'rgba(0, 0, 0, 0)',


        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            nameTextStyle: {
                color: 'red'
            },
            data: {
                textStyle: {
                    color: 'red'
                }
            }
        }],
        series: [{
            name: '邮件营销',
            type: 'line',
            smooth: true,
            stack: '总量',
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'yellow' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'red' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'blue' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                opacity: 0.2
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        }]
    };
    var ep2 = echarts.init($('#p2').get(0));
    ep2.setOption(p2_option);

    var ep3 = echarts.init($('#p3').get(0));
    ep3.setOption(p3_option);

    function p4Init() {
        var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
        var data = [220, 182, 191, -234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        var yMax = 500;
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }

        var option = {
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: {color: 'rgba(0,0,0,0.05)'}
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#93adf7'},
                                    {offset: 0.5, color: '#2378f7'},
                                    {offset: 1, color: '#0716f6'}
                                ]
                            )
                        },
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 1, color: '#93adf7'},
                                    {offset: 0.5, color: '#2378f7'},
                                    {offset: 0, color: '#0716f6'}
                                ]
                            )
                        }
                    },
                    data: data
                }
            ]
        };

// Enable data zoom when user click bar.

        var ep4 = echarts.init($('#p4').get(0));
        ep4.setOption(option);
    }

    p4Init();

    function p5Init() {

        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            calculable: true,
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['10%', '30%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true
                            },
                            labelLine: {
                                show: true
                            }
                        },
                        emphasis: {
                            label: {
                                show: true,
                                position: 'center',
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        }
                    },
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                }
            ]
        };

        var eInstance = echarts.init($('#p5').get(0));
        eInstance.setOption(option);

    }

    p5Init();

    function p6Init() {
        var option = {
            title: {
                text: '罗纳尔多 vs 舍普琴科',
            },
            legend: {
                x: 'center',
                data: ['罗纳尔多' ]
            },
            calculable: true,
            polar: [
                {
                    indicator: [
                        {text: '进攻', max: 100},
                        {text: '防守', max: 100},
                        {text: '体能', max: 100},
                        {text: '速度', max: 100},
                        {text: '力量', max: 100},
                        {text: '技巧', max: 100}
                    ],
                    radius: 80
                }
            ],
            series: [
                {
                    name: '完全实况球员数据',
                    type: 'radar',
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default'
                            }
                        }
                    },
                    data: [
                        {
                            value: [97, 42, 88, 94, 90, 86],
                            name: '舍普琴科'
                        }
                    ]
                }
            ]
        };
        var eInstance = echarts.init($('#p6').get(0));
        eInstance.setOption(option);

    }
    p6Init();
});