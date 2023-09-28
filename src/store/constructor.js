class General {
  constructor() {
    this.pid = "";
    this.tName = "";
    this.fName = "";
    this.lName = "";
    this.date = "";
    this.zone = "";
    this.lWork = "";
    this.level = "";
    this.lAdmin = "";
    this.group = "";
    this.province = "";
    this.district = "";
    this.part = "";
    this.ofice = "";
    this.tel = "";
    this.phone = "";
    this.email = "";
    this.radioname="";
    this.radiogroup="";
    this.inspector="";
  }
}

class Permission {
  constructor() {
    this.selected = [];
  }
}

export default {
  General,
  Permission,
};
