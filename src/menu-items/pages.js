// assets
import { FileOutlined, FileAddOutlined, WarningOutlined, BarChartOutlined } from '@ant-design/icons';

// icons
const icons = {
    FileOutlined,
    FileAddOutlined,
    WarningOutlined,
    BarChartOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    // id: 'authentication',
    // title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'warnings',
            title: 'Warnings',
            type: 'item',
            url: '/admin/dashboard/warnings',
            icon: icons.WarningOutlined,
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
        {
            id: 'statistics',
            title: 'Statistics',
            type: 'item',
            url: '/admin/dashboard/statistics',
            icon: icons.BarChartOutlined,
            target: false
        }
    ]
};

export default pages;
