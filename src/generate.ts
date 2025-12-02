import { LANGUAGES, Languages } from "./constants";
import { InjectionGrammar } from "./injection-grammar";
import { Package } from "./package";
import { hasKey, isBoolean, isObject, isString } from "./utils";

const parseLanguages = (languages: { [key: string]: unknown }): Languages => {
  const parsedLanguages: Languages = {};
  for (const id in languages) {
    let language = languages[id];
    if (isString(language)) {
      language = { scopeName: language };
    }

    if (isObject(language)) {
      if (!hasKey(language, "scopeName", isString)) {
        continue;
      }

      parsedLanguages[id] = {
        name: hasKey(language, "name", isString) ? language.name : id,
        scopeName: language.scopeName,
        stripIndent: hasKey(language, "stripIndent", isBoolean)
          ? language.stripIndent
          : false,
      };
    }
  }
  return parsedLanguages;
};

export const generateFiles = (languages = LANGUAGES) => {
  const parsedLanguages = parseLanguages(languages);
  const grammars = [
    new InjectionGrammar("source.yaml", parsedLanguages),
    new InjectionGrammar("source.github-actions-workflow", parsedLanguages),
    new InjectionGrammar("source.helm", parsedLanguages),
  ];

  const writables = [new Package(grammars), ...grammars];

  return writables.map((writable) => writable.write()).some(Boolean);
};

if (require.main === module) {
  generateFiles();
}
