import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Layout/Layout'
import { HomeView } from '../../../features/Home/Home_view'
import { AppMes } from '../Mes/appMes'


export const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeView/>
            },
            {
                path: "diciembre",
                element: <AppMes mes={12} anio={2023} hoja={0} />
            },
            {
                path: "enero",
                element: <AppMes mes={1} anio={2024} hoja={1}/>
            }
        ]
    },
])