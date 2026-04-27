import { useState, type ComponentType } from 'react'
import { Button, Segmented, Select, Space } from 'antd'
import { AgGridTable } from './components/ag-grid-table.tsx'
import { AntdRegularTable } from './components/antd-regular-table.tsx'
import { AntdVirtualTable } from './components/antd-virtual-table.tsx'
import { TanstackVirtualTable } from './components/tanstack-virtual-table.tsx'
import type { Row, TableVariant } from './types'
import { generateTableData } from './utils/generate-table-data.ts'
import './App.css'

const ROW_COUNTS = [100, 500, 1000] as const

const VARIANTS: { label: string; value: TableVariant }[] = [
  { label: 'Antd Virtual', value: 'antd-virtual' },
  { label: 'Antd Regular', value: 'antd-regular' },
  { label: 'AG Grid', value: 'ag-grid' },
  { label: 'Tanstack Virtual', value: 'tanstack-virtual' },
]

const TABLES: Record<TableVariant, ComponentType<{ data: Row[] }>> = {
  'antd-virtual': AntdVirtualTable,
  'antd-regular': AntdRegularTable,
  'ag-grid': AgGridTable,
  'tanstack-virtual': TanstackVirtualTable,
}

const DEFAULT_ROW_COUNT = 1000

function App() {
  const [variant, setVariant] = useState<TableVariant>('antd-virtual')
  const [rowCount, setRowCount] = useState<number>(DEFAULT_ROW_COUNT)
  const [data, setData] = useState<Row[]>(() => generateTableData(DEFAULT_ROW_COUNT))

  const handleRowCountChange = (n: number) => {
    setRowCount(n)
    setData(generateTableData(n))
  }
  const handleRegenerate = () => setData(generateTableData(rowCount))

  const ActiveTable = TABLES[variant]

  return (
    <div className="app">
      <header className="app-toolbar">
        <Space size="middle" wrap>
          <Segmented
            options={VARIANTS}
            value={variant}
            onChange={(v) => setVariant(v as TableVariant)}
          />
          <Select
            value={rowCount}
            onChange={handleRowCountChange}
            options={ROW_COUNTS.map((n) => ({ label: `${n} rows`, value: n }))}
            style={{ width: 120 }}
          />
          <Button onClick={handleRegenerate}>Regenerate data</Button>
        </Space>
      </header>
      <main className="app-content">
        <ActiveTable data={data} />
      </main>
    </div>
  )
}

export default App
