import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './index.module.css';
import Link from '@docusaurus/Link';
import HomeFeatures from '../components/HomeFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttons}>
            <div>
              <Link
                className="button button--secondary button--lg"
                href="/docs/getting-started/discord"
              >
                Get started
              </Link>
            </div>
            <div>
              <Link
                className="button button--secondary button--lg"
                href="/maps"
              >
                Take a look at our maps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Welcome to EarthMaker!`}
      description="We make earth maps for Minecraft.">
      <HomepageHeader />
      <main>
        <br />
        <br />
        <br />
        <center><span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>We make Minecraft maps to 1:30 scale for Minecraft.</span></center>
        <br />
        <br />
        <br />
        <HomeFeatures />
      </main>
    </Layout>
  );
}
