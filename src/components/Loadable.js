import React from 'react';
import ReactLoading from 'react-loading';
export default props =>
	props.condition
		? <div>
				{props.children}
			</div>
		: <ReactLoading type="spinningBubbles" color="#444" />;
