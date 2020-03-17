import Head from "next/head";
import { GetServerSideProps } from "next";
import groupBy from "lodash.groupby";
import { CategoryCardList } from "../../components/category-card-list";
import { getCategoriesAndCategoryStructure } from "../../api";
import { toLanguageDescriptionMap, uniq } from "../../utils";
import { useLanguageState } from "../../use-language";
import { Layout } from "../../components/layout";

export const getServerSideProps: GetServerSideProps = async ({
  params: { category: categoryId }
}) => {
  const [
    categoryStructure,
    categories
  ] = await getCategoriesAndCategoryStructure();
  const categoriesMap = groupBy(categories, "Id");

  const mainCategories = Object.entries(
    groupBy(categoryStructure, "Main")
  ).filter(([id]) => {
    return id === categoryId;
  })[0];

  let categoriesToRender: any = mainCategories?.[1] || [];

  if (categoriesToRender?.length === 0) {
    categoriesToRender = Object.entries(
      groupBy(categoryStructure, "Cat1")
    ).filter(([id]) => {
      return id === categoryId;
    })[0][1];
  }

  return {
    props: {
      categories: uniq(
        (categoriesToRender as any).map(category => {
          // display the second level because the param is a root level
          if (category.Main === categoryId) {
            return category.Cat1;
          }
          return category.Cat2;
        })
      )
        .map(key => {
          const category = categoriesMap[key][0];

          if (!category) {
            return null;
          }

          return {
            id: key,
            image: category.Image,
            descriptions: toLanguageDescriptionMap(
              Object.values(category.Descriptions || {})
            ),
            children: [
              ...new Set(
                categoryStructure
                  .filter(category => {
                    // display the second level because the param is a root level
                    if (category.Main === categoryId) {
                      return category.Cat1 === key;
                    }
                    return category.Cat2 === key;
                  })
                  .map(category => {
                    // display the second level because the param is a root level
                    if (category.Main === categoryId) {
                      return category.Cat2;
                    }
                    return null;
                  })
                  .filter(Boolean)
              )
            ]
          };
        })
        .filter(Boolean)
    }
  };
};

const CategoryDetails = ({ categories }) => {
  const { language } = useLanguageState();
  return (
    <Layout>
      <CategoryCardList categories={categories} language={language} />
    </Layout>
  );
};

export default CategoryDetails;
