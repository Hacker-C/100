import { useEffect, useState } from 'react'
import { useLocalStorage, useMedia } from 'react-use'

export const useDark = () => {
  const [localInitTheme, setLocalTheme] = useLocalStorage<'dark' | 'light'>('theme')

  useEffect(() => {
    if (localInitTheme === 'dark') {
      document.documentElement.classList.add(localInitTheme)
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const systemInitTheme = useMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  const theme = localInitTheme ?? systemInitTheme
  const [isDark, setIsDark] = useState(theme === 'dark')

  const toggleTheme = () => {
    setIsDark(!isDark)
    setLocalTheme(isDark ? 'light' : 'dark')
    document.documentElement.classList.toggle('dark')
  }

  return {
    isDark,
    toggleTheme
  }
}
