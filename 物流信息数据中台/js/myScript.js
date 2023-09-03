// 获取canvas元素和下拉框元素
var canvas = document.getElementById("myCanvas");
var select = document.getElementById("mySelect");

// 定义数据
var chartData = {
    labels: ["1月", "2月", "3月", "4月", "5月"],
    data1: [10, 20, 30, 40, 50],
    data2: [50, 40, 30, 20, 10]
};

// 创建柱形图
var ctx = canvas.getContext("2d");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: chartData.labels,
        datasets: [{
            label: '数据集1',
            data: chartData.data1,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// 添加下拉框事件监听器
select.addEventListener("change", function() {
    // 获取当前选项的值
    var value = this.value;

    // 更新数据并重绘图表
    myChart.data.datasets[0].data = chartData[value];
    myChart.data.datasets[0].label = "数据集" + (value === "data1" ? "1" : "2");
    myChart.update();
});