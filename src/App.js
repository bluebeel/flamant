import React from "react";
import { Slide } from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Spinner from "react-spinkit";

function App() {
  const url = window.LIVE_FEED_URL;

  const [data, setData] = React.useState(null);
  const [fetchState, setFetchState] = React.useState({
    loading: false,
    loaded: false,
    error: null
  });

  React.useEffect(() => {
    setFetchState(state => ({ ...state, loading: true }));
    fetch(url)
      .then(response => response.text())
      .then(parseXmlToDom)
      .then(xml2json)
      .then(v => {
        setFetchState(state => ({ ...state, loading: false, loaded: true }));

        setData(v.rss.channel);
        console.log("JSON.v", v);
      })
      .catch(err => {
        console.log("Error", err);
        setFetchState(state => ({
          ...state,
          loading: false,
          error: err,
          loaded: false
        }));
      });
  }, [url, setFetchState]);

  if (fetchState.loading) {
    return (
      <div className="flex">
        <Spinner name="line-scale-pulse-out" />
      </div>
    );
  }

  if (!data) {
    return <h1>No data fetched</h1>;
  }

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplaySpeed: 25000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    draggable: false,
    swipe: false,
    touchMove: false
  };

  return (
    <Slider {...settings}>
      {data.item.map(slide => {
        return (
          <Slide
            key={slide.guid.value}
            title={slide.title}
            description={slide.description}
            imageUrl={slide["media:content"].url}
            location={slide.Adresse}
            bedRoomCount={slide.QuantiteChambre}
            garage={slide.QuantiteGarage}
            bathRoomCount={slide.QuantiteSDB}
            area={slide.Surface}
            transactionType={slide.TransactionType}
            price={slide.Prix}
          />
        );
      })}
    </Slider>
  );
}

export default App;

function parseXmlToDom(input) {
  console.log("parseXmlToDom::input", input);
  const parser = new DOMParser(); // initialize dom parser
  return parser.parseFromString(input, "application/xml"); // convert dom string to dom tree.
}

function xml2json(srcDOM) {
  let children = [...srcDOM.children];

  // base case for recursion.
  if (!children.length) {
    if (srcDOM.hasAttributes()) {
      var attrs = srcDOM.attributes;
      var output = {};
      for (var i = attrs.length - 1; i >= 0; i--) {
        output[attrs[i].name] = attrs[i].value;
      }

      output.value = srcDOM.innerHTML;
      return output;
    } else {
      return srcDOM.innerHTML;
    }
  }

  // initializing object to be returned.
  let jsonResult = {};

  for (let child of children) {
    // checking is child has siblings of same name.
    let childIsArray =
      children.filter(eachChild => eachChild.nodeName === child.nodeName)
        .length > 1;

    // if child is array, save the values as array, else as strings.
    if (childIsArray) {
      if (jsonResult[child.nodeName] === undefined) {
        jsonResult[child.nodeName] = [xml2json(child)];
      } else {
        jsonResult[child.nodeName].push(xml2json(child));
      }
    } else {
      jsonResult[child.nodeName] = xml2json(child);
    }
  }

  return jsonResult;
}
