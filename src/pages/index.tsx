import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="https://download.earthmaker.world"
            target="_blank">
            Get started, join our Discord
          </a>
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
      </main>
    </Layout>
  );
}
