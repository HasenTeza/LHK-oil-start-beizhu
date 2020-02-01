<template>
  <ve-pie
    :data="chartData"
    :legend="usecase"
    :settings="chartSettings"
    :title="title"
  ></ve-pie>
</template>
<script>
export default {
  data() {
    // 统计图设置
    this.chartSettings = {
      roseType: "radius",
      // 玫瑰图
      label: { show: false },
      // 支线形容
      labelLine: {
        show: false
      },
      // 支线
      opacity: 0.5,
      // 设置透明度
      radius: 50,
      // 设置半径
      offsetY: "20%"
      // 设置上下位置
    };
    return {
      // 用例设置
      usecase: {
        center: "right",
        // 调整图例区的位置，单位(数字，百分比，center/left位置)
        right: 0,
        // left:0,
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 5, // 设置间距
        // 是否可以点击，隐藏点击的内容
        selectedMode: true,
        // 图例的宽度，不够会换行
        width: 50,
        bottom: 200,

        //调整大小啥的
        width: 10,
        //样式
        textStyle: {
          color: "#123456"
        }
      },
      // 统计图数据统计图
      chartData: {
        columns: ["描述", "占比"],
        rows: [
          { 描述: "证据缺失", 占比: 200 },
          { 描述: "取得批文", 占比: 250 },
          { 描述: "已用在批", 占比: 300 },
          { 描述: "实际控制", 占比: 380 },
          { 描述: "土地登记", 占比: 400 }
        ],
        // 设置统计图位置
        x: "center",
        top: "20%"
      },
      // 统计图文字设置
      title: {
        // 文字啥的，用\n可以换行
        text: "房屋利用情况",

        //调整位置
        x: "center",
        top: "50%",

        //调整样式
        textStyle: {
          fontSize: 15,
          fontWeight: "normal",
          color: "#123456"
        }
      }
    };
  }
};
</script>

