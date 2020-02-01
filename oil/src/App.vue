// 模板
<template>
  <div id="app">
    <!--  <router-view/> 显示当前路由地址所对应的内容-->
    <!-- 你选中那个路由，就显示那个路由的内容 -->
    <!-- 这里写公共样式 -->
    <!-- work：在app.vue中写好导航框架，再写好其他组件，然后想办法连接家在组件，像写的Vue大图标一样 -->
    <router-view />
  </div>
</template>

// 逻辑
<script>
export default {
  // 组件的名字，这个组件的名字就是APP
  name: "App"
};
</script>


// 样式 
<style></style>
