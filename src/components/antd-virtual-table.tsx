import type { TableProps } from '../types'

export function AntdVirtualTable({ data }: TableProps) {
  return (
    <div className="table-placeholder">
      <h2>AntdVirtualTable</h2>
      <p>{data.length} rows · TODO: implement antd Table with virtual prop</p>
    </div>
  )
}
