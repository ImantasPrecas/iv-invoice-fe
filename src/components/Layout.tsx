import { ISession } from '@/lib/utils'
import { Outlet, useRouteLoaderData } from 'react-router-dom'

function Layout() {
  const {userName, session} = useRouteLoaderData('root') as {userName:string, session: ISession}
  console.log(userName)
  console.log('session', session)
  return (
    <>
    <h1>Layout</h1>
    <p>{userName || 'NULL'}</p>
    <Outlet/>
    </>
  )
}

export default Layout