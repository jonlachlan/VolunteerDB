import React from 'react'

const MainLayout = ({content}) => (
  <div id="main_layout">
    {content()}
  </div>
);

export default MainLayout;

