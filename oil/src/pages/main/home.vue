<template>
  <dev-oil>
    <Row :gutter="12">
      <i-col span="12">
        <el-card shadow>
          <div style="text-align:center">
            <mainmap></mainmap>
          </div>
        </el-card>
      </i-col>
      <i-col span="12" style="h">
        <Card shadow>
          <Row>
            <i-col span="12">
              <div style="text-align:center " class="home-map">
                <charts1></charts1>
              </div>
            </i-col>
            <i-col span="12">
              <div style="text-align:center " class="home-map">
                <charts2></charts2>
              </div>
            </i-col>
          </Row>
        </Card>
      </i-col>
    </Row>
    <!-- 二排 -->
    <Row :gutter="12" style=" margin-top:10px">
      <i-col span="12">
        <leftlist></leftlist>
      </i-col>
      <i-col span="12">
        <Card shadow title="风险争议情况">
          <Row class="fengxian" :gutter="-2">
            <i-col span="12">
              土地风险
              <span class="shuzi">3</span> 起，涉及
              <span class="shuzi">5</span> 宗地，共
              <span class="shuzi">1560</span> 亩
            </i-col>
            <i-col span="12">
              房屋风险
              <span class="shuzi">4</span> 起，涉及
              <span class="shuzi">6</span> 栋房屋，共
              <span class="shuzi">1240</span> 平米
            </i-col>
          </Row>
        </Card>

        <Card shadow title="最新通知" style="  margin-top: 8px">
          <Row class="fengxian">
            <i-col span="1">1</i-col>
            <i-col span="10">不动产相关法律法规</i-col>
            <i-col span="8">
              <p style="height: 2px"></p>
            </i-col>
            <i-col span="4">2019-10-22</i-col>
          </Row>
          <Row class="fengxian">
            <i-col span="1">2</i-col>
            <i-col span="10">不动产维权管理模块</i-col>
            <i-col span="8">
              <p style="height: 2px"></p>
            </i-col>
            <i-col span="4">2019-10-22</i-col>
          </Row>
          <Row class="fengxian">
            <i-col span="1">3</i-col>
            <i-col span="14">为油田不动产管理相关工作人员提供不动产管理知识</i-col>
            <i-col span="4">
              <p style="height: 2px"></p>
            </i-col>
            <i-col span="4">2019-10-22</i-col>
          </Row>
        </Card>
      </i-col>
    </Row>
  </dev-oil>
</template>
<style scoped>
.home-map {
  width: 100%;
  height: 250px;
}
.shuzi {
  font-size: 13px;
  color: brown;
}
.fenegxian {
  font-size: 150px;
}
</style>
<script>
import charts1 from "@/components/main_pie1.vue";
import charts2 from "@/components/main_pie2.vue";
import mainmap from "@/components/main_map.vue";
import leftlist from "@/components/main_leftlist.vue";

export default {
  components: {
    charts1,
    charts2,
    leftlist,
    mainmap
  }
};
</script>