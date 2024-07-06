import styled from 'styled-components';

const StyledContainerCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	width: 150px;
	margin-bottom: 10px;
`;

const StyledImage = styled.img`
	border-radius: 50%;
`;

const StyledName = styled.span`
	font-weight: bold;
`;

export { StyledContainerCard, StyledImage, StyledName };
