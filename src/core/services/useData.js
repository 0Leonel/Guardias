import { useExcel } from './useExcel';

export const useData =  () => {
   return useExcel(import.meta.env.VITE_APP_INFORMACION);
  }