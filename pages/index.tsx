import { GetServerSideProps } from "next";
import { CategoryCardList } from "../components/category-card-list";
import { getFirstLevelCategory } from "../utils";
import { getCategoriesAndCategoryStructure } from "../api";
import { Layout } from "../components/layoutHome";
import { useRouter } from "next/router";

export const getStaticProps: GetServerSideProps = async (context) => {
  const [
    categoryStructure,
    categories,
  ] = await getCategoriesAndCategoryStructure();

  return {
    props: {
      lol: getFirstLevelCategory(categoryStructure, categories).categories,
    },
    revalidate: 120,
  };
};

const Home = ({ lol }) => {
  const { locale } = useRouter();
  return (
    <Layout>
      <CategoryCardList categories={lol} language={locale.toUpperCase()} />
    </Layout>
  );
};

export default Home;
