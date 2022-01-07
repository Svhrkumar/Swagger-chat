import React from 'react';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import ChatIcon from '@mui/icons-material/Chat';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';

const Profile = () => {
	return (
		<div className='col-2' style={{ backgroundColor: 'rgb(244 246 248)' }}>
			<div
				className='row'
				style={{
					height: '50px',
					boxShadow:
						' rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',

					alignItems: 'center',
				}}>
				<div className='col-9'>
					<p>Kakinada</p>
				</div>
				<div className='col-3'>
					<NotificationAddIcon />
				</div>
			</div>
			<div>
				<div className='row'>
					<div className='col-9' style={{ padding: '10px 5px' }}>
						<ChatIcon style={{ color: '#4665ff' }} />
					</div>
					<div className='col-3' style={{ padding: '10px 5px' }}>
						<MoreHorizIcon />
					</div>
				</div>
				<div
					style={{
						margin: '10px 5px',
						boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
						padding: '20px 5px',
					}}>
					<div style={{ display: 'grid', placeItems: 'center' }}>
						<Avatar
							style={{ width: '100px', height: '100px' }}
							alt='Remy Sharp'
							src='https://scontent.fvtz4-1.fna.fbcdn.net/v/t1.6435-9/166376098_2017973858342276_6199556702238093951_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OCbrDQOBFfsAX9-qMep&_nc_ht=scontent.fvtz4-1.fna&oh=00_AT-j1LA1xPrZqR1ZYA0W5P9k1E6btRXCnUprMhHdltWBug&oe=61FC490B'
						/>
						<div style={{ margin: '10px' }}>
							<h5>Vijay kumar</h5>
							<p>Bangalore,India</p>
						</div>
					</div>
				</div>
			</div>

			<div style={{ margin: '10px 5px', fontSize: '12px' }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						margin: '20px 5px',
					}}>
					<p>NickName</p> <p>S V H R Kumar</p>
				</div>
				<hr></hr>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<p>Tel</p> <p>9876543789</p>
				</div>
				<hr></hr>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<p>Date of Birth</p> <p>08-08-1998</p>
				</div>
				<hr></hr>

				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						margin: '20px 5px',
					}}>
					<p>Gender</p> <p>Male</p>
				</div>
				<hr></hr>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<p>Language</p> <p>English</p>
				</div>
				<hr></hr>
			</div>
		</div>
	);
};

export default Profile;
