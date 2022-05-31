import { createContext, ReactNode, useContext, useState } from 'react';
import { UserTypes } from './userTypes';

interface AppContextProps {
  userRoles: UserTypes[] | null;
}

const AppContext = createContext<AppContextProps>({
  userRoles: null,
});

type appProviderProp = {
  children: ReactNode;
};

function AppProvider({ children }: appProviderProp) {
  // change user type when we get it from the server
  const [userRoles] = useState<AppContextProps['userRoles']>([
    UserTypes.EMPLOYEE,
    UserTypes.SUPERADMIN,
    UserTypes.ADMIN,
  ]);

  return (
    <AppContext.Provider value={{ userRoles }}>{children}</AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
