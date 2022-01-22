import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, {siteName} from "../components/layout";
import helpStyles from "../styles/help.module.css";

export default function Help() {
   return (
      <Layout>
         <Head>
            <title>Help | {siteName}</title>
         </Head>
         <div className={helpStyles.containerMain}>
            <Image
               priority
               src="/images/logo-complete.svg"
               width={400}
               height={165}
               alt="Bevl Logo"
               draggable="false"
            />
            <Link href="/signup">
               <a className="button buttonPrimary">SIGN UP FOR CLOSED BETA</a>
            </Link>
            <Link href="/roadmap">
               <a className="button buttonSecondary">VIEW PLANNED FEATURES</a>
            </Link>
            <div>
               <h2></h2>
            </div>
         </div>
      </Layout>
   );
}
