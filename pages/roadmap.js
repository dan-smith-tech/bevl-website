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
            width={250}
            height={100}
            alt="Bevl Logo"
            draggable="false"
          />
          <div className='containerButton'>
            <Link href="https://bevl.app">
              <a className="button buttonPrimary">
                SIGN UP FOR CLOSED BETA
              </a>
            </Link>
          </div>
          <div className={roadmapStyles.roadmapFeatures}>
            <h2 className={roadmapStyles.roadmapFeaturesHeading}>Features to be added:</h2>
              <ul className={roadmapStyles.roadmapFeaturesList}>
              <li className={roadmapStyles.roadmapFeaturesListElement}></li>
            </ul>
          </div>
        </div>
    </Layout>
  )
}