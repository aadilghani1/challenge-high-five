import React, { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
