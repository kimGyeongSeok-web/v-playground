import styled from "styled-components";
import Image from "next/image";

export default function ContentSection() {
  return (
    <Setcion>
      <Wrapper>
        <Box>
          <VideoItem src="https://www.youtube.com/embed/1t9nKrsdkdw" />
          <Info>
            <div>Created: 2023.04.01</div>
            <div>#iu #virtual human</div>
          </Info>
        </Box>

        <Box>
          <VideoItem src="https://www.youtube.com/embed/yXk0FKWB4hs" />
          <Info>
            <div>Created: 2023.04.01</div>
            <div>#iu #virtual human</div>
          </Info>
        </Box>

        <Box>
          <VideoItem src="https://www.youtube.com/embed/BZnmzFs0IFM" />
          <Info>
            <div>Created: 2023.04.01</div>
            <div>#iu #virtual human</div>
          </Info>
        </Box>

        <Box>
          <VideoItem src="https://www.youtube.com/embed/c6bBu2hd3CE" />
          <Info>
            <div>Created: 2023.04.01</div>
            <div>#iu #virtual human</div>
          </Info>
        </Box>
        <Box>
          <VideoItem
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yXk0FKWB4hs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <Info>
            <div>Created: 2023.04.02</div>
            <div>#iu #virtual human</div>
          </Info>
        </Box>
        <Box>
          <VideoItem
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yXk0FKWB4hs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <Info>
            <div>Created: 2023.04.01</div>
            <div>#iu #virtual human</div>
          </Info>
        </Box>
        <Box>
          <VideoItem src="https://www.youtube.com/embed/xu0SbGJZ5mU" />
          <Info>
            <div>Created: 2023.04.01</div>
            <div>#iu #virtual human</div>
          </Info>
        </Box>

        <Box>
          <VideoItem src="https://www.youtube.com/embed/_DLhUBWsRtw" />
          <Info>
            <div>Created: 2023.04.01</div>
            <div>#iu #virtual human</div>
          </Info>
        </Box>
        <Box>
          <VideoItem src="https://www.youtube.com/embed/KF6t61yuPCY" />
          <Info>
            <div>Created: 2023.04.01</div>
            <div>#iu #virtual human</div>
          </Info>
        </Box>
      </Wrapper>
    </Setcion>
  );
}

const Setcion = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  @media (max-width: 1280px) {
    height: 80%;
  }
`;
const Box = styled.div`
  position: relative;
  width: calc(100% / 3);
  height: calc((90% - 100px) / 2);
  padding: 60px 20px 80px;
  :nth-child(3n + 2) {
    :before {
      position: absolute;
      left: 0%;
      top: 14%;
      content: "";
      width: 2px;
      height: 70%;
      border: 1px solid #d0cece;
    }
    :after {
      position: absolute;
      right: 0%;
      top: 14%;
      content: "";
      width: 2px;
      height: 70%;
      border: 1px solid #d0cece;
    }
  }

  @media (max-width: 1280px) {
    width: calc(100% / 2);
    height: calc(80% - 100px);

    :nth-child(3n + 2) {
      :before {
        display: none;
      }
      :after {
        display: none;
      }
    }

    :nth-child(odd) {
      :after {
        display: block;
        position: absolute;
        right: 0%;
        top: 14%;
        content: "";
        width: 2px;
        height: 70%;
        border: 1px solid #d0cece;
      }
    }

    @media (max-width: 800px) {
      width: 100%;
      :nth-child(odd) {
        :after {
          display: none;
        }
      }
    }

    @media (max-width: 480px) {
      height: 50%;
      padding: 40px 20px;
    }
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  background-color: #d6dce5;
`;

const ImageLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const VideoItem = styled.iframe`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  transition: all 0.5s;
  &:hover {
    transform: translateY(-5%);
  }
`;

const Info = styled.div`
  margin: 8px 0 0 8px;
  font-size: 18px;
  line-height: 1.5;
  @media (max-width: 800px) {
    font-size: 18px;
    line-height: 1.5;
  }
  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 1.3;
  }
`;
