import React from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import './messageinbox.css';
const MessageInbox = ({ manageIcons }) => {
	console.log('icons', manageIcons);
	return (
		<div
			className='col-2'
			style={{
				backgroundColor: '#242B2E',
				paddingLeft: '2px',
				paddingRight: '2px',
			}}>
			<div
				className='message-inbox-header'
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '10px 5px',
				}}>
				<h5 style={{ color: 'white' }}>Inbox</h5>
				<GroupAddIcon style={{ color: 'white', fontSize: '20px' }} />
			</div>
			<div className='' style={{ color: 'white', margin: '20px 0px 10px' }}>
				<div
					className='message-box'
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: '10px 5px',
					}}>
					<p style={{ fontSize: '15px' }}>All Messages</p>
					<p>5</p>
				</div>
				<div
					className='message-box'
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: '10px 5px',
					}}>
					<p style={{ fontSize: '15px' }}>unread</p>
					<p>5</p>
				</div>
				<div
					className='message-box'
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: '10px 5px',
					}}>
					<p style={{ fontSize: '15px' }}>important</p>
					<p>5</p>
				</div>
				<div
					className='message-box'
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						padding: '10px 5px',
					}}>
					<p style={{ fontSize: '15px' }}>draft</p>
					<p>5</p>
				</div>
			</div>
		</div>
	);
};

export default MessageInbox;
