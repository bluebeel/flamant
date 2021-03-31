import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { useRouter } from "next/router";
import { useIdleTimer } from "react-idle-timer";
import Image from "next/image";


export const Layout = ({ children }) => {
  const router = useRouter();
  const [isIdle, setIdle] = useState(false);

  const handleOnIdle = event => {
    console.log('user is idle', event)
    setIdle(true)
  }

  const handleOnActive = event => {
    console.log('user is active', event)
    setIdle(false)
  }

  const timer = useIdleTimer({
    timeout: 1000 * 10,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    debounce: 500
  })


  return (
    <div className="h-screen flex flex-col">
      <div className="pt-8 pb-2 mb-16">
        <Head>
          <title>Flamant</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="pt-3 flex px-10 my-0 mx-auto pb-0 w-full items-center justify-end text-3xl">
          {router.locales?.map((locale) => {
            return (
              <Link
                href={`/${locale}${router.asPath}`}
                locale={false}
                key={locale}
              >
                <a className="mb-2 mx-2">{locale?.toUpperCase()}</a>
              </Link>
            );
          })}
        </div>
        <div className="pt-3 flex px-10 my-0 mx-auto pb-0 w-full items-center justify-center">
          <a
            href={`/${router.locale}`}
            className="no-underline opacity-100 w-auto text-center inline-flex"
          >
            {router.route === "/" ? (
              <Logo />
            ) : (
              <img src="/google-home.png" className="w-32 mr-4" />
            )}
          </a>
        </div>
      </div>

      {children}
      {isIdle ? <div className="idleContainer">
        <li className="bgWrap">

          <Image
            alt="Mountains"
            src="https://images.unsplash.com/photo-1617213146999-f33c20d2a534"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </li>
        <li className="bgWrap">

          <Image
            alt="Mountains"
            src="https://images.unsplash.com/photo-1600564276091-0c1f17bf178c"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </li>
        <li className="bgWrap">

          <Image
            alt="Mountains"
            src="https://images.unsplash.com/photo-1549968479-4223c52f1acd"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </li>
        <li className="bgWrap">

          <Image
            alt="Mountains"
            src="https://images.unsplash.com/photo-1549896869-ca27eeffe4fb"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </li>
      </div> : null}
    </div>
  );
};
