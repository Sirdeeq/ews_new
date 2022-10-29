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
import { GiftOutlined, MessageOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { IconButton } from '../../../node_modules/@mui/material/index';
import AddNewWarnings from './AddNewWarnings';

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

// sales report status
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

const DashboardDefault = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const columns = [
        { field: 'id', headerName: 'S/N', width: 70 },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'disaster', headerName: 'Disaster', width: 130 },
        {
            field: 'severity',
            headerName: 'Severity',
            type: 'number',
            width: 140
        },
        {
            field: 'status',
            headerName: 'Status',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 130,
            valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
        },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'action', headerName: 'Action', width: 150 }
    ];
    const rows = [
        { id: 1, title: 'New Title', disaster: 'Flooding  ', severity: 35, status: 'new', date: '12/12/1212', action: 'View Button' }
    ];
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid container xs={12} md={12} marginTop={3}>
                <Button>
                    <IconButton
                        // component={AddNewWarnings}
                        href="/admin/dashboard/new-warning"
                        // target="_blank"
                        disableRipple
                        color="secondary"
                        title=""
                        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
                    >
                        <PlusOutlined />
                    </IconButton>
                </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="All Warnings" count="4,42,236" percentage={59.3} extra="35,000" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="2022 Warnings" count="78,250" percentage={70.5} extra="8,900" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="October Warnings" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Today's Warnings" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
            </div>
        </Grid>
    );
};

export default DashboardDefault;
