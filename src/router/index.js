import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("../components/Layout.vue"),
    children: [
      {
        path: "/home",
        name: "首页",
        meta: {
          title: "首页",
          icon: "md-home",
        },
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/vipData",
        name: "Vip数据(激活明细)",
        component: () => import("../views/vipData/index.vue"),
      },
      {
        path: "/basics",
        name: "基础数据",
        component: () => import("../views/basics/index.vue"),
        children: [
          {
            path: "userManage",
            name: "用户管理",
            component: () => import("../views/basics/userManage.vue"),
          },
          {
            path: "userOrganization",
            name: "用户组织",
            component: () => import("../views/basics/userOrganization.vue"),
          },
          {
            path: "vipManage",
            name: "VIP会员卡管理",
            component: () => import("../views/basics/vipManage.vue"),
          },
        ],
      },
      {
        path: "statistics",
        name: "数据统计",
        component: () => import("../views/statistics/index.vue"),
        children: [
          {
            path: "sale",
            name: "VIP销售统计",
            component: () => import("../views/statistics/sale.vue"),
          },
          {
            path: "consume",
            name: "用户消费统计",
            component: () => import("../views/statistics/consume.vue"),
          },
          {
            path: "consumeDetail",
            name: "用户消费明细",
            component: () => import("../views/statistics/consumeDetail.vue"),
          },
        ],
      },
      {
        path: "agentManage",
        name: "代理管理",
        component: () => import("../views/agentManage/index.vue"),
        children: [
          {
            path: "oneAgent",
            name: "一级代理",
            component: () => import("../views/agentManage/oneAgent.vue"),
          },
          {
            path: "twoAgent",
            name: "二级代理",
            component: () => import("../views/agentManage/twoAgent.vue"),
          }
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
