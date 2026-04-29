import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import type { Row, TableProps } from '../types.ts'

const columns: TableColumnsType<Row> = [
  { dataIndex: 'id', key: 'id', title: 'ID', width: 60 },
  { dataIndex: 'name', key: 'name', title: 'Name', width: 160 },
  { dataIndex: 'email', key: 'email', title: 'Email', width: 220 },
  { dataIndex: 'status', key: 'status', title: 'Status', width: 100 },
  { dataIndex: 'department', key: 'department', title: 'Department', width: 140 },
  { dataIndex: 'salary', key: 'salary', title: 'Salary', width: 110 },
  { dataIndex: 'date', key: 'date', title: 'Date', width: 110 },
  { dataIndex: 'country', key: 'country', title: 'Country', width: 110 },
  { dataIndex: 'phone', key: 'phone', title: 'Phone', width: 160 },
  { dataIndex: 'priority', key: 'priority', title: 'Priority', width: 100 },
  { dataIndex: 'progress', key: 'progress', title: 'Progress', width: 100 },
  { dataIndex: 'category', key: 'category', title: 'Category', width: 100 },
  { dataIndex: 'rating', key: 'rating', title: 'Rating', width: 90 },
  { dataIndex: 'description', key: 'description', title: 'Description' },
]

export function AntdVirtualTable({ data }: TableProps) {
  return (
    <div className="table-placeholder">
      <h2>AntdVirtualTable</h2>
      <Table<Row>
        virtual={true}
        pagination={{ pageSizeOptions: [100, 500, 1000] }}
        dataSource={data}
        columns={columns}
        rowKey="id"
        scroll={{ y: 650 }}
      />
    </div>
  )
}
