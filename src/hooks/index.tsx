import React from 'react';

import { MenuProvider } from './Menu';

const AppProvider: React.FC = ({ children }) => (
  <MenuProvider>{children}</MenuProvider>
);

export default AppProvider;
