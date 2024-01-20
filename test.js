// const arr = [1, 2, 3, 4];
// const result = arr.reduce((acc, item) => {
//   console.log("additon=>", acc);
//   return acc + item;
// }, 0);
// console.log("inside", result);
export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "Admin Dashboard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: "Admin Dashboard",
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: "Admin Dashboard",
      },
      {
        name: "Create Student",
        path: "/admin/dashboard",
        element: "Admin Dashboard",
      },
    ],
  },
];

const result = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: item.name,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: child.name,
      })),
    });
  }
  return acc;
}, []);

console.log("inside", result);

// const result = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);
