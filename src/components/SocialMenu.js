import React, { useState, useEffect } from 'react';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
import styles from './socialmenu.css';
import MenuIcon from '@mui/icons-material/Menu';
const SocialMenu = ({ messageHandle }) => {
	const [selectIcon, setSelectIcon] = useState('facebook');

	const handleClick = (data) => {
		messageHandle(data);
	};

	console.log(messageHandle);
	// useEffect(() => {
	// 	props.messageHandle(selectIcon);
	// }, []);
	console.log(selectIcon);
	return (
		<div
			className='col-1 test'
			style={{
				backgroundColor: '#0D0D0D',
			}}>
			<div style={{ marginTop: '10px', textAlign: 'center' }}>
				<MenuIcon style={{ fontSize: '25px', color: 'white' }} />
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
