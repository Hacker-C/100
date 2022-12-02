import { Link, useLocation, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  const { pathname } = useLocation()
  console.error(error)
  return (
    <div text-center mt-30>
      <h1 text-4xl font-bold>Oooops!</h1>
      <div text-xl mt-10>Sorry, there is something wrong...</div>
      <p mt-10>
        <i text-gray-500 >{`${(error as any).status} ${(error as any).statusText} of ${pathname}`}</i>
      </p>
      <div mt-10>
        <Link to="/" underline>Back to home</Link>
      </div>
    </div>
  )
}
