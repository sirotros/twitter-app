import s from './Button.module.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Button({
	children,
	isLoading = false,
	color = 'primary',
	type = 'button',
	icon,
	fab = false,
	bubbling = true,
	onClick,
	...rest
}) {
	const className = `${s.btn} ${s[color]} ${fab ? s.fab : ''}`;

	const clickHandler = event => {
		if (bubbling) {
			onClick(event);
		} else {
			event.preventDefault();
			onClick(event);
		}
	};

	return (
		<button className={className} type={type} disabled={isLoading} onClick={clickHandler} {...rest}>
			{isLoading ? <AiOutlineLoading3Quarters className={s.loadingIcon} /> : icon}
			{!isLoading && children}
		</button>
	);
}

export default Button;
