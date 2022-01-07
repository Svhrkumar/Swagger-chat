import React from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import './messageinbox.css';

const MessageInbox = ({ manageIcons }) => {
	console.log('icons', manageIcons);
	const { facebook, instagram, whatsapp, twitter, youtube } = manageIcons;
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
				{facebook ? (
					<h5 style={{ color: 'white' }}> facebook Inbox </h5>
				) : (
					<>
						{whatsapp ? (
							<h5 style={{ color: 'white' }}> whatsapp Inbox </h5>
						) : (
							<>
								{' '}
								{instagram ? (
									<h5 style={{ color: 'white' }}> Instagram Inbox </h5>
								) : (
									<>
										{' '}
										{twitter ? (
											<h5 style={{ color: 'white' }}> Twitter Inbox </h5>
										) : (
											<>
												{youtube ? (
													<h5 style={{ color: 'white' }}> Youtube Inbox </h5>
												) : (
													<h5 style={{ color: 'white' }}> facebook Inbox </h5>
												)}
											</>
										)}
									</>
								)}
							</>
						)}
					</>
				)}

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
