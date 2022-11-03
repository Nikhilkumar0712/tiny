import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styles } from './styles';
import makeStyles from "@material-ui/styles/makeStyles";

interface CustomTableInterface {
    rows : any;
    coloumns : any;
    itemsPerPage: any;
    rowsPerPage : any;
   onCellClick:any
    rowHeight? : number
}

const useStyles = makeStyles({
    customOutline: {
        "& .MuiDataGrid-renderingZone": {
          maxHeight: "none !important"
        },
        "& .MuiDataGrid-cell": {
          lineHeight: "unset !important",
          maxHeight: "none !important",
          whiteSpace: "normal"
        },
        "& .MuiDataGrid-row": {
          maxHeight: "none !important"
        }
      }
  });

const CustomTable = (props : CustomTableInterface) => {
    const { rows , coloumns, itemsPerPage,rowsPerPage, rowHeight,  onCellClick} = props;
    const classes = useStyles();
    return(
        <div style={styles.tableContainer}>
            <DataGrid
            classes={{ root: classes.customOutline }}
                rows={rows}
                columns={coloumns}
                pageSize={itemsPerPage}
                rowsPerPageOptions={[rowsPerPage]}
                rowHeight={rowHeight ? rowHeight : 100}
                onCellClick={onCellClick}
            />
        </div>
        
    )
}

export default CustomTable