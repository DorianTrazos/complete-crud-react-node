import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledUserCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: 90%;
	margin-bottom: 1rem;
	margin-inline: auto;
	border-radius: 1rem;
	background-color: ${COLORS.white};
	box-shadow: 2px 2px 4px rgb(0 0 0 / 0.25);
`;

const StyledUserImage = styled.img`
	width: 4rem;
	border-radius: 50%;
`;

const StyledUserInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 1rem;
`;

const StyledFooterCard = styled.div`
	display: flex;
	justify-content: space-between;
`;

export { StyledFooterCard, StyledUserCard, StyledUserImage, StyledUserInfo };
