'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  Search,
  ArrowUpRight,
  Menu,
  X,
  ChevronRight
} from 'lucide-react'
import {
  cities,
  discover,
  eras,
  foods,
  stories
} from '../lib/data'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  const [query, setQuery] = useState('')

  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 650)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (heroRef.current) {
        heroRef.current.style.setProperty(
          '--mx',
          `${(e.clientX / innerWidth - 0.5) * 12}px`
        )
        heroRef.current.style.setProperty(
          '--my',
          `${(e.clientY / innerHeight - 0.5) * 8}px`
        )
      }
    }

    addEventListener('mousemove', fn)
    return () => removeEventListener('mousemove', fn)
  }, [])

  const results = [
    ...cities.map(c => c.name),
    ...foods,
    ...discover.map(x => x[0])
  ]
    .filter(x =>
      x.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 7)

  return (
    <main className={loaded ? 'loaded' : ''}>

      <div className="loader">
        <div>
          <span>IRAN</span>
          <i />
        </div>
      </div>

      <header>
        <Link className="logo" href="#top">
          IRAN<span>.</span>
        </Link>

        <nav>
          {[
            'Discover',
            'Cities',
            'History',
            'Culture',
            'Nature',
            'Stories'
          ].map(x => (
            <a key={x} href={'#' + x.toLowerCase()}>
              {x}
            </a>
          ))}
        </nav>

        <button
          className="searchBtn"
          onClick={() => setSearch(true)}
        >
          <Search size={18} />
          <span>Search</span>
        </button>

        <button
          className="menuBtn"
          onClick={() => setMenu(true)}
        >
          <Menu />
        </button>
      </header>

      {menu && (
        <div className="mobileNav">
          <button onClick={() => setMenu(false)}>
            <X />
          </button>

          <div>
            {[
              'Discover',
              'Cities',
              'History',
              'Culture',
              'Nature',
              'Stories'
            ].map(x => (
              <a
                key={x}
                onClick={() => setMenu(false)}
                href={'#' + x.toLowerCase()}
              >
                {x}
              </a>
            ))}
          </div>

          <small>
            THE DIGITAL JOURNEY OF IRAN
          </small>
        </div>
      )}

      {search && (
        <div className="searchOverlay">
          <button onClick={() => setSearch(false)}>
            <X />
          </button>

          <p>SEARCH IRAN</p>

          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="city, history, food..."
          />

          <div className="results">
            {query &&
              results.map((r, i) => (
                <span key={i}>
                  {r}
                  <ArrowUpRight size={15} />
                </span>
              ))}
          </div>
        </div>
      )}

      <section
        id="top"
        ref={heroRef}
        className="hero"
      >
        <div className="heroMedia" />
        <div className="grain" />

        <div className="heroCopy">
          <small>THE DIGITAL JOURNEY</small>

          <h1>IRAN</h1>

          <p>
            ایران را فقط نبین؛ <em>کشفش کن.</em>
          </p>

          <a
            className="pill"
            href="#discover"
          >
            EXPLORE IRAN
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="scroll">
          SCROLL TO DISCOVER <span />
        </div>
      </section>

      <section className="intro">
        <div className="eyebrow">
          01 / A LAND OF STORIES
        </div>

        <h2>
          سرزمینی با
          <br />
          <i>هزاران سال</i> داستان.
        </h2>

        <div className="introText">
          <p>
            Iran is not a single image. It is a layered
            landscape of memory, movement, craft and
            contradiction — where ancient routes meet
            restless cities.
          </p>

          <p>
            Move slowly. Look closer. Let the details
            lead you.
          </p>
        </div>
      </section>

      <section className="facts">
        <div className="fact">
          <strong>7</strong>
          <span>climatic regions</span>
        </div>

        <div className="fact">
          <strong>31</strong>
          <span>provinces</span>
        </div>

        <div className="fact">
          <strong>24</strong>
          <span>UNESCO World Heritage sites*</span>
        </div>

        <div className="fact">
          <strong>∞</strong>
          <span>stories to discover</span>
        </div>
      </section>

      <section
        id="discover"
        className="discover"
      >
        <div className="sectionHead">
          <div>
            <span>02 / DISCOVER</span>

            <h2>
              Discover
              <br />
              <i>Iran.</i>
            </h2>
          </div>

          <p>
            A country experienced in chapters — each
            one revealing another texture, another
            rhythm.
          </p>
        </div>

        <div className="discoverGrid">
          {discover.map(([title, desc, img], i) => (
            <article
              className="discoverCard"
              key={title}
            >
              <img
                src={img}
                alt=""
                loading="lazy"
              />

              <div>
                <small>0{i + 1}</small>

                <h3>{title}</h3>

                <p>{desc}</p>

                <ArrowUpRight />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="cities"
        className="cities"
      >
        <div className="sectionHead">
          <div>
            <span>03 / CITIES</span>

            <h2>
              Places
              <br />
              <i>with pulse.</i>
            </h2>
          </div>

          <p>
            From mountain-edge Tehran to the garden
            streets of Shiraz.
          </p>
        </div>

        <div className="cityRail">
          {cities.map((c, i) => (
            <Link
              href={'/cities/' + c.slug}
              className="city"
              key={c.slug}
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
              />

              <div className="cityMeta">
                <small>
                  0{i + 1} — {c.tag}
                </small>

                <h3>{c.name}</h3>

                <p>{c.desc}</p>

                <span>
                  DISCOVER CITY
                  <ChevronRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="history"
        className="history"
      >
        <div className="historyTitle">
          <span>04 / HISTORY</span>

          <h2>
            Time leaves
            <br />
            <i>traces.</i>
          </h2>
        </div>

        <div className="timeline">
          {eras.map(
            ([n, name, date, text]) => (
              <article key={n}>
                <span>{n}</span>

                <div>
                  <small>{date}</small>

                  <h3>{name}</h3>

                  <p>{text}</p>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <section
        id="nature"
        className="nature"
      >
        <div className="natureImage" />

        <div>
          <span>05 / NATURE</span>

          <h2>
            From silence
            <br />
            to <i>sea.</i>
          </h2>

          <p>
            Desert horizons. Snow-lined peaks.
            Caspian rain. Turquoise islands. One
            country, radically different landscapes.
          </p>
        </div>
      </section>

      <section
        id="culture"
        className="culture"
      >
        <div className="sectionHead">
          <div>
            <span>06 / CULTURE</span>

            <h2>
              Made by
              <br />
              <i>memory.</i>
            </h2>
          </div>

          <p>
            Poetry, music, carpets, cinema, calligraphy
            and celebrations — culture that keeps
            changing while remembering where it came
            from.
          </p>
        </div>

        <div className="cultureMosaic">
          <div>
            <b>POETRY</b>
            <span>Words that travel centuries.</span>
          </div>

          <div>
            <b>CARPET</b>
            <span>Geometry, colour, patience.</span>
          </div>

          <div>
            <b>MUSIC</b>
            <span>Improvisation and tradition.</span>
          </div>
        </div>
      </section>

      <section
        id="food"
        className="food"
      >
        <div className="sectionHead">
          <div>
            <span>07 / FOOD</span>

            <h2>
              At the
              <br />
              <i>table.</i>
            </h2>
          </div>

          <p>
            Regional, generous and deeply tied to
            place.
          </p>
        </div>

        <div className="foodRow">
          {foods.map((f, i) => (
            <div
              className="foodCard"
              key={f}
            >
              <div className="foodNo">
                0{i + 1}
              </div>

              <h3>{f}</h3>

              <p>
                Persian cuisine / regional story
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="map">
        <div>
          <span>08 / MAP</span>

          <h2>
            Find your
            <br />
            <i>chapter.</i>
          </h2>

          <p>
            Explore Iran province by province — a
            foundation ready for a full GeoJSON-powered
            interactive map.
          </p>

          <button className="pill">
            OPEN INTERACTIVE MAP
            <ArrowUpRight />
          </button>
        </div>

        <div className="mapVisual">
          <div className="iranShape">
            IRAN
          </div>

          {[
            'NW',
            'N',
            'NE',
            'W',
            'C',
            'E',
            'SW',
            'S',
            'SE'
          ].map((x, i) => (
            <i
              key={x}
              style={{
                left: `${18 + (i % 3) * 30}%`,
                top: `${18 + Math.floor(i / 3) * 29}%`
              }}
            >
              {x}
            </i>
          ))}
        </div>
      </section>

      <section
        id="stories"
        className="stories"
      >
        <div className="sectionHead">
          <div>
            <span>09 / STORIES</span>

            <h2>
              Stories
              <br />
              <i>of Iran.</i>
            </h2>
          </div>

          <p>
            Short reads for longer looking.
          </p>
        </div>

        <div className="storyGrid">
          {stories.map(
            ([title, cat, time, img]) => (
              <article key={title}>
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                />

                <div>
                  <small>
                    {cat} · {time}
                  </small>

                  <h3>{title}</h3>

                  <a href="#">
                    READ STORY
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <footer>
        <div className="footerLogo">
          IRAN<span>.</span>
        </div>

        <p>
          ایران را فقط نبین؛ کشفش کن.
        </p>

        <div>
          <a href="#top">
            BACK TO TOP ↑
          </a>

          <small>
            © 2026 IRAN / DIGITAL EDITORIAL EXPERIENCE
          </small>
        </div>
      </footer>
    </main>
  )
            }
