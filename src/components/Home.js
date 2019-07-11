import React from "react"

import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Home extends React.Component {
    
    render() {
        const { posts } = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={"/" + post.id}>
                                <span className="card-title blue-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet!</div>
        )
        return (
            <div className="container">
                <h4 className="center ">Home</h4>
                { postList }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)

