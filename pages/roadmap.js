import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import roadmapStyles from '../styles/roadmap.module.css'

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>Roadmap | {siteTitle}</title>
        </Head>
        <div className={roadmapStyles.containerMain}>
          <Image
            priority
            src="/images/logo-complete.svg"
            className={roadmapStyles.logo}
            width={400}
            height={165}
            alt="Bevl Logo"
            draggable="false"
          />
          <Link href="https://bevl.app/signup">
            <a className="button buttonPrimary">
              SIGN UP FOR CLOSED BETA
            </a>
          </Link>
          <div className={roadmapStyles.roadmapFeatures}>
            <h2 className={roadmapStyles.roadmapFeaturesHeading}>Features to be added</h2>
            <ul className={roadmapStyles.roadmapFeaturesList}>
              
            </ul>
          </div>
        </div>
    </Layout>
  )
}