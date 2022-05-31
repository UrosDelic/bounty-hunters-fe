import { createContext, useContext, useState } from 'react';
import { UserTypes } from './userTypes';

interface AppContextProps {
  userRole: UserTypes | null;
}

const AppContext = createContext<AppContextProps>({
  userRole: null,
});

type appProviderProp = {
  children: any;
};

function AppProvider({ children }: appProviderProp) {
  // change user type when we get it from the server
  const [userRole] = useState<AppContextProps['userRole']>(UserTypes.EMPLOYEE);

  return (
    <AppContext.Provider value={{ userRole }}>{children}</AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
