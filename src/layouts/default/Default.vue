<template>
  <v-app>
    <AppBar
      :appTitle="appTitle"
      :items="items"
      color="#D8B192"
      :srcImage="sidebarImg"
    />
    <AppView />
    <ScrollTop />

    <!-- <AppFooter /> -->
  </v-app>
</template>

<script>
import AppBar from "./AppBar";
import AppView from "./View";
// import AppFooter from "./Footer";
import ScrollTop from "@/components/Widget/ScrollTop";

import SidebarImg from '@/assets/images/gun.png'

export default {
  name: "Default",

  components: {
    AppBar,
    AppView,
    // AppFooter,
    ScrollTop,
  },

  data() {
    return {
      appTitle: "",
      appSubTitle: "",
      items: [],
      sidebarImg: SidebarImg
    };
  },

  mounted() {
    this.appTitle = "ควบคุมดูแลระบบ";
    this.items = [
      {
        title: 'การบันทึกข้อมูลผู้ใช้งานระบบ',
        // icon: 'mdi-certificate',
        link: '/management/user/request',
      },
      {
        title: 'การแก้ไข/ยกเลิกข้อมูลผู้ใช้งาน',
        // icon: 'mdi-script-text',
        link: '/management/user/manage',
      },
      {
        title: 'การตรวจสอบข้อมูลผู้ใช้งาน',
        // icon: 'mdi-script-text',
        link: '/management/user/inspection',
      },
    ]
  },
};
</script>
