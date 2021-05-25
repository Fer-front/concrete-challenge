import repository from '../../api/repositories/user-respository'


// {
//     description: string
//     url: url do repositorio
//     "created_at": "2021-02-15T15:00:16Z",
//     "updated_at": "2021-05-25T15:58:27Z",
//     "clone_url": "https://github.com/Fer-front/concrete-challenge.git",
//     "languages_url": "https://api.github.com/repos/Fer-front/challenge/languages",
//     "stargazers_count": 1,
// }

// enpoint languages
// https://api.github.com/repos/Fer-front/creditas-challenge/languages

// {
//   "HTML": 102158,
//   "JavaScript": 7665,
//   "CSS": 5394
// }


function factoryDataRepository(data) {
  const {
    description,
    url,
    created_at,
    updated_at,
    clone_url,
    languages_url,
    stargazers_count,
  } = data;

  return {
    description,
    url,
    created_at,
    updated_at,
    clone_url,
    languages_url,
    stargazers_count,
  };
}

function getLingugens(){
    repository.getRepository()
}
