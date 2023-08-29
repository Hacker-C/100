import React from 'react'
import Date from './Date'
import TopView from './TopView'

interface AppWrapperProps {
  children: React.ReactNode
  title: string
  date: string
}

const AppWrapper = ({ children, title, date }: AppWrapperProps) => {
  return <>
    <TopView title={title}/>
    { children }
    <Date date={date}/>
  </>
}

export default AppWrapper
