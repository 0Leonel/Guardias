
export const AppTable = (props) => {
  const { mes, data } = props;
  const mesFecha = {
    0: "Enero",
    1: "Febrero",
    2: "Marzo",
    3: "Abril",
    4: "Mayo",
    5: "Junio",
    6: "Julio",
    7: "Agosto",
    8: "Septiembre",
    9: "Octubre",
    10: "Noviembre",
    11: "Diciembre",

  };
  const esFormatoHora = (cadena) => {
    const expresionRegularHora = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
    return expresionRegularHora.test(cadena);
  };
  return (
    <div className="overflow-x-auto shadow-md rounded-lg w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-white bg-[#415D6D]">
          {mesFecha[mes-1]}
        </caption>
        <thead className="text-xs uppercase bg-[#464D51] text-[#D5BFAF]">
          <tr>
            <th scope="col" className="px-2 sm:px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-2 sm:px-6 py-3">
              Hora de entrada
            </th>
            <th scope="col" className="px-2 sm:px-6 py-3">
              Hora de salida
            </th>
            <th scope="col" className="px-2 sm:px-6 py-3">
              Horas
            </th>
            <th scope="col" className="px-2 sm:px-6 py-3">
              Observaciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map(
            (item) =>
              item?.id ? (
                <tr className="border-b bg-[#415D6D] border-[#26221F] text-white/75" key={item.id}>
                  <td className="px-2 sm:px-6 py-4 font-medium whitespace-nowrap text-white">
                    {item.fecha}
                  </td>
                  <td className="px-2 sm:px-6 py-4">
                    {esFormatoHora(item.horaDeEntrada) ? `${item.horaDeEntrada.slice(0, 5)} hs` : item.horaDeEntrada}
                  </td>
                  <td className="px-2 sm:px-6 py-4">
                    {esFormatoHora(item.horaDeSalida) ? `${item.horaDeSalida.slice(0, 5)} hs` : item.horaDeSalida}
                  </td>
                  <td className="px-2 sm:px-6 py-4">
                    {item.horas ? `${item.horas} hs` : null}
                  </td>
                  <td className="px-2 sm:px-6 py-4">
                    {item.observaciones}
                  </td>
                </tr>
              ) : null
          )}
        </tbody>
      </table>
    </div>
  );
};
