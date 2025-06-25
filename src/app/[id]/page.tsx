import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/mock'
import styles from './page.module.css'

interface BlogPostPageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = blogPosts.find((post) => post.id === +id)
  return { title: post?.title, description: post?.excerpt }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = blogPosts.find((post) => post.id === +id)

  if (!post) {
    return (
      <div className={styles.errorContainer}>
        <h1>文章未找到</h1>
        <p>抱歉，您请求的文章不存在</p>
        <Link href="/" className={styles.backLink}>
          返回首页
        </Link>
      </div>
    )
  }

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        {post.imageUrl && (
          <div className={styles.imageContainer}>
            <Image
              src={post.imageUrl}
              alt={post.title}
              className={styles.image}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
            />
          </div>
        )}

        <header className={styles.header}>
          <div className={styles.meta}>
            <time className={styles.date}>{post.date}</time>
            <span className={styles.category}>{post.category}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
        </header>

        <div className={styles.excerptBox}>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>

        <div className={styles.navigation}>
          <Link href="/" className={styles.backButton}>
            返回首页
          </Link>
        </div>
      </article>
    </main>
  )
}
