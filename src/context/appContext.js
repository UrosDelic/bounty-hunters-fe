import { createContext, useContext, useState } from 'react';
import userTypes from './userTypes';

const AppContext = createContext();

function AppProvider({ children }) {
  const [user] = useState(userTypes.EMPLOYEE);

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
