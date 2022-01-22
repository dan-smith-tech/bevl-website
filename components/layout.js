import Head from "next/head";
import Link from "next/link";

export const siteName = "Bevl";

export default function Layout({children}) {
   return (
      <>
         <Head>
            <link rel="icon" href="/images/logo-small.svg" />
            <meta
               name="description"
               content="Learn how to build a personal website using Next.js"
            />
            <meta
               property="og:image"
               content={`https://og-image.vercel.app/${encodeURI(
                  siteName
               )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteName} />
            <meta name="twitter:card" content="summary_large_image" />
            <link
               href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"
               rel="stylesheet"
            />
         </Head>
         <main>{children}</main>
      </>
   );
}
