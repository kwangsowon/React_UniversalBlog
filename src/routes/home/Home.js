/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
    static propTypes = {
        blogs: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            plaintext: PropTypes.string.isRequired,
        })).isRequired,
    };

    render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <ul>
                        {this.props.blogs.map(item => (
                            <li className={s.blogItem} key={item._id}>
                                <article>
                                    <h1>{item.title}</h1>
                                    <div
                                        className={s.blogPlainText}
                                        // eslint-disable-next-line react/no-danger
                                        dangerouslySetInnerHTML={{ __html: item.plaintext }}
                                    />
                                    <p>
                                        <Icon type="dateIcon" className="dateIcon icon"/>
                                        <span className="text">{dateFormat(blogData.publishDate, 2)}</span>
                                        <span className="spliter"></span>
                                        <Icon type="feather" className="authorIcon icon"/>
                                        <span className="text">{blogData.author}</span>
                                        <span className="spliter"></span>
                                        <Icon type="scaner" className="scanerIcon icon"/>
                                        <span className="text">{blogData.count}</span>
                                    </p>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withStyles(s)(Home);
