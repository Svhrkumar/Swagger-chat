import React, { useState, useEffect } from 'react';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
import styles from './socialmenu.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { MENU_OPEN } from '../redux/action.type';

const SocialMenu = (props) => {
	const [selectIcon, setSelectIcon] = useState('facebook');

	const userSearchDetails = useSelector((state) => state.userSearchDetails);
	const { openMenu } = userSearchDetails;
	const dispatch = useDispatch();
	const handleClick = (data) => {
		console.log('click');
		props.messageHandle(data);
	};

	const handleMenu = () => {
		if (openMenu) {
			dispatch({
				type: MENU_OPEN,
				payload: false,
			});
		} else {
			dispatch({
				type: MENU_OPEN,
				payload: true,
			});
		}
	};

	console.log(selectIcon, openMenu);

	const bgcolor = {
		backgroundColor: 'rgb(71, 81, 86)',
	};
	return (
		<div
			className='col-1 test'
			style={{
				backgroundColor: '#0D0D0D',
			}}>
			<div
				style={{ marginTop: '10px', textAlign: 'center', cursor: 'pointer' }}>
				<a onClick={handleMenu}>
					<MenuIcon style={{ fontSize: '35px', color: 'white' }} />
				</a>
			</div>
			<div className='social-icon-ctn'>
				<img
					className='social-icons'
					src={one}
					alt='social-icon'
					width='30px'
					height='30px'
					onClick={() => handleClick('facebook')}
				/>
				<img
					className='social-icons'
					src={two}
					alt='social-icon'
					width='30px'
					height='30px'
					onClick={() => handleClick('instagram')}
				/>
				<img
					className='social-icons'
					src={three}
					alt='social-icon'
					width='30px'
					height='30px'
					onClick={() => handleClick('whatsapp')}
				/>
				<img
					className='social-icons'
					src={four}
					alt='social-icon'
					width='30px'
					height='30px'
					onClick={() => handleClick('twitter')}
				/>
				<img
					className='social-icons'
					src={five}
					alt='social-icon'
					width='30px'
					height='30px'
					onClick={() => handleClick('youtube')}
				/>
			</div>
		</div>
	);
};

export default SocialMenu;
