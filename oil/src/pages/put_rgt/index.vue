<template>
  <dev-oil>
    <Row>
      <Col class="text" span="24">
        <p>代办箱</p>
      </Col>
      <Col class="yangshi" span="21">
        <Col span="8">
          <div>
            <Button icon="ios-search">刷新</Button>
            <Button icon="ios-search">删除</Button>
            <Button icon="ios-search">批量处理</Button>
          </div>
        </Col>
        <Col span="8" offset="8">
          <div class="weizhi">
            <Input type="text" />
            <Button icon="ios-search">刷新</Button>
          </div>
        </Col>
      </Col>
      <Col class="yangshi2" span="21">
        <div style="padding: 32px 64px">
          <h3>12345678 </h3>
          <Table :columns="columns" :data="data2" :loading="loading" border size="small"></Table>

          <div style="text-align: center;margin: 16px 0">
            <Page
              :total="total"
              :current.sync="current"
              show-sizer
              @on-change="getData"
              @on-page-size-change="handleChangeSize"
            ></Page>
          </div>
        </div>
      </Col>
      <i-col></i-col>
    </Row>
  </dev-oil>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "序号",
          key: "xuhao"
        },
        {
          title: "项目名称",
          key: "proname"
        },
        {
          title: "业务类型",
          key: "yewutype"
        },
        {
          title: "办理人",
          key: "banliren"
        },
        {
          title: "受理时间",
          key: "shoulidate"
        },
        {
          title: "详细资料",
          key: "ziliao",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  style: {
                    width: "60px"
                  },
                  props: {
                    type: "primary"
                  },
                  on: {
                    click: () => {}
                  }
                },
                "查看"
              )
            ]);
          }
        },
        {
          title: "处理意见",
          key: "yijian",
          minWidth: 130,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  style: {
                    width: "60px"
                  },
                  props: {
                    type: "primary"
                  },
                  on: {
                    click: () => {}
                  }
                },
                "驳回"
              ),
              h(
                "Button",
                {
                  style: {
                    margin: "0 10px",
                    width: "60px"
                  },
                  props: {
                    type: "primary"
                  },
                  on: {
                    click: () => {}
                  }
                },
                "批准"
              )
            ]);
          }
        }
      ],
      data2: [
        {
          xuhao: 1,
          proname: "王二区第三块用地",
          yewutype: "不动产交移",
          banliren: "哈森",
          shoulidate: "2019-10-19"
        }
      ],
      loading: false
    };
  }
};
</script>
<style lang="less" scoped>
.text {
  padding: 25px;
  p {
    font-size: 18px;
    font-weight: 600;
  }
}
.yangshi {
  margin-left: 120px;
}
.weizhi {
  display: flex;
}
.yangshi2 {
  margin-left: 120px;
  margin-top: 30px;
}
</style>