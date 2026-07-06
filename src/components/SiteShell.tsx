import Link from "next/link";

export function AnnouncementBar() {
  return <div className="announcement">New notes from Lainey - essays, reading lists, and quiet things from the table.</div>;
}

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/">
          Lainey
        </Link>
        <nav aria-label="Main navigation" className="nav">
          <Link href="/">Home</Link>
          <Link href="/essays">Essays</Link>
          <Link href="/reading-lists">Reading Lists</Link>
          <Link href="/about">About Lainey</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <strong>Lainey</strong>
          <br />
          <span style={{ color: "rgba(255,250,241,.7)" }}>Quiet essays, reading lists, and notes from the table.</span>
        </div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/essays">Essays</Link>
          <Link href="/reading-lists">Reading Lists</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export function PageChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      {children}
      <Footer />
    </>
  );
}
