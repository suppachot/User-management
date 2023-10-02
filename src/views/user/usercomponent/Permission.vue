<template>
  <v-container>
    <SectionVue
      color="#D8B192"
      icon="mdi-clipboard-text"
      header="การกำหนดสิทธิ"
    />
    <v-row>
      <v-col>
        <v-checkbox
          v-for="item in items"
          :key="item.value"
          v-model="localValue.selectedPermission"
          :value="item.value"
          :label="item.label"
          density="compact"
          :readonly="isUserInspectionRoute"
        ></v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { reactive } from "vue";
import SectionVue from "@/components/Widget/Section";
export default {
  name: "User-Permiission",
  components: {
    SectionVue,
  },
  computed: {
    isUserInspectionRoute() {
      return this.$route.name === "userInspection";
    },
  },

  data() {
    return {
      items: [
        {
          value: "ระบบงานบันทึกหัวกระสุน ปลอกกระสุน",
          label: "ระบบงานบันทึกหัวกระสุน ปลอกกระสุน",
        },
        {
          value: "ทะเบียนอาวุธปืน ดอกไม้เพลิง สิ่งเทียมอาวุธปืน และวัตถุระเบิด",
          label: "ทะเบียนอาวุธปืน ดอกไม้เพลิง สิ่งเทียมอาวุธปืน และวัตถุระเบิด",
        },
        { value: "ระบบงานการโรงแรม", label: "ระบบงานการโรงแรม" },
        {
          value: "ระบบงานขายทอดตลาด และค้าของเก่า",
          label: "ระบบงานขายทอดตลาด และค้าของเก่า",
        },
        { value: "ระบบงานเรี่ยไร", label: "ระบบงานเรี่ยไร" },
        { value: "ระบบงานการพนัน", label: "ระบบงานการพนัน" },
        { value: "ระบบงานโรงรับจำนำ", label: "ระบบงานโรงรับจำนำ" },
        { value: "ระบบงานสมาคม มูลนิธิ", label: "ระบบงานสมาคม มูลนิธิ" },
        { value: "ระบบงานสถานบริการ", label: "ระบบงานสถานบริการ" },
        { value: "ระบบงานขอใช้เสียง", label: "ระบบงานขอใช้เสียง" },
        {
          value: "ปรับปรุงตารางรหัส หรือ table อื่นๆ",
          label: "ปรับปรุงตารางรหัส หรือ table อื่นๆ",
        },
        { value: "ระบบเชื่อมโยงข้อมูล NSW", label: "ระบบเชื่อมโยงข้อมูล NSW" },
        {
          value: "สิทธิในการค้นหาข้อมูลผ่าน IKNO",
          label: "สิทธิในการค้นหาข้อมูลผ่าน IKNO",
        },
      ],
    };
  },

  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {
          selectedPermission: [],
        };
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
