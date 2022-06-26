import type { GetServerSideProps, NextPage } from 'next'
import prisma from '../lib/prisma'

type Props = {
  count: number
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const count = await prisma.user.count()
  return {
    props: {
      count
    }
  }
}
const Home: NextPage<Props> = ({ count }) => {


  return (
    <div>
      
    </div>
  )
}

export default Home
