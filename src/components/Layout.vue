<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" >代理系统</div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item v-if="!item.children" v-for="item in menuList" :key="item.id">
          <router-link :to="item.path">
            <a-icon type="pie-chart" />
            {{item.name}}
          </router-link>
        </a-menu-item>
        <a-sub-menu v-if="item.children" v-for="item in menuList" :key="item.id">
          <span slot="title">
            <a-icon type="user" />
            <span>{{item.name}}</span>
          </span>
          <a-menu-item v-for="child in item.children" :key="child.id">
            <router-link :to="child.path">{{child.name}}</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <!-- <a-breadcrumb >
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>-->
        <!-- <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">Bill is a cat.</div> -->
        <div class="content">
          <router-view />
        </div>
      </a-layout-content>
      <!-- <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      menuList: [
        {
          id: 0,
          name: "首页",
          path: "/home"
        },
        {
          id: 1,
          name: "基础数据",
          path: "/basics",
          children: [
            {
              id: 2,
              name: "用户管理",
              path: "/basics/userManage"
            },
            {
              id: 3,
              name: "用户组织",
              path: "/basics/userOrganization"
            },
            {
              id: 4,
              name: "VIP会员卡管理",
              path: "/basics/vipManage"
            }
          ]
        },
        {
          id: 5,
          name: "Vip数据(激活明细)",
          path: "/vipData"
        },
        {
          id: 6,
          name: "数据统计",
          path: "/statistics",
          children: [
            {
              id: 7,
              name: "VIP销售统计",
              path: "/statistics/sale",
            },
            {
              id: 8,
              name: "用户消费统计",
              path: "/statistics/consume",
            },
            {
              id: 9,
              name: "用户消费明细",
              path: "/statistics/consumeDetail",
            }
          ]
        },
        {
          id:10,
          name:"代理管理",
          path:"/agentManage",
          children:[
            {
              id:11,
              name:"一级代理",
              path:"/agentManage/oneAgent"
            },
            {
              id:12,
              name:"二级代理",
              path:"/agentManage/twoAgent"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #fff;
  line-height: 32px;
  font-size: 18px;
}
</style>
