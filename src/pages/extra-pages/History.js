import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditWrapper from 'pages/authentication/EditWrapper';

const columns = [
    { field: 'id', headerName: 'S/N', width: 70 },
    { field: 'firstName', headerName: 'Ip Address', width: 130 },
    { field: 'lastName', headerName: 'Username', width: 130 },
    {
        field: 'age',
        headerName: 'Sign In Date',
        type: 'number',
        width: 140
    },
    {
        field: 'fullName',
        headerName: 'Sign Out',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
    },
    { field: 'firtName', headerName: 'Status', width: 130 }
];
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 , firtName: 'new'}
];

export default function History() {
    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
            </div>
        </>
    );
}
