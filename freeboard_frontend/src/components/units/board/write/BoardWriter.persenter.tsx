import * as W from "./BoardWriter.styles";
import { IBoardPresent } from "./BoardWriter.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import UploadPage from "../../../commons/uploads/01/Uploads01.container";

export default function BoardWriterUI(props: IBoardPresent) {
  return (
    <W.Html>
      {props.isModalVisible && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.handleComplete} />
        </Modal>
      )}
      <W.Wrapper>
        <W.Title>{props.isEdit ? "Edit" : "Bulletine"} Board</W.Title>
        <W.LeftWrapper>
          <W.HeadWrapper>
            <W.NameWrapper>
              <W.NameInput
                type="text"
                placeholder="이름을 입력하세요"
                onChange={props.InputName}
                defaultValue={props.data?.fetchBoard.writer}
              />
              <W.NameError>{props.nameerror}</W.NameError>
            </W.NameWrapper>
            <W.PasswordWrapper>
              <W.PasswordInput
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                onChange={props.InputPassword}
              />
              <W.PasswordError>{props.passworderror}</W.PasswordError>
            </W.PasswordWrapper>
          </W.HeadWrapper>
          <W.Input
            type="text"
            placeholder="제목을 입력해 주세요"
            onChange={props.InputTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <W.Error>{props.titleerror}</W.Error>
          <W.Input
            type="text"
            placeholder="내용을 입력해 주세요"
            onChange={props.InputContent}
            defaultValue={props.data?.fetchBoard.content}
          />
          <W.Error>{props.contenterror}</W.Error>
          <div>
            <W.Addresses>
              <W.Zipcode>
                {props.myzonecode ||
                  props.data?.fetchBoard.boardAddress?.zipcode ||
                  "."}
              </W.Zipcode>
              <W.Button onClick={props.onToggleModal}>우편 번호 검색</W.Button>
            </W.Addresses>
            <div />
            <W.DetailInput>
              <W.Address>
                {props.myaddress ||
                  props.data?.fetchBoard.boardAddress?.address ||
                  ""}
              </W.Address>
              <W.Input
                type="text"
                placeholder="상세 주소를 입력해 주세요"
                onChange={props.InputAddressDetail}
              />
              <W.Input
                placeholder="링크를 복사해 주세요"
                onChange={props.InputYoutubeUrl}
              />
            </W.DetailInput>
            {props.fileUrl.map((el, index) => (
              <UploadPage
                key={index}
                index={index}
                fileUrl={el}
                onChangeFilrUrls={props.onChangeFilrUrls}
              />
            ))}
            <W.Radios>
              <input type="radio" name="mainset" /> 유튜브
              <input type="radio" name="mainset" /> 사진
            </W.Radios>
          </div>
          {/* <SignupButton onClick={onSignupButton}>등록하기</SignupButton> */}
          <W.SignupButton
            onClick={props.isEdit ? props.onClickUpdate : props.addBoard}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </W.SignupButton>
        </W.LeftWrapper>
      </W.Wrapper>
      <W.RightWrapper></W.RightWrapper>
    </W.Html>
  );
}
