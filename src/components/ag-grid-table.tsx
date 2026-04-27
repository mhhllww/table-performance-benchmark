import type { TableProps } from '../types'

export function AgGridTable({ data }: TableProps) {
  return (
    <div className="table-placeholder">
      <h2>AgGridTable</h2>
      <p>{data.length} rows · TODO: implement ag-grid-react (community)</p>
    </div>
  )
}
