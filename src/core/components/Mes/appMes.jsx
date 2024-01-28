import { AppTable } from '../appTable/appTable';
import { AppCalendario } from '../appCalendario/appCalendario';
import { useData } from '../../services/useData';
import { AppLoading } from '../appSpinner/appLoading';
import * as XLSX from 'xlsx';

export const AppMes = (props) => {
  const { mes, anio, hoja } = props;
  const { data, isLoading } = useData();

  const mesName = {
    1: 'enero',
    2: 'febrero',
    3: 'marzo',
    4: 'abril',
    5: 'mayo',
    6: 'junio',
    7: 'julio',
    8: 'agosto',
    9: 'septiembre',
    10: 'octubre',
    11: 'noviembre',
    12: 'diciembre',
  };
  
  const handleDownloadExcel = (excelData) => {
    const filteredData = excelData.map(({ id, ...rest }) => rest);

    const sheetName = 'Hoja';
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${mesName[mes]}-${anio}-Leonel.xlsx`);
  };
  

  return (
    <div className='grid w-full lg:grid-cols-2 min-h-screen '>
      <div className='w-full py-8 px-4 '>
        {isLoading ? <AppLoading /> : <>
          <AppTable data={data[hoja]?.data} mes={mes} />
          <div className='flex justify-end pt-2'>
          <button onClick={() => handleDownloadExcel(data[hoja]?.data)} 
          className='bg-[#548C8C] hover:bg-[#415D6D] text-white font-bold py-2 px-4 rounded'
          >Descargar Excel</button>
          </div>
        </>}
      </div>
  
      <div className=' w-full lg:py-8 lg:px-4 '>
        {isLoading ? <AppLoading /> : <AppCalendario anio={anio} mes={mes} setDia={data[hoja]?.data} />}
      </div>
    </div>
  )}