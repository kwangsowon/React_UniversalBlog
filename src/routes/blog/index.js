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
import {httpConfig} from '../../customerConfig';

export default {

	path: '/blog/:id',

	async action({path, params, query}) {
		const resp = await fetch('/graphql', {
			...httpConfig,
			body: JSON.stringify({
				query: `{
                    blog: blogPost(id: "${params.id}"){
                        _id,
                        title,
                        content
                    }
                }`,
			}),
		});
		const {data} = await resp.json();
		if (!data || !data.blog) throw new Error('Failed to load the blog.');
		return {
			title: 'React Starter Kit',
			component: <Layout><BlogContent blog={data.blog}/></Layout>,
		};
	},

};
