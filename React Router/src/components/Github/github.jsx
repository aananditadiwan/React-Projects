import { useLoaderData } from "react-router-dom"

function Github(){
    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Repos: {data.public_repos}
        </div>

    )
}
export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/aananditadiwan')
    return response.json()

}