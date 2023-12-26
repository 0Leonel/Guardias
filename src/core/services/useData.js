import useReadFile  from './useReadFile';

export const useData = () => {
  
    const {data} = useReadFile(import.meta.env.VITE_APP_INFORMACION);
    return (
    {data}
    )
}
