import { ColumnDef } from '@tanstack/react-table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

export type Invoice = {
  id: string
  date: Date
  status: 'new' | 'pending' | 'paid' | 'cancelled'
  amount: number
  client: string
  invoiceNumber: string
}

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'date',
    header: () => <div>Date</div>,
    cell: ({ row }) => {
      const date = row.getValue('date') as Date
      return (
        <div>
          <p>{date.toLocaleDateString('lt-LT')}</p>
        </div>
      )
    },
  },
  {
    accessorKey: 'client',
    header: 'Client',
  },
  {
    accessorKey: 'invoiceNumber',
    header: ({ column }) => {
      return (
        <div className='flex items-center hover:bg-transparent'>
          <div>Invoice number</div>
          <Button
            variant='ghost'
            className='p-0 hover:bg-transparent hover:transition-all hover:scale-110'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            <ArrowUpDown className='ml-2 w-4 h-4' />
          </Button>
        </div>
      )
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'amount',
    header: () => <div className='text-right'>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount')) as number
      const formatted = new Intl.NumberFormat('lt-LT', {
        style: 'currency',
        currency: 'EUR',
      }).format(amount)
      return <div className='text-right font-medium'>{formatted}</div>
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const invoice = row.original as Invoice
      return (
        <div className='max-w-4 text-right'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='w-8 h-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='w-4 h-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>{invoice.invoiceNumber}</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(invoice.id)}>
                View Invoice Details
              </DropdownMenuItem>
              <DropdownMenuItem>View Customer Details</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem className='text-red-500'>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
