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

const Report = () => {
    const [selection, setSelection] = useState([]);
    const columns = [
        {
            field: 'id',
            headerName: 'S/N',
            width: 100,
            valueGetter: (params) => `${params.row.id || ''}`
        },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'disaster', headerName: 'Disaster', width: 200 },
        {
            field: 'severity',
            headerName: 'Severity',
            width: 200
        },
        {
            field: 'status',
            headerName: 'Status',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 150
        },
        { field: 'date', headerName: 'Date', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 350,
            renderCell: () => (
                <Button>
                    <IconButton
                        // component={AddNewWarnings}
                        // target="_blank"
                        href="/admin/dashboard/view-reports"
                        disableRipple
                        // color="secondary"
                        title=""
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
            title: 'New Title',
            disaster: 'Flooding  ',
            severity: 35,
            status: 'new',
            date: '12/12/1212'
            // action: () => <div>Hello</div>
        },
        {
            id: 2,
            title: 'New Title',
            disaster: 'Flooding  ',
            severity: 35,
            status: 'new',
            date: '12/12/1212'
            // action: () => <div>Hello</div>
        },
        {
            id: 3,
            title: 'New Title',
            disaster: 'Flooding  ',
            severity: 35,
            status: 'new',
            date: '12/12/1212'
            // action: () => <div>Hello</div>
        }
    ];
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="All Reports" count="4,42,236" percentage={59.3} extra="35,000" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="2022 Reports" count="78,250" percentage={70.5} extra="8,900" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="October Reports" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Today's Reports" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            <h1>{selection.map((val) => val.title)}</h1>
            <div style={{ height: 400, width: '100%', marginLeft: '20px', marginTop: '40px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    border={10}
                    onSelectionChange={(newSelection) => {
                        setSelection(newSelection.rows);
                    }}
                    // experimentalFeatures={{ newEditingApi: true }}
                />
            </div>
        </Grid>
    );
};

export default Report;
