import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, {siteName} from "../components/layout";
import indexStyles from "../styles/index.module.css";

export default function Home() {
   return (
      <Layout>
         <Head>
            <title>{siteName}</title>
         </Head>
         <div className={indexStyles.containerMain}>
            <Image priority src="/images/logo-complete.svg" width={400} height={165} alt="Bevl Logo" draggable="false" />
            <Link href="/signup">
               <a className="button buttonPrimary">SIGN UP FOR CLOSED BETA</a>
            </Link>
            <Link href="/help">
               <a className="button buttonSecondary">HOW TO USE</a>
            </Link>
            <Link href="/roadmap">
               <a className="button buttonSecondary">ROADMAP</a>
            </Link>
         </div>
      </Layout>
   );
}
