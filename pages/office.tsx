import styled from "styled-components";
import ContentSection from "@/component/ContentSection";
import Head from "next/head";
import Seo from "@/component/Seo";
import UploadComponent from "@/component/UploadComponent";

export default function Office() {
  return (
    <>
      <Head>
        <title>V-Ground-BackOffice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Seo title={"V-Ground\nBackOffice"} />
        <UploadComponent />
      </Section>
    </>
  );
}

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
