import ReactMarkdown from 'react-markdown';
import * as Styled from './styles';

export type TextComponentProps = {
  children: string
};


export const TextComponent = ({ children }: TextComponentProps) => {
  return (
    <Styled.Container>
      <ReactMarkdown>{children}</ReactMarkdown>
    </Styled.Container>
  );
};

