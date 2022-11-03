import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styles } from './styles';

interface CustomTableInterface {
    rows : any;
    coloumns : any;
    itemsPerPage: any;
    rowsPerPage : any;
    rowHeight? : number
}

const CustomTable = (props : CustomTableInterface) => {
    const { rows , coloumns, itemsPerPage,rowsPerPage,rowHeight } = props;
    return(
        <div style={styles.tableContainer}>
            <DataGrid
                rows={rows}
                columns={coloumns}
                pageSize={itemsPerPage}
                rowsPerPageOptions={[rowsPerPage]}
                rowHeight={rowHeight ? rowHeight : 100}
            />
        </div>
        
    )
}

export default CustomTable