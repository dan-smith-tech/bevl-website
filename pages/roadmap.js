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
          <Link href="/signup">
            <a className="button buttonPrimary">
              SIGN UP FOR CLOSED BETA
            </a>
          </Link>
          <div className={roadmapStyles.roadmapFeatures}>
            <h2 className={roadmapStyles.roadmapFeaturesHeading}>Features to be added</h2>
            <ul className={roadmapStyles.roadmapFeaturesList}>
              <li className={roadmapStyles.roadmapFeaturesListElement}>Deadline plans will signify their time occurance relative to their associated Deadline (e.g., if a Deadline plan occurs after the Deadline itself, users will be signified that they are planning to work on the task after it&apos;s due).</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>All tasks that appear on the calendar can be reordered using drag n&apos; drop.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>You can click on a day on the calendar to create a task, with that date pre-selected.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>Habits: recurring events that only appear on the calendar.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>Projects: larger tasks that can be broken down into mutiple Deadlines.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>Information can be added to deadline plans.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>Tasks can be toggled on and off on the calendar, either by task type or by label.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>Tasks can be toggled on and off in the list bar; by time occurance (e.g., &ldquo;only show tasks that occur in the next month&rdquo;), task type, and by label.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>The mobile app/web version acts as a companion where you can add/edit tasks. The desktop version will then be used to organsie and manage these tasks, with the calendar.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>Moodboard: users can make &ldquo;sticky note&rdquo; lists, for random, less-organised, pieces of information you might want to keep track of.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>Work plans will allow you to create a list of tasks you want to work &apos;today&apos;. Events and habits occuring &apos;today&apos; will also show up in this section.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>A browser extension that allows you to save bookmarks/websites to lists on your moodboard.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>Recipe book: individual recipes can be created, each with cooking steps and ingredients. Weekly meal plans can be made by selecting recipes you&apos;ve created. A shopping list can then be generated based on the ingredients required for the recipes selected.</li>
              <li className={roadmapStyles.roadmapFeaturesListElement}>Workout routines: individual exercises can be created, where notes and videos can be added as details. Workout routines can be created by dragging the individual exercises into a schedule.</li>
            </ul>
          </div>
        </div>
    </Layout>
  )
}