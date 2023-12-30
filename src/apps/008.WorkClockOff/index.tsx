import Run from './assets/img/run.jpg'
import useNowTime from './useNowTime'
import AppWrapper from '@/components/AppWrapper'

export default function WorkClockOff() {
  const { time } = useNowTime()

  return <AppWrapper title='Work Clock Off' date='2023/12/26'>
    <div className='flex-center mt20'>
      <div>
        <div className='relative overflow-hidden b-1'>
          <div className='
            h10 w130 text-[30px] bg-black
            font-bold text-white text-center leading-10
            absolute -right-35 bottom-11
            transform -rotate-x-20 rotate-y-50 rotate-z-2
          '
          >
            <div skew-x-50 transform-translate-0 bg-black>
              {time}
            </div>
          </div>
          <img src={Run} alt='run' w='70' />
        </div>
      <div text-xl text-center mt5 dark:text-white>Ready to clock off 🏃‍♂️</div>
      </div>
    </div>
  </AppWrapper>
}
