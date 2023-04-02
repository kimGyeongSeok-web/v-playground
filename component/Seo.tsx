import { useRouter } from "next/router";
import styled from "styled-components";

interface propsType {
  title: string;
}

export default function Seo({ title }: propsType) {
  return <Section>{title}</Section>;
}

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  padding: 25px 0 0;
  font-size: 4rem;
  border-bottom: 1px solid black;
  @media (max-width: 1280px) {
    font-size: 3.5rem;
  }
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;
