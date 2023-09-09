import React from 'react'
import Date from './Date'
import TopView from './TopView'

interface AppWrapperProps {
  children: React.ReactNode
  title: string
  date: string
  /**
 * darkTheme: 传了值则使用暗黑模式且背景色为该值
 */
  darkTheme?: string
}

const AppWrapper = ({ children, title, date, darkTheme }: AppWrapperProps) => {
  return <div bg={darkTheme} text='white' h='100vh'>
    <TopView title={title} dark/>
    { children }
    <Date date={date}/>
  </div>
}

export default AppWrapper
