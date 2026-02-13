"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden"
      data-url="https://calendly.com/pulsesystems/30min?hide_gdpr_banner=1&background_color=111827&text_color=f1f5f9&primary_color=6366f1"
      style={{ minWidth: "320px", height: "700px", width: "100%" }}
    />
  );
}
