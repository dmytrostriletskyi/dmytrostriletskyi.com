import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="metadata.firstName"/> <Translate id="metadata.lastName"/>
        </h1>
        <p className="hero__subtitle">
        <Translate id="metadata.summary"/>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <Layout>
    //   <h1 style={{margin: 20}}>
    //     <Translate id="metadata.firstName"/>
    //     <Translate id="metadata.lastName"/>
    //   </h1>
    // </Layout>
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
