import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';

class ReadEditor extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
    	const WangEditor = require('wangeditor');
    	const {id, content} = this.props;
		this.editor = new WangEditor(id);
		this.editor.config.menus = [];
		this.editor.create();
		this.editor.disable();
		// 初始化内容
		this.editor.$txt.html(content);
    }

    componentWillReceiveProps(nextProps){
        this.editor.$txt.html(nextProps.content);
    }

    render() {
    	const {content} = this.props;
        return (
            <div id={this.props.id} contentEditable="false">
            </div>
        );
    }
}

export default withStyles(s)(ReadEditor);