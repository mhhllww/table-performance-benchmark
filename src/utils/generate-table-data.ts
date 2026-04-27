import type { Priority, Row, Status } from '../types'

const FIRST_NAMES = [
  'Alex',
  'Maria',
  'John',
  'Anna',
  'Mike',
  'Elena',
  'David',
  'Olga',
  'Igor',
  'Sara',
  'Tom',
  'Kate',
]
const LAST_NAMES = [
  'Smith',
  'Johnson',
  'Petrov',
  'Ivanov',
  'Brown',
  'Davis',
  'Wilson',
  'Kuznetsov',
  'Garcia',
  'Müller',
]
const DEPARTMENTS = [
  'Engineering',
  'Marketing',
  'Sales',
  'HR',
  'Finance',
  'Operations',
  'Design',
  'Support',
]
const COUNTRIES = ['USA', 'Russia', 'Germany', 'France', 'Japan', 'Brazil', 'India', 'Canada', 'UK']
const STATUSES: Status[] = ['active', 'inactive', 'pending']
const PRIORITIES: Priority[] = ['low', 'medium', 'high', 'critical']
const CATEGORIES = ['A', 'B', 'C', 'D', 'E']

const pick = <T>(arr: readonly T[]): T => arr[Math.floor(Math.random() * arr.length)]
const randInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

const formatDate = (d: Date) => {
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  return `${dd}.${mm}.${d.getFullYear()}`
}

export function generateTableData(count: number): Row[] {
  return Array.from({ length: count }, (_, i): Row => {
    const firstName = pick(FIRST_NAMES)
    const lastName = pick(LAST_NAMES)
    const date = new Date(Date.now() - randInt(0, 365 * 5) * 86_400_000)

    return {
      id: i + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`,
      status: pick(STATUSES),
      department: pick(DEPARTMENTS),
      salary: randInt(30_000, 250_000),
      date: formatDate(date),
      country: pick(COUNTRIES),
      phone: `+1 (${randInt(200, 999)}) ${randInt(100, 999)}-${randInt(1000, 9999)}`,
      priority: pick(PRIORITIES),
      progress: randInt(0, 100),
      description: `Row ${i + 1}: lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.`,
      category: pick(CATEGORIES),
      rating: randInt(1, 5),
    }
  })
}
