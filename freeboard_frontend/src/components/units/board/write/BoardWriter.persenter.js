import {Wrapper, Title, Input, Html, LeftWrapper, DetailInput, Button, TitleInput, 
    Picture, Pictures, Radios, SignupButton,RightWrapper} from './BoardWriter.styles'

export default function BoardWriterUI(props) {

    return (
        <Html>
            <Wrapper>
                <Title>Upload Page</Title>
                <LeftWrapper>
                        <TitleInput type="text" placeholder="제목을 입력해 주세요" onChange={props.InputTitle}/>
                        <div>{titleerror}</div>
                        <Input type="text" placeholder="내용을 입력해 주세요" onChange={props.InputContent}/>
                        <div>{contenterror}</div>
                        <div>
                            <Input type="text" onChange={InputNumber}/>
                            <Button>우편 번호 검색</Button>
                        <div/>
                        <DetailInput>
                            <Input type="text" placeholder="상세 주소를 입력해 주세요" onChange={InputDetail}/>
                            
                            <Input type="text" placeholder="상세 주소를 입력해 주세요" onChange={InputDetail}/>
                            
                            <Input type="text" placeholder="링크를 복사해 주세요" onChange={InputLink}/>
                            
                        </DetailInput>
                        <Pictures>
                            <Picture></Picture>
                            <Picture></Picture>
                            <Picture></Picture>
                        </Pictures>
                        <Radios>
                            <input type="radio" name="mainset"/> 유튜브
                            <input type="radio" name="mainset"/> 사진
                        </Radios>
                    </div>
                    <SignupButton btnChange={props.btnChange} onClick={props.onSignButton}>등록하기</SignupButton>
                </LeftWrapper>
            </Wrapper>
            <RightWrapper></RightWrapper>
        </Html>
    )
}