import React, { useState, useEffect, useRef } from 'react';
import StarIcon from '@mui/icons-material/Star';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import './chatItem.css';
const ChatBox = () => {
	const messageRef = useRef();

	const [chatData, setChatData] = useState([]);
	const [message, setMessage] = useState('');
	const [sent, setSent] = useState(false);
	useEffect(() => {
		setChatData([
			{
				key: 1,
				image:
					'https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg',
				type: '',
				msg: 'Hi Tim, How are you?',
			},
			{
				key: 2,
				image:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
				type: 'other',
				msg: 'I am fine.',
			},
			{
				key: 3,
				image:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
				type: 'other',
				msg: 'What about you?',
			},
			{
				key: 4,
				image:
					'https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg',
				type: '',
				msg: 'Awesome these days.',
			},
			{
				key: 5,
				image:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
				type: 'other',
				msg: "Finally. What's the plan?",
			},
			{
				key: 6,
				image:
					'https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg',
				type: '',
				msg: 'what plan mate?',
			},
			{
				key: 7,
				image:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
				type: 'other',
				msg: "I'm taliking about the tutorial",
			},
		]);
	}, []);
	const scrollToBottom = () => {
		messageRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const sendMessage = (e) => {
		e.preventDefault();
		console.log('click');
		setSent(true);
	};
	console.log('chat data', chatData);
	useEffect(() => {
		if (sent) {
			console.log('click', message);
			var newMessage = {
				key: chatData.length,
				type: '',
				msg: message,
				image:
					'https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg',
			};
			if (message !== '') {
				setChatData([...chatData, newMessage]);
				scrollToBottom();
				setMessage('');
				setSent(false);
			}
		}
	}, [sent]);

	const ChatItem = ({ msg, userType }) => {
		return (
			<div
				style={{ animationDelay: `0.8s` }}
				className={`chat__item ${userType == 'other' ? userType : ''}`}>
				<div className='chat__item__content'>
					<div className='chat__msg'>{msg}</div>
					<div className='chat__meta'>
						<span>16 mins ago</span>
						<span>Seen 1.03PM</span>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='col-4' style={{ backgroundColor: 'rgb(244 246 248)' }}>
			<div
				className='row'
				style={{
					height: '50px',
					boxShadow:
						' rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',

					alignContent: 'center',
				}}>
				<div className='col-6' style={{ margin: 'auto' }}>
					<p>Vijay</p>
				</div>
				<div
					className='col-2'
					style={{ borderLeft: '1px solid grey', textAlign: 'center' }}>
					<StarIcon />
				</div>
				<div
					className='col-2'
					style={{ borderLeft: '1px solid grey', textAlign: 'center' }}>
					<CallIcon />
				</div>
				<div
					className='col-2'
					style={{ borderLeft: '1px solid grey', textAlign: 'center' }}>
					<VideocamIcon />
				</div>
			</div>
			<div>
				<div className='content__body'>
					{chatData &&
						chatData.map((data, key) => (
							<ChatItem msg={data.msg} userType={data.type} />
						))}
				</div>
				<div ref={messageRef} />
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						margin: '10px 5px',
					}}>
					<span style={{ position: 'absolute', padding: '10px' }}>
						<AttachFileIcon />
					</span>
					<input
						type='text'
						placeholder='enter message'
						style={{
							width: '100%',
							padding: '10px 5px 10px 40px',
							borderRadius: '99px',
						}}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button
						style={{
							position: 'absolute',
							left: '78%',
							margin: '10px ',
							border: 'none',
							borderRadius: '999px',
						}}
						onClick={sendMessage}>
						<SendIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatBox;
