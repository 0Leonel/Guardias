import { AppTable } from '../appTable/appTable'
import { AppCalendario } from '../appCalendario/appCalendario'
import { useData } from '../../services/useData';
import { AppLoading } from '../appSpinner/appLoading';

export const AppMes = (props)=> {
    const { mes, anio,hoja} = props;
    const {data, isLoading} = useData();
  return (
    <div className='grid w-full lg:grid-cols-2 min-h-screen '>
    <div className='w-full py-8 px-4 '>
    {isLoading ? <AppLoading /> : <>
    <AppTable data={data[hoja]?.data} mes={mes} />
    </>
    }
    </div>
    
    <div className=' w-full lg:py-8 lg:px-4 '>
        {isLoading ? <AppLoading /> : <AppCalendario anio={anio} mes={mes} setDia={data[hoja]?.data}/>}

    </div>
    </div>
  )
}
