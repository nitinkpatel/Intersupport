import { Card } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid"

const columns = [
  { field: 'id', headerName: 'Details', flex:1},
  { field: 'value', headerName: 'Values', flex:1},
]

export default function StoneDetailsCard(props){
  return (
    <Card>
      <DataGrid 
        autoHeight
        columns={columns}
        disableColumnFilter
        density="compact"
        // hideFooterPagination
        // hideFooterSelectedRowCount
        rows={props.stoneDetails}
      />
    </Card>     
  ); 
}