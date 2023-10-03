<template>
  <v-container>
    <SectionVue
      color="#D8B192"
      icon="mdi-clipboard-title"
      header="ข้อมูลประวัติการเปลี่ยนแปลงของผู้ปฎิบัติงาน"
    />

    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
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
      
      itemsPerPage: 5,
      headers: [
        {
          title: "เลขบัตรประจำตัวประชาชน",
          key: "idCardNumber",
          width: "225",
        },
        {
          title: "ชื่อผู้ปฎิบัติงาน",
          key: "employeeName",
          width: "200",
        },
        {
          title: "หน่วยงานที่ปฎิบัติ",
          key: "department",
          width: "230",
        },
        {
          title: "วันที่จำหน่าย",
          key: "dateOfRelease",
          width: "140",
        },
        {
          title: "วันที่ย้ายเข้ามาปฎิบัติงาน",
          key: "dateOfMoveIn",
          width: "140",
        },
        {
          title: "วันที่ย้ายหรือลาออก",
          key: "dateOfMoveOut",
          width: "140",
        },
      ],
      desserts: [
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "อำเภอเมืองกาญจนบุรี",
          dateOfRelease: "21/06/2562",
          dateOfMoveIn: "16/01/2561",
          dateOfMoveOut: "00/00/0000",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "อำเภอเมืองนนทบุรี",
          dateOfRelease: "20/06/2562",
          dateOfMoveIn: "16/01/2561",
          dateOfMoveOut: "00/00/0000",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "อำเภอท่าสองยางทดสอบ",
          dateOfRelease: "20/06/2562",
          dateOfMoveIn: "16/01/2561",
          dateOfMoveOut: "00/00/0000",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "จังหวัดตาก",
          dateOfRelease: "18/03/2562",
          dateOfMoveIn: "16/01/2561",
          dateOfMoveOut: "00/00/0000",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "18/03/2562",
          dateOfMoveIn: "16/01/2561",
          dateOfMoveOut: "00/00/0000",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },

        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
        {
          idCardNumber: "3-1012-2917-12-1",
          employeeName: "นายธีระ อนุุตรานนท์",
          department: "ศูนย์บริการประชาชน",
          dateOfRelease: "06/05/2560",
          dateOfMoveIn: "31/08/2558",
          dateOfMoveOut: "03/05/2560",
        },
      ],
    };
  },

  props: {
    modelkey: {
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
    const localkey = reactive(props.modelkey);
    return {
      localkey,
    };
  },
};
</script>
