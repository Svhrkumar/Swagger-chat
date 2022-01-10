import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './SearchUsers.css';
import axios from 'axios';
import {
	ACTIVE_CONVERSATION_USER,
	SEARCH_USER_DATA,
} from '../redux/action.type';
import { ConstructionOutlined } from '@mui/icons-material';
import { chatDataAction } from '../redux/action/chatAction';
const SearchUsers = () => {
	const [userData, setUserData] = useState([]);
	const [searchUser, setSearchUser] = useState('');
	const [matchUser, setMatchUser] = useState([]);
	const [activeUser, setActiveUsers] = useState([]);
	const userSearchDetails = useSelector((state) => state.userSearchDetails);

	const userChatDetails = useSelector((state) => state.userChatDetails);

	const dispatch = useDispatch();
	console.log('---------redux--', userChatDetails);
	const { searchUserData } = userSearchDetails;
	const { activeConvUser } = userChatDetails;
	console.log('----------redux--searchuserdata---', searchUserData);
	console.log(
		'----------redux--activeConvUserData---',
		Array.isArray(activeConvUser),
		activeConvUser
	);

	useEffect(() => {
		const loadUser = async () => {
			await axios
				.get('https://reqres.in/api/users')
				.then((res) => {
					dispatch({
						type: SEARCH_USER_DATA,
						payload: res.data.data,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		};

		loadUser();
	}, []);
	const handleUser = (text) => {
		const matchData = searchUserData.filter((user) => {
			let exp = new RegExp(`${text}`, 'ig');
			return user.first_name.match(exp);
		});
		setSearchUser(text);
		setMatchUser(matchData);
		if (text.length == 0) {
			setMatchUser([]);
		}
	};

	const selectUser = (data) => {
		console.log('select user', data);

		dispatch({ type: ACTIVE_CONVERSATION_USER, payload: data });
		setActiveUsers([...activeUser, data]);
	};

	console.log('API Data', searchUserData);
	console.log('Match', matchUser);
	console.log('Active User', activeUser);
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
		<div
			className='col-3'
			style={{
				backgroundColor: 'rgb(71 81 86)',
				height: '100vh',
				overflowX: 'hidden',
				overflowY: 'scroll',
			}}>
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
						color: 'white',
						borderRadius: '99px',
						borderColor: 'rgb(71 81 86)',
						width: '100%',
						backgroundColor: ' rgb(96 108 114)',
					}}
					placeholder='Search'
					value={searchUser}
					onChange={(e) => handleUser(e.target.value)}
				/>
				<div>
					{matchUser.map((user, key) => (
						<div
							className='suggestion-ctn'
							key={key}
							onClick={() => selectUser(user)}>
							<div className='suggestion-avatar-ctn'>
								<Avatar src={user.avatar} />
							</div>
							<div className='suggestion-details-ctn'>
								<p>{user.first_name}</p>
								<p>{user.email}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='row'>
				{activeConvUser.map((active, key) => (
					<UserMessage name={active.first_name} url={active.avatar} />
				))}
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
