import { useDispatch, useTasks, useTasksDispatchContext } from '../../context'
import type { Hero } from '../../data'

function Card({ id, src, isFront }: Hero) {
  const dispatch = useDispatch()!
  const tasks = useTasks()
  const tasksDispatch = useTasksDispatchContext()!
  const handleClick = () => {
    tasksDispatch({
      type: 'add-task',
      payload: id
    })
    if (tasks.length < 2) {
      dispatch({
        type: 'set-front',
        payload: id
      })
    }
  }

  return (
    <div
      m="2%" border="5px solid #fc9c07"
      className='
        rounded-xl overflow-hidden aspect-square select-none
        w-25% sm:w-12% cursor-pointer hover:scale-110 ease-out duration-300
      '
      onClick={handleClick}
    >
       <div relative>
        <img src={src} alt={src} width="100%" />
        <div
          className='w-100% bg-#f3e792 absolute top-0 left-0 aspect-square'
          style={{ display: isFront ? 'none' : '' }}></div>
      </div>
    </div>
  )
}

export default Card
