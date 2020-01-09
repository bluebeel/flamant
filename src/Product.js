import React from "react";
import ImageGallery from "react-image-gallery";
import "./Product.css";

const images = [
  {
    original:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b?$a15-mto-carousel$&hei=640&qlt=80&fit=constrain",
    thumbnail:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b?$a15-mto-carousel$&hei=150&qlt=80&fit=constrain"
  },
  {
    original:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b2?$a15-mto-carousel$&hei=640&qlt=80&fit=constrain",
    thumbnail:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b2?$a15-mto-carousel$&hei=150&qlt=80&fit=constrain"
  },
  {
    original:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b3?$a15-mto-carousel$&hei=640&qlt=80&fit=constrain",
    thumbnail:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b3?$a15-mto-carousel$&hei=150&qlt=80&fit=constrain"
  },
  {
    original:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b4?$a15-mto-carousel$&hei=640&qlt=80&fit=constrain",
    thumbnail:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b3?$a15-mto-carousel$&hei=150&qlt=80&fit=constrain"
  },
  {
    original:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b5?$a15-mto-carousel$&hei=640&qlt=80&fit=constrain",
    thumbnail:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b4?$a15-mto-carousel$&hei=150&qlt=80&fit=constrain"
  },
  {
    original:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b6?$a15-mto-carousel$&hei=640&qlt=80&fit=constrain",
    thumbnail:
      "//s7d5.scene7.com/is/image/Anthropologie/43791797-2100-VE0030-WLAN-AB_b6?$a15-mto-carousel$&hei=150&qlt=80&fit=constrain"
  }
];

function Product() {
  return (
    <div className="container mx-auto px-8">
      <ImageGallery
        items={images}
        showNav={false}
        showPlayButton={false}
        disableSwipe={true}
        disableArrowKeys={true}
        additionalClass="w-full mb-8"
      />
      <div className="mx-auto">
        <h1
          className="text-xl lg:text-4xl font-hairline tracking-widest mb-3"
          style={{ alignSelf: "baseline" }}
        >
          Lyre Chesterfield Two-Cushion Sofa
        </h1>
        <div className="mb-8 text-sm tracking-wide">
          <p>
            Modeled after its 18th-century forebearer, this button-tufted sofa
            remains steadfast to the original with handsome nailhead trim and
            rolled English arms. Its oversized shape and richly hued upholstery
            transcend the bounds of time, making it a perfect match for
            contemporary spaces.
          </p>
        </div>
        <h3
          className="text-lg font-hairline tracking-wide mb-3 italic"
          style={{ alignSelf: "baseline" }}
        >
          Specifications
        </h3>
        <div className="mb-8 text-sm tracking-wide">
          <div class="pb-8">
            <table>
              <tbody className="table">
                <tr>
                  <td>Length</td>
                  <td>60 cm</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>59 cm</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>83 cm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>8.3 kg</td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody className="table">
                <tr>
                  <td>Seat width</td>
                  <td>38 cm</td>
                </tr>
                <tr>
                  <td>Seat height</td>
                  <td>48 cm</td>
                </tr>
                <tr>
                  <td>Seat depth</td>
                  <td>42 cm</td>
                </tr>
                <tr>
                  <td>Armrest height</td>
                  <td>67 cm</td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody className="table">
                <tr>
                  <td>Material</td>
                  <td>Velvet, Wood</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>Orange</td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody className="table">
                <tr>
                  <td>Unique code</td>
                  <td>0200600410</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
