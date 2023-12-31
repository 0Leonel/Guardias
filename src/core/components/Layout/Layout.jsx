import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppHeader } from '../appHeader/appHeader'

export const Layout = () => {
  return (
    <>
    <AppHeader />
    <main className='bg-[#26221F] min-h-screen'>

    <Outlet />
    </main>
    </>
  )
}
