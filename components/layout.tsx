import Head from "next/head";
import React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { useRouter } from "next/router";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col">
      <div className="pt-8 pb-2 mb-16">
        <Head>
          <title>Flamant</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="pt-3 flex px-10 my-0 mx-auto pb-0 w-full items-center justify-between">
          {router.route === "/" ? (
            <Link href="/" locale={router.locale}>
              <a className="no-underline opacity-100">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-20 w-20 text-flamant-body"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>
            </Link>
          ) : (
            <div
              className="no-underline opacity-100"
              onClick={() => router.back()}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-20 w-20 text-flamant-body"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          <Link href="/">
            <a className="no-underline opacity-100 w-auto text-center inline-flex">
              <img src="/google-home.png" className="w-24 mr-4" />
              <Logo />
            </a>
          </Link>
          <div className="flex flex-row justify-between text-3xl">
            {router.locales?.map((locale) => {
              return (
                <Link href={router.asPath} locale={locale} key={locale}>
                  <a className="mb-2 mx-2">{locale?.toUpperCase()}</a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};
