import ImageGallery from "react-image-gallery";
import { useState } from "react";
import {
  flatten,
  getFirstLevelCategory,
  toLanguageDescriptionMap,
  useTranslation,
} from "../../../utils";
import { Layout } from "../../../components/layout";
import { getCategoriesAndCategoryStructure, getProducts } from "../../../api";
import { useRouter } from "next/router";
import { getStaticProps as categoryGetStaticProps } from "./index";

export async function getStaticPaths() {
  const [[categoryStructure, categories]] = await Promise.all([
    getCategoriesAndCategoryStructure(),
    getProducts(),
  ]);

  console.log("getStaticPaths::products");
  return {
    paths: flatten(
      (
        await Promise.all(
          getFirstLevelCategory(categoryStructure, categories)
            .categories.map((category) => {
              return {
                params: { category: category.id },
              };
            })
            .map((payload) => categoryGetStaticProps(payload as any)) as any
        )
      ).map((category: any) => {
        return category.props.categories;
      })
    ).map((category: any) => {
      return {
        params: { category: category.id },
      };
    }),
    fallback: true,
  };
}

export const getStaticProps = async ({ params: { category: categoryId } }) => {
  const products = await getProducts();
  const filteredProducts = products.filter((product) => {
    return (
      product?.Main?.Id === categoryId ||
      product?.SubCategory1?.Id === categoryId ||
      product?.SubCategory2?.Id === categoryId
    );
  });

  console.log("getStaticProps::products");

  return {
    props: {
      products: filteredProducts,
    },
    revalidate: 120,
  };
};

const Products = ({ products }) => {
  const [productDisplayed, setProductDisplayed] = useState({
    index: 0,
    id: products?.[0]?.ItemId,
  });
  const { t } = useTranslation();

  const { locale } = useRouter();

  const language = locale.toUpperCase();

  return (
    <Layout>
      {products?.map((product) => {
        const images = [
          product.Images?.Main
            ? {
                original: product.Images?.Main,
                thumbnail: product.Images?.Main,
              }
            : null,
          product.Images?.Image1
            ? {
                original: product.Images?.Image1,
                thumbnail: product.Images?.Image1,
              }
            : null,
          product.Images?.Image2
            ? {
                original: product.Images?.Image2,
                thumbnail: product.Images?.Image2,
              }
            : null,
          product.Images?.Image3
            ? {
                original: product.Images?.Image3,
                thumbnail: product.Images?.Image3,
              }
            : null,
        ].filter(Boolean);

        return product.ItemId !== productDisplayed.id ? null : (
          <div
            className={"flex flex-row justify-center items-start flex-grow"}
            key={product.ItemId}
          >
            <div
              id="left"
              className="w-20 self-center absolute left-0"
              style={{ top: "50%" }}
            >
              {productDisplayed.index !== 0 && (
                <button
                  onClick={() => {
                    const index =
                      (productDisplayed.index - 1) % products.length;
                    setProductDisplayed({
                      index,
                      id: products[index].ItemId,
                    });
                  }}
                >
                  <img src="/fleche_gauche.png" />
                </button>
              )}
            </div>
            <div className="container max-w-4xl px-8">
              <ImageGallery
                items={images}
                showNav={false}
                lazyLoad={true}
                showPlayButton={false}
                showFullscreenButton={false}
                disableSwipe={false}
                disableArrowKeys={true}
                additionalClass="w-full mb-8"
              />
              <div className="mx-auto">
                <h1
                  className="text-xl lg:text-4xl font-hairline tracking-widest mb-3"
                  style={{ alignSelf: "baseline" }}
                >
                  {product.Name} (#{product.ItemId})
                </h1>
                <div className="mb-8 text-md tracking-wide">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: product.FunctionalDescription?.find(
                        (desc) => desc.Language === language
                      )?.Description,
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: product.LongDescription?.find(
                        (desc) => desc.Language === language
                      )?.Description,
                    }}
                  />
                </div>
                <h3
                  className="text-lg font-hairline tracking-wide mb-3 italic"
                  style={{ alignSelf: "baseline" }}
                >
                  {t("price")}:{" "}
                  {!product.Prices.DiscountedPrice ||
                  product.Prices.OriginalPrice?.toString() ===
                    product.Prices.DiscountedPrice?.toString() ? (
                    <span>{product.Prices.OriginalPrice} €</span>
                  ) : (
                    <>
                      <span
                        className="mr-4"
                        style={{ textDecoration: "line-through" }}
                      >
                        {product.Prices.OriginalPrice}
                      </span>
                      <span>{product.Prices.DiscountedPrice} €</span>
                    </>
                  )}
                </h3>
                <h3
                  className="text-lg font-hairline tracking-wide mb-3 italic"
                  style={{ alignSelf: "baseline" }}
                >
                  {t("specifications")}
                </h3>
                <div className="text-md tracking-wide">
                  <div className="pb-3">
                    <table>
                      <tbody className="table">
                        {product?.Sizes?.Length ? (
                          <tr>
                            <td> {t("length")}</td>
                            <td>{product?.Sizes?.Length} cm</td>
                          </tr>
                        ) : null}

                        {product?.Sizes?.Width ? (
                          <tr>
                            <td> {t("width")}</td>
                            <td>{product?.Sizes?.Width} cm</td>
                          </tr>
                        ) : null}

                        {product?.Sizes?.Height ? (
                          <tr>
                            <td> {t("height")}</td>
                            <td>{product?.Sizes?.Height} cm</td>
                          </tr>
                        ) : null}
                        {product?.Sizes?.NetWeight ? (
                          <tr>
                            <td> {t("weight")}</td>
                            <td>{product?.Sizes?.NetWeight} cm</td>
                          </tr>
                        ) : null}
                      </tbody>
                    </table>
                    <table>
                      <tbody className="table">
                        {product?.Sizes?.SitWidth ? (
                          <tr>
                            <td> {t("seatWidth")}</td>
                            <td>{product?.Sizes?.SitWidth} cm</td>
                          </tr>
                        ) : null}
                        {product?.Sizes?.SitHeight ? (
                          <tr>
                            <td> {t("seatHeight")}</td>
                            <td>{product?.Sizes?.SitHeight} cm</td>
                          </tr>
                        ) : null}

                        {product?.Sizes?.SitDepth ? (
                          <tr>
                            <td> {t("seatDepth")}</td>
                            <td>{product?.Sizes?.SitDepth} cm</td>
                          </tr>
                        ) : null}

                        {product?.Sizes?.ArmHeight ? (
                          <tr>
                            <td> {t("armrestHeight")}</td>
                            <td>{product?.Sizes?.ArmHeight} cm</td>
                          </tr>
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                </div>
                {product.Materials?.length > 0 ? (
                  <h3
                    className="text-lg font-hairline tracking-wide mb-2 italic"
                    style={{ alignSelf: "baseline" }}
                  >
                    {t("materials")}
                  </h3>
                ) : null}

                <div className="text-md tracking-wide">
                  <div className="pb-8">
                    <table>
                      <tbody className="table">
                        {product.Materials?.map((material, index) => {
                          const part = toLanguageDescriptionMap(
                            material?.Parts
                          )[language];
                          const mat = toLanguageDescriptionMap(material?.Mats)[
                            language
                          ];

                          const detail = toLanguageDescriptionMap(
                            material?.Details
                          )[language];

                          return (
                            <tr key={index}>
                              <td>{part || null}</td>
                              <td>
                                {mat || null}
                                {detail ? `, ${detail}` : null}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <table>
                      <tbody className="table">
                        {toLanguageDescriptionMap(product.Finish)[language] ? (
                          <tr>
                            <td> {t("finish")}</td>
                            <td>
                              {
                                toLanguageDescriptionMap(product.Finish)[
                                  language
                                ]
                              }
                            </td>
                          </tr>
                        ) : null}
                        {toLanguageDescriptionMap(product.ColorFamily)[
                          language
                        ] ? (
                          <tr>
                            <td>{t("color")}</td>
                            <td>
                              {
                                toLanguageDescriptionMap(product.ColorFamily)[
                                  language
                                ]
                              }
                            </td>
                          </tr>
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                </div>
                {toLanguageDescriptionMap(product.Maintenance)[language] ||
                toLanguageDescriptionMap(product.Remark)[language] ? (
                  <h3
                    className="text-lg font-hairline tracking-wide mb-2 italic"
                    style={{ alignSelf: "baseline" }}
                  >
                    {t("extra")}
                  </h3>
                ) : null}

                <div className="text-md tracking-wide">
                  <div className="pb-8">
                    <p>
                      {toLanguageDescriptionMap(product.Maintenance)[language]}
                    </p>
                    <p>{toLanguageDescriptionMap(product.Remark)[language]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="right"
              className="w-20 self-center absolute right-0"
              style={{ top: "50%" }}
            >
              <button
                onClick={() => {
                  const index = (productDisplayed.index + 1) % products.length;
                  setProductDisplayed({
                    index,
                    id: products[index].ItemId,
                  });
                }}
              >
                <img src="/fleche_droite.png" />
              </button>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Products;
