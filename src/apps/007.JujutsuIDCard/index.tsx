import list from './assets/data.json'
import { HeroIDCard } from './HeroIDCard'
import AppWrapper from '@/components/AppWrapper'

export default function JujutsuIDCard() {
  return <AppWrapper title='Jujutsu ID Card' date='2023/09/23'>
    <div className='flex flex-col items-center'>
      {list.map((props: any, i) => (
        <HeroIDCard key={i} {...props} />
      ))}
    </div>
  </AppWrapper>
}
