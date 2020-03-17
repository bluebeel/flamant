import Link from "next/link";

export const CategoryCardList = ({ categories, language }) => {
  return (
    <div className="container mx-auto">
      <section className="flex items-start flex-wrap justify-between lg:my-10 my-6 lg:mx-8">
        {categories.map(categorie => {
          let href = "/" + categorie.id;
          if (categorie?.children?.length === 0) {
            href = href + "/products";
          }

          return (
            <article
              className="lg:w-1/3 w-full px-3 mb-8"
              key={categorie.image}
            >
              <Link href={href}>
                <a>
                  <img
                    className="object-cover rounded w-full  mb-5"
                    src={categorie.image}
                  />
                </a>
              </Link>
              <div className="mb-1 tracking-wider text-flamant-body text-xl leading-normal">
                <p className="text-center">
                  <Link href={href}>
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
