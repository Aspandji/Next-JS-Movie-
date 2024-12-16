import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '@/libs/api-libs'

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)

  // function getMultipleRandom(arr, num) {
  //   const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Mengacak Array

  //   return shuffled.slice(0, num); // Mendapatkan "num" elemen pertama setelah penyalinan array
  // }
  // recommendedAnime = { data: getMultipleRandom(recommendedAnime, 4) }

  return (
    <>
      {/* Film Populer */}
      <section>
        <Header title="Top Populer Film" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>

      {/* Recomendations Populer */}
      <section>
        <Header title="Rekomendasi Film" />
        <AnimeList api={recommendedAnime} />
      </section>

    </>
  )
}

export default Page
