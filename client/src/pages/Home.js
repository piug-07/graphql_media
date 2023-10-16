import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react'

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql.js';


const Home = () => {
    const { user } = useContext(AuthContext);

    const {
        loading,
        data, refetch
    } = useQuery(FETCH_POSTS_QUERY);

    const posts = data?.getPosts || [];
    // console.log(posts)
    const handleRefresh = () => {
        // Trigger the query again to fetch new data
        refetch();
    };


    return (

        <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                {user && (
                    <Grid.Column>
                        <PostForm />
                    </Grid.Column>
                )}
                {loading ? (
                    <h1>Loading posts..</h1>
                ) : (
                    <Transition.Group>
                        {posts &&
                            posts.map((post) => (
                                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                                    <PostCard post={post} />
                                </Grid.Column>
                            ))}
                    </Transition.Group>
                )}
            </Grid.Row>
            <button className='homebtn' onClick={handleRefresh}>Refresh Data</button>
        </Grid>
    )
}




export default Home;