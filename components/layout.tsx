import Head from "next/head";
import React from "react";
import Link from "next/link";
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
          <a href="/" className="no-underline opacity-100 w-auto text-center inline-flex">
            <img src="/google-home.png" className="w-32 mr-4" />
          </a>
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
