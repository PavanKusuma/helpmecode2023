// Create a new context to store the data
import { getProjects } from '@/lib/projects';
import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const getProject = async (data) => 
fetch("/api/projects/"+data, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


// Create a provider component to wrap your app and provide the context
export function DataProvider({ children }) {
    
  const [data, setData] = useState(null);

  // Fetch the data on mount
  useEffect(() => {

    // axios.get("/api/project/"+skip).then(res=>setData(res.data)).catch(error=>console.log(error))
    // async function fetchData() {
    //   const {res} = await getProjects(skip)
    //   const data = await res.json();
    //   setData(data);
    // }
    // fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
     
    </DataContext.Provider>
  );
}

// Create a custom hook to access the data from any component
export function useData() {
  const { data, setData } = useContext(DataContext);
  return { data, setData };
}