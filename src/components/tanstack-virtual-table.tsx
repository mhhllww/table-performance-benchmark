import type { TableProps } from '../types'

export function TanstackVirtualTable({ data }: TableProps) {
  return (
    <div className="table-placeholder">
      <h2>TanstackVirtualTable</h2>
      <p>{data.length} rows · TODO: implement @tanstack/react-virtual + native HTML table</p>
    </div>
  )
}
