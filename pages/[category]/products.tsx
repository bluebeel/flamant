import axios from "axios";
import {GetServerSideProps} from "next";
import ImageGallery from "react-image-gallery";
import {useState} from "react";
import {toLanguageDescriptionMap} from "../../utils";
import {Layout} from "../../components/layout";
import {useTranslation} from "react-i18next";

const credentials = {
  username: "EyeCatcher",
  password: "7kv4y77a2g"
};
const Http = axios.create({
  baseURL: "https://app.flamant.com:8004/PIM/Ecommerce",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization:
      "Basic " +
      Buffer.from(credentials.username + ":" + credentials.password).toString(
        "base64"
      )
  }
});

export const getServerSideProps: GetServerSideProps = async ({
  params: { category: categoryId }
}) => {
  const products = await Http.get("/Products").then(productsResponse => {
    return productsResponse.data;
  });
  const filteredProducts = products.filter(product => {
    return (
      product?.Main?.Id === categoryId ||
      product?.SubCategory1?.Id === categoryId ||
      product?.SubCategory2?.Id === categoryId
    );
  });

  return {
    props: {
      products: filteredProducts
    }
  };
};

const Products = ({ products }) => {
  const [productDisplayed, setProductDisplayed] = useState({
    index: 0,
    id: products[0].ItemId
  });

  const {
    i18n: { language }
  } = useTranslation();

  return (
    <Layout>
      {products.map(product => {
        const images = [
          product.Images?.Main
            ? {
                original: product.Images?.Main,
                thumbnail: product.Images?.Main
              }
            : null,
          product.Images?.Image1
            ? {
                original: product.Images?.Image1,
                thumbnail: product.Images?.Image1
              }
            : null,
          product.Images?.Image2
            ? {
                original: product.Images?.Image2,
                thumbnail: product.Images?.Image2
              }
            : null,
          product.Images?.Image3
            ? {
                original: product.Images?.Image3,
                thumbnail: product.Images?.Image3
              }
            : null
        ].filter(Boolean);

        return (
          <div
            className="container mx-auto px-8"
            key={product.ItemId}
            hidden={product.ItemId !== productDisplayed.id}
          >
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
                {product.Name}
              </h1>
              <div className="mb-8 text-sm tracking-wide">
                <p
                  dangerouslySetInnerHTML={{
                    __html: product.FunctionalDescription?.find(
                      desc => desc.Language === language
                    )?.Description
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: product.LongDescription?.find(
                      desc => desc.Language === language
                    )?.Description
                  }}
                />
              </div>
              <h3
                className="text-lg font-hairline tracking-wide mb-3 italic"
                style={{ alignSelf: "baseline" }}
              >
                Specifications
              </h3>
              <div className="text-sm tracking-wide">
                <div className="pb-3">
                  <table>
                    <tbody className="table">
                      <tr>
                        <td>Length</td>
                        <td>{product?.Sizes?.Length} cm</td>
                      </tr>
                      <tr>
                        <td>Width</td>
                        <td>{product?.Sizes?.Width} cm</td>
                      </tr>
                      <tr>
                        <td>Height</td>
                        <td>{product?.Sizes?.Height} cm</td>
                      </tr>
                      <tr>
                        <td>Weight</td>
                        <td>{product?.Sizes?.NetWeight} kg</td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody className="table">
                      <tr>
                        <td>Seat width</td>
                        <td>{product?.Sizes?.SitWidth} cm</td>
                      </tr>
                      <tr>
                        <td>Seat height</td>
                        <td>{product?.Sizes?.SitHeight} cm</td>
                      </tr>
                      <tr>
                        <td>Seat depth</td>
                        <td>{product?.Sizes?.SitDepth} cm</td>
                      </tr>
                      <tr>
                        <td>Armrest height</td>
                        <td>{product?.Sizes?.ArmHeight} cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h3
                className="text-lg font-hairline tracking-wide mb-2 italic"
                style={{ alignSelf: "baseline" }}
              >
                Materiaux
              </h3>
              <div className="text-sm tracking-wide">
                <div className="pb-8">
                  <table>
                    <tbody className="table">
                      {product.Materials.map(material => {
                        const part = toLanguageDescriptionMap(material?.Parts)[
                          language
                        ];
                        const mat = toLanguageDescriptionMap(material?.Mats)[
                          language
                        ];

                        const detail = toLanguageDescriptionMap(
                          material?.Details
                        )[language];

                        return (
                          <tr key={part + mat + detail}>
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
                      <tr>
                        <td>Finish</td>
                        <td>
                          {toLanguageDescriptionMap(product.Finish)[language]}
                        </td>
                      </tr>
                      <tr>
                        <td>Color</td>
                        <td>
                          {
                            toLanguageDescriptionMap(product.ColorFamily)[
                              language
                            ]
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h3
                className="text-lg font-hairline tracking-wide mb-2 italic"
                style={{ alignSelf: "baseline" }}
              >
                Extra
              </h3>
              <div className="text-sm tracking-wide">
                <div className="pb-8">
                  <p>
                    {toLanguageDescriptionMap(product.Maintenance)[language]}
                  </p>
                  <p>{toLanguageDescriptionMap(product.Remark)[language]}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Products;
