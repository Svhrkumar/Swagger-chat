import React, { memo } from 'react';
import './chatItem.css';
const ChartItem = ({ msg, userType }) => {
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

export default memo(ChartItem);
