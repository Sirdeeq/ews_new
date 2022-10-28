// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'trial',
    // title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'editprofile',
            title: 'Edit Profile',
            type: 'item',
            url: '/dashboard/editprofile',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'changepicture',
            title: 'Change Picture',
            type: 'item',
            url: '/dashboard/changepicture',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'changepassword',
            title: 'Change Password',
            type: 'item',
            url: '/dashboard/changepassword',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '/dashboard/profile',
            icon: icons.FontSizeOutlined
        }
    ]
};

export default utilities;
