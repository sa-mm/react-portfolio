import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'

const Blog = props => {
  const { data: { loading, error, Post } } = props
  console.log(props)
  if (error) return <h1>Error fetching the post!</h1>
  if (!loading) {
    return (
      <article>
        <h1>{Post.title}</h1>
        <div className="Post-placeholder">
          {Post.coverImage && (
            <img
              alt={Post.title}
              src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${
                Post.coverImage.handle
              }`}
            />
          )}
        </div>
        <Markdown source={Post.content} escapeHtml={false} />
      </article>
    )
  }
  return <h2>Loading post...</h2>
}

export const singlePost = gql`
  query singlePost($slug: String!) {
    Post(slug: $slug) {
      id
      slug
      title
      coverImage {
        handle
      }
      content
      dateAndTime
    }
  }
`

export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Blog)
