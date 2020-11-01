import { useRouter } from "next/router";
import { i18n } from "./i18n";
import groupBy from "lodash.groupby";

export const toLanguageDescriptionMap = (values = []) => {
  return (
    values?.reduce<{
      [key: string]: string;
    }>((acc, value: { Language: string; Description: string }) => {
      return {
        ...acc,
        [value.Language]: value.Description,
      };
    }, {}) || {}
  );
};

export const uniq = (values = []) => {
  return [...new Set(values)];
};

export const useTranslation = () => {
  const { locale } = useRouter();
  return {
    t(key: string) {
      return i18n?.[locale]?.[key];
    },
  };
};

export function flatten(nestedArrays: any) {
  return [].concat(...nestedArrays);
}

export const getFirstLevelCategory = (categoryStructure, categories) => {
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
          children: uniq(
            (mainCategories as any).map((category) => category.Cat1)
          ),
        },
      };
    },
    {}
  );

  return {
    categories: Object.entries(firstLevelCategoryWithSubCategories).map(
      ([id, value]: [string, any]) => {
        return {
          id,
          ...value,
        };
      }
    ),
  };
};
