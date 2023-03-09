/* eslint-disable react/no-array-index-key */
import { Select as AntdSelect } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-select {
    width: 100%;
    font-size: 12px;
    font-family: ${({ theme }) => theme.typography.regularTitle.fontFamily};
    font-weight: ${({ theme }) => theme.typography.regularTitle.fontWeight};
    font-style: ${({ theme }) => theme.typography.regularTitle.fontStyle};
    font-size: 1rem;
    line-height: ${({ theme }) => theme.typography.regularTitle.fontSize};

    .ant-select-selector {
      background: ${({ theme }) => theme.colors.white};
      border: none;
      border-radius: 0.75rem;
      height: 3rem;
      align-items: center;
      filter: drop-shadow(0px 0px 0.6875rem ${({ theme }) => theme.colors.white});
    }
  }
`;

interface ISelect extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  options: { value: string; label: string }[];
  onValueChange: (newValue: string) => void;
}

const Select: React.FC<ISelect> = ({ value, options, onValueChange, ...props }) => (
  <Container {...props}>
    <AntdSelect onChange={onValueChange} options={options} value={value} />
  </Container>
);

export default Select;
