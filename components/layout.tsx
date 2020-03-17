import Head from "next/head";
import React from "react";
import {
  LanguageSupported,
  useLanguageState,
  useSetLanguage
} from "../use-language";

export const Layout = ({ children }) => {
  const { language } = useLanguageState();
  const setLanguage = useSetLanguage();

  return (
    <>
      <div className="pt-8 pb-2">
        <Head>
          <title>Flamant</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="pt-3 flex px-10 my-0 mx-auto pb-0 w-full items-center justify-center">
          {/*<Link href="/">*/}
          {/*  <a className="no-underline opacity-100">*/}
          {/*    <svg*/}
          {/*      className="overflow-hidden inline-block align-middle"*/}
          {/*      dangerouslySetInnerHTML={{*/}
          {/*        __html: '<use xlink:href="#icon-logo"></use>'*/}
          {/*      }}*/}
          {/*    ></svg>*/}
          {/*  </a>*/}
          {/*</Link>*/}
          {/*<Logo />*/}
        </div>
        <div>
          <div>
            <button onClick={() => setLanguage(LanguageSupported.NL)}>
              {LanguageSupported.NL}
            </button>
          </div>
          <div>
            <button onClick={() => setLanguage(LanguageSupported.EN)}>
              {LanguageSupported.EN}
            </button>
          </div>
          <div>
            <button onClick={() => setLanguage(LanguageSupported.FR)}>
              {LanguageSupported.FR}
            </button>
          </div>
        </div>
      </div>

      {children}
    </>
  );
};
