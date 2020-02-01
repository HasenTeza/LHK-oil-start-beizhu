<template>
  <dev-oil>
    <Row>
      <Col class="text" span="24" >
        <p>不动产信息登记</p>
      </Col>
      <Col class="yangshi" span="20">
        <img class="register-map" src="./../../assets/img/home-map.png" alt="map" />
      </Col>

      <Col class="yangshi2" span="20">
        <Card >
            <Row>
                <!-- <Col span="5">
                    <form></form>
                </Col> -->
                 <Col span="5">
                     <el-input v-model="input" placeholder="element"></el-input>
                </Col>
                 <Col span="5">
               
                </Col>
                 <Col span="5">
                 <div style="width:5px"></div>
                </Col> -->
                 <Col span="4">
                   <Button type="primary" size="small" >查询</Button>
                </Col>
            </Row>
          <div>
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
        </Card>
      </Col>
      <i-col></i-col>
    </Row>
  </dev-oil>
</template>
<script>
export default {
  data() {
    return {
         input: '',
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
margin-left: 2%;
  p {
    font-size: 12px;
    font-weight: 450;
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
  margin-top: 5px;
}
.register-map {
  width: 100%;
  height: 200px;
}
</style>