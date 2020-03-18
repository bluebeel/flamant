export const toLanguageDescriptionMap = (values = []) => {
  return values?.reduce<{
    [key: string]: string;
  }>((acc, value: { Language: string; Description: string }) => {
    return {
      ...acc,
      [value.Language]: value.Description
    };
  }, {}) || {};
};

export const uniq = (values = []) => {
  return [...new Set(values)];
};
