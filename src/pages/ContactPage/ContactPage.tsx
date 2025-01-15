import { BoxList, ContactBox, Wrapper } from "./ContactPageCss";

const ContactPage = () => {
  return (
    <Wrapper>
      <BoxList>
        <ContactBox>
          <a href="https://github.com/minjoon97" target="_blank">
            GitHub
          </a>
        </ContactBox>
        <ContactBox>
          <a href="mailto:annawa678@gmail.com">Google</a>
        </ContactBox>
        <ContactBox>
          <a href="mailto:annawa6@naver.com">Naver</a>
        </ContactBox>
      </BoxList>
    </Wrapper>
  );
};

export default ContactPage;
