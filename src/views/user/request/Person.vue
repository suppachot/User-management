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
          {{ request.general }}
        </v-window-item>
        <v-window-item value="two">
          <permission v-model="request.permission" />
          {{ request.permission }}
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
    <v-dialog v-model="dialog" width="1024">
      <v-card>
        <history-table />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" color="info" @click="dialog = false">
            <v-icon dark>mdi-arrow-left-circle</v-icon>
            กลับหน้าจอหลัก
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-footer app color="white">
      <v-spacer></v-spacer>
      <v-btn
        prepend-icon="mdi-content-save"
        class="mr-3"
        @click="saveuser"
        color="primary"
        :disabled="$route.name === 'userInspection'"
      >
        บันทึกการกำหนดสิทธิ
      </v-btn>
      <v-btn
        prepend-icon="mdi-delete"
        class="mr-3"
        color="red"
        :disabled="
          $route.name === 'userRequest' || $route.name === 'userInspection'
        "
        @click="deleateuser"
      >
        จำหน่ายสิทธิ
      </v-btn>
      <v-btn
        prepend-icon="mdi-reload"
        class="mr-3"
        color="warning"
        v-if="$route.name === 'userRequest'"
        @click="clearinput"
      >
        ลบข้อมูลบนหน้าจอ
      </v-btn>
      <v-btn
        prepend-icon="mdi-magnify"
        class="mr-3"
        color="black"
        v-if="$route.name === 'userManage' || $route.name === 'userInspection'"
        @click="openFullDialog"
      >
        ตรวจสอบประวัติการเปลี่ยนแปลง
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
import HistoryTable from "../usercomponent/HistoryTable";

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
      },
    };
  },

  methods: {
    openFullDialog() {
      this.dialog = true;
    },
    async saveuser() {
      const confirmed = await this.$swal.fire({
        title: "คุณต้องการบันทึกข้อมูลใช่หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "ใช่",
        cancelButtonText: "ไม่",
      });
      if (confirmed.isConfirmed) {
        this.$swal.fire(
          "บันทึกสำเร็จ!",
          "ข้อมูลของคุณถูกบันทึกแล้ว",
          "success"
        );
        console.log("success");
      } else {
        this.$swal.fire("ยกเลิก", "คุณได้ยกเลิกการบันทึกข้อมูล", "error");
      }
    },
    async deleateuser() {
      const confirmed = await this.$swal.fire({
        title: "คุณต้องการจำหน่ายสิทธิใช่หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "ใช่",
        cancelButtonText: "ไม่",
      });
      if (confirmed.isConfirmed) {
        this.$swal.fire(
          "จำหน่ายสิทธิสำเร็จ!",
          " ",
          "success"
        );
        console.log("deleatesuccess");
      }else {
        this.$swal.fire(" ","คุณได้ยกเลิกการจำหน่ายสิทธิ", "error");
      }
    },
    async clearinput() {
      const confirmed = await this.$swal.fire({
        title: "คุณต้องการลบข้อมูลหหน้าจอใช่หรือไม่?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "ใช่",
        cancelButtonText: "ไม่",
      });
      if (confirmed.isConfirmed) {
        this.$swal.fire(
          "ลบข้อมูลหหน้าจอสำเร็จ!",
          " ",
          "success"
        );
        this.request.general = new constructor.General();
        this.request.permission = new constructor.Permission();
        console.log(this.request.general);
        console.log(this.request.permission);
      }
      else {
        this.$swal.fire(" ","คุณได้ยกเลิกการลบข้อมูลหหน้าจอ", "error");
      }
    },
    
  },
};
</script>

<style>
.v-footer {
  flex-grow: 1;
}
</style>
