import Link from "next/link";

import { PageChrome } from "@/components/SiteShell";

export default function NotFound() {
  return (
    <PageChrome>
      <main className="page-wrap">
        <section className="page-card">
          <div className="kicker">404</div>
          <h1>Page not found</h1>
          <p>This route does not have static fallback content and does not map to a known Lainey page.</p>
          <Link className="button" href="/">
            Return home
          </Link>
        </section>
      </main>
    </PageChrome>
  );
}
