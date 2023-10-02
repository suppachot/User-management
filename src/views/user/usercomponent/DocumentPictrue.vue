<template>
    <v-container>
      <SectionVue
        color="#D8B192"
        icon="mdi-file-document"
        header="ภาพลายเซ็น"
      />
     
    </v-container>
  </template>
  
  <script>
  import { reactive } from "vue";
  import SectionVue from "@/components/Widget/Section";
  export default {
    name: "User-DocumentPicture",
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
  