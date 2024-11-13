import { SideBarLinkProps } from "../../../atoms/admin/SideBarLink/types";
import { IoCarSportOutline } from "react-icons/io5";
import { HiViewGridAdd } from "react-icons/hi";
import { GrBlog } from "react-icons/gr";
import { FaClipboardQuestion } from "react-icons/fa6";
import { GiLetterBomb } from "react-icons/gi";
import { RiContactsBook3Line } from "react-icons/ri";
import { LiaSignOutAltSolid } from "react-icons/lia";

export const SideBarLinksData: SideBarLinkProps[] = [
  {
    linkTitle: "Cars",
    LinkIcon: IoCarSportOutline,
    linkOptions: [
      { title: "Used Cars", path: "/getUsedCars" },
      { title: "Bank Released Cars", path: "/getBankCars" },
      { title: "New Cars", path: "/getNewCars" },
    ],
  },
  {
    linkTitle: "Add Car For Sale",
    LinkIcon: HiViewGridAdd,
    linkOptions: [
      { title: "Add New Car", path: "/addNewCar" },
      { title: "Add Used/Bank Released Car", path: "/addUsedOrBankCar" },
    ],
  },
  {
    linkTitle: "Blogs",
    LinkIcon: GrBlog,
    linkOptions: [
      { title: "Add New Blog", path: "/addNewBlog" },
    ],
  },
  {
    linkTitle: "News letter",
    LinkIcon: GiLetterBomb,
    linkOptions: [{ title: "Create News Letter", path: "/createNewsLetter" }],
  },

  {
    linkTitle: "Query",
    linkPath: "/getAllQueries",
    LinkIcon: FaClipboardQuestion,
  },
  {
    linkTitle: "Messages",
    linkPath: "/getAllMessages",
    LinkIcon: RiContactsBook3Line,
  },
  {
    linkTitle: "Sign Out",
    linkPath: "/",
    LinkIcon: LiaSignOutAltSolid,
  },
];
