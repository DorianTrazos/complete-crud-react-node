import { StyledButton } from './button.styles';

const Button = ({ type, action, children }) => {
	return (
		<StyledButton $type={type} onClick={action}>
			{children}
		</StyledButton>
	);
};

export default Button;
