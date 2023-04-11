import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface FormTypes {
  url: string;
  제목: string;
  태그: string;
  설명: string;
  기타: string;
}

interface CssProps {
  height?: string;
}

export default function UploadComponent() {
  const validation = yup.object().shape({
    url: yup
      .string()
      .url("url을 입력해주세요.")
      .matches(
        /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
        "url 형식을 확인해주세요."
      ),
    제목: yup.string().required("제목을 입력해주세요"),
    태그: yup.string().required("태그를 입력해주세요"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(validation),
  });

  return (
    <Section>
      <WrapperLayout>
        <UseForm onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
          <ButtonWrapper>
            <Button type="submit">업로드 하기</Button>
          </ButtonWrapper>
          <InPutDiv>
            <InPutLabel htmlFor="url">URL 주소 입력</InPutLabel>
            <InputUrl
              {...register("url")}
              name="url"
              placeholder="URL을 입력해주세요"
            />
          </InPutDiv>
          {errors.url && <Message>{errors.url.message}</Message>}
          <InPutDiv>
            <InPutLabel htmlFor="text">제목 입력</InPutLabel>
            <InputText
              {...register("제목")}
              name="제목"
              placeholder="제목을 입력해주세요"
            />
          </InPutDiv>
          {/* 필수가 아니다 */}
          <InPutDiv>
            <InPutLabel htmlFor="text">설명 입력</InPutLabel>
            <InputText
              {...register("설명")}
              name="설명"
              placeholder="설명을 입력해주세요"
            />
          </InPutDiv>
          <InPutDiv>
            <InPutLabel htmlFor="text">태그 입력</InPutLabel>
            <InputText
              height={"200px"}
              {...register("태그")}
              name="태그"
              placeholder="태그를 입력해주세요"
            />
          </InPutDiv>
          {/* 필수가 아니다 */}
          <InPutDiv>
            <InPutLabel htmlFor="text">기타 입력</InPutLabel>
            <InputText
              {...register("기타")}
              name="기타"
              placeholder="기타를 입력해주세요"
            />
          </InPutDiv>
        </UseForm>
      </WrapperLayout>
    </Section>
  );
}

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
`;

const WrapperLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 50px 50px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const UseForm = styled.form`
  position: relative;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

const Button = styled.button`
  position: relative;
  float: right;
  background-color: #4472c4;
  width: 20%;
  height: 50px;
  border: none;
  border-radius: 12px;
  font-size: 22px;
  color: white;
  cursor: pointer;
`;

const InPutDiv = styled.div`
  display: flex;
  margin: 25px 0 30px;
`;

const InPutLabel = styled.label`
  position: relative;
  display: flex;
  font-weight: 500;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 25%;
  height: 50px;
  color: white;
  background-color: #4472c4;
  margin: 0 30px 0 0;
  padding: 26px 0;
`;

const InputUrl = styled.input`
  position: relative;
  width: 75%;
  border: none;
  font-size: 32px;
  font-weight: 500;
  padding: 5px 5px;
`;

const InputText = styled.input<CssProps>`
  position: relative;
  width: 75%;
  height: ${(props) => (props.height ? props.height : "auto")};
  font-size: 32px;
  border-radius: 12px;
  background-color: #d6dce5;
  border: none;
  padding: 5px 10px;
`;

const Message = styled.div`
  margin: 0 0 0 30%;
  position: relative;
  color: #ff0000;
  font-size: 26px;
`;
