<template>
  <v-container>
    <SectionVue
      color="#D8B192"
      icon="mdi-clipboard-text"
      header="ข้อมูลผู้ปฎิบัติงาน"
    />
    <v-row>
      <v-col cols="12" sm="6" lg="4">
        <v-text-field
          v-model="localValue.pid"
          label="เลขประจำตัวประชาชน"
          placeholder="เลขประจำตัวประชาชน"
          variant="outlined"
          v-mask="'#-####-#####-##-#'"
          hide-details="auto"
          persistent-placeholder
          :readonly="isUserInspectionRoute"
          density="compact"
        />
      </v-col>
      <v-col cols="12" sm="6" lg="1">
        <v-icon icon="mdi-card-search" size="x-large" />
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" lg="5">
        <span>วัน/เดือน/ปี ที่เข้ามาปฎิบัติงาน : {{ localValue.tName }}</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="4" lg="3">
        <span>คำนำหน้านาม : {{ localValue.tName }}</span>
      </v-col>
      <v-col cols="12" sm="3" lg="3">
        <span>ชื่อ : {{ localValue.fName }}</span>
      </v-col>
      <v-col cols="12" sm="3" lg="3">
        <span>นามสกุล : {{ localValue.lName }}</span>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="10">
        <h4>สถานที่ปฎิบัติงาน</h4>
      </v-col>
      <v-col cols="12" sm="10" class="d-flex">
        <v-radio-group inline v-model="localValue.radioname">
          <v-radio
            label="ส่วนกลาง"
            value="ส่วนกลาง"
            @change="showcentral"
          ></v-radio>
          <v-spacer></v-spacer>
          <v-radio
            label="สำนักทะเบียน"
            value="สำนักทะเบียน"
            :readonly="isUserInspectionRoute"
            @change="showoffice"
          ></v-radio>
          <v-spacer></v-spacer>
          <v-radio
            label="ศาลากลาง"
            value="ศาลากลาง"
            :readonly="isUserInspectionRoute"
            @change="showcityhall"
          ></v-radio>
          <v-spacer></v-spacer>
          <v-radio
            label="ศูนย์จังหวัด"
            value="ศูนย์จังหวัด"
            :readonly="isUserInspectionRoute"
            @change="showprovince"
          ></v-radio>
          <v-spacer></v-spacer>
          <v-radio
            label="ศูนย์ภาค"
            value="ศูนย์ภาค"
            :readonly="isUserInspectionRoute"
            @change="showregional"
          ></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" sm="2" lg="2">
        <v-select
          v-model="localValue.zone"
          :items="itemzone"
          :disabled="isDisabledzone"
          :readonly="isUserInspectionRoute"
          variant="outlined"
          density="compact"
        >
        </v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" lg="4">
        <v-text-field
          v-model="localValue.lWork"
          label="ตำแหน่ง(สายงาน)"
          placeholder="ตำแหน่ง(สายงาน)"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          density="compact"
          :readonly="isUserInspectionRoute"
        />
      </v-col>
      <v-col cols="12" sm="4" lg="4">
        <v-text-field
          v-model="localValue.level"
          label="ระดับ"
          placeholder="ระดับ"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          density="compact"
          :readonly="isUserInspectionRoute"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4" lg="4">
        <v-text-field
          v-model="localValue.lAdmin"
          label="ตำแหน่ง(สายบริหาร)"
          placeholder="ตำแหน่ง(สายบริหาร)"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          density="compact"
          :readonly="isUserInspectionRoute"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="4" lg="4">
        <v-text-field
          v-model="localValue.group"
          label="กลุ่ม/ฝ่าย"
          placeholder="กลุ่ม/ฝ่าย"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          density="compact"
          :readonly="isUserInspectionRoute"
        />
      </v-col>
      <v-col cols="12" sm="4" lg="4">
        <v-select
          v-model="localValue.province"
          :items="provinces"
          label="จังหวัด"
          placeholder="จังหวัด"
          variant="outlined"
          density="compact"
          v-if="hideprovince"
          :readonly="isUserInspectionRoute"
        >
        </v-select>
      </v-col>
      <v-col cols="12" sm="4" lg="4">
        <v-select
          v-model="localValue.district"
          :items="districts"
          label="อำเภอ"
          placeholder="อำเภอ"
          variant="outlined"
          density="compact"
          v-if="hidedistrict"
          :readonly="isUserInspectionRoute"
        >
        </v-select>
      </v-col>
    </v-row>

    <v-row v-if="hidepartandoffice">
      <v-col cols="12" sm="4" lg="4">
        <v-text-field
          v-model="localValue.part"
          label="่ส่วน"
          placeholder="ส่วน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          density="compact"
          :readonly="isUserInspectionRoute"
        />
      </v-col>
      <v-col cols="12" sm="4" lg="4">
        <v-text-field
          v-model="localValue.office"
          label="สำนักงาน"
          placeholder="สำนักงาน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          density="compact"
          :readonly="isUserInspectionRoute"
        />
      </v-col>
    </v-row>
    <SectionVue
      color="#D8B192"
      icon="mdi-card-account-phone"
      header="ข้อมูลการติดต่อ"
    />
    <v-row>
      <v-col cols="12" sm="4" lg="4">
        <v-text-field
          v-model="localValue.tel"
          label="เบอร์โทรศัพท์ที่สามารถติดต่อได้(ที่ทำงาน)"
          placeholder="เบอร์โทรศัพท์ที่ามารถติดต่อได้(ที่ทำงาน)"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          density="compact"
          :readonly="isUserInspectionRoute"
        />
      </v-col>
      <v-col cols="12" sm="4" lg="4">
        <v-text-field
          v-model="localValue.phone"
          label="(มือถือ)"
          placeholder="(มือถือ)"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          density="compact"
          :readonly="isUserInspectionRoute"
        />
      </v-col>
      <v-col cols="12" sm="4" lg="4">
        <v-text-field
          v-model="localValue.email"
          label="E-mail Address"
          placeholder="E-mail Address"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          density="compact"
          :readonly="isUserInspectionRoute"
        />
      </v-col>
    </v-row>

    <v-row >
      <v-col cols="12" sm="7" lg="4" class="d-flex">
        <h4 density="compact">
          กลุ่มตำแหน่งของผู้เข้าใช้ระบบงาน(เลือได้เพียง 1 ช่อง)
        </h4>
      </v-col>
      <v-col cols="12" sm="3" lg="2" class="d-flex">
        <v-checkbox
          label="ผู้ตรวจการ"
          value="ผู้ตรวจการ"
          v-model="localValue.inspector"
          density="compact"
          :readonly="isUserInspectionRoute"
        ></v-checkbox>
      </v-col>
      <v-col cols="12" sm="2" lg="2" class="d-flex">
        <v-text-field
          v-model="localValue.password"
          label="รหัสผ่าน"
          placeholder="รหัสผ่าน"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
          density="compact"
          :readonly="isUserInspectionRoute"
        />
      </v-col>

    </v-row>

    <v-row>
      <v-col >
        <v-radio-group v-model="localValue.radiogroup" v-if="hideradio">
          <v-radio
            label="1.นายทะเบียน(ผู้ว่าราชารจังหวัด/รองผู้ว่าราชการจังหวัด/ปลัดจังหวัด/นายอำเภอ)"
            value="1.นายทะเบียน(ผู้ว่าราชารจังหวัด/รองผู้ว่าราชการจังหวัด/ปลัดจังหวัด/นายอำเภอ)"
            :disabled="isDisabled1"
            :readonly="isUserInspectionRoute"
          ></v-radio>
          <v-radio
            label="2.หัวหน้าผู้รับผิดชอบ(ปลัดอำเภอหัวหน้าฝ่าย/ปลัดอำเภอ/นิติกร)"
            value="2.หัวหน้าผู้รับผิดชอบ(ปลัดอำเภอหัวหน้าฝ่าย/ปลัดอำเภอ/นิติกร)"
            :disabled="isDisabled2"
            :readonly="isUserInspectionRoute"
          ></v-radio>
          <v-radio
            label="3.ผู้ปฎิบัติงาน(เจ้าพนักงานปกครอง/ปลัอำเภอ/นิติกร/เจ้าหน้าที่ปกครอง/พนักงานราชการ/สมาชิก อ.ส./ลูกจ้าง)"
            value="3.ผู้ปฎิบัติงาน(เจ้าพนักงานปกครอง/ปลัอำเภอ/นิติกร/เจ้าหน้าที่ปกครอง/พนักงานราชการ/สมาชิก อ.ส./ลูกจ้าง)"
            :disabled="isDisabled3"
            :readonly="isUserInspectionRoute"
          ></v-radio>
          <v-radio label="4.เสมียนตรา" value="4"></v-radio>
          <v-radio
            label="8.ศูนย์บริหารทะเบียนภาค/ศูนย์บริหารการทะเบียนภาคสาขาจังหวัด"
            value="8.ศูนย์บริหารทะเบียนภาค/ศูนย์บริหารการทะเบียนภาคสาขาจังหวัด"
            :disabled="isDisabled8"
            :readonly="isUserInspectionRoute"
          ></v-radio>
          <v-radio
            v-if="hideDisabled9"
            label="9.ผู้ดูแลระบบ"
            value="9.ผู้ดูแลระบบ"
            :readonly="isUserInspectionRoute"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { reactive } from "vue";
import SectionVue from "@/components/Widget/Section";
export default {
  name: "User-General",

  components: {
    SectionVue,
  },
  data() {
    return {
      itemzone: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      provinces: ["--จังหวัด--"],
      districts: ["--สำนักทะเบียน--"],
      hideprovince: false,
      hidedistrict: false,
      hidepartandoffice: false,
      isDisabledzone: true,
      isDisabled1: false,
      isDisabled2: false,
      isDisabled3: false,
      isDisabled8: false,
      hideDisabled9: true,
      hideradio: false,
    };
  },
  methods: {
    showcentral() {
      if (this.localValue.radioname === "ส่วนกลาง") {
        this.hidepartandoffice = true;
        this.hideprovince = false;
        this.hidedistrict = false;
        this.hideradio = true;
        this.isDisabledzone = true;
        this.isDisabled1 = false;
        this.isDisabled2 = false;
        this.isDisabled3 = false;
        this.isDisabled8 = false;
        this.hideDisabled9 = true;
      } else {
        this.hidepartandoffice = false;
      }
    },
    showoffice() {
      if (this.localValue.radioname === "สำนักทะเบียน") {
        this.hideprovince = true;
        this.hidedistrict = true;
        this.hideradio = true;
        this.hidepartandoffice = false;
        this.hidepartandoffice = false;
        this.isDisabledzone = true;
        this.isDisabled1 = false;
        this.isDisabled2 = false;
        this.isDisabled3 = false;
        this.isDisabled8 = true;
        this.hideDisabled9 = false;
      } else {
        this.hideprovince = false;
        this.hidedistrict = false;
        this.hideradio = false;
      }
    },
    showcityhall() {
      if (this.localValue.radioname === "ศาลากลาง") {
        this.hideprovince = true;
        this.hidedistrict = false;
        this.hidepartandoffice = false;
        this.hideradio = true;
        this.isDisabledzone = true;
        this.isDisabled1 = false;
        this.isDisabled2 = false;
        this.isDisabled3 = false;
        this.isDisabled8 = true;
        this.hideDisabled9 = false;
      } else {
        this.hideprovince = false;
      }
    },
    showprovince() {
      if (this.localValue.radioname === "ศูนย์จังหวัด") {
        this.hideprovince = true;
        this.hidedistrict = false;
        this.hidepartandoffice = false;
        this.hideradio = true;
        this.isDisabledzone = true;
        this.isDisabled1 = true;
        this.isDisabled2 = true;
        this.isDisabled3 = true;
        this.isDisabled8 = false;
        this.hideDisabled9 = false;
      } else {
        this.hideprovince = false;
      }
    },
    showregional() {
      if (this.localValue.radioname === "ศูนย์ภาค") {
        this.hideprovince = false;
        this.hidedistrict = false;
        this.hidepartandoffice = false;
        this.hideradio = true;
        this.isDisabledzone = false;
        this.isDisabled1 = true;
        this.isDisabled2 = true;
        this.isDisabled3 = true;
        this.isDisabled8 = false;
        this.hideDisabled9 = false;
      } else {
        this.hideprovince = false;
      }
    },
  },
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {
          pid: "",
          tName: "",
          fName: "",
          lName: "",
          date: "",
          zone: "",
          lWork: "",
          level: "",
          lAdmin: "",
          group: "",
          province: "",
          district: "",
          part: "",
          office: "",
          tel: "",
          phone: "",
          email: "",
          radioname: "",
          radiogroup: "",
          inspector: "",
          password: "",
        };
      },
    },
    readonly: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isUserInspectionRoute() {
      return this.$route.name === "userInspection";
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
