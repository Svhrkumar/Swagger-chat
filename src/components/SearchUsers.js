import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './SearchUsers.css';
const SearchUsers = () => {
	const UserMessage = ({ name, url }) => {
		return (
			<div
				className='user-profile'
				style={{
					height: '30px',
					padding: '10px 5px',
					display: 'flex',

					alignContent: 'center',
					justifyContent: 'space-between',
					margin: '20px 5px',
				}}>
				<div className='col-2' style={{ margin: '2px 2px' }}>
					<Avatar src={url} />
				</div>
				<div className='col-8'>
					<p style={{ marginBottom: '0px', fontSize: '15px', color: 'white' }}>
						{name}
					</p>
					<span style={{ fontSize: '12px', color: '#FFFEFA' }}>Hi Raghav</span>
				</div>
				<div className='col-2'>
					<MoreHorizIcon style={{ color: 'white' }} />
				</div>
			</div>
		);
	};
	return (
		<div className='col-3' style={{ backgroundColor: 'rgb(71 81 86)' }}>
			<div
				className='search-container'
				style={{ width: '100%', margin: '10px 0px', color: 'white' }}>
				<span
					style={{
						position: 'absolute',
						padding: '2px 15px',
						minWidth: '40px',
					}}>
					<SearchIcon style={{ fontSize: '20px', color: 'white' }} />
				</span>
				<input
					type='text'
					style={{
						paddingLeft: '40px',

						borderRadius: '99px',
						borderColor: 'rgb(71 81 86)',
						width: '100%',
						backgroundColor: ' rgb(96 108 114)',
					}}
					placeholder='Search'
				/>
			</div>
			<div className='row'>
				<UserMessage
					name='Vijay'
					url='https://i.pinimg.com/736x/38/cb/44/38cb445c2794256b44d78bbb158295a7.jpg'
				/>
				<UserMessage
					name='Hanuma'
					url='https://i.pinimg.com/474x/08/52/aa/0852aae98e4d5be61e840209c26e715e.jpg'
				/>
				<UserMessage
					name='Raghava'
					url='http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/02/Cute-Cartoon-Dp.jpg'
				/>

				<UserMessage name='Kumar' url='' />
				<UserMessage
					name='S'
					url='http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/02/Cute-Cartoon-Dp.jpg'
				/>
			</div>
		</div>
	);
};

export default SearchUsers;
