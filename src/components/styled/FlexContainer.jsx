import styled from 'styled-components';

export const FlexContainer = styled.div `
    display: flex;
    align-items: ${({align}) => align || 'start'};
    justify-content: ${({justify}) => justify || 'center'};
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap || '0'};
    border: ${({border}) => border || 'none'};
    flex-wrap: ${({wrap}) => wrap || 'none'};
    height: 100%;
    width: 100%;
`