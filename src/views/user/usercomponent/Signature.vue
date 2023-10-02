<template>
    <v-container>
      <SectionVue
        color="#D8B192"
        icon="mdi-signature-freehand"
        header="ภาพเอกสารแบบลงทะเบียน"
      />
     
    </v-container>
  </template>
  
  <script>
  import { reactive } from "vue";
  import SectionVue from "@/components/Widget/Section";
  export default {
    name: "User-Signature",
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
        
      };
    },
  
    props: {
      modelValue: {
        type: Object,
        default: () => {
          return {
            
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
  