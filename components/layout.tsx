import Head from "next/head";
import React from "react";
import {useTranslation} from "react-i18next";
import {LanguageSupported} from "../i18n";
import Link from "next/link";
import {Logo} from "./logo";
import {useRouter} from "next/router";

export const Layout = ({ children }) => {
  const { i18n } = useTranslation();

  const router = useRouter()
   console.log(router.route)

  return (
    <>
      <div className="pt-8 pb-2 mb-16">
        <Head>
          <title>Flamant</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="pt-3 flex px-10 my-0 mx-auto pb-0 w-full items-center justify-between">
            {router.route === "/" ? <Link href="/">
                <a className="no-underline opacity-100">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-20 w-20 text-flamant-body">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                </a>
            </Link>:
              <div className="no-underline opacity-100" onClick={() => router.back()}>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-20 w-20 text-flamant-body">
                      <path fillRule="evenodd"
    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
    clipRule="evenodd"/>
                  </svg>
              </div>}
          <Link href="/">
            <a className="no-underline opacity-100 w-auto text-center">
                <Logo />
          </a>
          </Link>
            <div className="flex flex-row justify-between">
                <div className="mb-2 mr-2">
                    <button onClick={() => i18n.changeLanguage(LanguageSupported.NL)}>
                        {LanguageSupported.NL}
                    </button>
                </div>
                <div className="mb-2 mx-2">
                    <button onClick={() => i18n.changeLanguage(LanguageSupported.EN)}>
                        {LanguageSupported.EN}
                    </button>
                </div>
                <div className="mb-2 ml-2">
                    <button onClick={() => i18n.changeLanguage(LanguageSupported.FR)}>
                        {LanguageSupported.FR}
                    </button>
                </div>
            </div>
        </div>
      </div>

      {children}
    </>
  );
};
