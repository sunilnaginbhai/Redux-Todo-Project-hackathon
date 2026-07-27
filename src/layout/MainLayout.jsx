import React, { useContext } from 'react'
import Sidebar from './../components/Sidebar';
import { Outlet } from 'react-router';
import Todoadd from '../components/Todoadd';
import Todos from '../components/Todos';
import { MainContext } from '../contexts/MainContext';
import SearchTask from '../components/SearchTask';

const MainLayout = () => {
  const { theme } = useContext(MainContext);

  return (
    <div className={`flex min-h-screen transition-colors ${theme.pageBg}`}>
      <Sidebar />
      <SearchTask/>
      <div className="flex-1 flex flex-col p-6 md:p-8 space-y-6 overflow-y-auto max-w-5xl">
        <Todoadd />
        <Todos />
      </div> 
    </div>
  )
}

export default MainLayout