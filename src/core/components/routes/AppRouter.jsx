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
                path: "diciembre23",
                element: <AppMes mes={12} anio={2023} hoja={0} />
            },
            {
                path: "enero24",
                element: <AppMes mes={1} anio={2024} hoja={1}/>
            },
            {
                path: "febrero24",
                element: <AppMes mes={2} anio={2024} hoja={2}/>,
            }
        ]
    },
])