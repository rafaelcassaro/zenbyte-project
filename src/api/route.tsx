export interface GithubJson {
    id: number;
    name: string;
    stargazers_count: number;
    forks_count: number;
}



export async function GET(request:Request,  page?: number, username?: string): Promise<GithubJson[]> {

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=5`)
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados');
    }

    const dados: GithubJson[] = await response.json();
    if(dados.length === 0){
      alert("Não tem mais dados")
      throw new Error('Erro ao buscar os dados');
    }
    return dados;

  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error; 
  }
}

