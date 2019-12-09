import React from "react";
import "./Slide.css";

export function Slide({
  title,
  imageUrl,
  description,
  bedRoomCount,
  bathRoomCount,
  garage,
  area,
  location,
  price,
  transactionType
}) {
  return (
    <div className="relative antialiased w-full h-screen overflow-hidden">
      <div
        className="bg-cover bg-center animated  h-full"
        style={{
          backgroundImage: `url('${imageUrl}')`
        }}
      />
      <div className="absolute inset-y-0 right-0 h-screen w-4/12 bg-transparent flex flex-grow flex-col z-50">
        <div
          className="flex-1 text-center items-center justify-center"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
          <div className="mx-auto inline-flex justify-center pt-16">
            <svg
              className="h-20 w-20"
              xmlns="http://www.w3.org/2000/svg"
              width="535"
              height="682"
              viewBox="0 0 535 682"
              style={{ fill: "#beaf87", fillRule: "evenodd" }}
            >
              <path
                className="cls-1"
                d="M7115.61,14028l63.04-91.1,1.46-2.1a93.064,93.064,0,1,0-170.22-52c0,1.2.03,2.3,0.07,3.5h56.3c-0.1-1.2-.16-2.3-0.16-3.5a36.848,36.848,0,0,1,36.82-36.8c20.31,0,37.79,15.3,36.83,36.8-0.42,9.5-8.69,24.1-11.84,28.6-3.15,4.6-119.55,172.9-119.55,172.9h159.18l38.92-56.3h-90.85Zm143.86-238.3h-0.62l-38.92,56.3h48.9v238.3h56.2v-294.6h-65.56Zm17.94,409.7a284.7,284.7,0,1,1,0-524.8,292.4,292.4,0,0,1,44.8,23.9l32.04-46.2a338.635,338.635,0,0,0-187.55-56.3c-188.17,0-340.7,152.7-340.7,341s152.53,341,340.7,341a338.7,338.7,0,0,0,194.3-60.9l-32.03-46.2A283.709,283.709,0,0,1,7277.41,14199.4Zm63.53-115.5a5.793,5.793,0,0,1-1.85-1l0.65-1.2a7.1,7.1,0,0,0,1.64,1,6.231,6.231,0,0,0,1.9.3,2.612,2.612,0,0,0,1.82-.5,1.59,1.59,0,0,0,.69-1.4,1.426,1.426,0,0,0-.36-1.1,1.486,1.486,0,0,0-.82-0.5,7.979,7.979,0,0,0-1.44-.4,8.555,8.555,0,0,1-2.29-.7,2.849,2.849,0,0,1-1.18-1,2.372,2.372,0,0,1-.34-1.4,3.173,3.173,0,0,1,.6-2,3.274,3.274,0,0,1,1.52-1.1,6.2,6.2,0,0,1,1.94-.3,6.132,6.132,0,0,1,3.5,1.1l-0.62,1.1a5.233,5.233,0,0,0-2.93-.9,2.865,2.865,0,0,0-1.96.5,2.017,2.017,0,0,0-.67,1.6,1.374,1.374,0,0,0,.23.8,1.194,1.194,0,0,0,.8.6,9.378,9.378,0,0,0,1.62.5c0.71,0.1,1.31.3,1.81,0.4a4.135,4.135,0,0,1,1.36.9,2.8,2.8,0,0,1,.61,1.8,3.005,3.005,0,0,1-.47,1.7,3.307,3.307,0,0,1-1.33,1.2,6.1,6.1,0,0,1-2.03.4A9.876,9.876,0,0,1,7340.94,14083.9Zm19.22,0.2h-1.31v-9.4l-3.28,8.2h-1.46l-3.26-8.2v9.4h-1.32v-11.3h1.94l3.38,8.4,3.35-8.4h1.96v11.3Z"
                transform="translate(-6826 -13596)"
              />
            </svg>
          </div>
          <div className="w-full px-6 py-4 lg:px-12 relative flex-col justify-center">
            <h1 className="text-c21-primary text-center font-medium mb-4 text-3xl lg:text-5xl">{title}</h1>
            <div className="mb-6 lg:mb-12">
              <p className="lg:text-xl">{description}</p>
            </div>
            <div className="flex flex-grow leading-loose tracking-wide flex-col">
              <div className="inline-flex justify-around mb-8">
                <div className="flex flex-col w-1/2">
                  <div className="inline-flex mb-2 font-bold justify-center items-center">
                    <svg
                      className="h-8 w-8 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl">{bedRoomCount}</p>
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="inline-flex mb-2 font-bold justify-center items-center">
                    <svg
                      className="h-8 w-8 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl">{bathRoomCount}</p>
                  </div>
                </div>
              </div>
              <div className="inline-flex justify-around mb-8">
                <div className="flex flex-col w-1/2">
                  <div className="inline-flex mb-2 font-bold justify-center items-center">
                    <svg
                      className="h-8 w-8 fill-current"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 174 174"
                      style={{ enableBackground: "new 0 0 174 174" }}
                    >
                      <path
                        style={{ fill: "fill:#000002" }}
                        d="M171.5,163.641H2.5c-1.381,0-2.5-1.119-2.5-2.5V12.859c0-1.381,1.119-2.5,2.5-2.5h151.672
	c1.381,0,2.5,1.119,2.5,2.5v73.927H171.5c1.381,0,2.5,1.119,2.5,2.5v71.855C174,162.522,172.881,163.641,171.5,163.641z
	 M45.5,158.641H169V91.786h-51.701c-1.381,0-2.5-1.119-2.5-2.5v-4.813h-6.172c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5h6.172
	V63.306c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5v23.48h14.529V15.359h-14.529v18.28c0,1.381-1.119,2.5-2.5,2.5
	s-2.5-1.119-2.5-2.5v-7.667H75.5c-1.381,0-2.5-1.119-2.5-2.5v-8.113h-9.127v11.613c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5
	V15.359h-2.706v6.447c0,1.381-1.119,2.5-2.5,2.5h-0.779c0.447,1.021,0.696,2.149,0.696,3.333v6.5c0,4.595-3.738,8.333-8.333,8.333
	c-4.595,0-8.333-3.738-8.333-8.333v-6.5c0-1.185,0.249-2.312,0.696-3.333h-0.779c-1.381,0-2.5-1.119-2.5-2.5v-6.447H25.25v33.113
	c0,1.381-1.119,2.5-2.5,2.5H19.5V65.01h39.373V53.472c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5v26h6.172
	c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5h-6.172v12.25c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5V70.01H23.167v71.796H43
	c1.381,0,2.5,1.119,2.5,2.5V158.641z M5,158.641h35.5v-11.835H20.667c-1.381,0-2.5-1.119-2.5-2.5v-43.5H5V158.641z M5,95.806h13.167
	V70.01H5V95.806z M148,86.786h3.672V15.359H148V86.786z M139.328,86.786H143V15.359h-3.672V86.786z M5,64.139h9.5V50.972H5V64.139z
	 M17,45.972h3.25V15.359H5v30.613H17z M45.25,24.306c-1.838,0-3.333,1.496-3.333,3.333v6.5c0,1.838,1.495,3.333,3.333,3.333
	s3.333-1.495,3.333-3.333v-6.5C48.583,25.802,47.088,24.306,45.25,24.306z M78,20.972h36.799v-5.613H78V20.972z M45.25,19.306h5.917
	v-3.947H39.333v3.947H45.25z M99.956,151.222H79.911c-1.381,0-2.5-1.119-2.5-2.5V102.91c0-1.381,1.119-2.5,2.5-2.5h20.045
	c1.381,0,2.5,1.119,2.5,2.5v45.813C102.456,150.103,101.336,151.222,99.956,151.222z M82.411,146.222h15.045v-2.5h-8.873
	c-1.381,0-2.5-1.119-2.5-2.5V110.41c0-1.381,1.119-2.5,2.5-2.5h8.873v-2.5H82.411V146.222z M91.083,138.722h6.373V112.91h-6.373
	V138.722z M154.172,149.722c-1.381,0-2.5-1.119-2.5-2.5v-43c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5v7.756
	c1.3,0.088,2.328,1.171,2.328,2.494v22.5c0,1.323-1.027,2.406-2.328,2.494v7.756C156.672,148.603,155.553,149.722,154.172,149.722z
	 M130.071,146.722c-7.951,0-14.179-8.565-14.179-19.5s6.228-19.5,14.179-19.5s14.179,8.565,14.179,19.5
	S138.022,146.722,130.071,146.722z M130.071,112.722c-4.976,0-9.179,6.64-9.179,14.5s4.204,14.5,9.179,14.5s9.179-6.64,9.179-14.5
	S135.046,112.722,130.071,112.722z"
                      />
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl">{area}</p>
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="inline-flex mb-2 font-bold justify-center items-center">
                    <svg
                      className="h-8 w-8 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 435.905 435.905"
                      style={{ enableBackground: "new 0 0 435.905 435.905" }}
                    >
                      <g>
                        <g>
                          <path
                            d="M430.902,120.789l-208.1-115.6c-3-1.7-6.7-1.7-9.7,0l-208,115.6c-3.2,1.8-5.1,5.1-5.1,8.7v292.7c-0.1,5.4,4.2,9.8,9.6,9.8
			c0.1,0,0.2,0,0.2,0h416.3c5.4,0.1,9.8-4.2,9.8-9.6c0-0.1,0-0.2,0-0.2v-292.6C436.002,125.889,434.102,122.589,430.902,120.789z
			 M358.002,412.089h-280v-41h280V412.089z M358.002,351.089h-280v-38h280V351.089z M358.002,293.089h-280v-38h280V293.089z
			 M358.002,235.089h-280v-38h280V235.089z M416.002,412.089h-38v-224.7c0-5.5-4.1-10.3-9.7-10.3h-300.6c-5.5,0-9.7,4.8-9.7,10.3
			v224.7h-38v-276.7l198-110.1l198,110.1V412.089z"
                          />
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl">{garage}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-center mt-16">
              <svg
                className="h-6 w-6 fill-current mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className="heroicon-ui"
                  d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              <span className="lg:text-2xl">{location}</span>
            </div>
          </div>
        </div>
        <div
          className="h-auto px-6 lg:px-12 py-6 inline-flex justify-between text-white"
          style={{ backgroundColor: "rgba(64, 64, 65, 1)" }}
        >
          <div className="text-lg lg:text-2xl uppercase text-c21-bg">
            <span>{transactionType}</span>
          </div>
          <div className="text-right text-c21-bg font-bold text-lg lg:text-2xl font-bold pl-3 flex items-center">
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
