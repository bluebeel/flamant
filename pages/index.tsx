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
      ...getFirstLevelCategory(categoryStructure, categories),
    },
    revalidate: 120,
  };
};

const Home = ({ categories }) => {
  const { locale } = useRouter();
  return (
    <Layout>
      <CategoryCardList
        categories={categories}
        language={locale.toUpperCase()}
      />
    </Layout>
  );
};

export default Home;
