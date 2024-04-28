import { IoHome } from "react-icons/io5";
import { MdAddHomeWork } from "react-icons/md";
import { RiHomeGearFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaFileCircleCheck } from "react-icons/fa6";

export const managerSidebarData = [
    {
        title:'Home',
        link:'/manager/home',
        logo: IoHome,
        status: "active",
    },
    {
        title: 'Customers',
        link:'/manager/customers',
        logo: MdAddHomeWork,
        status: "active",
    },
    {
        title: 'Manage Events',
        link:'/manager/manage-events',
        logo: MdAddHomeWork,
        status: "active",
    },
    {
        title: 'Book Tickets',
        link:'/manager/book-tickets',
        logo: MdAddHomeWork,
        status: "active",
    },
    {
        title: 'Manage Tickets',
        link:'/manager/manage-tickets',
        logo: MdAddHomeWork,
        status: "active",
    },

]

export const adminSidebarData = [
    {
        title: 'Home',
        link:'/admin/home',
        logo: IoHome,
        status: "active",
    },
    {
        title : "Collection Report",
        link: "/admin/collection-report",
        logo: MdAddHomeWork,
        status: "active",
    },
    {
        title: "Distribution Report",
        link: "/admin/distribution-report",
        logo: MdAddHomeWork,
        status: "active",
    },
    {
        title: "Milk Bar Sales",
        link: "/admin/milk-bar-sales",
        logo: MdAddHomeWork,
        status: "active",
    },
    {
        title: "Add Manager",
        link: "/admin/add-manager",
        logo: FaUserPlus,
        status: "active",
    },


]