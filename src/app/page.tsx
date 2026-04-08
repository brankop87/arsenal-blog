import { getAllPosts, localizePostMeta } from '@/lib/posts'
import HomePageView from '@/components/HomePageView'

export default function HomePage() {
  const all = getAllPosts().map((post) => localizePostMeta(post, 'sr'))

  return <HomePageView locale="sr" all={all} />
}
