import React, { createContext } from 'react';

export const DataContext = createContext();

const data = {
  value1: 'Comida para perros',
  value2: 'Comida para gatos',
  value3: 'Comida para ratones'
}


export const DataProvider = ({ children }) =>{
  return(
    <DataContext.Provider value ={data}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext