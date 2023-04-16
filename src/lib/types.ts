export type PostGrayMatter = {
  title: string
  date: string
}

export type Post = PostGrayMatter & {
  id: string
  content: string
  excerpt: string
}
