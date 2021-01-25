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
        <div className="pt-3 flex px-10 my-0 mx-auto pb-0 w-full items-center justify-end text-3xl">
          {router.locales?.map((locale) => {
            return (
              <Link href={router.asPath} locale={locale} key={locale}>
                <a className="mb-2 mx-2">{locale?.toUpperCase()}</a>
              </Link>
            );
          })}
        </div>
        <div className="pt-3 flex px-10 my-0 mx-auto pb-0 w-full items-center justify-center">
          <a
            href="/"
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
    </div>
  );
};
