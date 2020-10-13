import styled, { css } from 'styled-components';

interface ContainerProps {
  transition: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 10px;
  .svg {
    display: block;
    margin: 20px auto;
    max-width: 100%;
  }

  .svg-circle-bg {
    fill: none;
  }

  .svg-circle {
    fill: none;
    ${props =>
      props.transition &&
      css`
        transition: stroke-dashoffset 750ms ease-in-out;
      `}
  }

  .svg-circle-text {
    display: flex;
    font-size: 2rem;
    text-anchor: middle;
    fill: #fff;
    font-weight: bold;
  }
`;
