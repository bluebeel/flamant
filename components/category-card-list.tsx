import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const CategoryCardList = ({ categories, language }) => {
  const { locale, asPath } = useRouter();
  if (!categories) {
    console.log("data", asPath, categories);
  }
  return (
    <div className="container mx-auto">
      <section className="flex items-start flex-wrap justify-between lg:my-10 my-6 lg:mx-8">
        {categories.map((categorie) => {
          let href = `/${locale}/c/${categorie.id}`;
          if (categorie?.children?.length === 0) {
            href = href + "/products";
          }

          return (
            <article
              className="lg:w-1/3 w-1/2 px-3 mb-16"
              key={categorie.image}
            >
              <Link href={href} locale={false} key={locale}>
                <a>
                  <div
                    className="px-4 py-5 h-64 sm:p-6 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${categorie.image})` }}
                  />
                </a>
              </Link>

              <div className="mb-1 tracking-wider text-flamant-body text-xl leading-normal">
                <p className="text-center">
                  <Link href={href} locale={false} key={locale}>
                    <a className="text-flamant-body tracking-wider underline">
                      {categorie.descriptions[language]}
                    </a>
                  </Link>
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};
