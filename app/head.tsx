// app/head.tsx
export default function Head() {
  return (
    <>
      {/* Favicons for browser tabs */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      {/* Apple / iOS */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* Manifest for PWA / install icons */}
      <link rel="manifest" href="/manifest.json" />

      {/* Theme color (address bar on mobile) */}
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}
