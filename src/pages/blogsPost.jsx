import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { client, urlFor } from '../sanityclient'

const QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  mainImage,
  body,

  "author": author->name,
  "authorImage": author->image,

  "categories": categories[]->title,

  partNumber,
  difficultyLevel,

  "readTime": round(length(pt::text(body)) / 5 / 200)
}`

/* ── PortableText components ── */
function ptComponents(urlForFn) {
  return {
    types: {
      image: ({ value }) => (
        <img
          src={urlForFn(value).width(720).url()}
          alt={value.alt || ''}
        />
      ),
    },
    block: {
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      blockquote: ({ children }) => <blockquote><p>{children}</p></blockquote>,
      normal: ({ children }) => <p>{children}</p>,
    },
    marks: {
      link: ({ children, value }) => (
        <a href={value?.href} target="_blank" rel="noopener noreferrer">{children}</a>
      ),
    },
  }
}

/* ── Skeleton piece ── */
function Skel({ w, h, r = 8 }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: r, flexShrink: 0,
      background: 'linear-gradient(90deg,#f0eaf4 25%,#e8e0ef 50%,#f0eaf4 75%)',
      backgroundSize: '600px 100%',
      animation: 'sc-shimmer 1.4s infinite linear',
    }}/>
  )
}

function LoadingSkeleton() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: 64 }}>
      <style>{`@keyframes sc-shimmer{0%{background-position:-600px 0}100%{background-position:600px 0}}`}</style>
      <div style={{ height: 52, borderBottom: '1px solid #ede8f0', backgroundColor: 'rgba(247,243,248,0.92)' }} />
      {/* Full-width cover skeleton */}
      <Skel w="100%" h={480} r={0} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <Skel w={80} h={24} r={40} /><Skel w={60} h={24} r={40} />
        </div>
        <Skel w="85%" h={44} />
        <Skel w="65%" h={44} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 0', borderTop: '1px solid #f0eaf4', borderBottom: '1px solid #f0eaf4' }}>
          <Skel w={44} h={44} r={44} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <Skel w={130} h={13} /><Skel w={190} h={11} />
          </div>
        </div>
        {[100,93,97,81,88,72,90,85].map((w, i) => <Skel key={i} w={`${w}%`} h={17} />)}
      </div>
    </div>
  )
}

/* ── Reading progress bar ── */
function ProgressBar() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? Math.min(100, (scrolled / total) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, height: 3, backgroundColor: 'rgba(71,41,76,0.1)' }}>
      <div style={{
        height: '100%', width: `${pct}%`,
        background: 'linear-gradient(90deg, #47294c, #7b4f82)',
        transition: 'width 0.1s linear',
        boxShadow: '0 0 8px rgba(71,41,76,0.4)',
      }} />
    </div>
  )
}

/* ── Author avatar ── */
function AuthorAvatar({ name, image }) {
  const initials = name ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() : '?'
  return (
    <div style={{
      width: 44, height: 44, borderRadius: '50%',
      backgroundColor: '#47294c',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 13, fontWeight: 700, color: '#fff',
      flexShrink: 0, overflow: 'hidden',
      boxShadow: '0 0 0 3px #fff, 0 0 0 4px #ede8f0',
    }}>
      {image
        ? <img src={urlFor(image).width(88).height(88).url()} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials}
    </div>
  )
}

const css = `
  @keyframes sc-shimmer { 0%{background-position:-600px 0} 100%{background-position:600px 0} }
  @keyframes sc-fadeUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes sc-fadeIn   { from{opacity:0} to{opacity:1} }

  /* ── Prose ── */
  .sc-prose { color: #3a2540; }

  .sc-prose > * + * { margin-top: 0; }

  .sc-prose p {
    font-size: 1.125rem;
    line-height: 1.9;
    margin: 0 0 1.6em;
    color: #3d2850;
    font-weight: 400;
  }

  .sc-prose h2 {
    font-family: var(--font-display, 'Georgia', serif);
    font-size: clamp(1.4rem, 2.5vw, 1.65rem);
    font-weight: 700;
    color: #1c0f1f;
    letter-spacing: -0.025em;
    line-height: 1.25;
    margin: 3em 0 0.85em;
    position: relative;
    padding-left: 0;
  }

  .sc-prose h2::before {
    content: '';
    display: block;
    width: 32px;
    height: 3px;
    background: linear-gradient(90deg, #47294c, #7b4f82);
    border-radius: 2px;
    margin-bottom: 14px;
  }

  .sc-prose h3 {
    font-family: var(--font-display, 'Georgia', serif);
    font-size: 1.2rem;
    font-weight: 700;
    color: #1c0f1f;
    letter-spacing: -0.02em;
    margin: 2.5em 0 0.65em;
  }

  .sc-prose strong { color: #1c0f1f; font-weight: 600; }
  .sc-prose em     { font-style: italic; color: #5a4260; }

  .sc-prose a {
    color: #47294c;
    text-decoration: underline;
    text-decoration-color: rgba(71,41,76,0.3);
    text-underline-offset: 3px;
    font-weight: 500;
    transition: text-decoration-color 0.15s;
  }
  .sc-prose a:hover { text-decoration-color: #47294c; }

  .sc-prose ul { list-style: none; padding: 0; margin: 0 0 1.6em; }
  .sc-prose ol { padding-left: 1.4rem; margin: 0 0 1.6em; }

  .sc-prose ul li {
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: 0.55em;
    color: #3d2850;
    padding-left: 20px;
    position: relative;
  }

  .sc-prose ul li::before {
    content: '';
    position: absolute;
    left: 0; top: 12px;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #47294c;
    opacity: 0.5;
  }

  .sc-prose ol li {
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: 0.55em;
    color: #3d2850;
  }
  .sc-prose ol li::marker { color: #47294c; font-weight: 700; }

  .sc-prose blockquote {
    margin: 2.5em 0;
    padding: 28px 32px;
    background: #faf7fc;
    border-left: none;
    border-radius: 20px;
    position: relative;
    box-shadow: inset 0 0 0 1px rgba(71,41,76,0.1);
  }

  .sc-prose blockquote::before {
    content: '"';
    position: absolute;
    top: -10px; left: 24px;
    font-size: 5rem;
    line-height: 1;
    color: rgba(71,41,76,0.12);
    font-family: Georgia, serif;
    pointer-events: none;
  }

  .sc-prose blockquote p {
    margin: 0;
    font-size: 1.15rem;
    line-height: 1.75;
    color: #47294c;
    font-style: italic;
    font-weight: 500;
  }

  .sc-prose code {
    background: rgba(71,41,76,0.07);
    color: #47294c;
    padding: 3px 8px;
    border-radius: 6px;
    font-size: 0.875em;
    font-family: 'Courier New', monospace;
    border: 1px solid rgba(71,41,76,0.1);
  }

  .sc-prose pre {
    background: #1c0f1f;
    border-radius: 18px;
    padding: 28px;
    overflow-x: auto;
    margin: 2em 0;
    box-shadow: 0 8px 32px rgba(28,15,31,0.25);
  }

  .sc-prose pre code {
    background: none; border: none;
    color: #e8d9ee;
    padding: 0;
    font-size: 0.9rem;
    line-height: 1.75;
  }

  .sc-prose img {
    width: 100%;
    border-radius: 20px;
    margin: 2em 0;
    box-shadow: 0 4px 24px rgba(46,26,50,0.1);
  }

  /* ── Drop cap for first paragraph ── */
  .sc-prose > p:first-child::first-letter {
    float: left;
    font-family: var(--font-display, Georgia, serif);
    font-size: 4.5em;
    line-height: 0.75;
    margin: 6px 12px 0 0;
    color: #47294c;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    .sc-prose p, .sc-prose li { font-size: 1rem; line-height: 1.8; }
    .sc-prose h2 { font-size: 1.3rem; }
    .sc-prose h3 { font-size: 1.1rem; }
    .sc-prose > p:first-child::first-letter { font-size: 3.5em; }
    .sc-prose blockquote { padding: 20px 22px; }
  }
`

export default function BlogsPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    client.fetch(QUERY, { slug }).then(data => {
      setPost(data)
      console.log(data)
      setLoading(false)
    })
  }, [slug])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href })
    } else {
      navigator.clipboard?.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (loading) return <LoadingSkeleton />

  if (!post) return (
    <div style={{ backgroundColor: '#f7f3f8', minHeight: '100vh', paddingTop: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', 
     }}>
      <style>{css}</style>
      <div style={{ textAlign: 'center', padding: 40 }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg, #f7f3f8, #ede8f0)',
          border: '1px solid #ddd4e4',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px',
          boxShadow: '0 4px 20px rgba(46,26,50,0.08)',
        }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 8v7M14 19v1.5" stroke="#47294c" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="14" cy="14" r="11" stroke="#a891b0" strokeWidth="1.5"/>
          </svg>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display,Georgia,serif)', fontSize: '1.5rem', fontWeight: 700, color: '#1c0f1f', margin: '0 0 10px' }}>
          Article not found
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#7b6880', margin: '0 0 28px' }}>
          This article may have moved or been removed.
        </p>
        <Link to="/blogs" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          backgroundColor: '#47294c', color: '#fff',
          fontSize: 13, fontWeight: 600,
          padding: '12px 24px', borderRadius: 40,
          textDecoration: 'none',
          boxShadow: '0 4px 16px rgba(71,41,76,0.3)',
        }}>← Back to Blog</Link>
      </div>
    </div>
  )

  const dateStr = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: 64 ,}}>
      <style>{css}</style>
      <ProgressBar />

      {/* ── Sticky mini-nav ── */}
      <div style={{
        position: 'sticky', top: 64, zIndex: 40,
        backgroundColor: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #f0eaf4',
        padding: '0 clamp(16px,4vw,40px)', height: 52,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link to="/blogs" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 13, fontWeight: 600, color: '#47294c',
          textDecoration: 'none',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <span style={{
            width: 28, height: 28, borderRadius: '50%',
            backgroundColor: 'rgba(71,41,76,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7l4-4" stroke="#47294c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          All Articles
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {post.part && (
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase',
              backgroundColor: '#47294c', color: '#fff',
              padding: '4px 12px', borderRadius: 40,
            }}>Part {post.part}</span>
          )}
          {post.level && (
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase',
              backgroundColor: 'rgba(71,41,76,0.08)', color: '#47294c',
              padding: '4px 12px', borderRadius: 40,
            }}>{post.level}</span>
          )}
          {post.readTime > 0 && (
            <span style={{ fontSize: 11, color: '#a891b0', fontWeight: 500 }}>
              {post.readTime} min read
            </span>
          )}
        </div>
      </div>

      

      {/* ── Article header ── */}
      <div style={{
        maxWidth: 720, margin: post.mainImage ? '-80px auto 0' : '0 auto',
        padding: '0 clamp(16px,4vw,32px)',
        position: 'relative', zIndex: 2,
        animation: 'sc-fadeUp 0.5s ease both',marginTop:'50px'
      }}>
        {/* Category + Level chips */}
      

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-display, Georgia, serif)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 700,
          color: '#1c0f1f',
          letterSpacing: '-0.03em',
          lineHeight: 1.17,
          margin: '0 0 36px',
        }}>{post.title}</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
          {post.categories && (
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              backgroundColor: '#47294c', color: '#fff',
              padding: '6px 14px', borderRadius: 40,
              boxShadow: '0 2px 8px rgba(71,41,76,0.25)',
            }}>{post.categories[0]}</span>
          )}
          {post.level && (
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              backgroundColor: 'rgba(71,41,76,0.08)', color: '#47294c',
              padding: '6px 14px', borderRadius: 40,
              border: '1px solid rgba(71,41,76,0.12)',
            }}>{post.level}</span>
          )}
        </div>
        {/* Author meta row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
          padding: '20px 0',
          borderTop: '1px solid #ede8f0',
          borderBottom: '1px solid #ede8f0',
          marginBottom: 52,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <AuthorAvatar name={post.author} image={post.authorImage} />
            <div>
              {post.author && (
                <span style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#1c0f1f', marginBottom: 4 }}>
                  {post.author}
                </span>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#a891b0', fontWeight: 500 }}>
                <span>{dateStr}</span>
                {post.readTime > 0 && (
                  <>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: '#ddd4e4', display: 'inline-block' }} />
                    <span>{post.readTime}min read</span>
                  </>
                )}
                
              </div>
            </div>
          </div>

          {/* Share button */}
          <button
            onClick={handleShare}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              fontSize: 12, fontWeight: 600,
              color: copied ? '#2e7d32' : '#7b6880',
              backgroundColor: copied ? 'rgba(46,125,50,0.08)' : 'transparent',
              border: `1px solid ${copied ? 'rgba(46,125,50,0.2)' : '#ede8f0'}`,
              padding: '8px 16px', borderRadius: 40, cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { if (!copied) { e.currentTarget.style.borderColor = '#47294c'; e.currentTarget.style.color = '#47294c'; } }}
            onMouseLeave={e => { if (!copied) { e.currentTarget.style.borderColor = '#ede8f0'; e.currentTarget.style.color = '#7b6880'; } }}
          >
            {copied ? (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                Share
              </>
            )}
          </button>
        </div>

        {/* ── Article body ── */}
        <div className="sc-prose" style={{ animation: 'sc-fadeUp 0.5s 0.1s ease both' }}>
          <PortableText value={post.body} components={ptComponents(urlFor)} />
        </div>
      </div>

      {/* ── Footer CTA ── */}
      <div style={{
        marginTop: 80,
        borderTop: '1px solid #f0eaf4',
        background: 'linear-gradient(to bottom, #fff 0%, #f7f3f8 100%)',
      }}>
        <div style={{
          maxWidth: 720, margin: '0 auto',
          padding: 'clamp(40px,6vw,64px) clamp(16px,4vw,32px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontSize: '1.2rem', fontWeight: 700,
              color: '#1c0f1f', margin: '0 0 6px',
              letterSpacing: '-0.02em',
            }}>
              Enjoyed reading?
            </p>
            <p style={{ fontSize: '0.875rem', color: '#7b6880', margin: 0, lineHeight: 1.6 }}>
              Explore more guides to grow your coaching business.
            </p>
          </div>
          <Link to="/blogs" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            backgroundColor: '#47294c', color: '#fff',
            fontSize: 13, fontWeight: 600,
            padding: '13px 24px', borderRadius: 40,
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(71,41,76,0.28)',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(71,41,76,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(71,41,76,0.28)'; }}
          >
            View all Articles
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}