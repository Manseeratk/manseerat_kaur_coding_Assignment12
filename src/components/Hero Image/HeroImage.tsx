import React from 'react';
import styled from 'styled-components';

export interface HeroImageProps {
  imageUrl: string;
  altText: string;
  disabled?: boolean;
}

const StyledHeroImage = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, altText, disabled = false }) => {
  return <StyledHeroImage disabled={disabled} style={{ backgroundImage: `url(${imageUrl})` }}  />;
};

export default HeroImage;
