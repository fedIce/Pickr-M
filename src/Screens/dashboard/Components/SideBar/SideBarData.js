import * as Unicon from '@iconscout/react-unicons'

export const SideBarData = [
    {
        id: 1,
        title: "Dashboard",
        icon: <Unicon.UilDashboard className="sidebar_icons" />,
        path: "/dashboard",
        cName: "dash_nav_item"
    },
    {
        id: 2,
        title: "Account",
        icon: <Unicon.UilUser className="sidebar_icons" />,
        path: "/dashboard/user",
        cName: "dash_nav_item"
    }
]

export const SideBarBottomData = [
    {
        id: 1,
        title: "Settings",
        icon: <Unicon.UilSetting  className="sidebar_icons" />,
        path: "/dashboard/settings",
        cName: "dash_nav_item"
    },
    {
        id: 2,
        title: "Log out",
        icon: <Unicon.UilSignout className="sidebar_icons" />,
        path: "/dashboard/signout",
        cName: "dash_nav_item"
    }
]