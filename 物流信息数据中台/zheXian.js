// 获取 Canvas 元素和下拉框元素
var canvas = document.getElementById('myChart');
canvas.width = 1000;
canvas.height = 600;

// 其他代码...
var select = document.getElementById('mySelect');

// 定义数据集
var dataSets = {
    data1: {
        label1: '进货',
        borderColor1: '#FF6384',
        data1: [30, 10, 20, 25, 35, 40],
        label2: '出货',
        borderColor2: '#36A2EB',
        data2: [10, 15, 20, 30, 25, 20]
    },
    data2: {
        label1: '进货',
        borderColor1: '#FFCE56',
        data1: [20, 25, 30, 15, 10, 5],
        label2: '出货',
        borderColor2: '#4BC0C0',
        data2: [10, 20, 25, 30, 20, 10]
    },
    data3: {
        label1: '进货',
        borderColor1: '#FF9F40',
        data1: [15, 25, 20, 10, 30, 40],
        label2: '出货',
        borderColor2: '#9966FF',
        data2: [10, 30, 20, 5, 15, 25]
    },
    data4: {
        label1: '进货',
        borderColor1: '#FFCE56',
        data1: [20, 25, 30, 15, 40, 20],
        label2: '出货',
        borderColor2: '#4BC0C0',
        data2: [14, 16, 26, 30, 20, 10]
    },
    data5: {
        label1: '进货',
        borderColor1: '#FF9F40',
        data1: [15, 30, 25, 10, 22, 40],
        label2: '出货',
        borderColor2: '#9966FF',
        data2: [10, 15, 26, 5, 22, 35]
    }
};

// 创建初始折线图
var myChart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
        datasets: [
            {
                label: dataSets.data1.label1,
                borderColor: dataSets.data1.borderColor1,
                data: dataSets.data1.data1
            },
            {
                label: dataSets.data1.label2,
                borderColor: dataSets.data1.borderColor2,
                data: dataSets.data1.data2
            }
        ]
    },
    options: {
        responsive: false,
        maintainAspectRatio:false,
        title: {
            display: true,
            text: '港口不同货物的吞吐量趋势'
        },
        legend: {
            position: 'top',
            labels: {
                fontSize: 16
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// 监听下拉框的选择事件
select.addEventListener('change', function () {
    var value = select.value;
    myChart.data.datasets[0].label = dataSets[value].label1;
    myChart.data.datasets[0].borderColor = dataSets[value].borderColor1;
    myChart.data.datasets[0].data = dataSets[value].data1;
    myChart.data.datasets[1].label = dataSets[value].label2;
    myChart.data.datasets[1].borderColor = dataSets[value].borderColor2;
    myChart.data.datasets[1].data = dataSets[value].data2;
    myChart.update();
});