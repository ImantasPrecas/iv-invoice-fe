import { columns, Invoice } from '@/components/InvoicesTable/columns'
import DataTable from '@/components/InvoicesTable/invoiceDataTable'

import { useLoaderData } from 'react-router-dom'

function InvoicesPage() {
  const { invoices } = useLoaderData() as { invoices: Invoice[] }
  // const  invoices = [] as Invoice[]

  return (
    <section className='flex flex-col gap-4 mt-6 mx-10'>
      <div>
        <h1 className='text-2xl'>Your invoices</h1>
      </div>
      <div>
        <DataTable columns={columns} data={invoices} />
      </div>
    </section>
  )
}

export default InvoicesPage
