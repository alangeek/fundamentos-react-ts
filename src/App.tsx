import { Header } from './components/Header'
import { Post, PostProps } from './components/Post'
import { Siderbar } from './components/Siderbar'

import styles from './styles/App.module.css'
import './styles/global.css'

interface Posts extends PostProps {
  id: number
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/48631681?v=4',
      name: 'Alan Christin',
      role: 'CTO @HoneysBees'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Finalizei mais um projeto no meu portifa Projeto é StartMinds 🚀'
      },
      { type: 'link', content: ' alan.husky/startminds' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content:
          'Finalizei mais um projeto no meu portifa Projeto é StartMinds 🚀'
      },
      { type: 'link', content: ' alan.husky/startminds' }
    ],
    publishedAt: new Date('2022-10-06 20:00:00')
  }
]

export const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
