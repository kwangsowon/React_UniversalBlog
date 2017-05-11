import React from 'react';
import PropTypes from 'prop-types';
import ReadEditor from '../../components/ReadEditor/ReadEditor';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';

class BlogContent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {content, title} = this.props.blog;
		return (
			<div className={s.container}>
				<h1>{title}</h1>
				<ReadEditor id={'blogContent'} content={content}/>
			</div>
		);
	}
}

export default withStyles(s)(BlogContent);