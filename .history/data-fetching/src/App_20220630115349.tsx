import { useEffect, useState } from "react";

type Repository = {
  full_name: string;
  description: string;
}

export default function App() {
 const [repositories, setRepositories] = useState([]);

 useEffect(() => {
    fetch('https://api.github.com/users/euFilpeSilva/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data)
      })
 }, [])

 return (
  <div>
    <h1>Hello World</h1>
  </div>
 )
}


