import Head from 'next/head'

import { Container } from '../styles/pages/Home'

type Props = {
  title: string
}
const foo = 'uyuyuy'

function Home({ title = 'React Avancado! Udemy' }: Props) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>

      <h1>{title}</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat. and {title}</p>
    </Container>
  )
}

export default Home
