import axios from "axios";
import { useQuery } from "react-query"


type Repository = {
  full_name: string;
  description: string;
}

export default function App() {
  const {data, isLoading} = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/euFilpeSilva/repos')

    return response.data;
  })

 return (
    <ul>
      {isLoading && <p>Carregando...</p>}
      {data?.map(repo =>{
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}


