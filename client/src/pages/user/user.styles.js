import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledUser = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 90%;
	padding: 1rem;
	border-radius: 1rem;
	margin-inline: auto;
	background-color: #fff;
`;

const StyledCardHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	text-align: center;
`;

const StyledUserInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledInfoField = styled.div`
	display: flex;
	gap: 0.25rem;
`;

const StyledLightText = styled.span`
	color: ${COLORS.lightText};
`;

const StyledBoldText = styled.span`
	color: ${COLORS.lightText};
	font-weight: bold;
`;

const StyledButtons = styled.div`
	display: flex;
	justify-content: space-between;
`;

export {
	StyledBoldText,
	StyledButtons,
	StyledCardHeader,
	StyledInfoField,
	StyledLightText,
	StyledUser,
	StyledUserInfo
};
