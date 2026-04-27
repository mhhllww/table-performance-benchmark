import type { TableProps } from '../types'

export function AntdRegularTable({ data }: TableProps) {
  return (
    <div className="table-placeholder">
      <h2>AntdRegularTable</h2>
      <p>{data.length} rows · TODO: implement antd Table without virtualization</p>
    </div>
  )
}
