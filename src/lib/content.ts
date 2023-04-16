import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Post, PostGrayMatter } from './types'

type ContentType = 'posts' | 'apps'

const getDir = (type: ContentType) =>
  path.join(process.cwd(), `src/content/${type}`)

export function getContentData(type: ContentType) {
  const contentDirectory = getDir(type)
  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData: Post[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const filePath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const matterResult = matter(fileContents, { excerpt: true })

    return {
      id,
      content: matterResult.content,
      excerpt: matterResult.excerpt as string,
      ...(matterResult.data as PostGrayMatter),
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}
