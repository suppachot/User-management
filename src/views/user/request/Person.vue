<template>
  <v-container>
    <div class="px-3">
      <v-tabs v-model="tab">
        <v-tab value="one">ข้อมูลผู้ปฎิบัติงาน</v-tab>
        <v-tab value="two">การกำหนดสิทธิ</v-tab>
        <v-tab
          value="three"
          v-if="
            $route.name === 'userManage' || $route.name === 'userInspection'
          "
          >ภาพเอกสารแบบลงทะเบียน</v-tab
        >
        <v-tab
          value="four"
          v-if="
            $route.name === 'userManage' || $route.name === 'userInspection'
          "
          >ภาพลายเซ็น</v-tab
        >
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="one">
          <General v-model="request.general" />
        </v-window-item>
        <v-window-item value="two">
          <permission v-model="request.permission" />
        </v-window-item>
        <v-window-item
          value="three"
          v-if="
            $route.name === 'userManage' || $route.name === 'userInspection'
          "
        >
          <document-pictrue />
        </v-window-item>
        <v-window-item
          value="four"
          v-if="
            $route.name === 'userManage' || $route.name === 'userInspection'
          "
        >
          <signature />
        </v-window-item>
      </v-window>
    </div>
    
    <v-dialog v-model="dialog" fullscreen>
      <v-card> 
        <history-table/>
      </v-card>
    </v-dialog>

    <v-footer app color="white">
      <v-btn class="mr-3" @click="1">
        <v-icon dark> mdi-content-save </v-icon>
        บันทึกการกำหนดสิทธิ
      </v-btn>
      <v-btn class="mr-3" @click="2">
        <v-icon dark>mdi-delete</v-icon>
        จำหน่ายสิทธิ
      </v-btn>
      <v-btn class="mr-3" v-if="$route.name === 'userRequest'" @click="2">
        <v-icon dark>mdi-reload</v-icon>
        ลบข้อมูลบนหน้าจอ
      </v-btn>
      <v-btn
        class="mr-3"
        v-if="$route.name === 'userManage' || $route.name === 'userInspection'"
        @click="openFullDialog"
      >
        <v-icon dark>mdi-magnify</v-icon>
        ตรวจสอบประวัติการเปลี่ยนแปลง
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="mr-3">
        <v-icon dark>mdi-arrow-left-circle</v-icon>
        กลับเมนู
      </v-btn>
      <v-btn class="mr-3">
        <v-icon dark>mdi-check-circle-outline</v-icon>
        จบงาน
      </v-btn>
    </v-footer>
  </v-container>
</template>

<script>
import constructor from "@/store/constructor";
import General from "@/views/user/usercomponent/Genreral";
import Permission from "@/views/user/usercomponent/Permission";
import Signature from "../usercomponent/signature";
import DocumentPictrue from "../usercomponent/DocumentPictrue";
import HistoryTable from '../usercomponent/HistoryTable';

export default {
  name: "User-Request-person",

  components: {
    General,
    Permission,
    Signature,
    DocumentPictrue,
    HistoryTable,
  },

  data() {
    return {
      tab: null,
      dialog: false,
      request: {
        general: new constructor.General(),
        permission: new constructor.Permission(),
        dialog: false,
      },
    };
  },
  computed: {
    isRequestPath() {
      return this.$route.path === "/management/user/request";
    },
  },
  methods: {
    openFullDialog() {
      this.dialog = true;
    },
  },
};
</script>

<style></style>
