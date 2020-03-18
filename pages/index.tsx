import {GetServerSideProps} from "next";
import groupBy from "lodash.groupby";
import {CategoryCardList} from "../components/category-card-list";
import {toLanguageDescriptionMap, uniq} from "../utils";
import {getCategoriesAndCategoryStructure} from "../api";
import {Layout} from "../components/layout";
import {useTranslation} from "react-i18next";

export const getStaticProps: GetServerSideProps = async context => {
  const [
    categoryStructure,
    categories
  ] = await getCategoriesAndCategoryStructure();
  const categoriesMap = groupBy(categories, "Id");

  const mainCategoryStructureMap = Object.entries(
    groupBy(categoryStructure, "Main")
  );

  const firstLevelCategoryWithSubCategories = mainCategoryStructureMap.reduce(
    (acc, [key, mainCategories]) => {
      const cat = categoriesMap[key][0];
      return {
        ...acc,
        [key]: {
          image: cat.Image,
          descriptions: toLanguageDescriptionMap(
            Object.values(cat.Descriptions)
          ),
          children: uniq((mainCategories as any).map(category => category.Cat1))
        }
      };
    },
    {}
  );

  return {
    props: {
      categories: Object.entries(firstLevelCategoryWithSubCategories).map(
        ([id, value]: [string, any]) => {
          return {
            id,
            ...value
          };
        }
      )
    }
  };
};

const Home = ({ categories }) => {
  const { i18n } = useTranslation();
  return (
    <Layout>
      <CategoryCardList categories={categories} language={i18n.language} />
    </Layout>
  );
};

export default Home;
