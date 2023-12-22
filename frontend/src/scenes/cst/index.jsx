import { useGetCustomersQuery } from "../../state/api";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Cst = () => {
  const { data, isLoading } = useGetCustomersQuery();
  const columns = [
    { field: '_id', headerName: '_id', width: 90 },
    {
      field: 'name',
      headerName: 'name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'email',
      width: 150,
      editable: true,
    },
    {
      field: 'city',
      headerName: 'city',
      type: 'number',
      width: 110,
      editable: true,
    },

  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    !isLoading ?
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={!isLoading ? data : {}}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      : null
  );
}

export default Cst

// {_id: '63701cc1f03239c72c000186', name: 'Paola', email: 'pledger7@freewebs.com', city: 'Xian’an', state: null, …}