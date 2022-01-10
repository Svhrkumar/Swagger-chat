import React, { useState, useEffect } from 'react';
import '../App.css';
import ChatBox from '../components/ChatBox';
import MessageInbox from '../components/MessageInbox';
import Profile from '../components/Profile';
import SearchUsers from '../components/SearchUsers';
import SocialMenu from '../components/SocialMenu';
import { useSelector, useDispatch } from 'react-redux';
const Home = () => {
	const [facebook, setFacebook] = useState(false);
	const [instagram, setInstagram] = useState(false);
	const [whatsapp, setWhatsapp] = useState(false);
	const [twitter, setTwitter] = useState(false);
	const [youtube, setYoutube] = useState(false);
	// const [openMenu, setOpenMenu] = useState();
	const [wide, setWide] = useState(false);
	const userSearchDetails = useSelector((state) => state.userSearchDetails);
	const { openMenu } = userSearchDetails;
	const manageIcons = {
		facebook,
		instagram,
		whatsapp,
		twitter,
		youtube,
	};

	const selectSocial = (icon) => {
		if (icon === 'facebook') {
			setFacebook(true);
			setInstagram(false);
			setWhatsapp(false);
			setTwitter(false);
			setYoutube(false);
		}
		if (icon === 'instagram') {
			setFacebook(false);
			setInstagram(true);
			setWhatsapp(false);
			setTwitter(false);
			setYoutube(false);
		}
		if (icon === 'whatsapp') {
			setFacebook(false);
			setInstagram(false);
			setWhatsapp(true);
			setTwitter(false);
			setYoutube(false);
		}
		if (icon === 'twitter') {
			setFacebook(false);
			setInstagram(false);
			setWhatsapp(false);
			setTwitter(true);
			setYoutube(false);
		}
		if (icon === 'youtube') {
			setFacebook(false);
			setInstagram(false);
			setWhatsapp(false);
			setTwitter(false);
			setYoutube(true);
		}
	};

	// const menuClick = (click) => {
	// 	console.log('home click');
	// 	if (openMenu == click) {
	// 		setOpenMenu(true);
	// 		setWide(true);
	// 	} else {
	// 		setOpenMenu(false);
	// 		setWide(false);
	// 	}
	// };

	console.log('-----------------', wide, openMenu, manageIcons);
	return (
		<div className='container-xxl' style={{ maxWidth: '100%' }}>
			<div className='row'>
				<SocialMenu messageHandle={selectSocial} />
				{openMenu ? <MessageInbox manageIcons={manageIcons} /> : <></>}

				<SearchUsers />
				<ChatBox openMenu={openMenu} />
				<Profile />
			</div>
		</div>
	);
};

export default Home;
