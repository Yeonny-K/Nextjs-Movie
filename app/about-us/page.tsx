export const metadata = {
    title: 'Home',
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";


//fetch하는 함수
async function getMovies() {
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

//load하는 함수, await async 맞춰주기
export default async function HomePage() {
    const movies = await getMovies();
  return (
    <div>
      {JSON.stringify(movies)}
    </div>
  );
}