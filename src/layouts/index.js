import Vue from "vue";
import { AppLayout } from "../util/constants";

import Default from "./Default.vue";
Vue.component(AppLayout.Default, Default);

import Auth from "./Auth.vue";
Vue.component(AppLayout.Auth, Auth);
