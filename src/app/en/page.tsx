import HomePageView from '@/components/HomePageView'
import { getAllPosts, localizePostMeta } from '@/lib/posts'

export default function EnglishHomePage() {
  const all = getAllPosts().map((post) => localizePostMeta(post, 'en'))

  return <HomePageView locale="en" all={all} />
}
