import BackToHome from '@/components/BackToHome'

interface AppProps {
  message: string
}

const Bin2Dec = ({ message }: AppProps) => {
  return (
    <>
      <BackToHome title='Bin2Dec'/>
      <div>{message}</div>
    </>
  )
}

export default Bin2Dec
