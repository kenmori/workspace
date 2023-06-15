import axios from "axios"

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

type PageProps ={

}
const page: FC<PageProps> = async ({}) => {
  await wait(5000);
  const { data } = await  axios.get("https://jsonplaceholder.typicode.com/posts/1")

  throw new Error("not auth")
  return (
    <div>
      login page
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default page
