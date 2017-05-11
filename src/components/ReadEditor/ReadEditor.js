import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';
import WangEditor from 'wangeditor';

class ReadEditor extends Component {
    constructor(props) {
        super(props);
		this.state = {appIsMounted: false};
    }

    componentDidMount () {
		requestAnimationFrame(() => {
			this.setState({ appIsMounted: true });
			let id = this.props.id;
			this.editor = new WangEditor(id);
			this.editor.config.menus = [];
			this.editor.create();
			this.editor.disable();
			// 初始化内容
			this.editor.$txt.html(this.props.content);
		});
    }

    componentWillReceiveProps(nextProps){
        this.editor.$txt.html(nextProps.content);
    }

    render() {
        return (
            <div id={this.props.id} contentEditable="false">
            </div>
        );
    }
}

export default withStyles(s)(ReadEditor);