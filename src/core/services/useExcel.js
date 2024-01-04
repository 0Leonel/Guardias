import { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

export const useExcel = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const readExcelFile = async () => {
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });

      const buffer = response.data;
      const workbook = XLSX.read(buffer, { type: 'buffer' });

      const sheets = workbook.SheetNames;

      const result = sheets.map((sheetName) => {
        const sheet = workbook.Sheets[sheetName];
        const jsonSheet = XLSX.utils.sheet_to_json(sheet, { raw: false });

        return {
          sheetName: sheetName,
          data: jsonSheet,
        };
      });

      setData(result);
      setIsLoading(false); 
    } catch (error) {
      console.error('Error al leer el archivo Excel:', error);
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    readExcelFile();
  }, []);

  return { data, isLoading };
};
