import React from 'react'
import Date from './Date'
import TopView from './TopView'

interface AppWrapperProps {
  children: React.ReactNode
  title: string
  date: string
  darkTheme?: string
}

const AppWrapper = ({ children, title, date }: AppWrapperProps) => {
  return <div h='100vh'>
    <TopView title={title} />
    { children }
    <Date date={date}/>
  </div>
}

export default AppWrapper
