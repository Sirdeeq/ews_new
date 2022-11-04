// assets
import {
    FileOutlined,
    FileAddOutlined,
    WarningOutlined,
    BarChartOutlined,
    UserOutlined,
    FundOutlined,
    ContactsOutlined,
    HomeOutlined,
    NotificationOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FileOutlined,
    FileAddOutlined,
    WarningOutlined,
    BarChartOutlined,
    UserOutlined,
    FundOutlined,
    ContactsOutlined,
    HomeOutlined,
    NotificationOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    // id: 'authentication',
    // title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/admin/dashboard/users',
            icon: icons.UserOutlined,
            target: false
        },
        {
            id: 'warnings',
            title: 'Warnings',
            type: 'item',
            url: '/admin/dashboard/warnings',
            icon: icons.WarningOutlined,
            target: false
        },
        {
            id: 'broadcasts',
            title: 'Broadcast',
            type: 'item',
            url: '/admin/dashboard/broadcasts',
            icon: icons.NotificationOutlined,
            target: false
        },
        {
            id: 'reports',
            title: 'Reports',
            type: 'item',
            url: '/admin/dashboard/reports',
            icon: icons.FileOutlined,
            target: false
        },
        {
            id: 'requests',
            title: 'Requests',
            type: 'item',
            url: '/admin/dashboard/requests',
            icon: icons.FileAddOutlined,
            target: false
        },
        // {
        //     id: 'contents',
        //     title: 'Contents',
        //     type: 'item',
        //     url: '/admin/dashboard/contents',
        //     icon: icons.FundOutlined,
        //     target: false
        // },
        {
            id: 'contacts',
            title: 'Contacts',
            type: 'item',
            url: '/admin/dashboard/contacts',
            icon: icons.ContactsOutlined,
            target: false
        },
        {
            id: 'statistics',
            title: 'Statistics',
            type: 'item',
            url: '/admin/dashboard/statistics',
            icon: icons.BarChartOutlined,
            target: false
        }
        // {
        //     id: 'warnings',
        //     title: 'News',
        //     type: 'item',
        //     url: '/admin/dashboard/warnings',
        //     icon: icons.WarningOutlined,
        //     target: false
        // }
    ]
};

export default pages;
