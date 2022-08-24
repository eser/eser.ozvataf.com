const languages = [
  "en",
  "tr",
];

const defaultLanguage = languages[0];

const getLanguage = function getLanguage(
  languageId?: string | string[],
): string | undefined {
  if (languageId === undefined || languageId === null) {
    return defaultLanguage;
  }

  const languageId_ = Array.isArray(languageId) ? languageId[0] : languageId;

  const matchingLanguage = languages.find((language) =>
    language === languageId_ || language.startsWith(`${languageId_}-`)
  );

  return matchingLanguage; // ?? defaultLanguage;
};

export { defaultLanguage, getLanguage, languages };
