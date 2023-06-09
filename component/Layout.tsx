import styled from "styled-components";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutComponent>
      <Wrapper>{children}</Wrapper>
    </LayoutComponent>
  );
}

const LayoutComponent = styled.div`
  display: flex;
  width: calc(100% - 40%);
  height: 100vh;
  margin: 0 20%;
  border-right: 1px solid black;
  border-left: 1px solid black;
  @media (max-width: 480px) {
    width: calc(100% - 10%);
    margin: 0 5%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
