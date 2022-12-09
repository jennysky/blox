import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ $size: number }>`
  border-radius: 1rem;
  background-color: rgb(237 40 126 / 1);
  padding: 0.5rem 1rem;
  color: white;
  width: ${(props) => props.$size}px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: rgb(251 57 151 /1);
  }
`;

export const Button: React.FC<
  PropsWithChildren<{ onClick?: () => void; size?: number; className?: string }>
> = ({ children, onClick, size = 200, className }) => {
  return (
    <StyledButton $size={size} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};
