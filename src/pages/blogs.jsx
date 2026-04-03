import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../sanityclient'
import { Link } from 'react-router-dom'

const QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, publishedAt, excerpt, mainImage,
  "author": author->name,
  "category": category->title,
  "part": partNumber,
  "level": difficultyLevel
}`

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

const injectCSS = `
  @keyframes shimmer { 0%{background-position:-600px 0} 100%{background-position:600px 0} }
  .sc-shimmer {
    background: linear-gradient(90deg,#f0eaf4 25%,#e8e0ef 50%,#f0eaf4 75%);
    background-size: 600px 100%;
    animation: shimmer 1.4s infinite linear;
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

function Dot() {
  return <span className="inline-block w-1 h-1 rounded-full bg-[#ddd4e4] flex-shrink-0" />
}

function PlaceholderIcon({ size = 44 }) {
  return (
    <div
      className="rounded-2xl flex items-center justify-center"
      style={{ width: size * 1.8, height: size * 1.8, backgroundColor: 'rgba(71,41,76,0.08)' }}
    >
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <rect x="6" y="16" width="36" height="7" rx="3.5" fill="#47294c" fillOpacity="0.25"/>
        <rect x="6" y="26" width="36" height="7" rx="3.5" fill="#47294c" fillOpacity="0.15"/>
        <rect x="12" y="6" width="24" height="8" rx="4" fill="#47294c" fillOpacity="0.35"/>
      </svg>
    </div>
  )
}

function Skel({ className = '', style = {} }) {
  return <div className={`sc-shimmer rounded-lg ${className}`} style={style} />
}

function SkeletonCard() {
  return (
    <div className="rounded-3xl overflow-hidden border border-[#ede8f0] bg-white">
      <Skel className="w-full !rounded-none" style={{ height: 200 }} />
      <div className="px-6 py-6 flex flex-col gap-3">
        <Skel style={{ width: 110, height: 13 }} />
        <Skel style={{ width: '85%', height: 18 }} />
        <Skel style={{ width: '65%', height: 18 }} />
        <Skel style={{ width: '100%', height: 13 }} />
        <Skel style={{ width: '80%', height: 13 }} />
      </div>
    </div>
  )
}

function PostCard({ post }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/blogs/${post.slug.current}`}
      className="flex flex-col rounded-3xl overflow-hidden border border-[#ede8f0] bg-white no-underline text-inherit transition-all duration-300"
      style={{
        boxShadow: hovered ? '0 16px 48px rgba(46,26,50,0.1)' : '0 2px 12px rgba(46,26,50,0.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 bg-[#f7f3f8] overflow-hidden flex-shrink-0 flex items-center justify-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 80%,rgba(71,41,76,0.09) 0%,transparent 65%)' }}
        />
        {post.mainImage ? (
          <img
            src={urlFor(post.mainImage).width(500).height(400).url()}
            alt={post.title}
            className="w-full h-full object-cover object-top transition-transform duration-500"
            style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          />
        ) : (
          <PlaceholderIcon size={44} />
        )}
        {post.category && (
          <span
            className="absolute top-3.5 left-3.5 text-[10px] font-bold uppercase tracking-wider text-[#47294c] px-3 py-1.5 rounded-full border border-[rgba(71,41,76,0.12)]"
            style={{ backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}
          >
            {post.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
        <div className="flex items-center gap-1.5 mb-3 text-[11px] font-medium text-[#a891b0]">
          <span>{formatDate(post.publishedAt)}</span>
          {post.level && <><Dot /><span className="text-[#47294c] font-semibold">{post.level}</span></>}
          {post.part && <><Dot /><span>Part {post.part}</span></>}
        </div>

        <h2
          className="font-bold text-[#1c0f1f] mb-2.5 flex-1"
          style={{
            fontFamily: 'var(--font-display,Georgia,serif)',
            fontSize: '1.1rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.35,
          }}
        >
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-xs leading-relaxed text-[#7b6880] mb-5 line-clamp-2">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-[#f0eaf4] mt-auto">
          {post.author
            ? <span className="text-xs font-semibold text-[#5a4760]">{post.author}</span>
            : <span />}
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#47294c]">
            Read
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(QUERY).then(data => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="bg-[#f7f3f8] min-h-screen pt-16">
      <style>{injectCSS}</style>

      {/* ── Hero ── */}
      <section className="border-b border-[#ede8f0] py-20 px-6" style={{ backgroundColor: '#f7f3f8' }}>
        <div className="max-w-2xl mx-auto text-center">
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#47294c] px-4 py-1.5 rounded-full mb-5"
            style={{ backgroundColor: 'rgba(71,41,76,0.1)' }}
          >
            Blog & Guides
          </span>
          <h1
            className="font-bold text-[#1c0f1f] mb-4"
            style={{
              fontFamily: 'var(--font-display,Georgia,serif)',
              fontSize: 'clamp(2.2rem,5vw,3.25rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Insights for Fitness{' '}
            <span style={{ color: '#47294c' }}>Professionals</span>
          </h1>
          <p className="text-base leading-relaxed text-[#7b6880] max-w-lg mx-auto">
            Guides, strategies, and stories to help you grow your coaching business and deliver better results for every client.
          </p>
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">

        {/* Section label row */}
        <div className="flex items-center gap-3 mb-7">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#a891b0]">
            All Articles
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,#ddd4e4,transparent)' }} />
          {!loading && posts.length > 0 && (
            <span className="text-xs font-medium text-[#a891b0]">
              {posts.length} article{posts.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>

        {/* Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }, (_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Empty */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-20 text-[#a891b0] text-sm">
            No articles published yet. Check back soon.
          </div>
        )}

        {/* Grid */}
        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map(post => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}