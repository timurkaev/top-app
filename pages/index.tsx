import type { NextPage } from "next";
import { Button, Htag, Ptag } from "../components";

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
      <div>
        <Ptag size="small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fuga.
        </Ptag>
        <Ptag size="medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fuga.
        </Ptag>{" "}
        <Ptag size="large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fuga.
        </Ptag>
      </div>
    </>
  );
};

export default Home;
