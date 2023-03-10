/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
`;

const CustomInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;
  font-family: ${({ theme }) => theme.typography.boldSubTitle.fontFamily};
  font-weight: ${({ theme }) => theme.typography.boldSubTitle.fontWeight};
  font-style: ${({ theme }) => theme.typography.boldSubTitle.fontStyle};
  font-size: ${({ theme }) => theme.typography.boldSubTitle.fontSize};
  line-height: ${({ theme }) => theme.typography.boldSubTitle.fontSize};
  padding: 1rem 2rem;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ style, className, disabled, ...props }) => (
  <Container className={className} style={style}>
    <CustomInput disabled={disabled} {...props} />
  </Container>
);

export default Input;
