import { BoxList, ContactBox, Wrapper } from "./ContactPageCss";

const ContactPage = () => {
  return (
    <Wrapper>
      <BoxList>
        <ContactBox>
          <a href="https://github.com/minjoon97" target="_blank">
            <img src="github-logo.svg" alt=""></img>
            GitHub
          </a>
        </ContactBox>
        <ContactBox>
          <a href="mailto:annawa678@gmail.com">
            <img src="google-logo.png" alt=""></img>
            Google
          </a>
        </ContactBox>
        <ContactBox>
          <a href="mailto:annawa6@naver.com">
            <img src="naver-logo.png" alt=""></img>
            Naver
          </a>
        </ContactBox>
      </BoxList>
    </Wrapper>
  );
};

export default ContactPage;
