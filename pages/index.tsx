import type { NextPage } from "next"
import { Button, Htag } from "../components"

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Htag tag="h1">Привет Next.js</Htag>
      <Button arrow="down" appearance="primary">
        Кнопка
      </Button>
      <Button arrow="down" appearance="ghost">
        Кнопка 2
      </Button>
    </>
  )
}

export default Home
