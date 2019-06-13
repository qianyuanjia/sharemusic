import styled from 'styled-components';
export const Wrapper = styled.div`
    position:fixed;
    top:${props=>props.top};
    left:50%;
    transform:translateX(-50%);
    background:red;
`;