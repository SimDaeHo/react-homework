import { createRouter, createWebHistory } from "vue-router";

import dashBoard from "../views/DashBoard";
import checkOrderPage from "../views/CheckOrderPage";
import PowerUpAiAd from "../views/PowerUpAiAd";
import DailyStoreSettlement from "../views/settleManage/DailyStoreSettlement";

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)

// 라우터 설계
const routes = [
    { path: "/DashBoard", name: "DashBoard", component: dashBoard },
    { path: "/CheckOrderPage", name: "CheckOrderPage", component: checkOrderPage },
    { path: "/PowerUpAiAd", name: "PowerUpAiAd", component: PowerUpAiAd },
    { path: "/settleManage/DailyStoreSettlement", name: "DailyStoreSettlement", component: DailyStoreSettlement },
];

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 라우터 추출 (main.js에서 import)
export default router;
