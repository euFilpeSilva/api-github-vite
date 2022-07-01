import useFetch from "./hooks/useFetch"


type Repository = {
  full_name: string;
  description: string;
}

export default function App() {
  const { data: repositories,loading } 
  = useFetch<Repository[]>('/users/euFilpeSilva/repos')

 return (
    <ul>
      {loading && <p>Carregando...</p>}
      {repositories?.map(repo =>{
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


