import { Invoice } from '@/components/InvoicesTable/columns'
import { LoaderFunction } from 'react-router-dom'

async function getInvoices(): Promise<Invoice[]> {
  return [
    {
      id: '1',
      date: new Date('2021-01-01'),
      status: 'new',
      amount: 100,
      client: 'John Doe',
      invoiceNumber: 'SF-0001',
    },
    {
      id: '2',
      date: new Date('2021-01-02'),
      status: 'pending',
      amount: 200,
      client: 'Jane Doe',
      invoiceNumber: 'SF-0002',
    },
    {
      id: '3',
      date: new Date('2021-01-03'),
      status: 'paid',
      amount: 300,
      client: 'John Doe',
      invoiceNumber: 'SF-0003',
    },
    {
      id: '4',
      date: new Date('2021-01-04'),
      status: 'cancelled',
      amount: 400,
      client: 'Jane Doe',
      invoiceNumber: 'SF-0004',
    },
    {
      id: '5',
      date: new Date('2021-01-05'),
      status: 'new',
      amount: 500,
      client: 'Alice Smith',
      invoiceNumber: 'SF-0005',
    },
    {
      id: '6',
      date: new Date('2021-01-06'),
      status: 'pending',
      amount: 600,
      client: 'Bob Johnson',
      invoiceNumber: 'SF-0006',
    },
    {
      id: '7',
      date: new Date('2021-01-07'),
      status: 'paid',
      amount: 700,
      client: 'Charlie Brown',
      invoiceNumber: 'SF-0007',
    },
    {
      id: '8',
      date: new Date('2021-01-08'),
      status: 'cancelled',
      amount: 800,
      client: 'David Wilson',
      invoiceNumber: 'SF-0008',
    },
    {
      id: '9',
      date: new Date('2021-01-09'),
      status: 'new',
      amount: 900,
      client: 'Eve Davis',
      invoiceNumber: 'SF-0009',
    },
    {
      id: '10',
      date: new Date('2021-01-10'),
      status: 'pending',
      amount: 1000,
      client: 'Frank Miller',
      invoiceNumber: 'SF-0010',
    },
    {
      id: '11',
      date: new Date('2021-01-11'),
      status: 'paid',
      amount: 1100,
      client: 'Grace Lee',
      invoiceNumber: 'SF-0011',
    },
    {
      id: '12',
      date: new Date('2021-01-12'),
      status: 'cancelled',
      amount: 1200,
      client: 'Hank Green',
      invoiceNumber: 'SF-0012',
    },
    {
      id: '13',
      date: new Date('2021-01-13'),
      status: 'new',
      amount: 1300,
      client: 'Ivy White',
      invoiceNumber: 'SF-0013',
    },
    {
      id: '14',
      date: new Date('2021-01-14'),
      status: 'pending',
      amount: 1400,
      client: 'Jack Black',
      invoiceNumber: 'SF-0014',
    },
  ]
}

export const invoiceLoader: LoaderFunction = async ({ request }) => {
  console.log('Request', request)
  const invoices = await getInvoices()

  return { invoices }
}
