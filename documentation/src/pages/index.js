import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <Heading as="h1" className="hero__title">
          Groupe Ouellet
        </Heading>
        <p className="hero__subtitle">Documentation interne et guides pratiques</p>
        <div className={styles.buttons} style={{ marginBottom: '10px' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/employé/commencer">
            Je suis un employé
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction"
            style={{ paddingLeft: '60px', paddingRight: '60px' }}
            >
            Je suis un TI
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Groupe Ouellet"
      description="Documentation interne et guides pratiques du Groupe Ouellet">
      <HomepageHeader />
      <main />
    </Layout>
  );
}
