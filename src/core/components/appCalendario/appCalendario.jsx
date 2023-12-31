import React from "react";

export const AppCalendario = (props) => {
  const { mes, anio, setDia } = props;
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

  const dias = [
    { id: 0, dia: "D" },
    { id: 1, dia: "L" },
    { id: 2, dia: "M" },
    { id: 3, dia: "M" },
    { id: 4, dia: "J" },
    { id: 5, dia: "V" },
    { id: 6, dia: "S" },
  ];

  const getFirstDayOfMonth = (year, month) => {
    const firstDay = new Date(year, month, 1);
    return firstDay.getDay();
  };

  const getLastDayOfMonth = (year, month) => {
    const lastDay = new Date(year, month + 1, 0);
    return lastDay.getDate();
  };

  const generateRows = () => {
    const rows = [];
    const firstDay = getFirstDayOfMonth(anio, mes - 1);
    const lastDay = getLastDayOfMonth(anio, mes - 1);
    const totalDays = lastDay + firstDay;

    const totalRows = Math.ceil(totalDays / 7);

    for (let i = 0; i < totalRows; i++) {
      const cells = [];
      for (let j = 0; j < 7; j++) {
        const currentDay = i * 7 + j + 1 - firstDay;
        if (currentDay <= 0 || currentDay > lastDay) {
          cells.push(<td key={`${i}-${j}`}></td>);
        } else {
          const isHighlighted =
            setDia.some(
              (dia) =>
                parseInt(dia.fecha?.toString().slice(0, 2), 10) === currentDay
            );

          cells.push(
            <td key={`${i}-${j}`}>
              <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                <p
                  className={
                    isHighlighted
                      ? "text-lg w-8 h-8 flex items-center justify-center font-medium text-black bg-white rounded-full"
                      : "text-lg text-gray-100 font-medium"
                  }
                >
                  {currentDay}
                </p>
              </div>
            </td>
          );
        }
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }

    return rows;
  };

  return (
    <>
      <div className="flex items-center justify-center py-4 px-2 w-full">
        <div className="w-full max-w-md shadow-lg">
          <div className="md:p-8 p-4 bg-[#8C7B65]  rounded-lg shadow-xl ">
            <div className="px-4 flex items-center justify-between">
              <h1 className="text-lg font-bold text-white ">
                {mesFecha[mes - 1]} {anio}
              </h1>
            </div>
            <div className="flex items-center justify-between pt-4 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    {dias.map((dia) => (
                      <th key={dia.id}>
                        <div className="w-full flex justify-center">
                          <p className="text-lg font-medium text-center text-white">
                            {dia.dia}
                          </p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>{generateRows()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
