import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { client, urlFor } from '../sanityclient'
import { IMAGES } from "../images";

const QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title, publishedAt, mainImage, body,
  "author": author->name,
  "authorImage": author->image,
  "categories": categories[]->title,
  partNumber,
  difficultyLevel,
  "readTime": round(length(pt::text(body)) / 5 / 200)
}`

/* ── Injected CSS: only what Tailwind can't express ── */
const injectCSS = `
  @keyframes sc-shimmer { 0%{background-position:-600px 0} 100%{background-position:600px 0} }
  @keyframes sc-fadeUp  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes sc-fadeIn  { from{opacity:0} to{opacity:1} }

  .sc-anim-up  { animation: sc-fadeUp 0.5s ease both; }
  .sc-anim-up2 { animation: sc-fadeUp 0.5s 0.1s ease both; }
  .sc-anim-in  { animation: sc-fadeIn 0.6s ease both; }

  .sc-shimmer {
    background: linear-gradient(90deg,#f0eaf4 25%,#e8e0ef 50%,#f0eaf4 75%);
    background-size: 600px 100%;
    animation: sc-shimmer 1.4s infinite linear;
  }

  /* Progress bar */
  .sc-progress { position:fixed;top:0;left:0;right:0;z-index:9999;height:3px;background:rgba(71,41,76,0.1); }
  .sc-progress-fill { height:100%;background:linear-gradient(90deg,#47294c,#7b4f82);transition:width 0.1s linear;box-shadow:0 0 8px rgba(71,41,76,0.4); }

  /* Prose */
  .sc-prose p { font-size:1.125rem;line-height:1.9;margin:0 0 1.6em;color:#3d2850; }

  .sc-prose h2 {
    font-family: var(--font-display,Georgia,serif);
    font-size: clamp(1.4rem,2.5vw,1.65rem);
    font-weight:700;color:#1c0f1f;letter-spacing:-0.025em;line-height:1.25;margin:3em 0 0.85em;
  }
  .sc-prose h2::before {
    content:'';display:block;width:32px;height:3px;
    background:linear-gradient(90deg,#47294c,#7b4f82);
    border-radius:2px;margin-bottom:14px;
  }

  .sc-prose h3 {
    font-family:var(--font-display,Georgia,serif);
    font-size:1.2rem;font-weight:700;color:#1c0f1f;letter-spacing:-0.02em;margin:2.5em 0 0.65em;
  }

  .sc-prose strong { color:#1c0f1f;font-weight:600; }
  .sc-prose em     { font-style:italic;color:#5a4260; }

  .sc-prose a {
    color:#47294c;text-decoration:underline;
    text-decoration-color:rgba(71,41,76,0.3);
    text-underline-offset:3px;font-weight:500;transition:text-decoration-color 0.15s;
  }
  .sc-prose a:hover { text-decoration-color:#47294c; }

  .sc-prose ul { list-style:none;padding:0;margin:0 0 1.6em; }
  .sc-prose ol { padding-left:1.4rem;margin:0 0 1.6em; }

  .sc-prose ul li {
    font-size:1.125rem;line-height:1.8;margin-bottom:0.55em;
    color:#3d2850;padding-left:20px;position:relative;
  }
  .sc-prose ul li::before {
    content:'';position:absolute;left:0;top:12px;
    width:6px;height:6px;border-radius:50%;background:#47294c;opacity:0.5;
  }

  .sc-prose ol li { font-size:1.125rem;line-height:1.8;margin-bottom:0.55em;color:#3d2850; }
  .sc-prose ol li::marker { color:#47294c;font-weight:700; }

  .sc-prose blockquote {
    margin:2.5em 0;padding:28px 32px;background:#faf7fc;
    border-radius:20px;position:relative;
    box-shadow:inset 0 0 0 1px rgba(71,41,76,0.1);
  }
  .sc-prose blockquote::before {
    content:'"';position:absolute;top:-10px;left:24px;
    font-size:5rem;line-height:1;color:rgba(71,41,76,0.12);
    font-family:Georgia,serif;pointer-events:none;
  }
  .sc-prose blockquote p { margin:0;font-size:1.15rem;line-height:1.75;color:#47294c;font-style:italic;font-weight:500; }

  .sc-prose code {
    background:rgba(71,41,76,0.07);color:#47294c;
    padding:3px 8px;border-radius:6px;font-size:0.875em;
    font-family:'Courier New',monospace;border:1px solid rgba(71,41,76,0.1);
  }

  .sc-prose pre { background:#1c0f1f;border-radius:18px;padding:28px;overflow-x:auto;margin:2em 0;box-shadow:0 8px 32px rgba(28,15,31,0.25); }
  .sc-prose pre code { background:none;border:none;color:#e8d9ee;padding:0;font-size:0.9rem;line-height:1.75; }

  .sc-prose img { width:100%;border-radius:20px;margin:2em 0;box-shadow:0 4px 24px rgba(46,26,50,0.1); }

  /* Drop cap */
  .sc-prose > p:first-child::first-letter {
    float:left;font-family:var(--font-display,Georgia,serif);
    font-size:4.5em;line-height:0.75;margin:6px 12px 0 0;
    color:#47294c;font-weight:700;
  }

  @media(max-width:640px){
    .sc-prose p,.sc-prose ul li,.sc-prose ol li { font-size:1rem;line-height:1.8; }
    .sc-prose h2 { font-size:1.3rem; }
    .sc-prose h3 { font-size:1.1rem; }
    .sc-prose>p:first-child::first-letter { font-size:3.5em; }
    .sc-prose blockquote { padding:20px 22px; }
  }
`

/* ── Progress bar ── */
function ProgressBar() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      const total = el.scrollHeight - el.clientHeight
      setPct(total > 0 ? Math.min(100, (el.scrollTop / total) * 100) : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className="sc-progress">
      <div className="sc-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  )
}

/* ── Author avatar ── */
function AuthorAvatar({ name, image }) {
  const initials = name ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() : '?'
  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 overflow-hidden"
      style={{ backgroundColor: '#47294c', boxShadow: '0 0 0 3px #fff, 0 0 0 4px #ede8f0' }}
    >
      {image
        ? <img src={urlFor(image).width(88).height(88).url()} alt={name} className="w-full h-full object-cover" />
        : initials}
    </div>
  )
}

/* ── Skeleton block ── */
function Skel({ className = '', style = {} }) {
  return <div className={`sc-shimmer rounded-lg ${className}`} style={style} />
}

/* ── Loading state ── */
function LoadingSkeleton() {
  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="border-b border-[#ede8f0] bg-white/90" style={{ height: 52 }} />
      <Skel className="w-full !rounded-none" style={{ height: 480 }} />
      <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col gap-5">
        <div className="flex gap-3">
          <Skel className="!rounded-full" style={{ width: 80, height: 24 }} />
          <Skel className="!rounded-full" style={{ width: 60, height: 24 }} />
        </div>
        <Skel style={{ width: '85%', height: 44 }} />
        <Skel style={{ width: '65%', height: 44 }} />
        <div className="flex items-center gap-3 py-4 border-t border-b border-[#f0eaf4]">
          <Skel className="!rounded-full flex-shrink-0" style={{ width: 44, height: 44 }} />
          <div className="flex flex-col gap-2">
            <Skel style={{ width: 130, height: 13 }} />
            <Skel style={{ width: 190, height: 11 }} />
          </div>
        </div>
        {[100,93,97,81,88,72,90,85].map((w, i) => (
          <Skel key={i} style={{ width: `${w}%`, height: 17 }} />
        ))}
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="bg-[#f7f3f8] min-h-screen pt-16 flex items-center justify-center">
      <div className="text-center px-10">
        <div
          className="mx-auto mb-6 flex items-center justify-center rounded-full border border-[#ddd4e4]"
          style={{ width: 72, height: 72, background: 'linear-gradient(135deg,#f7f3f8,#ede8f0)', boxShadow: '0 4px 20px rgba(46,26,50,0.08)' }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 8v7M14 19v1.5" stroke="#47294c" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="14" cy="14" r="11" stroke="#a891b0" strokeWidth="1.5"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#1c0f1f] mb-2.5" style={{ fontFamily: 'var(--font-display,Georgia,serif)' }}>
          Article not found
        </h2>
        <p className="text-sm text-[#7b6880] mb-7">This article may have moved or been removed.</p>
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-full no-underline"
          style={{ backgroundColor: '#47294c', boxShadow: '0 4px 16px rgba(71,41,76,0.3)' }}
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  )
}

/* ── Main ── */
export default function BlogsPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    client.fetch(QUERY, { slug }).then(data => {
      setPost(data)
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

  if (loading) return <><style>{injectCSS}</style><LoadingSkeleton /></>
  if (!post)   return <><style>{injectCSS}</style><NotFound /></>

  const dateStr = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div className="bg-white min-h-screen pt-16">
      <style>{injectCSS}</style>
      <ProgressBar />

      <div
        className="sticky top-16 z-40 flex items-center justify-between px-4 sm:px-10 border-b border-[#f0eaf4]"
        style={{ height: 52, backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
      >
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#47294c] no-underline transition-opacity hover:opacity-65"
        >
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'rgba(71,41,76,0.08)' }}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7l4-4" stroke="#47294c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          All Articles
        </Link>

        <div className="flex items-center gap-2">
          {post.partNumber && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full" style={{ backgroundColor: '#47294c' }}>
              Part {post.partNumber}
            </span>
          )}
          {post.difficultyLevel && (
            <span
              className="text-[10px] font-bold uppercase tracking-wider text-[#47294c] px-3 py-1 rounded-full border"
              style={{ backgroundColor: 'rgba(71,41,76,0.07)', borderColor: 'rgba(71,41,76,0.15)' }}
            >
              {post.difficultyLevel}
            </span>
          )}
          {post.readTime > 0 && (
            <span className="hidden sm:inline text-[11px] font-medium text-[#a891b0]">
              {post.readTime} min read
            </span>
          )}
        </div>
      </div>

      
     

    
      <div
        className="max-w-5xl mx-auto px-4 sm:px-8 sc-anim-up "
        style={{ marginTop: post.mainImage ? '-72px' : '40px', position: 'relative', zIndex: 2 }}
      >
        {/* Title */}
        <h1
          className="font-bold text-[#1c0f1f] mb-5 mt-20"
          style={{
            fontFamily: 'var(--font-display,Georgia,serif)',
            fontSize: 'clamp(2rem,5vw,3rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.17,
          }}
        >
          {post.title}
        </h1>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {post.categories?.[0] && (
            <span
              className="text-[10px] font-bold uppercase tracking-widest text-white px-3.5 py-1.5 rounded-full"
              style={{ backgroundColor: '#47294c', boxShadow: '0 2px 8px rgba(71,41,76,0.25)' }}
            >
              {post.categories[0]}
            </span>
          )}
          {post.difficultyLevel && (
            <span
              className="text-[10px] font-bold uppercase tracking-widest text-[#47294c] px-3.5 py-1.5 rounded-full border"
              style={{ backgroundColor: 'rgba(71,41,76,0.07)', borderColor: 'rgba(71,41,76,0.12)' }}
            >
              {post.difficultyLevel}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between flex-wrap gap-4 py-5 border-t border-b border-[#ede8f0] mb-12">
          <div className="flex items-center gap-3.5">
            <AuthorAvatar name={post.author} image={post.authorImage} />
            <div>
              {post.author && (
                <span className="block text-sm font-bold text-[#1c0f1f] mb-1">{post.author}</span>
              )}
              <div className="flex items-center gap-2 text-xs font-medium text-[#a891b0]">
                <span>{dateStr}</span>
                {post.readTime > 0 && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-[#ddd4e4] inline-block" />
                    <span>{post.readTime} min read</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border cursor-pointer transition-all duration-200"
            style={{
              color: copied ? '#2e7d32' : '#7b6880',
              backgroundColor: copied ? 'rgba(46,125,50,0.08)' : 'transparent',
              borderColor: copied ? 'rgba(46,125,50,0.2)' : '#ede8f0',
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
        {console.log(post)}
      {
  post.mainImage && (
    <div className='flex align-middle justify-center w-full h-[400px] sm:h-[480px] sc-anim-in' style={{ height: 'clamp(280px,48vw,520px)' }}>
         <img 
      src={urlFor(post.mainImage).width(720).url()} 
      className='w-[80%] h-[80%] object-top object-cover rounded-2xl shadow-lg'
    />
        </div>
  )
}
        {/* Body */}
        <div className="sc-prose sc-anim-up2">
          <PortableText
            value={post.body}
            components={{
              types: {
                image: ({ value }) => (
                  <img
                    src={urlFor(value).width(720).url()}
                    alt={value.alt || ''}
                    className="w-full rounded-2xl my-8 shadow-md"
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
            }}
          />
        </div>
      </div>

      {/* ── Footer CTA ── */}
      <div className="mt-20 border-t border-[#f0eaf4]" style={{ background: 'linear-gradient(to bottom,#fff 0%,#f7f3f8 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-8 py-14 flex items-center justify-between flex-wrap gap-6">
          <div>
            <p
              className="text-xl font-bold text-[#1c0f1f] mb-1.5"
              style={{ fontFamily: 'var(--font-display,Georgia,serif)', letterSpacing: '-0.02em' }}
            >
              Enjoyed reading?
            </p>
            <p className="text-sm text-[#7b6880] leading-relaxed">
              Explore more guides to grow your coaching business.
            </p>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3.5 rounded-full no-underline transition-all duration-200"
            style={{ backgroundColor: '#47294c', boxShadow: '0 4px 20px rgba(71,41,76,0.28)' }}
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