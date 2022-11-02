/* eslint-disable no-unused-vars */
import { useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';

// project import
import { DataGrid } from '@mui/x-data-grid';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { EyeOutlined, PlusOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { IconButton } from '../../../node_modules/@mui/material/index';
import AddNewWarnings from './AddNewWarnings';
import AnimateButton from 'components/@extended/AnimateButton';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales User status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const User = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const navigate = useNavigate();
    const columns = [
        { field: 'id', headerName: 'S/N', width: 100 },
        { field: 'name', headerName: 'Name', width: 220 },
        { field: 'ip', headerName: 'Ip Address', width: 150 },
        { field: 'username', headerName: 'UserName', width: 200 },
        {
            field: 'category',
            headerName: 'Category',
            width: 150
        },
        {
            field: 'state',
            headerName: 'State',
            // description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 150
        },
        { field: 'date', headerName: 'Date', width: 150 },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => (
                <Button>
                    <IconButton
                        // component={AddNewWarnings}
                        // target="_blank"
                        disableRipple
                        // color="secondary"
                        title=""
                        onClick={() => navigate('/admin/dashboard/view-users')}
                        // sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                    >
                        <EyeOutlined />
                    </IconButton>
                </Button>
            )
        }
    ];
    const rows = [
        {
            id: 1,
            name: 'Abdullahi Khalil  ',
            ip: '192.232.433.12',
            username: 'Abdullahi  ',
            category: 'registered',
            state: 'Abuja',
            date: '12/12/1212'
            // action: () => <div>Hello</div>
        },
        {
            id: 2,
            name: 'Ishaq Ibrahim ',
            ip: '102.432.224.44',
            username: 'Ishaq  ',
            category: 'anonymous',
            state: 'Kano',
            date: '12/12/1212'
            // action: () => <div>Hello</div>
        }
    ];
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* <Grid container xs={12} md={12} marginTop={3}>
                <Button>
                    <IconButton
                        // component={AddNewWarnings}
                        href="/admin/dashboard/view-User"
                        // target="_blank"
                        disableRipple
                        color="secondary"
                        title=""
                        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                    >
                        <PlusOutlined />
                    </IconButton>
                </Button>
            </Grid> */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="All Users" count="80" percentage={59.4} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="New Users" count="80" percentage={27.4} color="warning" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Registered Users" count="80" percentage={70.5} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Anonymous Users" count="80" percentage={27.4} color="warning" />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            <div style={{ height: 400, width: '100%', marginLeft: '20px', marginTop: '40px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    border={10}
                    // experimentalFeatures={{ newEditingApi: true }}
                />
            </div>
        </Grid>
    );
};

export default User;
