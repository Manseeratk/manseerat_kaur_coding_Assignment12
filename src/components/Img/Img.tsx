import React from 'react';
import styled from 'styled-components';

interface ImgProps {
  src: string;
  alt: string;
  disabled?: boolean;
}

const StyledImg = styled.img<{ disabled?: boolean }>`
  width: 100%;
  max-width: 100%;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, disabled = false }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} />;
};

export default Img;
