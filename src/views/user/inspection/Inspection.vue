<template>
  <v-container>
    <div class="px-3">
      <v-tabs v-model="tab" >
        <v-tab value="one">ข้อมูลผู้ปฎิบัติงาน</v-tab>
        <v-tab value="two">การกำหนดสิทธิ</v-tab>
        <v-tab value="three">ภาพเอกสารแบบลงทะเบียน</v-tab>
        <v-tab value="four">ภาพลายเซ็น</v-tab>
      </v-tabs>
      <v-window v-model="tab" >
        <v-window-item value="one">
          <General v-model="request.general" />
        </v-window-item>
        <v-window-item value="two">
          <permission v-model="request.permission" />
        </v-window-item>
        <v-window-item value="three">
           
        </v-window-item>
        <v-window-item value="four">
          
        </v-window-item>
      </v-window>
    </div>
  </v-container>
</template>

<script>
import constructor from "@/store/constructor";
import General from "@/views/user/request/Genreral";
import Permission from "@/views/user/request/Permission";
export default {
  name: "User-Inspection",

  components: {
    General,
    Permission,
  },
  data() {
    return {
      tab: null,
      request: {
        general: new constructor.General(),
        permission: new constructor.Permission(),
      },
    };
  },
};
</script>

<style></style>
