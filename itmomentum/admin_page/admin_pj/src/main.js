import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import common from "./utils/common.js";
import "./assets/css/fonts.css";

import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import VueDatePicker from "@vuepic/vue-datepicker";
import VueTippy from "vue-tippy";
import "@vuepic/vue-datepicker/dist/main.css";

const app = createApp(App);

app.use(common);
app.component("vue-sidebar-menu-akahon", VueSidebarMenuAkahon);
app.component("VueDatePicker", VueDatePicker);
app.use(VueTippy, {
    defaultProps: {
        placement: "top",
    },
});
app.use(router);
app.mount("#app");
