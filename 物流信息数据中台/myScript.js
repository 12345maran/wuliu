// 获取canvas元素和下拉框元素
var canvas = document.getElementById("myChart");
canvas.width = 1000;
canvas.height = 600;
var select = document.getElementById("mySelect");

// 定义数据集
var dataSets = {
    data1: {
        label: "马鞍山港",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF1493","#9932CC"],
        data: [20, 30, 15, 25, 10]
    },
    data2: {
        label: "连云港",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF1493","#9932CC"],
        data: [15, 35, 20, 10 ,20]
    },
    data3: {
        label: "南通港",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#FF1493","#9932CC"],
        data: [45, 5, 18, 22, 10]
    }
};

// 创建饼状图
var myChart = new Chart(canvas, {
    type: "pie",
    data: {
        labels: ["大豆奶", "铁矿", "大豆粉","三钙","燕麦"],
        datasets: [dataSets.data1]
    },
    options: {
        responsive: false,
        maintainAspectRatio:false,
        title: {
            display: true,
            text: "不同港口的货物占比 "
        }
    }
});

// 添加下拉框事件监听器
select.addEventListener("change", function() {
    // 获取当前选项的值
    var value = this.value;

    // 更新数据集并重绘图表
    myChart.data.datasets = [dataSets[value]];
    myChart.data.datasets[0].label = dataSets[value].label;
    myChart.update();
});