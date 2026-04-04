import { useEffect } from "react";
import { IMAGES } from "../images";
const FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("sc360-loader-fonts")) return;
    const link = document.createElement("link");
    link.id = "sc360-loader-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.id = "sc360-loader-styles";
    style.textContent = `
      @keyframes ldr-shimmer-text {
        0%   { background-position: -300% center; }
        100% { background-position:  300% center; }
      }
      @keyframes ldr-ring-spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes ldr-ring-spin-rev {
        from { transform: rotate(0deg); }
        to   { transform: rotate(-360deg); }
      }
      @keyframes ldr-dot-pulse {
        0%, 100% { opacity: 0.2; transform: scale(0.7); }
        50%       { opacity: 1;   transform: scale(1); }
      }
      @keyframes ldr-bar-grow {
        0%   { width: 0%; }
        15%  { width: 18%; }
        35%  { width: 42%; }
        55%  { width: 63%; }
        75%  { width: 81%; }
        90%  { width: 93%; }
        100% { width: 100%; }
      }
      @keyframes ldr-bar-shimmer {
        0%   { background-position: -200% center; }
        100% { background-position:  200% center; }
      }
      @keyframes ldr-blob-drift-1 {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        50%       { transform: translate(-50%, -50%) scale(1.08) translate(12px, -8px); }
      }
      @keyframes ldr-blob-drift-2 {
        0%, 100% { transform: translate(-50%, -50%) scale(1); }
        50%       { transform: translate(-50%, -50%) scale(0.94) translate(-10px, 12px); }
      }
      @keyframes ldr-logo-pop {
        0%   { opacity: 0; transform: scale(0.82) translateY(10px); }
        60%  { opacity: 1; transform: scale(1.03) translateY(-2px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
      @keyframes ldr-fade-up {
        from { opacity: 0; transform: translateY(14px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes ldr-status-cycle {
        0%   { opacity: 0; transform: translateY(6px); }
        12%  { opacity: 1; transform: translateY(0); }
        88%  { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-6px); }
      }
      @keyframes ldr-grid-fade {
        from { opacity: 0; }
        to   { opacity: 0.045; }
      }
      @keyframes ldr-page-fade-out {
        0%   { opacity: 1; }
        100% { opacity: 0; }
      }

      .ldr-shimmer-text {
        background: linear-gradient(90deg, #a06cb0 0%, #e8c8f0 35%, #a06cb0 55%, #c9a8d6 100%);
        background-size: 300% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: ldr-shimmer-text 5s linear infinite;
      }
    `;
    document.head.appendChild(style);
  }, []);
  return null;
};

const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 36, height: 36, animation: "ldr-logo-pop 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.3s both" }}
  >
    <path
      d="M12 2L3 6.5V12c0 4.5 3.5 8.5 9 10 5.5-1.5 9-5.5 9-10V6.5L12 2Z"
      fill="rgba(71,41,76,0.8)"
      stroke="#c9a8d6"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 12l2.5 2.5 4.5-4.5"
      stroke="#c9a8d6"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PageLoader({ onComplete }) {
  useEffect(() => {
    if (!onComplete) return;
    const t = setTimeout(onComplete, 3400);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <>
      <FontLoader />
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "#1c0f1f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(200,160,220,0.9) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
            animation: "ldr-grid-fade 1.2s ease 0.2s both",
          }}
        />

        {/* Blobs */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            width: 520,
            height: 340,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(71,41,76,0.85) 0%, transparent 70%)",
            filter: "blur(52px)",
            animation: "ldr-blob-drift-1 7s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "65%",
            left: "30%",
            width: 340,
            height: 260,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(129,69,140,0.25) 0%, transparent 70%)",
            filter: "blur(44px)",
            animation: "ldr-blob-drift-2 9s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "72%",
            width: 280,
            height: 200,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(71,41,76,0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "ldr-blob-drift-1 11s ease-in-out infinite reverse",
            pointerEvents: "none",
          }}
        />

        {/* Corner accents */}
        {[
          { top: 20, left: 20, borderTop: "1px solid #a06cb0", borderLeft: "1px solid #a06cb0", borderRadius: "4px 0 0 0" },
          { top: 20, right: 20, borderTop: "1px solid #a06cb0", borderRight: "1px solid #a06cb0", borderRadius: "0 4px 0 0" },
          { bottom: 20, left: 20, borderBottom: "1px solid #a06cb0", borderLeft: "1px solid #a06cb0", borderRadius: "0 0 0 4px" },
          { bottom: 20, right: 20, borderBottom: "1px solid #a06cb0", borderRight: "1px solid #a06cb0", borderRadius: "0 0 4px 0" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 24,
              height: 24,
              opacity: 0.35,
              ...s,
            }}
          />
        ))}

        {/* Centre content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Orbital rings */}
          <div style={{ position: "relative", width: 120, height: 120, marginBottom: 36 }}>
            {/* Outer ring */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1px solid transparent",
                borderTopColor: "rgba(160,108,176,0.7)",
                borderRightColor: "rgba(160,108,176,0.4)",
                borderBottomColor: "rgba(160,108,176,0.18)",
                borderLeftColor: "rgba(160,108,176,0.18)",
                animation: "ldr-ring-spin 2.8s cubic-bezier(0.4,0,0.2,1) infinite",
              }}
            />
            {/* Mid ring */}
            <div
              style={{
                position: "absolute",
                inset: 14,
                borderRadius: "50%",
                border: "1px solid transparent",
                borderBottomColor: "rgba(201,168,214,0.6)",
                borderLeftColor: "rgba(201,168,214,0.3)",
                borderTopColor: "rgba(201,168,214,0.12)",
                borderRightColor: "rgba(201,168,214,0.12)",
                animation: "ldr-ring-spin-rev 2s cubic-bezier(0.4,0,0.2,1) infinite",
              }}
            />
            {/* Inner ring */}
            <div
              style={{
                position: "absolute",
                inset: 28,
                borderRadius: "50%",
                border: "1px solid transparent",
                borderTopColor: "rgba(129,69,140,0.7)",
                borderRightColor: "rgba(129,69,140,0.15)",
                borderBottomColor: "rgba(129,69,140,0.15)",
                borderLeftColor: "rgba(129,69,140,0.15)",
                animation: "ldr-ring-spin 1.4s cubic-bezier(0.4,0,0.2,1) infinite",
              }}
            />
            {/* Shield icon */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={IMAGES.logo} alt="Shield" style={{ width: 32, height: 32, animation: "ldr-logo-pop 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.3s both" }} />
            </div>
          </div>

          {/* Wordmark */}
          <div
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 28,
              color: "#faf4fc",
              letterSpacing: "-0.02em",
              marginBottom: 8,
              animation: "ldr-logo-pop 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.45s both",
            }}
          >
            Smart<span className="ldr-shimmer-text">Coach360</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: "rgba(138,116,144,0.9)",
              letterSpacing: "0.04em",
              marginBottom: 44,
              animation: "ldr-fade-up 0.7s ease 0.65s both",
            }}
          >
            Fitness Coaching Platform
          </div>

          {/* Progress bar */}
          <div
            style={{
              width: 220,
              marginBottom: 24,
              animation: "ldr-fade-up 0.7s ease 0.75s both",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 3,
                background: "rgba(255,255,255,0.07)",
                borderRadius: 99,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: 99,
                  background:
                    "linear-gradient(90deg, #47294c 0%, #a06cb0 40%, #e8c8f0 60%, #a06cb0 80%, #47294c 100%)",
                  backgroundSize: "200% auto",
                  animation:
                    "ldr-bar-grow 2.8s cubic-bezier(0.4,0,0.8,1) 0.5s both, ldr-bar-shimmer 1.8s linear 0.5s infinite",
                }}
              />
            </div>
          </div>

          {/* Cycling status messages */}
          <div
            style={{
              height: 20,
              overflow: "hidden",
              animation: "ldr-fade-up 0.7s ease 0.85s both",
              position: "relative",
            }}
          >
            {[
              { text: "Initialising workspace", delay: "0.8s" },
              { text: "Loading your clients",   delay: "1.9s" },
              { text: "Almost ready",           delay: "3.0s" },
            ].map(({ text, delay }) => (
              <div
                key={text}
                style={{
                  position: "absolute",
                  inset: 0,
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "rgba(160,108,176,0.7)",
                  textAlign: "center",
                  animation: `ldr-status-cycle 1.1s ease ${delay} both`,
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Breathing dots */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 8,
            animation: "ldr-fade-up 0.7s ease 0.95s both",
          }}
        >
          {[0, 0.2, 0.4].map((delay, i) => (
            <div
              key={i}
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "rgba(160,108,176,0.6)",
                animation: `ldr-dot-pulse 1.4s ease-in-out ${delay}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}