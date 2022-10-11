import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { Button, Htag, Ptag, Tag } from "../components";
import { Rating } from "../components/Rating/Rating";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

const Home: NextPage<HomeProps> = ({ menu }): JSX.Element => {
  const [rating, setRating] = useState<number>(4);

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
      <div>
        <Tag size="small" color="primary">
          Маленький Primary
        </Tag>
        <Tag size="small" color="ghost">
          Маленький Ghost
        </Tag>
        <Tag size="medium" color="green">
          Средний Green
        </Tag>
        <Tag size="medium" color="grey">
          Средний Grey
        </Tag>
      </div>
      <div>
        <Rating rating={rating} isEditable={true} setRating={setRating} />
      </div>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    },
  );

  return {
    props: {
      firstCategory,
      menu,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
