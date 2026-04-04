import { useEffect } from "react";
export const  FontLoader = () => {
  useEffect(() => {
    if (document.getElementById("sc360-fonts")) return;
    const link = document.createElement("link");
    link.id = "sc360-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.id = "sc360-styles";
    style.textContent = `
      @keyframes shimmer {
        0%   { background-position: -300% center; }
        100% { background-position:  300% center; }
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(22px); }
        to   { opacity: 1; transform: translateY(0);    }
      }
      .sc-fd { font-family: 'DM Serif Display', Georgia, serif; }
      .sc-fb { font-family: 'DM Sans', system-ui, sans-serif; }
      .shimmer-text {
        background: linear-gradient(90deg, #a06cb0 0%, #e8c8f0 35%, #a06cb0 55%, #c9a8d6 100%);
        background-size: 300% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 5s linear infinite;
      }
      .fade-up { animation: fadeUp 0.7s ease both; }
      .d1 { animation-delay: 0.05s; }
      .d2 { animation-delay: 0.18s; }
      .d3 { animation-delay: 0.30s; }
      .d4 { animation-delay: 0.44s; }
      .bv-accent {
        position: absolute; top: 0; left: 24px; right: 24px; height: 2px;
        border-radius: 0 0 2px 2px;
        background: linear-gradient(90deg, #47294c, #a06cb0);
        opacity: 0; transition: opacity 0.3s;
        transform-origin: left;
      }
      .bv-card:hover .bv-accent { opacity: 1; }
      .bv-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(46,26,50,0.10); border-color: rgba(160,108,176,0.4); }
      .stat-card:hover { background: rgba(160,108,176,0.14); border-color: rgba(160,108,176,0.45); transform: translateY(-4px); }
    `;
    document.head.appendChild(style);
  }, []);
  return null;
};