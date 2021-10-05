import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function deleteItem() {
    return (
        <div>
            <h4> Delete Item? </h4>
            <div>Are you sure you want to delete this item? This cannot be undone.</div>
            <Stack spacing={2} direction="row">
                <Button variant="text">Cancel</Button>
                <Button variant="contained">Confirm</Button>
            </Stack>
        </div>
    );
}