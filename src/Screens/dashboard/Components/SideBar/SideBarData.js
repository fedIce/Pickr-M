import * as Unicon from '@iconscout/react-unicons'

export const SideBarData = [
    {
        id: 1,
        title: "Analytics",
        icon: <Unicon.UilAnalytics className="sidebar_icons" />,
        path: "/dashboard",
        cName: "dash_nav_item"
    },
    {
        id: 2,
        title: "Menus",
        icon: <Unicon.UilRestaurant className="sidebar_icons" />,
        path: "/dashboard/menus",
        cName: "dash_nav_item"
    },
    {
        id: 3,
        title: "Payments",
        icon: <Unicon.UilCreditCard className="sidebar_icons" />,
        path: "/dashboard/payments",
        cName: "dash_nav_item"
    },
    {
        id: 4,
        title: "Orders",
        icon: <Unicon.UilFile className="sidebar_icons" />,
        path: "/dashboard/orders",
        cName: "dash_nav_item"
    },
    {
        id: 5,
        title: "Chats",
        icon: <Unicon.UilCommentAlt className="sidebar_icons" />,
        path: "/dashboard/chats",
        cName: "dash_nav_item"
    }
]

export const SideBarBottomData = [
    // {
    //     id: 1,
    //     title: "Settings",
    //     icon: <Unicon.UilSetting  className="sidebar_icons" />,
    //     path: "/dashboard/settings",
    //     cName: "dash_nav_item"
    // },
    {
        id: 1,
        title: "Help",
        icon: <Unicon.UilQuestionCircle className="sidebar_icons" />,
        path: "/dashboard/help",
        cName: "dash_nav_item"
    },
    {
        id: 2,
        title: "Log out",
        icon: <Unicon.UilSignout className="sidebar_icons" />,
        path: "#",
        cName: "dash_nav_item"
    }
]