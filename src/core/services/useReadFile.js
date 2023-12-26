import { useEffect, useState } from 'react';
import { usePapaParse } from 'react-papaparse';


const useReadFile = (url) => {
  const [data,setData] = useState([]);

  const {readRemoteFile} = usePapaParse();
  
  const fetchData = async () =>{
    readRemoteFile(url, {
      complete: (results) =>{
        const data = results.data;

        const headers = data[0];
        const rows = data.slice(1);

        const formattedData = rows.map((row)=>{
          const obj = {};
          headers.forEach((header,i) => {
            obj[header] = row [i];
          });
          return obj;
        });
        setData(formattedData);
      },
    });
  };

  useEffect(()=>{
    fetchData();
  },[])

  // console.log(JSON.stringify(data,null,2));
    return {data};
}
export default useReadFile