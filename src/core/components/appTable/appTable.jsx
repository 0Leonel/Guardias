import { useData } from '../../services/useData'

export const AppTable = () => {
    const {data} = useData();
    console.log(data)
    const esFormatoHora =(cadena) =>{
        const expresionRegularHora = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
        return expresionRegularHora.test(cadena);
      }
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Diciembre
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                    Hora de entrada
                </th>
                <th scope="col" className="px-6 py-3">
                    Hora de salida
                </th>
                <th scope="col" className="px-6 py-3">
                    Horas
                </th>
                <th scope="col" className="px-6 py-3">
                    Observaciones
                </th>
               
            </tr>
        </thead>
        <tbody>
            {data?.map((item)=>(
              item?.id ? (<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.fecha}
              </th>
              <td className="px-6 py-4 ">
                  {esFormatoHora(item.horaDeEntrada) ? `${item.horaDeEntrada.slice(0,5)} hs` : item.horaDeEntrada}
              </td>
              <td className="px-6 py-4">
                  {esFormatoHora(item.horaDeSalida) ? `${item.horaDeSalida.slice(0,5)} hs` : item.horaDeSalida}   
              </td>
              <td className="px-6 py-4">
                  {item.horas ? `${item.horas} hs` : null}
              </td>
              <td className="px-6 py-4">
                  {item.observaciones}
              </td>
             
          </tr>) : null
            ))}
           
        </tbody>
    </table>
</div>

  )
}
