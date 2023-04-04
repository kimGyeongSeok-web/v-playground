import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface FormTypes {
  url: string;
  제목: string;
  태그: string;
}

interface CssProps {
  height?: string;
}

export default function UploadComponent() {
  const validation = yup.object().shape({
    url: yup
      .string()
      .required("url을 입력해주세요.")
      .matches(
        /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
        "url 형식을 확인해주세요."
      ),
    text: yup.string(),
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
            <InPutLabel htmlFor="url">파일 업로드하기</InPutLabel>
            <InputUrl type="url" {...register("url")} />
          </InPutDiv>

          <InPutDiv>
            <InPutLabel htmlFor="text">제목 입력</InPutLabel>
            <InputText type="text" {...register("제목")} />
          </InPutDiv>
          <InPutDiv>
            <InPutLabel htmlFor="text">태그 입력</InPutLabel>
            <InputText height={"200px"} type="text" {...register("태그")} />
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
  padding: 100px 50px;
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
  font-size: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 25%;
  height: 50px;
  color: white;
  background-color: #4472c4;
  margin: 0 30px 0 0;
`;

const InputUrl = styled.input`
  position: relative;
  width: 65%;
  border: none;
  font-size: 32px;
  font-weight: 500;
`;

const InputText = styled.input<CssProps>`
  position: relative;
  width: 65%;
  height: ${(props) => (props.height ? props.height : "auto")};
  font-size: 32px;
  border-radius: 12px;
  background-color: #d6dce5;
  border: none;
`;
