import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function ItemsList() {
    // Psuedo data so I can update the styles appropriately
    const gridHeader = [
        {field:'Title'},
        {field:'Description'},
        {field:'Quantity'}
    ]

    const testData = [
        {
            id:1,
            Title:'Tomato',
            Description:'Be sure to grab a tomato at the store',
            Quantity: 2
        },
        {
            id:2,
            Title:'Pizza',
            Description:'Make sure its Frozen!',
            Quantity: 1
        },
        {
            id:3,
            Title:'Coffee',
            Description:'Need to pickup coffee grounds',
            Quantity: 4
        },
    ]

    return (
        <DataGrid style={{height:"500px", 'min-width':'600px',width:'100%'}} disableExtendRowFullWidth={true} spacing={3} xl={4} rows={testData} columns={gridHeader} headerAlign={"center"}/>
    );
}