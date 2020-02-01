<template>
  <layout>
    <!-- tab标签行 -->
    <layout>
      <section class="tabtitle" style="background:#fff; margin-top: 70px;">
        <Rom>
          <!-- tab 待完善-->
          <i-col span="20" offset="1">
            <div style="height: 70px;"></div>
          </i-col>
          <!-- 更多 通知 华北油田 -->
          <i-col span="3">
            <Rom >
              <i-col span="10">
                <Dropdown>
                  <div class="log">
                    <p>华北油田</p>
                  </div>
                  <DropdownMenu slot="list">
                    <DropdownItem divided>退出登录</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </i-col>
              <i-col span="6">
                <Dropdown>
                  <Badge :count="count1" :offset="[18,1]">
                    <Icon type="md-notifications-outline" size="24" />
                  </Badge>
                  <DropdownMenu slot="list">
                    <Tabs value="notification">
                      <TabPane label="通知" name="notification">
                        <div class="notification">通知内容</div>
                      </TabPane>
                      <TabPane label="关注" name="follow">
                        <div class="notification">关注内容</div>
                      </TabPane>
                    </Tabs>
                  </DropdownMenu>
                </Dropdown>
              </i-col>
              <i-col span="8">
                <Dropdown>
                  <Icon type="ios-more" size="24"/>
                  <DropdownMenu slot="list">
                    <Tabs value="notification">
                      <TabPane label="通知" name="notification">
                        <div class="notification">通知内容</div>
                      </TabPane>
                    </Tabs>
                  </DropdownMenu>
                </Dropdown>
              </i-col>
            </Rom>
          </i-col>
        </Rom>
      </section>
    </layout>
 
    <!-- 头部导航 -->
    <header class="header">
      <Row>
        <!-- logo -->
        <i-col span="6" offset="1">
          <img class="logo" src="../assets/img/logo.png" alt="logo" />
        </i-col>
        <!-- title -->
        <!-- <i-col span="5">
          <div class="title">
            <p>华北油田不动产管理</p>
            <p>Huabei oilfield real estate management</p>
          </div>
        </i-col>-->
        <!-- 中间空 -->
        <i-col span="6">
          <div style="height: 70px; "></div>
        </i-col>
        <!-- 导航 -->
        <i-col span="11" class="nav">
          <Rom>
            <!-- 占位 -->
            <i-col span="3">
              <div style="height: 70px;"></div>
            </i-col>
            <!-- 工作台 -->
            <i-col span="3">
              <Dropdown>
                <img class="nav-img" src="../assets/img/icon-one.png" />
                <p class="nav-font">工作台</p>
                <DropdownMenu slot="list">
                  <router-link to="/#">
                    <DropdownItem>
                      待办箱
                      <Badge status="error" />
                    </DropdownItem>
                  </router-link>
                  <router-link to="/#">
                    <DropdownItem divided>在办箱</DropdownItem>
                  </router-link>
                  <router-link to="/#">
                    <DropdownItem divided>
                      在办箱
                      <Badge status="error" />
                    </DropdownItem>
                  </router-link>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <!-- 权籍管理 -->
            <i-col span="3">
              <Dropdown>
                <img class="nav-img" src="../assets/img/icon-two.png" />
                <p class="nav-font2">权籍管理</p>
                <DropdownMenu slot="list">
                  <router-link to="/register">
                    <DropdownItem>不动产信息登记</DropdownItem>
                  </router-link>
                  <router-link to="/put_rgt">
                    <DropdownItem divided>不动产信息变更</DropdownItem>
                  </router-link>
                  <router-link to="/land_logon_rgt">
                    <DropdownItem divided>不动产产权登记</DropdownItem>
                  </router-link>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <!-- 利用管理 -->
            <i-col span="3">
              <Dropdown>
                <img class="nav-img" src="../assets/img/icon-three.png" />
                <p class="nav-font2">利用管理</p>
                <DropdownMenu slot="list">
                  <router-link to="/logon">
                    <DropdownItem>不动产使用调配</DropdownItem>
                  </router-link>
                  <router-link to="/#">
                    <DropdownItem divided>公有房屋出租管理</DropdownItem>
                  </router-link>
                  <router-link to="/#">
                    <DropdownItem divided>房屋租入管理</DropdownItem>
                  </router-link>
                  <router-link to="/#">
                    <DropdownItem divided>公有房屋修缮备案</DropdownItem>
                  </router-link>
                  <router-link to="/#">
                    <DropdownItem divided>不动产监管巡查</DropdownItem>
                  </router-link>
                  <router-link to="/#">
                    <DropdownItem divided>不动产维权管理</DropdownItem>
                  </router-link>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <!-- 处置管理 -->
            <i-col span="3">
              <Dropdown>
                <img class="nav-img" src="../assets/img/icon-four.png" />
                <p class="nav-font2">处置管理</p>
                <DropdownMenu slot="list">
                  <router-link to="/#">
                    <DropdownItem>
                      房屋拆除审批
                    </DropdownItem>
                  </router-link>
                  <router-link to="/#">
                    <DropdownItem divided>土地处理备案</DropdownItem>
                  </router-link>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <!-- 档案管理 -->
            <i-col span="3">
              <Dropdown>
                <img class="nav-img" src="../assets/img/icon-five.png" />
                <p class="nav-font2">档案管理</p>
                <DropdownMenu slot="list">
                  <router-link to="/#">
                    <DropdownItem>档案归档</DropdownItem>
                  </router-link>
                  <router-link to="/#">
                    <DropdownItem divided>档案查阅</DropdownItem>
                  </router-link>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <!-- 辅助决策 -->
            <i-col span="3">
              <Dropdown>
                <img class="nav-img" src="../assets/img/icon-six.png" />
                <p class="nav-font2">辅助决策</p>
                <DropdownMenu slot="list">
                  <router-link to="/#">
                    <DropdownItem>
                      不动产管理台账
                    </DropdownItem>
                  </router-link>
                  <router-link to="/#">
                    <DropdownItem divided>分析预警</DropdownItem>
                  </router-link>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <!-- 系统管理 -->
            <i-col span="3">
              <Dropdown>
                <img class="nav-img" src="../assets/img/icon-seven.png" />
                <p class="nav-font2">系统管理</p>
              </Dropdown>
            </i-col>
          </Rom>
        </i-col>
      </Row>
    </header>

    <!-- 内容 -->
        
      <Content>
         <Card class="content" >
           <slot></slot>
        </Card>
      </Content>
    </layout>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      count1: "3"
    };
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 70px;
  background-image: url("../assets/img/navback.png");
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.logo {
  height: 40px;
  margin-top: 18px;
  margin-left: -10%;
}
.nav {
  margin-top: 15px;
}
.tabtitle {
  width: 100%;
  height: 30px;
  background: #ccc;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.content {
  background-image: url("../assets/img/backbig.png");
  margin: 105px 5px 0 5px;
  /* min-height: 500px; */
  border: 1px solid #d7dde4;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.nav-img {
  width: 25px;
  height: 25px;
}
.nav-font {
  color: #fff;
  font-weight: 500;
  margin-left: -3px;
  font-size: 11px;
}

.nav-font2 {
  color: #fff;
  font-weight: 500;
  margin-left: -8px;
  font-size: 11px;
}
.log{
  margin-top: 7px;
}

</style>