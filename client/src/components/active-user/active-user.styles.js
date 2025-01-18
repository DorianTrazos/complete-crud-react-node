import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledActiveUser = styled.span`
	display: flex;
	align-items: center;
	gap: 0.9rem;
	color: ${({ $active }) => ($active ? COLORS.success : COLORS.error)};

	&::before {
		content: '';
		display: block;
		width: 0.875rem;
		height: 0.875rem;
		border-radius: 50%;
		background-color: ${({ $active }) =>
			$active ? COLORS.success : COLORS.error};
	}
`;

export { StyledActiveUser };
