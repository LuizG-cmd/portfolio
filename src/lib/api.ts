import axios from "axios";

export interface Articles {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: URL;
}

export interface Repositories {
  id: string,
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number
}


interface ArticlesArray {
  articles: Articles[];
}

interface RepositoriesArray {
  repositories: Repositories[]
}

/*const getNotices = async () => {
  const API_KEY = process.env.API_BLOG_KEY;
  const words =  "backend"
  const datefrom = new Date();

  /*const newWord = (palavrasComuns: string[]) => {
    const numeroAleatorio = Math.random();
    return palavrasComuns[numeroAleatorio];
  };*/

  /*const valorAleatorio = newWord(words)*/

  /*console.log(valorAleatorio);

  const posts = await axios.get<ArticlesArray>(
    `https://newsapi.org/v2/everything?q=${words}&from=${datefrom}&sortBy=popularity&apiKey=${API_KEY}&pageSize=1`
  );

  return posts.data.articles;
};*/

const getGitRepositories = async () => {

  const username = "LuizG-cmd"
  const API_KEY = process.env.GITHUB_KEY

  const repositories = await axios.get<RepositoriesArray>(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Authorization: API_KEY
    }
  })

  return repositories.data

}

export {
  getGitRepositories,
  /*getNotices*/
};
