import { Wrapper, Item, WrapperHeader } from "./styled";
const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Item>
      <WrapperHeader>{title}</WrapperHeader>
      {extraHeaderContent}
    </Item>
    {body}
  </Wrapper>
);

export default Section;
