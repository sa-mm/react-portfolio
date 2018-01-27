import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'

import './Microblog.css'

const Microblog = props => {
  const { data: { loading, error, Post } } = props
  console.log(props)
  if (error) return <h1>Error fetching the post!</h1>
  if (!loading) {
    return (
      <div className="micro-container">
        <article>
          <div className="micropost">
            <Markdown source={Post.content} escapeHtml={false} />
            <div>{Date(Post.date)}</div>
          </div>
        </article>
      </div>
    )
  }
  return <h2>Loading post...</h2>
}

export const microPost = gql`
  query singlePost($slug: String!) {
    Post(slug: $slug) {
      id
      slug
      title
      content
      date: dateAndTime
    }
  }
`

export default graphql(microPost, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Microblog)
