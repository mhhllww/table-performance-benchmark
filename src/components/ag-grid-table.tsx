import type { Row, TableProps } from '../types'
import { AgGridProvider, AgGridReact } from 'ag-grid-react'
import { AllCommunityModule, type ColDef } from 'ag-grid-community'

const columns: ColDef<Row>[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'name', headerName: 'Name' },
  { field: 'email', headerName: 'Email' },
  { field: 'status', headerName: 'Status' },
  { field: 'department', headerName: 'Department' },
  { field: 'salary', headerName: 'Salary' },
  { field: 'date', headerName: 'Date' },
  { field: 'country', headerName: 'Country' },
  { field: 'phone', headerName: 'Phone' },
  { field: 'priority', headerName: 'Priority' },
  { field: 'progress', headerName: 'Progress' },
  { field: 'category', headerName: 'Category' },
  { field: 'rating', headerName: 'Rating' },
  { field: 'description', headerName: 'Description' },
]

export function AgGridTable({ data }: TableProps) {
  return (
    <AgGridProvider modules={[AllCommunityModule]}>
      <div className="table-placeholder w-full h-full">
        <h2>AgGridTable</h2>
        <AgGridReact<Row> rowData={data} columnDefs={columns} defaultColDef={{ flex: 1 }} />
      </div>
    </AgGridProvider>
  )
}
