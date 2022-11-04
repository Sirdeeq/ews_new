/* eslint-disable no-unused-vars */
import { useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project import
import { DataGrid } from '@mui/x-data-grid';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, CardActionArea, CardContacts, CardMedia, IconButton, Typography } from '../../../node_modules/@mui/material/index';
import AddNewContact from './AddNewContact';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Contacts = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const navigate = useNavigate();
    const columns = [
        { field: 'id', headerName: 'S/N', width: 100 },
        { field: 'name', headerName: 'Name', width: 220 },
        { field: 'username', headerName: 'UserName', width: 200 },
        {
            field: 'email',
            headerName: 'Email',
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
                        {/* <EyeOutlined /> */}H
                    </IconButton>
                </Button>
            )
        }
    ];
    const columns2 = [
        { field: 'id', headerName: 'S/N', width: 100 },
        { field: 'name', headerName: 'Name', width: 220 },
        { field: 'username', headerName: 'UserName', width: 200 },
        {
            field: 'phone',
            headerName: 'Phone',
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
                        {/* <EyeOutlined /> */}H
                    </IconButton>
                </Button>
            )
        }
    ];
    const rows = [
        {
            id: 1,
            name: 'Abdullahi Khalil  ',
            username: 'Abdullahi  ',
            email: 'abdullahik124@gmail.com',
            date: '12/12/1212'
            // action: () => <div>Hello</div>
        },
        {
            id: 2,
            name: 'Ishaq Ibrahim ',
            username: 'Ishaq  ',
            email: 'ishaqbg@mail.com',
            date: '12/12/1212'
            // action: () => <div>Hello</div>
        }
    ];
    const row2 = [
        {
            id: 1,
            name: 'Abdullahi Khalil  ',
            username: 'Abdullahi  ',
            phone: '08027999992',
            date: '12/12/1212'
            // action: () => <div>Hello</div>
        },
        {
            id: 2,
            name: 'Ishaq Ibrahim ',
            username: 'Ishaq  ',
            phone: '09037231098',
            date: '12/12/1212'
            // action: () => <div>Hello</div>
        }
    ];
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid container xs={12} md={12} marginTop={3}>
                <Button>
                    <IconButton
                        // component={AddNewContact}
                        // target="_blank"
                        href="/admin/dashboard/new-contact"
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
                <AnalyticEcommerce title="All Contacts" count="4,42,246" percentage={59.4} extra="45,000" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="2022 Contacts" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Email Contacts" count="78,250" percentage={70.5} extra="8,900" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Phone Contacts" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            {/* Pictures */}
            <Grid container rowSpacing={1.5}>
                <Grid xs={12} md={12} lg={12}>
                    <center>
                        <h1>Emails</h1>
                    </center>
                    <Grid>
                        <div style={{ height: 250, width: '100%', marginLeft: '20px', marginTop: '40px' }}>
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
                </Grid>
            </Grid>
            <Grid container rowSpacing={1.5}>
                <Grid xs={12} md={12} lg={12}>
                    <center>
                        <h1>Phone numbers</h1>
                    </center>
                    <Grid>
                        <div style={{ height: 250, width: '100%', marginLeft: '20px', marginTop: '40px' }}>
                            <DataGrid
                                rows={row2}
                                columns={columns2}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                                disableSelectionOnClick
                                border={10}
                                // experimentalFeatures={{ newEditingApi: true }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Contacts;
