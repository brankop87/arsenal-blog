import HomePageView from '@/components/HomePageView'
import { getAllPosts, localizePostMeta } from '@/lib/posts'

export default function GermanHomePage() {
  const all = getAllPosts().map((post) => localizePostMeta(post, 'de'))

  return <HomePageView locale="de" all={all} />
}
