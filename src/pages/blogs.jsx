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
    year: 'numeric', month: 'short', day: 'numeric'
  })
}

function PostCard({ post, index, featured = false }) {
  const [hovered, setHovered] = useState(false)

  if (featured) {
    return (
      <Link
        to={`/blogs/${post.slug.current}`}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          borderRadius: 28,
          overflow: 'hidden',
          textDecoration: 'none',
          color: 'inherit',
          border: '1px solid #ede8f0',
          backgroundColor: '#fff',
          boxShadow: hovered
            ? '0 20px 60px rgba(46,26,50,0.12)'
            : '0 2px 16px rgba(46,26,50,0.06)',
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
          transition: 'all 0.3s ease',
          animationDelay: '0s',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image side */}
        <div style={{
          position: 'relative',
          backgroundColor: '#f7f3f8',
          minHeight: 320,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(71,41,76,0.08) 0%, transparent 70%)',
          }} />
          {post.mainImage ? (
            <img
              src={urlFor(post.mainImage).width(600).height(500).url()}
              alt={post.title}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                transform: hovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.4s ease',
              }}
            />
          ) : (
            <PlaceholderIcon size={64} />
          )}
        </div>

        {/* Content side */}
        <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              backgroundColor: 'rgba(71,41,76,0.08)', color: '#47294c',
              padding: '5px 12px', borderRadius: 40,
            }}>Featured</span>
            {post.category && (
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#a891b0',
              }}>{post.category}</span>
            )}
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display, Georgia, serif)',
            fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
            fontWeight: 700,
            color: '#1c0f1f',
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            margin: '0 0 16px',
          }}>{post.title}</h2>
          {post.excerpt && (
            <p style={{
              fontSize: '0.9rem', lineHeight: 1.7, color: '#7b6880', margin: '0 0 28px',
              display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
            }}>{post.excerpt}</p>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#a891b0', fontWeight: 500 }}>
            {post.author && <span style={{ color: '#5a4760', fontWeight: 600 }}>{post.author}</span>}
            {post.author && <Dot />}
            <span>{formatDate(post.publishedAt)}</span>
            {post.level && <><Dot /><span style={{ color: '#47294c', fontWeight: 600 }}>{post.level}</span></>}
          </div>
          <div style={{ marginTop: 32 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 13, fontWeight: 600, color: '#47294c',
            }}>
              Read article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/blogs/${post.slug.current}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 24,
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        border: '1px solid #ede8f0',
        backgroundColor: '#fff',
        boxShadow: hovered
          ? '0 16px 48px rgba(46,26,50,0.1)'
          : '0 2px 12px rgba(46,26,50,0.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image tray */}
      <div style={{
        position: 'relative',
        height: 200,
        backgroundColor: '#f7f3f8',
        overflow: 'hidden',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 80%, rgba(71,41,76,0.09) 0%, transparent 65%)',
        }} />
        {post.mainImage ? (
          <img
            src={urlFor(post.mainImage).width(500).height(400).url()}
            alt={post.title}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.4s ease',
            }}
          />
        ) : (
          <PlaceholderIcon size={44} />
        )}
        {post.category && (
          <span style={{
            position: 'absolute', top: 14, left: 14,
            fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            backgroundColor: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            color: '#47294c',
            padding: '5px 12px', borderRadius: 40,
            border: '1px solid rgba(71,41,76,0.12)',
          }}>{post.category}</span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '24px 26px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, fontSize: 11, color: '#a891b0', fontWeight: 500 }}>
          <span>{formatDate(post.publishedAt)}</span>
          {post.level && <><Dot /><span style={{ color: '#47294c', fontWeight: 600 }}>{post.level}</span></>}
          {post.part && <><Dot /><span>Part {post.part}</span></>}
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display, Georgia, serif)',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#1c0f1f',
          letterSpacing: '-0.02em',
          lineHeight: 1.35,
          margin: '0 0 10px',
          flex: 1,
        }}>{post.title}</h2>

        {post.excerpt && (
          <p style={{
            fontSize: '0.8rem', lineHeight: 1.7, color: '#7b6880', margin: '0 0 20px',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{post.excerpt}</p>
        )}

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 16, borderTop: '1px solid #f0eaf4', marginTop: 'auto',
        }}>
          {post.author
            ? <span style={{ fontSize: 12, fontWeight: 600, color: '#5a4760' }}>{post.author}</span>
            : <span />}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            fontSize: 12, fontWeight: 600, color: '#47294c',
          }}>
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

function SkeletonCard({ featured = false }) {
  if (featured) {
    return (
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        borderRadius: 28, overflow: 'hidden',
        border: '1px solid #ede8f0', backgroundColor: '#fff',
        minHeight: 320,
      }}>
        <div style={{ backgroundColor: '#f7f3f8' }} />
        <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Skel w={80} h={22} r={40} />
          <Skel w="75%" h={28} />
          <Skel w="90%" h={16} />
          <Skel w="60%" h={16} />
          <Skel w={120} h={14} />
        </div>
      </div>
    )
  }
  return (
    <div style={{
      borderRadius: 24, overflow: 'hidden',
      border: '1px solid #ede8f0', backgroundColor: '#fff',
    }}>
      <Skel w="100%" h={200} r={0} />
      <div style={{ padding: '24px 26px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Skel w={110} h={13} />
        <Skel w="85%" h={18} />
        <Skel w="65%" h={18} />
        <Skel w="100%" h={13} />
        <Skel w="80%" h={13} />
      </div>
    </div>
  )
}

/* ── Helpers ── */
function Dot() {
  return <span style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: '#ddd4e4', display: 'inline-block', flexShrink: 0 }} />
}

function PlaceholderIcon({ size = 44 }) {
  return (
    <div style={{
      width: size * 1.8, height: size * 1.8,
      borderRadius: 20,
      backgroundColor: 'rgba(71,41,76,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
        <rect x="6" y="16" width="36" height="7" rx="3.5" fill="#47294c" fillOpacity="0.25"/>
        <rect x="6" y="26" width="36" height="7" rx="3.5" fill="#47294c" fillOpacity="0.15"/>
        <rect x="12" y="6" width="24" height="8" rx="4" fill="#47294c" fillOpacity="0.35"/>
      </svg>
    </div>
  )
}

function Skel({ w, h, r = 10 }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: r,
      background: 'linear-gradient(90deg, #f0eaf4 25%, #e8e0ef 50%, #f0eaf4 75%)',
      backgroundSize: '600px 100%',
      animation: 'shimmer 1.4s infinite linear',
    }} />
  )
}

const shimmerKeyframe = `@keyframes shimmer { 0%{background-position:-600px 0} 100%{background-position:600px 0} }`

/* ── Main component ── */
export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(QUERY).then(data => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  const featured = posts[0]
  const rest = posts.slice(0)

  return (
    <div style={{ backgroundColor: '#f7f3f8', minHeight: '100vh', paddingTop: 64 }}>
      <style>{shimmerKeyframe}{`
        @media (max-width: 700px) {
          .blog-featured { grid-template-columns: 1fr !important; }
          .blog-featured-img { min-height: 220px !important; }
          .blog-featured-content { padding: 32px 28px !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section style={{
        backgroundColor: '#f7f3f8',
        borderBottom: '1px solid #ede8f0',
        padding: '64px 24px',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            backgroundColor: 'rgba(71,41,76,0.1)', color: '#47294c',
            padding: '6px 16px', borderRadius: 40, marginBottom: 20,
          }}>Blog & Guides</span>
          <h1 style={{
            fontFamily: 'var(--font-display, Georgia, serif)',
            fontSize: 'clamp(2.2rem, 5vw, 3.25rem)',
            fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15,
            color: '#1c0f1f', margin: '0 0 18px',
          }}>
            Insights for Fitness <span style={{ color: '#47294c' }}>Professionals</span>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#7b6880', margin: 0, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Guides, strategies, and stories to help you grow your coaching business and deliver better results for every client.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 100px' }}>

        {/* Featured post
        {(loading || featured) && (
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a891b0' }}>
                Latest Post
              </span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #ddd4e4, transparent)' }} />
            </div>
            {loading
              ? <SkeletonCard featured />
              : <div className="blog-featured" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: 28, overflow: 'hidden', border: '1px solid #ede8f0', backgroundColor: '#fff', boxShadow: '0 2px 16px rgba(46,26,50,0.06)' }}>
                  <PostCard post={featured} index={0} featured />
                </div>
            }
          </div>
        )}
 */}
       
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a891b0' }}>
              All Articles
            </span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #ddd4e4, transparent)' }} />
            {!loading && posts.length > 0 && (
              <span style={{ fontSize: 12, color: '#a891b0', fontWeight: 500 }}>
                {posts.length} article{posts.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          {loading ? (
            <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {Array.from({ length: 3 }, (_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : rest.length === 0 && !featured ? (
            <div style={{
              textAlign: 'center', padding: '80px 24px',
              color: '#a891b0', fontSize: '0.95rem',
            }}>
              No articles published yet. Check back soon.
            </div>
          ) : rest.length > 0 ? (
            <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {rest.map((post, i) => (
                <PostCard key={post._id} post={post} index={i + 1} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}