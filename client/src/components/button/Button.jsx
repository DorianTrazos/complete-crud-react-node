import { StyledButton } from './button.styles';

const Button = ({ type, style, action, children }) => {
	return (
		<StyledButton $style={style} type={type} onClick={action}>
			{children}
		</StyledButton>
	);
};

export default Button;
