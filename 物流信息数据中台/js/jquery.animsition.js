/**默认显示几条公司数据的数组
 * @param {Object} companys  公司数组
 */
function defaultDisplay(companys) {
  //声明前两个公司之外的公司数组
  var selectcompany = [];
  //取出來两個之後的公司名字
  for (var i = 0; i < companys.length; i++) {
    if (companys.length >= 3) {
      if (i > 2) {
        selectcompany.push(companys[i]);
      }
    } else if (i > 1) {
      selectcompany.push(companys[i]);
    }
  }
  //讓他們的值都為false用來填充legend中的數據
  var selectcompany1 = {};
  for (let i = 0; i < selectcompany.length; i++) {
    selectcompany1[selectcompany[i]] = false;
  }
  return selectcompany1;
}

/**
 * @param {Object} jValue1 放到X轴的时间数组
 * @param {Object} selectCompanyRateOperation 默认显示公司条数的数组
 * @param {Object} series_content 填充series的数组
 */
function optionT(jValue1, selectCompanyRateOperation, series_content) {
  var option = {
    title: [{
      text: "产量",
      left: "23%"
    },
      {
        text: "仓储",
        left: "23%",
        top: "51%"
      },
      {
        text: "开工率",
        top: "51%",
        right: "23%"
      },

    ],
    grid: [{
      x: '7%',
      y: '7%',
      width: '38%',
      height: '38%'
    },
      {
        x2: '7%',
        y: '58%',
        width: '38%',
        height: '38%'
      },
      {
        x: '7%',
        y2: '4%',
        width: '38%',
        height: '38%'
      },
    ],
    xAxis: [{
      gridIndex: 0,
      type: 'category',
      data: jValue1
    },
      {
        gridIndex: 1,
        type: 'category',
        offset: -115,
        data: jValue1
      },
      {
        gridIndex: 2,
        type: 'category',
        data: jValue1
      },
    ],
    legend: {
      type: "scroll",
      orient: "vertical",
      right: "20%",
      top: "6%",
      height:"42%",
      selected: selectCompanyRateOperation
    },
    //工具箱，每个图表最多仅有一个工具箱
    toolbox: {
      //显示策略，可选为：true（显示） | false（隐藏），默认值为false
      show: true,
      //启用功能，目前支持feature，工具箱自定义功能回调处理
      feature: {
        //辅助线标志
        mark: {
          show: true
        },
        //dataZoom，框选区域缩放，自动与存在的dataZoom控件同步，分别是启用，缩放后退
        dataZoom: {
          show: true,
          title: {
            //鼠标移入显示的标题
            dataZoom: "区域缩放",
            dataZoomReset: "区域缩放后退"
          }
        },
        //数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能
        dataView: {
          show: true,
          readOnly: true
        },
        //magicType，动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换
        magicType: {
          show: true,
          type: ['line', 'bar', 'stack', 'tiled']
        },
        //restore，还原，复位原始图表
        restore: {
          show: true
        },
        //saveAsImage，保存图片（IE8-不支持）,图片类型默认为'png'
        saveAsImage: {
          show: true
        }
      }
    },
    tooltip: {
      trigger: 'axis',
      // formatter:function(params){
      //     return
      // }

    },
    dataZoom: [{
      xAxisIndex: 0,
      type: 'slider',
      show: true,
      height: 20,
      width: "25%",
      left: "13%",
      top: "42%",
      start: 0,
      end: 50,
      textStyle: {
        color: '#FF0000',
        fontSize: 11,
      }
    },
      {
        xAxisIndex: 1,
        type: 'slider',
        show: true,
        height: 20,
        right: '14%',
        width: "25%",
        start: 0,
        end: 50,
        textStyle: {
          color: '#FF0000',
          fontSize: 11,
        }
      },
      {
        xAxisIndex: 2,
        type: 'slider',
        show: true,
        width: "25%",
        left: "13%",
        height: 20,
        start: 0,
        end: 50,
        textStyle: {
          color: '#FF0000',
          fontSize: 11,
        }
      },
    ],
    yAxis: [{
      gridIndex: 0,
      type: 'value',
      name: "万吨",

    },
      {
        gridIndex: 1,
        type: 'value',
        axisLabel: {
          formatter: "{value} %"
        },

      },
      {
        gridIndex: 2,
        type: 'value',
        name: "万吨"
      },
    ],
    series: series_content
  }
  return option;

}

/**封装option对象
 * @param {Object} companys 需要填充的legend中的公司数组
 * @param {Object} selectcompany1 需要选定默认显示几条公司的数组
 * @param {Object} jValue1 需要放在X轴的时间数组
 * @param {Object} series_content 需要放在series中的json对象
 */
function optionR(companys, selectcompany1, jValue1, series_content) {
  var option = {
    //标题名字
    title: {
      text: "价格展示"
    },
    //图例展示,数据为legendData,滚轮形式,垂直,位置
    legend: {
      data: companys,
      type: "scroll",
      orient: "vertical",
      right: 20,
      top: 40,
      bottom: 20,
      //填入數據
      selected: selectcompany1
    },
    //坐标轴触发
    tooltip: {
      trigger: 'axis'
    },
    //工具箱，每个图表最多仅有一个工具箱
    toolbox: {
      //显示策略，可选为：true（显示） | false（隐藏），默认值为false
      show: true,
      //启用功能，目前支持feature，工具箱自定义功能回调处理
      feature: {
        //辅助线标志
        mark: {
          show: true
        },
        //dataZoom，框选区域缩放，自动与存在的dataZoom控件同步，分别是启用，缩放后退
        dataZoom: {
          show: true,
          title: {
            //鼠标移入显示的标题
            dataZoom: "区域缩放",
            dataZoomReset: "区域缩放后退"
          }
        },
        //数据视图，打开数据视图，可设置更多属性,readOnly 默认数据视图为只读(即值为true)，可指定readOnly为false打开编辑功能
        dataView: {
          show: true,
          readOnly: true
        },
        //magicType，动态类型切换，支持直角系下的折线图、柱状图、堆积、平铺转换
        magicType: {
          show: true,
          type: ['line', 'bar', 'stack', 'tiled']
        },
        //restore，还原，复位原始图表
        restore: {
          show: true
        },
        //saveAsImage，保存图片（IE8-不支持）,图片类型默认为'png'
        saveAsImage: {
          show: true
        }
      }
    },
    // tooltip: {
    //           //数据触发
    //         trigger: "axis",
    //         formatter: "{a} <br/>{b} : {c} ({d}%)",
    //         axisPointer: {
    //                     //坐标轴指示器，坐标轴触发有效
    //                     type: "cross", //默认为line，line直线，cross十字准星，shadow阴影
    //                     label: {
    //                       backgroundColor: "#6a7985"
    //                     }
    //                   }
    // },
    xAxis: {
      type: 'category',
      //两侧是否留白
      boundaryGap: false,
      x: "center",
      y: "top",
      // gridIndex: 0,
      // nameGap: 5,
      data: jValue1
    },
    yAxis: {
      //当为类目轴的时候,会是一条竖直的线,这个地方应该用value类型
      // type: 'category',
      // data: resPrice1,
      type: 'value',
      gridIndex: 0
    },
    //下面的滑动的轴,可以查看时间区间
    dataZoom: [{
      type: 'slider',
      startValue: 1,
      endValue: 2,
      show: true,
      height: 20,
      left: '20%',
      right: '40%',
      bottom: '2%',
      start: 50,
      end: 100,
      textStyle: {
        color: '#d4ffff',
        fontSize: 11,
      },
    }, {
      type: 'inside'
    }],
    grid: {
      top: '6%', //图距离父容器div顶端的距离
      left: '2%', //图距离父容器div左端的距离
      right: '25%', //图距离父容器div右端的距离
      bottom: '0%', //图距离父容器div底端的距离
      containLabel: true //grid 区域是否包含坐标轴的刻度标签
    },
    series: series_content
  };
  return option;
}

/**一维字符串类型数组转化为int或者float类型数组
 * @param {Object} price 一维数组，里面是字符串类型数字
 */

function ChangeCommasOne(price){
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  //循环每个数组下标里面数据的长度
  for (var i = 0; i < price.length; i++) {
    //对里面每一个值进行判断，当解析为整数类型和浮点型给其相应的值
    if (regPos.test(price[i]) || regNeg.test(price[i])) {
      price[i] = parseFloat(price[i]);
    } else {
      price[i] = parseInt(price[i]);
    }
  }
  return price;
}


/**
 * 改后的全部的价格数组,逗号改成0/字符串数组改为int或者float类型,二维数组
 * @param todayPrice 得到全部的公司数据(字符串类型),数组里面长度和接口相应数据长度一致，里面含有null值
 */
function ChangeCommas(todayPrice) {
  // // 声明所有的价格数组(数字类型)
  // var sPrice = [];
  // //声明去重后的价格数组(数字类型)
  // var resPrice = [];
  //声明数组,需要对之前的数组进行处理
  var twoPrice = new Array();
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  //循环价格数组的长度
  for (var j = 0; j < todayPrice.length; j++) {
    //console.log(todayPrice[j].length);
    //把每个价格下标里面的数组new一下
    twoPrice[j] = new Array();
    //循环每个数组下标里面数据的长度
    for (var i = 0; i < todayPrice[j].length; i++) {
      //把下标所有里面的数组转为int类型赋值给同等级的新数组里面
      //如果放在if判断里面nan会赋值不过去,当后面为null值的时候,后面null值不能被0替代
      //对里面每一个值进行判断，当解析为整数类型和浮点型给其相应的值
      if (regPos.test(twoPrice[j][i]) || regNeg.test(twoPrice[j][i])) {
        twoPrice[j][i] = parseFloat(todayPrice[j][i]);
        //对下标数组里面的数据内容进行判断,转为int数据类型
        // if (!isNaN(parseInt(todayPrice[j][i]))) { //判断变量是否等于NaN
        //     //当不为空的时候吧转为int类型的数据填入到所有的价格数组里面(int类型)
        //     sPrice.push(parseInt(todayPrice[j][i]));
        // }
      } else {
        twoPrice[j][i] = parseInt(todayPrice[j][i]);
      }

    }
  }
  //当data数据里面有逗号的时候,系统会判定该字符串不是合格的字符串,不能转换为json对象
  //循环需要填入series中data数组的长度
  for (var i = 0; i < twoPrice.length; i++) {
    //循环每个数组下标里面数据的长度
    for (var j = 0; j < twoPrice[i].length; j++) {
      //当下标数组里面的某条数据为空或者不为数字的时候,把他改成0,不能用逗号
      if (twoPrice[i][j] == null || isNaN(twoPrice[i][j])) {
        twoPrice[i][j] = 0;
      }
    }
  }
  //改后的全部的价格数组,逗号已经改成0了
  //console.log(twoPrice)
  //所有的价格,去空之后的数组
  // resPrice = delDuplicateArrayItem(sPrice);
  // console.log(sPrice);
  //排序后的价格数组(去重)(直接放在Y轴)
  // var resPrice1 = resPrice.sort();
  //console.log(resPrice1);
  return twoPrice;
}

/**拼接下拉框选中时间后重新填入的饼图的series的内容
 * @param {Object} inKou 只一个数据 进口数量
 * @param {Object} outKou 只一个数据  出口数量
 */

function splicingSeriesPieTwo(inKou,outKou) {
  var series_content = [];
  var jsonStr;
  jsonStr = "{" +"type" + ":" + "'pie'" + ","  +"data" + ":" + "["+ "{"+"value"+":"+ inKou +
      ","+"name"+":"+"'"+"进口量"+"'"+"}"+","    + "{"+"value"+":"+ outKou +
      ","+"name"+":"+"'"+"出口量"+"'"+"}"+    "]"+ "}"; //对series的内容进行拼接
  series_content.push(eval('(' + jsonStr + ')'))
  return series_content;
}

/**拼接饼图series内容
 * @param {Object} date 时间数组
 * @param {Object} inKou 进口数量数据
 * @param {Object} outKou 出口数量数组
 */

function splicingSeriesPie(date,inKou,outKou) {
  var series_content = [];
  var jsonStr;
  var jsonStr1=[];
  var jsonStr2=[];
  //只取其中一个数据进行拼接
  for (var h = 0; h < date.length; h++) {
    if(h = date.length-1){
      jsonStr1.push(inKou[h]);
    }
  }
  // console.log(jsonStr1)
  for (var h = 0; h < date.length; h++) {
    if(h = date.length-1){
      jsonStr2.push(outKou[h]);
    }
  }
  // console.log(jsonStr2)
  jsonStr = "{" +"type" + ":" + "'pie'" + ","  +"data" + ":" + "["+ "{"+"value"+":"+ jsonStr1 +
      ","+"name"+":"+"'"+"进口量"+"'"+"}"+","    + "{"+"value"+":"+ jsonStr2 +
      ","+"name"+":"+"'"+"出口量"+"'"+"}"+    "]"+ "}"; //对series的内容进行拼接
  series_content.push(eval('(' + jsonStr + ')'))
  return series_content;
}


/**拼接series内容，里面为两个对象，一个进口，一个出口，里面data数据长度不固定，但是就两个对象
 * 填充数据例如：{name:"inKou",type:'bar',data:[73624.15,103135.73,8145.36]}，{name:"outKou",type:'bar',data:[4093.38,3845.58,3497.7]}
 * @param {Object} date 时间或者对象个数
 * @param {Object} inKou 进口数据 为一维数组
 * @param {Object} outKou 出口数据  为二维数组
 */
function splicingSeriesTwo(date,inKou,outKou) {
  var series_content = [];
  var jsonStr;
  var jsonStr1=[];
  var jsonStr2=[];
  var jsonStr3;
  for (var h = 0; h < date.length; h++) {
    jsonStr1.push(inKou[h]);
  }
  jsonStr = "{" + "name" + ":" + "\"进口量\"" + "," + "type" + ":" + "'bar'" + "," +
      "data" + ":" + "["+ jsonStr1 + "]"+ "}"; //对series的内容进行拼接
  series_content.push(eval('(' + jsonStr + ')'))

  for (var h = 0; h < date.length; h++) {
    jsonStr2.push(outKou[h]);
  }
  jsonStr3 = "{" + "name" + ":" + "\"出口量\"" + "," + "type" + ":" + "'bar'" + "," +
      "data" + ":" + "["+ jsonStr2 + "]"+ "}"; //对series的内容进行拼接
  series_content.push(eval('(' + jsonStr3 + ')'))

  return series_content;
}


/**拼接series中的内容//line
 * @companys 公司名字，去重以后，这个是可以直接放在图表的legend图例中的变量
 * @endDatePriceCompany 一个最终的价格数组，前面为空字符串,后面为empty空，长度和X轴时间轴一致
 */
function splicingSeries(companys, endDatePriceCompany) {
  var series_content = [];
  var jsonStr;
  for (var h = 0; h < companys.length; h++) {
    if (companys[h] != null) {
      //格式一定要写对,比如:{"name":"公司"，"data":[1,2,3],"type":"line"}
      //                                jsonStr = "{\"name\":" + "\"" + companys[h] + "\"" + "," + "\"type\":" + "\"line" + "\"" + "," +
      //                                    "\"data\":[" + endDatePriceCompany[h] + "]}"; //对series的内容进行拼接
      jsonStr = "{" + "name" + ":" + "'" + companys[h] + "'" + "," + "type" + ":" + "'line'" + "," +
          "data" + ":" + "[" + endDatePriceCompany[h] + "]" + "}"; //对series的内容进行拼接

      //把拼接的内容string类型转为json对象类型
      //这个方法拼接不是合格的字符串转化不了为json对象
      //                                series_content.push(JSON.parse(jsonStr))
      //用eval方法进行拼接
      series_content.push(eval('(' + jsonStr + ')'))
    }
  }
  return series_content;
}

/**对于其多图表的series进行拼接
 * @param {Object} companys  公司名称数组
 * @param {Object} endyieldCompany 最终的产量数组
 * @param {Object} endrateOperationCompany 最终的开工率数组
 * @param {Object} endstorageWithCompanyCompany 最终的仓储数组
 */
function seriesThree(companys, endyieldCompany, endrateOperationCompany, endstorageWithCompanyCompany) {
  var series_content = [];
  var jsonStr;
  var jsonStr1;
  var jsonStr2;
  var jsonStr3;
  for (let i = 0; i < companys.length; i++) {
    if (companys[i] != null) {
      jsonStr = "{" + "name" + ":" + "'" + companys[i] + "'" + "," + "type" + ":" + "'bar'" + "," + "xAxisIndex" + ":" +
          "0" + "," + "yAxisIndex" + ":" + "0" + "," +
          "data" + ":" + "[" + endyieldCompany[i] + "]" + "}";
    }
    series_content.push(eval('(' + jsonStr + ')'))
  }
  for (let i = 0; i < companys.length; i++) {
    if (companys[i] != null) {
      jsonStr1 = "{" + "name" + ":" + "'" + companys[i] + "'" + "," + "type" + ":" + "'line'" + "," + "xAxisIndex" + ":" +
          "1" + "," + "yAxisIndex" + ":" + "1" + "," +
          "data" + ":" + "[" + endrateOperationCompany[i] + "]" + "}";
    }
    series_content.push(eval('(' + jsonStr1 + ')'))
  }
  for (let i = 0; i < companys.length; i++) {
    if (companys[i] != null) {
      jsonStr2 = "{" + "name" + ":" + "'" + companys[i] + "'" + "," + "type" + ":" + "'line'" + "," + "xAxisIndex" + ":" +
          "2" + "," + "yAxisIndex" + ":" + "2" + "," +
          "data" + ":" + "[" + endstorageWithCompanyCompany[i] + "]" + "}";
    }
    series_content.push(eval('(' + jsonStr2 + ')'))
  }
  return series_content;
}






/**
 * 返回大的数据数组，里面有公司数量的数组，长度和X的时间轴长度一样，前面为空字符串,后面为empty空
 * @param {Object} jValue2 所有的公司时间，里面有相应公司的时间数组，个数和其相应的数据数量一致 大数组里面有公司数量的数组
 * @param {Object} jValue1 所有的时间，一个时间数组，需要放在X轴的数据 ，一个大的时间数组，排过序的
 * @param {Object} index      下标数组，公司里面的数据所在对应X轴的下标,公司数量的数组里面有相应数据对应的下标
 * @param {Object} twoPrice    接口数据处理过后的数组，里面的null值已经替换为0，大数组里面包括公司数量的数组，里面的长度和接口相应公司的数据长度一致
 */
function getEndPriceArray(jValue2, jValue1, index, twoPrice) {
  //声明一个最终的价格数组
  var endDatePriceCompany = new Array();
  //循环公司下标时间数量
  for (var i = 0; i < jValue2.length; i++) {
    //衍生一个二维数组长度为时间轴的长度
    endDatePriceCompany[i] = new Array(jValue1.length);
    //循环公司下标中的时间数量
    for (var m = 0; m < jValue2[i].length; m++) {
      //循环时间轴的长度
      for (var j = 0; j < jValue1.length; j++) { //25
        //当公司下标数组中的值等于时间轴该数据的位置的时候,把对应的值赋值给他
        if (index[i][m] == j) {
          endDatePriceCompany[i][j] = twoPrice[i][m];
        }
      }
    }
    //console.log(typeof endDatePriceCompany[i][1])
    //循环时间轴的长度
    for (var n = 0; n < jValue1.length; n++) { //25
      //判断最终的价格数组中的数据里面的empty(undefined),并将其赋值为空字符串
      //并且在判断里面加上最大值下标,当小于等于它的时候,
      if (typeof(endDatePriceCompany[i][n]) == "undefined" && n <= index[i][index[i].length - 1]) {
        endDatePriceCompany[i][n] = '';
      }
      //当数据等于0,而且不在第一条的时候,让他延续上一天的数据
      else if (endDatePriceCompany[i][n] == '' && n > 0) {
        endDatePriceCompany[i][n] = endDatePriceCompany[i][n - 1];
      }
      //删除所在数据在时间数组中长度(需要加一),的后面的数据0
      //用eval方法就不用这行了
      // endDatePriceCompany[i].splice(index[i][index[i].length-1]+1,endDatePriceCompany[i].length-1);
    }

  }
  //记得要return
  return endDatePriceCompany;
}

/**
 * 返回公司里面的数据所在对应X轴的下标,公司数量的数组里面有相应数据对应的下标
 * @jValue2 时间字符串对其月份和天格式化(加0)的数组
 * @jValue1 所有的时间，一个时间数组，需要放在X轴的数据
 */
function findIndex(jValue2, jValue1) {
  //声明一个下标数组
  var index = new Array();
  //循环公司长度(时间数组下标长度)
  for (var i = 0; i < jValue2.length; i++) {
    //衍生一个二维数组
    index[i] = new Array();
    //循环公司下标时间里面的长度
    for (var m = 0; m < jValue2[i].length; m++) {
      //循环时间轴的长度
      for (var j = 0; j < jValue1.length; j++) {
        //判断公司下标时间和时间轴相等的时候push下标到新定义的数组index[i]
        if (jValue2[i][m] == jValue1[j]) {
          index[i].push(j);
        }
      }
    }
  }
  return index;
}



/**
 * @param {Object} str 傳入參數格式为 2018-8-7  or  2018-08-07
 * 调用方法后会变成 2018-08-07 格式
 */
function changeSting(str) {
  //通过字符串-进行分割
  var arr = str.split("-");
  //当第二个数字长度小于2，也就是月份不带0的时候
  if (arr[1].length < 2) {
    arr[1] = "0" + arr[1];
  }
  //当第二个数字长度小于2，也就是天不带0的时候
  if (arr[2].length < 2) {
    arr[2] = "0" + arr[2];
  }
  //再对时间字符串进行拼接
  return arr[0] + "-" + arr[1] + "-" + arr[2];
}


/**
 * @param {Object} time
 * @param {Object} format
 * 例如：jValue1[i] = format(jValue1[i], 'yyyy-mm-dd')
 */
//封装一个方法，时间戳转换为日期
function format(time, format) {
  var t = new Date(time);
  var tf = function(i) {
    return (i < 10 ? '0' : '') + i;
  };
  return format.replace(/yyyy|mm|dd|hh|nn|ss/g, function(a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear());
        break;
      case 'mm':
        return tf(t.getMonth() + 1);
        break;
      case 'dd':
        return tf(t.getDate());
        break;
      case 'hh':
        return tf(t.getHours());
        break;
      case 'nn':
        return tf(t.getMinutes());
        break;
      case 'ss':
        return tf(t.getSeconds());
        break;
    }
  })
}


/**
 * 网上的方法
 //js字符串转化为时间
 // //输入时间格式为yyyy-MM-dd
 //Wed Jul 17 2019 00:00:00 GMT+0800 (中国标准时间) {}
 *
 */

function coverDateFromString(dateString) {
  if (dateString) {
    var date = new Date(dateString.replace(/-/, '/'))
    return date;
  }
}


/**
 * @param {Object} fmt
 *网上找的
 * 将日期转换为指定的格式：比如转换成 年月日时分秒 这种格式：yyyy-MM-dd hh:mm:ss 或者 yyyy-MM-dd。
 *
 * 比如我们可以这样调用下：
 var time1 = new Date().format("yyyy-MM-dd hh:mm:ss");
 console.log(time1);
 *运行结果为：2014-06-08 21：48：09
 * 也可以转换成 ”年月日”的格式
 var time2 = new Date().format("yyyy-MM-dd");
 console.log(time2);
 * 运行结果为：2014-06-08
 */
Date.prototype.format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

/**
 * 排序价格数组，去空
 * size为价格长度
 * price为价格数组
 * 例如：var today_price1 = getSortPrice(today_price.length, today_price);
 * */
function getSortPrice(size, price) {
  var priceArr = [];
  for (var i = 0; i < size; i++) {
    if (price[i] != null) {
      priceArr.push(price[i]);
    } else {
      priceArr.push(",")
    }
  }
  return delDuplicateArrayItem(priceArr.sort());
}


/*
 *测试一
 *对series数据进行整合，用这个方法就可以不用dataset了
 * 里面有名字，图表类型，和数据
 *示例返回:
 *[
 *       {
 *            name:'邮件营销',
 *            type:'line',
 *            data:[120, 132, 101, 134, 90, 230, 210]
 *        },
 *        {
 *            name:'联盟广告',
 *            type:'line',
 *            data:[220, 182, 191, 234, 290, 330, 310]
 *        },
 *]
 * size 需要设定几行或者是几组数据
 * companys为公司名称
 * typeIn为数据类型，bar，line等
 * data为公司的数据
 * 这里的数据不可以去重，不然公司会只有一条数据
 */
// function getArraySeries(size,companys,typeIn){
//     var seriesArray=[];
//     for (var i = 0; i < size; i++) {
//         seriesArray.push({name:companys[i],type: typeIn, data: data[i]});
//     }
//     return seriesArray;
// }

// 测试1
// function getArraySeries(name, json, key, values,typeIn) {
//     var DataJSONStr = '';
//     var ret = [];
//     var len = json.length;
//     var type2="line";
//     for (var j = 0; j < values.length; j++) {
//         for (var i = 0; i < len; i++) {
//             if (json[i][key] == values[j]) {
//                 ret.push(json[i][name]);
//             }
//         }
//         if (j != values.length - 1) {
//             DataJSONStr += ("'"+"{\""+"name\""+":\""+values[j]+"\""+",\"type\":"+"\""+type2+"\",data:["+ret+"]"+"}',");
//             // DataJSONStr += ("\"" + values[j] + "\":[" + ret + "],"+"\""+"type\""+":"+type2+",");
//
//             ret = [];
//         }
//         else {
//             DataJSONStr += ("'" + values[j] + "':[" + ret + "]");
//             ret = [];
//         }
//     }
//     // 计划转化字符串为json对象,上面已经拼接好了
//     //
//
//     // console.log(1)
//     var jsonStr = DataJSONStr;

//      // var jsonStr = JSON.parse(DataJSONStr);

//     console.log(typeof jsonStr)
//     return jsonStr;
// }


/**
 * 测试二
 * @param {Object} name 要获取的数组字段名
 * @param {Object} json    总数据json
 * @param {Object} key    要根据哪个键去进行数组分组,这里示例为公司名字段"company",也可以根据字段"province"或"reporter"
 * @param {Object} values    对应key的数组集合,如key为"company",该values即[A公司0,B公司1,C公司2,D公司3],如果key为"province",可以传入如[山东,北京,内蒙古,河北,新疆]
 * @param {Object} typeIn    数据类型
 * @param {Object} size        需要设定几行或者是几组数据
 * @param {Object} companys    公司的数据
 * 想进行series测试，这是第二个测试方法，现在存在的问题是每个公司的数据都会在各个公司下进行打印
 */
function getArraySeries(name, json, key, values, typeIn, size, companys) {
  var ret = [];
  var seriesArray = [];
  // var len = delDuplicateArrayItem(json).length;

  var len = json.length;
  // console.log(len)//86
  //所有的价格
  var price1 = getParamValues("today_price", json)
  // console.log(price1)

  var ret1 = [];
  // console.log(json)
  //去重后的公司名字
  var company1 = delDuplicateArrayItem(values);
  // console.log(company1)//38条数据

  //获取到的特定公司的价格
  var price0 = getParamValuesByCname("today_price", json, "company", companys[0]);
  // console.log(price0)//下标为0的公司的数据

  for (var j = 0; j < company1.length; j++) {
    for (var i = 0; i < price1.length; i++) {
      if (price1[i] == json[i][key]) {
        console.log(price1[i])
        // console.log(json[i][key])
        // console.log(values[j])
        var arrayS = ("{name:" + "\"" + company1[j] + "\"" + "," + "type:" + "\"" + typeIn + "\"" + ",");
        // console.log(arrayS)
        ret.push(arrayS + "\"data:[" + json[i][name] + "]}");
        ret = [];
      }
      console.log(ret)
    }
  }
  return seriesArray;
}

/**
 * 获取以公司为key的todayprice数组 类似SQL的group by
 * 假设这里要获取公司名后:价格数组 => '公司名':[123,341,212] 并且传入的公司名是一个数组,
 * 最终形式为:'A公司0':[123,211,421,681],'B公司1':[300,421,255,472],'C公司2':[222,231,672,458],'D公司3':[332,425,521,862]
 * 示例: newJson = getJsonResult("today_price", data, "company", companys);
 * @param name 要获取的数组字段名
 * @param json 总数据json
 * @param key  要根据哪个键去进行数组分组,这里示例为公司名字段"company",也可以根据字段"province"或"reporter"
 * @param values 对应key的数组集合,如key为"company",该values即[A公司0,B公司1,C公司2,D公司3],如果key为"province",可以传入如[山东,北京,内蒙古,河北,新疆]
 * @returns {string} 最终获取拼接的字符串 : 对应示例:  newJson:'A公司0':[123,211,421,681],'B公司1':[300,421,255,472],'C公司2':[222,231,672,458],'D公司3':[332,425,521,862]
 */
function getJsonResult(name, json, key, values) {
  var DataJSONStr = '';
  var ret = [];
  var len = json.length;

  for (var j = 0; j < values.length; j++) {
    for (var i = 0; i < len; i++) {
      if (json[i][key] == values[j]) {
        ret.push(json[i][name]);
      }
    }
    if (j != values.length - 1) {
      DataJSONStr += ("'" + values[j] + "':[" + ret + "],");
      ret = [];
    } else {
      DataJSONStr += ("'" + values[j] + "':[" + ret + "]");
      ret = [];
    }
  }
  var jsonStr = DataJSONStr;
  // console.log("jsonStr:" + jsonStr);
  return jsonStr;
}


/**
 * 根据传入name和json数据获取指定name的value值数组
 * "create_time"为时间节点,即该条数据时间key字段名(可扩展)
 *
 * @param name 要获取的其中某一个json的key的value数组
 * @param json 控制层返回的json数据如thisData:[{"id":33,"province":"山东","company":"A公司0","s_company":"公司0","softening_point":0.1,"toluene":1,"quinoline":1,"beta_resin":1,"coking_value":1,"ash":1,"today_price":123,"remarks":"备注0","reporter":"张","create_time":"2019-02-20 13:47:52","update_time":"2019-02-20 13:47:52","b_time":null,"e_time":null,"order":null},
 * @returns {Array} 假设传入("company",thisDate),则会获取数组[A公司0,B公司1,C公司2,D公司3] 注意这里的company的数组还不能用于ECharts的维度,因为要设置
 */
function getParamValues(name, json) {
  console.log("name:" + name);
  var ret = [];
  var len = json.length;
  for (var i = 0; i < len; i++) {
    if (name == "create_time") {
      var aDate = formatDateUntilDay(json[i][name]);
      ret.push(aDate);
    } else {
      //console.log(json.rows[i])
      ret.push(json[i][name]);
    }
    // console.log("json[i][name]:"+json[i][name]);
  }
  return ret;
}

/**
 * 将时间格式转换到直到天 省去时分秒
 * @param date
 */
function formatDateUntilDay(date) {
  var date = new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var formatDate = year + "-" + month + "-" + day;
  return formatDate;
  // console.log(format);
}

/**
 * 获取时间节点从json数据中,与getParamValues不同的是这里的时间中有'2019-1-20'单引号加持.
 * 暂时未用该方法
 *
 * @param name 时间字段的名称
 * @param json json数据
 * @returns {Array}
 */
function getCreateTimes(name, json) {
  var ret = [];
  var len = Object.keys(json).length;
  for (var i = 0; i < len; i++) {
    ret.push("'" + json[i][name] + "'");
  }
  return ret;
}


/**
 * 获取json数据中的某一个字段key根据给定value => 数组
 * 假设根据字段获取指定公司的today_price数组:
 * priceArr = getParamValuesByCname("today_price", jsonData, "company", companys[0]);
 * 如:这里传入的要获取的name为"today_price",那么最终return获取到的数据为 数组 [2323,2902,3002,4432]
 *
 * @param name 传入要获取的name(最终是该name的数组)
 * @param json 总体json数据
 * @param key  上方获取时根据该key是否等于下面value为判断依据
 * @param value  上面的key的value等于给定此value时,才被纳入最终获取数组:
 * @returns {Array}  最终获取的数组 { array | json[key]=value & json[name] }
 */
function getParamValuesByCname(name, json, key, value) {
  var ret = [];
  var len = json.length;

  for (var i = 0; i < len; i++) {
    if (json[i][key] == value) {
      ret.push(json[i][name]);
    }
  }
  return ret;
}


/**
 * 数组去重 假设 this=[ 1,1,1,2 ] => [ 1,2 ]
 *
 * @returns {Array}         ↑[ 1,2 ]
 */

// Array.prototype.delDuplicate = function () {
//     var arr = [];
//     for (var i = 0; i < this.length; i++) {
//         if (arr.indexOf(this[i]) == -1) {
//             arr.push(this[i]);
//         }
//     }
//     return arr.slice(); //slice()转为纯数组
// }


/*数组去重方法版本*/
function delDuplicateArrayItem(array) {
  var arr = [];
  for (var i in array) {
    if (arr.indexOf(array[i]) == -1) {
      arr.push(array[i]);
    }
  }
  return arr;
}


/*遍历js数组*/
// Array.prototype.traversal = function(){
//     var arrStr = '';
//     for(var i=0;i<this.length;i++){
//         arrStr += this[i];
//     }
//     return arrStr;
// }

/**
 * 返回ECharts 中 source中的填充数据: (格式如下):
 *    示例:
 *     'createTimes':['2012', '2013', '2014', '2015'],
 *     'companyName1': [41.1, 30.4, 65.1, 53.3],
 *     'companyName2': [86.5, 92.1, 85.7, 83.1],
 *     'companyName3': [24.1, 67.2, 79.5, 86.4]
 *    或理解为这样:
 *    'createTimes':['2019-02-20 13:47:52','2019-02-23 13:47:52','2019-02-24 13:47:52','2019-02-25 13:47:52'],'A公司0':[123,211,421,681],'B公司1':[300,421,255,472],'C公司2':[222,231,672,458],'D公司3':[332,425,521,862]
 *
 *
 * @param name  与getJsonResult一样
 * @param json  与getJsonResult一样
 * @param key  与getJsonResult一样
 * @param values  与getJsonResult一样
 * @param times  新增参数times为指定的times的字符串名称
 * @returns {stgetJsonResultProring}  查看上示例
 */
function getJsonResultPro(name, json, key, values, times) {
  var DataJSONStr = '';
  var ret = [];
  var len = json.length;
  for (var j = 0; j < values.length; j++) {
    for (var i = 0; i < len; i++) {
      if (json[i][key] == values[j]) {
        ret.push(json[i][name]);
      }
    }
    if (j != values.length - 1) {
      DataJSONStr += ("'" + values[j] + "':[" + ret + "],");
      ret = [];
    } else {
      DataJSONStr += ("'" + values[j] + "':[" + ret + "]");
      ret = [];
    }
  }
  var createTimes = getParamValues("create_time", json).delDuplicate();
  var jsonStr = "'" + times + "'" + ":[" + createTimes + "]," + DataJSONStr;
  return jsonStr;
}


/*size:需要设定几个. typeIn:line,row? . seriesLayout:根据什么排列数据*/
/**
 * 主要用于填充series字段
 * 示例 形式为:
 * [
 *   {"type":"line","seriesLayoutBy":"row"},
 *   {"type":"line","seriesLayoutBy":"row"},
 *   {"type":"line","seriesLayoutBy":"row"},
 *   {"type":"line","seriesLayoutBy":"row"}
 * ]
 *
 * @param size 需要设定几行
 * @param typeIn  展示类型,主要有line(曲线),bar(柱状图), pie(饼图),scatter(散点图)  ^_^||  >饼图,散点图 暂时还支持得不太好~
 * @param seriesLayout  数据的转变形式,一般这里使用"row",还有"column"
 * @returns {Array} 查看上面示例
 */
function getSeriesContent(size, typeIn, seriesLayout) {
  var contentArr = [];
  for (var i = 0; i < size; i++) {
    contentArr.push({
      type: typeIn,
      seriesLayoutBy: seriesLayout
    });
  }
  return contentArr;
}


/**
 * 填充ECharts dataset:source的数据形式
 * 示例:newArr = getArrayResultPro("today_price", data, "company", companys, "createTime",createTimes);
 * 返回:[ <<ret[]
 * timesArr[0]: ['createTimes','2018-06-19 16:00:00','2019-01-20 16:00:00','2019-01-21 16:00:00'],
 * priceStr[1]: ['华联石化',2323,5321,2422],
 * priceStr[2]: ['海油石化',3000,2311,3211],
 * priceStr[3]: ['昌邑石化',2703,1688,2900]
 *     ]<<ret[]
 *
 * console.log形式: createTime,2019-02-20 13:47:52,2019-02-23 13:47:52,2019-02-24 13:47:52,2019-02-25 13:47:52,A公司0,123,211,421,681,B公司1,300,421,255,472,C公司2,222,231,672,458,D公司3,332,425,521,862
 *
 * 示例返回:
 *  [
 *    ['product', '2012', '2013', '2014', '2015'],
 *    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
 *    ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
 *    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],

 *  ]
 *
 *
 * @param name 要获取的展示数据数组(这里主要是价格)
 * @param json 后端返回数据json
 * @param key  数据数组打头要展示的key(这里主要是公司名)
 * @param values  同上,这里是传入要查询的公司名数组
 * @param timeName 时间节点打头占位字符串,这里假设为 'createTimes' (创建时间)
 * @param dataTimeName 节点时间名,传入对应json中的时间节点的名称如"create_time",则获取timeArr
 * @param timeArr  传入的时间节点集合,如果不传入可通过上面参数dataTime内部获取
 * @returns {Array} 返回形式见 示例
 */
function getArrayResultPro(name, json, key, values, timeName, dataTimeName, timeArr) {
  var ret = [];
  if (timeArr == null) {
    console.log("getArrayResultPro:timeArr is Null,execution getParamValues return timeArr.")
    timeArr = delDuplicateArrayItem(getParamValues(dataTimeName, json));
  }
  var timesArrStr = timeName + "," + timeArr;
  var timesArr = timesArrStr.split(",");
  ret.push(timesArr); //放入首行times集合
  // var price = [];
  var priceStr = '';
  var len = json.length;
  for (var j = 0; j < values.length; j++) {
    for (var i = 0; i < len; i++) {
      if (json[i][key] == values[j]) {
        //if(){}
        priceStr += json[i][name] + ",";
      }
    }
    var s = values[j] + "," + priceStr.substring(0, priceStr.length - 1);
    priceStr = '';
    ret.push(s.split(",")); //放入公司及价格数组
  }
  return ret;
}

/**
 * jsonMap = [{i:{p:a,t:b}},{i+1:{p:a,t:b}}]
 * */
function groupTime(data) {
  var jsonMap = [];
  var row = {};
  var a;
  var b;
  for (var i = 0; i < data.length; i++) {
    a = data[i]["today_price"];
    b = data[i]["create_time"];
    var drow = {};
    drow.p = a;
    drow.t = b;
    row.v = drow;
    row.i = row.v;
    jsonMap.push(row);
  }
  return jsonMap;
}
/**
 * 主要用于ECharts中dataset下dimensions的数据填充
 * 将两个数组何为一个,避免形式['createTime',[companyName1,companyName2,companyName3]]
 * 正确形式:['createTime',companyName1,companyName2,companyName3]
 * 如果需要将数组中值变为''单引号加持请使用 array.map(String)
 *
 * @param companys 公司(或需要的)数组
 * @param timeName 时间名称(并非json中的时间key,而是填充时间节点的自定义的timeName),
 *                 如果获取不到时间请查看是否与其它数据设定的时间名称是否一致
 * @returns {Array}  示例: ['createTime',companyName1,companyName2,companyName3]
 */
function twoArrayToOne(companys, timeName) {
  var timeAndcompanyArray = [];
  timeAndcompanyArray.push(timeName);

  for (var i = 0; i < companys.length; i++) {
    timeAndcompanyArray.push(companys[i]);
  }

  // for (var i in companys) {
  //     // timeAndcompanyArray.push(companys.map(String)[i]);//原加持方式
  // }
  return timeAndcompanyArray;
}
js插件