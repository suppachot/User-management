class General {
  constructor() {
    this.pid = "";
    this.tName = ""; //คำนำหน้าชื่อ
    this.fName = ""; //ชื่อ
    this.lName = ""; //นามสกุล
    this.date = "";
    this.zone = ""; //ศูนย์ภาค
    this.lWork = ""; //ตำแหน่ง (สายงาน)
    this.level = ""; //ระดับ
    this.lAdmin = ""; //ตำแหน่ง(สายบริหาร)
    this.group = ""; //ส่วนกลาง
    this.province = "";
    this.district = "";
    this.part = ""; //ส่วน
    this.ofice = ""; //สำนักงาน
    this.tel = "";
    this.phone = "";
    this.email = "";
    this.radioname = ""; //สถานที่ปฎิบัติงาน
    this.radiogroup = ""; //กลุ่มตำแหน่งของผู้เข้าใช้ระบบงาน
    this.inspector = "";  //ผู้ตรวจการ
    this.password ="";  //รหัสผ่าน
  }
}

class Permission {
  constructor() {
    this.selectedPermission = []; //checkBox กำหนดสิทธิ
  }
}

export default {
  General,
  Permission,
};
