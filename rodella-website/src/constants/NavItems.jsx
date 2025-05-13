import { href } from "react-router-dom";

export const Menus = [
  {
    id: 1,
    name: "SAP",
    subMenuHeading: ["", "",],
    href: "/aircrafts",
    subMenu: [
      // {
      //   id: 1,
      //   name: "X-MQ650LV",
      //   desc: "Responsive design",
      //   href: "/multirotor/1"
      // },
      // {
      //   id: 2,
      //   name: "Project Talon-Q9872MV",
      //   desc: "Management content",
      //   href: "/fixedwing/1"
      // },
      // {
      //   id: 3,
      //   name: "MQ750LV",
      //   desc: "Site control",
      //   href: "/multirotor/2"
      // },
      // {
      //   id: 4,
      //   name: "Nova Wing-Q3484MXV",
      //   desc: "CMS",
      //   href: "/fixedwing/2"
      // },
       {
        id: 6,
        name: "SAP-6",
        desc: "Multirotor",
        href: "/othercrafts/1"
      },
      {
        id: 7,
        name: "SAP-7",
        desc: "Multirotor",
        href: "/othercrafts/2"
      },
      {
        id: 9,
        name: "SAP-9",
        desc: "Multirotor",
        href: "/othercrafts/3"
      },
    ],
    gridCols: 2,
  },

  {
    id: 2,
    name: "Engineering",
    href: "/engineering",
  },

  {
    id: 3,
    name: "Past Works",
    href: "/blog",
  },
  {
    id: 4,
    name: "GCS",
    href: "/gcs",
  },

  {
    id: 5,
    name: "About",
    href: "/about",
  },
];
