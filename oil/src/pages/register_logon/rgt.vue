<template>
<dev-oil>
    <Row>
      <Col span="24" class="text">
        <p>公有房屋修缮备案</p>
      </Col>
      <Col span="24" class='xiushan'>
        <Form label-position='left' ref="formInline" :model="formInline" :label-width="110">
        <Col span="7">
          <FormItem label="修缮类型">
              <Input placeholder="Enter something..." />
          </FormItem>
        </Col>
        <Col span="7" offset='1'>
          <FormItem label="修缮原因">
              <Input placeholder="Enter something..." />
          </FormItem>
        </Col>
        <Col span="7" offset='1'>
          <FormItem label="完成日期">
              <Input placeholder="Enter something..." />
          </FormItem>
        </Col>
         <Col span="7">
          <FormItem label="原值变化情况">
              <Input placeholder="Enter something..." />
          </FormItem>
        </Col>
        <Col span="7" offset='1' >
          <FormItem label="相关资料">
              <Input placeholder="Enter something..." />
          </FormItem>
        </Col>zsazN  dxszAAA
        <Col span="7" offset='1'>
          <FormItem label="档案">
              <Input placeholder="Enter something..." />
          </FormItem>
        </Col>
        <Col span="7">
            <FormItem label="层数变化情况">
              <Input placeholder="Enter something..." />
          </FormItem>
          <FormItem label="占地面积变化情况">
              <Input placeholder="Enter something..." />
          </FormItem>
          <FormItem label="房屋数变化情况">
              <Input placeholder="Enter something..." />
          </FormItem>
          <FormItem label="建筑面积变化情况">
              <Input placeholder="Enter something..." />
          </FormItem>
          <FormItem label="修缮方案">
              <Input placeholder="Enter something..." />
          </FormItem>
        </Col>
        <Col class="beijing" span="15" offset="1">
            <img src="" alt="">
        </Col>
      </Form>
      </Col>
      
    </Row>
    </dev-oil>
</template>
<script>
export default {
    data () {
        return {
            formInline:{}
        }
    }
}
</script>
<style lang="less" scoped>
.text {
  height: 50px;
  border-bottom: 1px solid #999;
  p {
    font-size: 18px;
  }
}
.beijing{
    // margin-left: 90px;
    height: 260px;
    background: pink;
}
.xiushan{
    margin-top: 30px;
}
</style>