import Link from "next/link";

import { PageChrome } from "@/components/SiteShell";

export function StaticHomePage() {
  return (
    <PageChrome>
      <main className="main">
        <section className="hero">
          <div>
            <div className="kicker">from the table</div>
            <h1>Lainey</h1>
            <p>Quiet essays, reading lists, and notes from the table.</p>
            <div className="actions">
              <Link className="button" href="/essays">
                Read the Essays
              </Link>
              <Link className="button secondary" href="/reading-lists">
                Reading Lists
              </Link>
              <Link className="button secondary" href="/about">
                About Lainey
              </Link>
            </div>
          </div>
          <aside aria-label="Editorial note card" className="hero-card">
            <div className="note">A cold coffee, a marked page, and the small systems people forget to name.</div>
            <div className="meta">Paper light, ink deep, built for quiet reading.</div>
          </aside>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Read slowly.</h2>
            <p className="lede">A clean place for essays, lists, and notes that do not need to shout to stay with you.</p>
          </div>
          <div className="grid">
            <Link className="tile" href="/essays">
              <div>
                <h3>Essays</h3>
                <p>Small observations, quiet systems, and notes that stay with you.</p>
              </div>
              <span>Browse Essays -&gt;</span>
            </Link>
            <Link className="tile" href="/reading-lists">
              <div>
                <h3>Reading Lists</h3>
                <p>Book lists for rainy tables, late coffee, and slow weekends.</p>
              </div>
              <span>Browse Reading Lists -&gt;</span>
            </Link>
            <Link className="tile" href="/about">
              <div>
                <h3>About Lainey</h3>
                <p>A downtown reading table, a cold coffee, and the habit of noticing what most people skip.</p>
              </div>
              <span>Meet Lainey -&gt;</span>
            </Link>
          </div>
        </section>

        <section className="section">
          <article className="feature">
            <div className="feature-mark">
              Notes
              <br />
              From
              <br />
              Cold
              <br />
              Coffee
            </div>
            <div>
              <div className="kicker">essay feature</div>
              <h2>Notes From Cold Coffee</h2>
              <p>A small collection of quiet observations from the places people rush past.</p>
              <Link className="button" href="/essays">
                Read the Essays
              </Link>
            </div>
          </article>
          <article className="feature">
            <div className="feature-mark">
              Ten Books
              <br />
              for a
              <br />
              Rainy
              <br />
              Table
            </div>
            <div>
              <div className="kicker">reading list feature</div>
              <h2>Ten Books for a Rainy Table</h2>
              <p>A slow reading list for late coffee, weathered pages, and the kind of day that asks you to stay.</p>
              <Link className="button" href="/reading-lists">
                Browse Reading Lists
              </Link>
            </div>
          </article>
        </section>

        <section className="about-band">
          <div className="about-inner">
            <h2>About Lainey</h2>
            <div>
              <p>A downtown reading table, a cold coffee, and the habit of noticing what most people skip.</p>
              <Link className="button secondary" href="/about">
                Meet Lainey
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="signup">
            <h2>Get the quiet notes first.</h2>
            <p>New essays, reading lists, and updates from Lainey.</p>
            <form className="form-shell">
              <input aria-label="Email address" placeholder="email@example.com" />
              <button type="button">Sign up</button>
            </form>
          </div>
        </section>
      </main>
    </PageChrome>
  );
}

export function StaticRoutePage(props: { body: string; eyebrow: string; title: string }) {
  return (
    <PageChrome>
      <main className="page-wrap">
        <section className="page-card">
          <div className="kicker">{props.eyebrow}</div>
          <h1>{props.title}</h1>
          <p>{props.body}</p>
        </section>
      </main>
    </PageChrome>
  );
}
