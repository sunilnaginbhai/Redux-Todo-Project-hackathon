import React, { useContext } from 'react'
import Todoadd from '../components/Todoadd'
import Todos from '../components/Todos'
import { MainContext } from '../contexts/MainContext'

const InboxView = () => {
  const { theme } = useContext(MainContext);

  return (
    <div className={`flex-1 p-8 overflow-y-auto ${theme.pageBg}`}>
      <div className="max-w-2xl mx-auto space-y-6">
        <Todoadd />
        <Todos />
      </div>
    </div>
  )
}

export default InboxView