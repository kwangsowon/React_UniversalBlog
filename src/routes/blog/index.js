/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import BlogContent from './BlogContent';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';

export default {

	path: '/blog/:id',

    async action({ path, params, query }) {
		const id = params.id;
		console.log(id);
        const resp = await fetch('/graphql', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `{
                    blog: blogPost(id: id){
                        _id,
                        title,
                        content
                    }
                }`,
            }),
            credentials: 'include',
        });
        const {data} = await resp.json();
        //console.log(data);
        if (!data || !data.blog) throw new Error('Failed to load the news feed.');
        return {
            title: 'React Starter Kit',
            component: <Layout><BlogContent blog={data.blog}/></Layout>,
        };
    },

};
