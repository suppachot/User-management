<template>
  <v-container>
    <SectionVue
      color="#D8B192"
      icon="mdi-clipboard-text"
      header="ข้อมูลประวัติการเปลี่ยนแปลงของผู้ปฎิบัติงาน"
    />
    <v-data-table
    :headers="headers"
    :items="items"
    :search="search"
  ></v-data-table>
  </v-container>
</template>

<script>
import { reactive } from "vue";
import SectionVue from "@/components/Widget/Section";

export default {
  name: "User-HistoryTable",
  components: {
    SectionVue,
  },

  data() {
    return {
      search: '', // ตัวแปรสำหรับการค้นหา
      headers: [
        {
          text: 'เลขบัตรประจำตัวประชาชน',
          value: 'idCardNumber',
        },
        {
          text: 'ชื่อผู้ปฎิบัติงาน',
          value: 'employeeName',
        },
        {
          text: 'หน่วยงานที่ปฎิบัติ',
          value: 'department',
        },
        {
          text: 'วันที่จำหน่าย',
          value: 'dateOfRelease',
        },
        {
          text: 'วันที่ย้ายเข้ามาปฎิบัติงาน',
          value: 'dateOfMoveIn',
        },
        {
          text: 'วันที่ย้ายหรือลาออก',
          value: 'dateOfMoveOutOrResignation',
        },
      ],
      items: [
        {
          idCardNumber: '1234567890123',
          employeeName: 'John Doe',
          department: 'HR',
          dateOfRelease: '2023-09-01',
          dateOfMoveIn: '2023-09-15',
          dateOfMoveOutOrResignation: '2023-10-20',
        },
        // เพิ่มข้อมูลอื่น ๆ ตามต้องการ
      ],
    };
  },

  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {};
      },
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const localValue = reactive(props.modelValue);
    return {
      localValue,
    };
  },
};
</script>
