import { useHeros } from '../../context'
import Card from '../Card'

export default function () {
  const heros = useHeros()
  return (
    <div>
      <div className='px-7% text-gray-400'>
        <p>Match all the stands and body to win.</p>
        <p>匹配好所有的替身和本体以获得胜利。</p>
      </div>
      <div
        flex flex-wrap justify-around
        className='w-100% sm:w-90% m-auto'
      >
        {
          heros.map(
            ({ id, src, isFront }) => {
              return (
                <Card id={id} src={src} key={id} isFront={isFront} />
              )
            })
        }
      </div>
    </div>
  )
}
