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

      .ldr-shimmer-text {
        background: linear-gradient(90deg, #a06cb0 0%, #e8c8f0 35%, #a06cb0 55%, #c9a8d6 100%);
        background-size: 300% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: ldr-shimmer-text 5s linear infinite;
      }
      .ldr-ring-outer {
        animation: ldr-ring-spin 2.8s cubic-bezier(0.4,0,0.2,1) infinite;
      }
      .ldr-ring-mid {
        animation: ldr-ring-spin-rev 2s cubic-bezier(0.4,0,0.2,1) infinite;
      }
      .ldr-ring-inner {
        animation: ldr-ring-spin 1.4s cubic-bezier(0.4,0,0.2,1) infinite;
      }
      .ldr-logo-pop {
        animation: ldr-logo-pop 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.3s both;
      }
      .ldr-logo-pop-late {
        animation: ldr-logo-pop 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.45s both;
      }
      .ldr-fade-up-65 { animation: ldr-fade-up 0.7s ease 0.65s both; }
      .ldr-fade-up-75 { animation: ldr-fade-up 0.7s ease 0.75s both; }
      .ldr-fade-up-85 { animation: ldr-fade-up 0.7s ease 0.85s both; }
      .ldr-fade-up-95 { animation: ldr-fade-up 0.7s ease 0.95s both; }
      .ldr-blob-1 {
        animation: ldr-blob-drift-1 7s ease-in-out infinite;
      }
      .ldr-blob-2 {
        animation: ldr-blob-drift-2 9s ease-in-out infinite;
      }
      .ldr-blob-3 {
        animation: ldr-blob-drift-1 11s ease-in-out infinite reverse;
      }
      .ldr-bar-fill {
        background: linear-gradient(90deg, #47294c 0%, #a06cb0 40%, #e8c8f0 60%, #a06cb0 80%, #47294c 100%);
        background-size: 200% auto;
        animation: ldr-bar-grow 2.8s cubic-bezier(0.4,0,0.8,1) 0.5s both,
                   ldr-bar-shimmer 1.8s linear 0.5s infinite;
      }
      .ldr-dot-pulse-0 { animation: ldr-dot-pulse 1.4s ease-in-out 0s infinite; }
      .ldr-dot-pulse-1 { animation: ldr-dot-pulse 1.4s ease-in-out 0.2s infinite; }
      .ldr-dot-pulse-2 { animation: ldr-dot-pulse 1.4s ease-in-out 0.4s infinite; }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
};

export default function PageLoader({ onComplete }) {
  useEffect(() => {
    if (!onComplete) return;
    const t = setTimeout(onComplete, 3400);
    return () => clearTimeout(t);
  }, [onComplete]);

  const statusMessages = [
    { text: "Initialising workspace", delay: "0.8s" },
    { text: "Loading your clients",   delay: "1.9s" },
    { text: "Almost ready",           delay: "3.0s" },
  ];

  return (
    <>
      <FontLoader />

      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#1c0f1f", fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        <div
          className="ldr-blob-1 pointer-events-none absolute left-1/2 top-[20%] h-[340px] w-[520px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(71,41,76,0.85) 0%, transparent 70%)",
            filter: "blur(52px)",
          }}
        />
        <div
          className="ldr-blob-2 pointer-events-none absolute left-[30%] top-[65%] h-[260px] w-[340px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(129,69,140,0.25) 0%, transparent 70%)",
            filter: "blur(44px)",
          }}
        />
        <div
          className="ldr-blob-3 pointer-events-none absolute left-[72%] top-[60%] h-[200px] w-[280px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(71,41,76,0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center">

          <div className="relative mb-9 h-[120px] w-[120px]">
            <div
              className="ldr-ring-outer absolute inset-0 rounded-full"
              style={{
                border: "1px solid transparent",
                borderTopColor: "rgba(160,108,176,0.7)",
                borderRightColor: "rgba(160,108,176,0.4)",
                borderBottomColor: "rgba(160,108,176,0.18)",
                borderLeftColor: "rgba(160,108,176,0.18)",
              }}
            />
            <div
              className="ldr-ring-mid absolute rounded-full"
              style={{
                inset: 14,
                border: "1px solid transparent",
                borderBottomColor: "rgba(201,168,214,0.6)",
                borderLeftColor: "rgba(201,168,214,0.3)",
                borderTopColor: "rgba(201,168,214,0.12)",
                borderRightColor: "rgba(201,168,214,0.12)",
              }}
            />
            <div
              className="ldr-ring-inner absolute rounded-full"
              style={{
                inset: 28,
                border: "1px solid transparent",
                borderTopColor: "rgba(129,69,140,0.7)",
                borderRightColor: "rgba(129,69,140,0.15)",
                borderBottomColor: "rgba(129,69,140,0.15)",
                borderLeftColor: "rgba(129,69,140,0.15)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <img
                src={IMAGES.logo}
                alt="Shield"
                className="ldr-logo-pop h-16 w-16 bg-white/80 px-3 py-3 rounded-full shadow-[0_4px_12px_rgba(160,108,176,0.3)]"
              />
            </div>
          </div>

          <div
            className="ldr-logo-pop-late mb-2 text-[28px] leading-none tracking-[-0.02em] text-[#faf4fc]"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Smart<span className="text-purple-300">Coach360</span>
          </div>

          <div
            className="ldr-fade-up-65 mb-11 text-[13px] font-normal tracking-[0.04em]"
            style={{ color: "rgba(138,116,144,0.9)" }}
          >
            #1 Software for Coaches
          </div>

          <div className="ldr-fade-up-75 mb-6 w-[220px]">
            <div
              className="h-[3px] w-full overflow-hidden rounded-full"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <div className="ldr-bar-fill h-full rounded-full" />
            </div>
          </div>

          {/* Cycling status messages */}
          <div className="ldr-fade-up-85 relative h-5 overflow-hidden">
            {statusMessages.map(({ text, delay }) => (
              <div
                key={text}
                className="absolute inset-0 text-center text-[11px] font-medium uppercase tracking-[0.14em]"
                style={{
                  color: "rgba(160,108,176,0.7)",
                  animation: `ldr-status-cycle 1.1s ease ${delay} both`,
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* ── Breathing dots ── */}
        <div className="ldr-fade-up-95 absolute bottom-9 left-0 right-0 flex justify-center gap-2">
          {["ldr-dot-pulse-0", "ldr-dot-pulse-1", "ldr-dot-pulse-2"].map((cls, i) => (
            <div
              key={i}
              className={`${cls} h-[5px] w-[5px] rounded-full`}
              style={{ background: "rgba(160,108,176,0.6)" }}
            />
          ))}
        </div>
      </div>
    </>
  );
}