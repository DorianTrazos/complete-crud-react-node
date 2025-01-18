import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledButton = styled.button`
	border: 1px solid;
	background: none;
	padding: 6px 18px;
	border-radius: 0.6rem;
	text-transform: uppercase;
	font-weight: 600;
	color: ${({ $style }) =>
		$style === 'accent' ? COLORS.accent : COLORS.error};
	width: fit-content;
`;

export { StyledButton };
