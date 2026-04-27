export type Status = 'active' | 'inactive' | 'pending'
export type Priority = 'low' | 'medium' | 'high' | 'critical'

export interface Row {
  id: number
  name: string
  email: string
  status: Status
  department: string
  salary: number
  date: string
  country: string
  phone: string
  priority: Priority
  progress: number
  description: string
  category: string
  rating: number
}

export type TableVariant = 'antd-virtual' | 'antd-regular' | 'ag-grid' | 'tanstack-virtual'

export interface TableProps {
  data: Row[]
}
