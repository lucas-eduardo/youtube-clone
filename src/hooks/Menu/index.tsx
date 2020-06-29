import React, { createContext, useContext, useState, useCallback } from 'react';

interface MenuContextData {
  openMenu: boolean;
  clickMenu: () => void;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

const MenuProvider: React.FC = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const clickMenu = useCallback(() => {
    setOpenMenu(oldState => !oldState);
  }, []);

  return (
    <MenuContext.Provider value={{ openMenu, clickMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

function useMenu(): MenuContextData {
  return useContext(MenuContext);
}

export { MenuProvider, useMenu };
