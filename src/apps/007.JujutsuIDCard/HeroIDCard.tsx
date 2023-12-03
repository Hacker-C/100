import { imageMap } from './data'

export interface HeroIDCardProps {
  type: 'student' | 'teacher'
  logo: string
  title: string
  id?: string
  info: string
  hero: IHeroIDCard
}

export interface IHeroIDCard {
  name: string
  birthdate: string
  avatar: string
  level: string
}

export function HeroIDCard(props: HeroIDCardProps) {
  const { hero, title, logo, type, id, info } = props
  const { name, birthdate, avatar } = hero
  return (
    <div
      border='3 solid #444 rounded-2xl'
      className='px2 py8 font-song h-center mt5 bg-white w-[360px] shadow-xl'
    >
      <header className='flex items-center'>
        <img src={imageMap.get(logo)} className='w7' />
        <h1 className='text-[16px] ml3'>{title}</h1>
        <div flex='1' />
        <span className='self-end text-sm'>
          【{
            type === 'student' ? '学生証' : '教師証'
          }】
        </span>
      </header>
      <main className='mt2 mx2 flex justify-between'>
        <div className='leading-3 w-[225px]'>
          <div>
            <span className='text-sm'>{type === 'student' ? '学籍番号' : '教師番号'} <span font='bold'>{id}</span></span>
          </div>
          <div className='text-lg'>
            氏名 <span className='font-bold'>{name}</span>
          </div>
          <div font='bold' className='text-sm'>{birthdate} 生</div>
          <p text=' 0.7rem' mb='1.5'>{info}</p>
          <div className='overflow-hidden'>
            <BarCode />
          </div>
        </div>
        <div className='relative mx1'>
          <div className='absolute -left-20% -top-10%'>
            <Level level={hero.level} />
          </div>
          <img src={imageMap.get(avatar)} className='border-1 min-w-21.5' />
        </div>
      </main>
    </div>
  )
}

function Level(props: { level: string }) {
  const { level } = props
  const clazz = `bg-transparent rounded-full
      px4 w-10 h10 overflow-hidden font-bold
      flex justify-center items-center
      border-2 border-solid border-black
      ${`${level.length === 1 ? 'text-2xl' : 'text-md'}`}
    `
  return (
    <div
      className={clazz}
    >
      {level}
    </div>
  )
}

function BarCode() {
  const base = 0.9
  const list = []
  for (let i = 0; i < 60; i++) {
    list.push({
      width: (~~(Math.random() * 10) + 1) * base,
      color: Math.random() > 0.2 ? 'black' : 'white'
    })
  }
  return (
    <div className='flex space-x-1px w60'>
      {list.map((w, i) => {
        const { width, color } = w
        return (
          <div
            h='7'
            style={{
              width: `${width}px`,
              backgroundColor: color
            }}
            key={i}
          />
        )
      })}
    </div>
  )
}
