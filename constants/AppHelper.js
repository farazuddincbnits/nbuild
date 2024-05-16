const PAGE_LIMIT = 100;
const SUPER_ADMIN_ROLEITEMS = [
  {
    label: "Member",
    value: "MEMBER",
    key: 0
  },
  {
    label: "Admin",
    value: "ADMIN",
    key: 1
  },
  {
    label: "Super Admin",
    value: "SUPER_ADMIN",
    key: 2
  },
];

const MEMBER_PROMOTE_ROLEITEMS = [
  {
    label: "Member",
    value: "MEMBER",
    key: 0
  },
  {
    label: "Admin",
    value: "ADMIN",
    key: 1
  },
  {
    label: "Super Admin",
    value: "SUPER_ADMIN",
    key: 2
  },
  // {
  //   label: "Kick User",
  //   value: "KICK_USER",
  //   key: 3
  // },
];
export default {
  PAGE_LIMIT,
  SUPER_ADMIN_ROLEITEMS,
  MEMBER_PROMOTE_ROLEITEMS,
};