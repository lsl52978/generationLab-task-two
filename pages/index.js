import Head from 'next/head';
import HeaderSection from '../components/HeaderSection';
import CoreContent from '../components/CoreContent';
import DoctorsSection from '../components/DoctorsSection';
import Content1 from '../components/Content1';
import Content2 from "@/components/Content2";
import Content3 from "@/components/Content3";
export default function Home() {
  return (
      <>
        <Head>
          <title>For Providers</title>
          <meta name="description" content="Provider Page for Aging Measurement" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <HeaderSection />
          <CoreContent />
          <DoctorsSection />
            <Content1 />
            <Content2 />
            <Content3 />
        </main>
      </>
  );
}
