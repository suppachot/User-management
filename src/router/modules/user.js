import Person from '@/views/user/request/Person.vue'
// import Manage from '@/views/user/manage/Manage'
// import Inspection  from '@/views/user/inspection/Inspection.vue'

export default [
  {
    path: '/management/user/request',
    name: 'userRequest',
    component: Person,
    meta:{ titile: 'ทะเบียนปืน - คำขอปืนบุคคล'}
  },
  {
    path: '/management/user/manage',
    name: 'userManage',
    component: Person,
    meta:{ titile: 'ทะเบียนปืน - จัดการคำขอ'}
  },
  {
    path: '/management/user/inspection',
    name: 'userInspection',
    component: Person,
    meta:{ titile: 'ทะเบียนปืน - จัดการคำขอ'}
  },
]