
"use client";

export function FullWidthImageSection() {
  return (
    <section
      className="h-[80vh] w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://placehold.co/1920x1080.png')",
      }}
      aria-label="Beautifully arranged pastries"
      data-ai-hint="pastry display"
    >
      {/* This section is primarily for the visual effect of the background image. */}
      {/* Content can be overlaid here if needed in the future. */}
    </section>
  );
}
