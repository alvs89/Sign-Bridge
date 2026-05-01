import React, { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Hand,
  HeartHandshake,
  Languages,
  Menu,
  MessageCircle,
  Moon,
  PlayCircle,
  Search,
  ShieldCheck,
  Smile,
  Sparkles,
  Sun,
  Users,
  X,
} from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/types", label: "Types" },
  { path: "/basic-signs", label: "Basic Signs" },
  { path: "/learn", label: "Start Learning" },
  { path: "/resources", label: "Resources" },
  { path: "/faq", label: "FAQ" },
];

const signCards = [
  {
    word: "Hello",
    icon: "👋",
    image: "/images/signs/hello.jpg",
    alt: "Demonstration photo of the sign for Hello",
    how: "Open your hand near your forehead, then move it outward like a friendly wave.",
    tip: "Use a warm facial expression to make the greeting feel natural.",
  },
  {
    word: "Thank You",
    icon: "🙏",
    image: "/images/signs/thank-you.jpg",
    alt: "Demonstration photo of the sign for Thank You",
    how: "Place your fingertips near your chin, then move your hand forward toward the person.",
    tip: "This sign is often used to show appreciation and respect.",
  },
  {
    word: "Please",
    icon: "🤲",
    image: "/images/signs/please.jpg",
    alt: "Demonstration photo of the sign for Please",
    how: "Place your open hand flat on your chest and move it in a small circular motion.",
    tip: "Keep the movement gentle and polite.",
  },
  {
    word: "Sorry",
    icon: "💛",
    image: "/images/signs/sorry.jpg",
    alt: "Demonstration photo of the sign for Sorry",
    how: "Make a fist and move it in a small circle over your chest.",
    tip: "Your facial expression helps show sincerity.",
  },
  {
    word: "Help",
    icon: "🫴",
    image: "/images/signs/help.jpg",
    alt: "Demonstration photo of the sign for Help",
    how: "Place one hand under a thumbs-up hand, then lift both hands upward together.",
    tip: "This sign can be used when asking for or offering support.",
  },
  {
    word: "I Love You",
    icon: "🤟",
    image: "/images/signs/i-love-you.jpg",
    alt: "Demonstration photo of the sign for I Love You",
    how: "Raise your hand with thumb, index finger, and pinky extended while the middle and ring fingers stay down.",
    tip: "This sign is widely recognized, but meanings can vary across regions.",
  },
];

const typeCards = [
  {
    abbr: "ASL",
    title: "American Sign Language",
    desc: "Used widely in the United States and parts of Canada. ASL has grammar that is different from English.",
  },
  {
    abbr: "BSL",
    title: "British Sign Language",
    desc: "Used in the United Kingdom. It is distinct from ASL and uses different signs and structure.",
  },
  {
    abbr: "FSL",
    title: "Filipino Sign Language",
    desc: "Used by many Deaf Filipinos and recognized as the national sign language of the Philippines.",
  },
  {
    abbr: "International Sign",
    title: "Cross-country communication",
    desc: "A contact signing system often used in international Deaf events, but it is not a full universal language.",
  },
];

const learningSteps = [
  "Start with the alphabet, numbers, greetings, and everyday expressions.",
  "Practice facial expressions because they carry meaning, tone, and grammar.",
  "Watch Deaf creators, teachers, and native signers to learn natural signing.",
  "Learn the sign language used in your own country or community first.",
  "Practice with patience, respect, and consistency instead of memorizing signs only.",
];

const resources = [
  {
    title: "Community Classes",
    description:
      "Look for beginner sign language classes offered by Deaf organizations, schools, or local learning centers.",
    icon: Users,
  },
  {
    title: "Video Lessons",
    description:
      "Use video-based tutorials because sign language is visual and movement-based, not text-only.",
    icon: PlayCircle,
  },
  {
    title: "Practice Groups",
    description:
      "Join safe and respectful signing practice sessions to build confidence and fluency.",
    icon: MessageCircle,
  },
  {
    title: "Deaf Creators",
    description:
      "Follow Deaf educators and creators to understand real communication, culture, and proper etiquette.",
    icon: HeartHandshake,
  },
];

const faqs = [
  {
    question: "Is sign language the same everywhere?",
    answer:
      "No. Different countries and communities have different sign languages. ASL, BSL, FSL, and many others are different from one another.",
  },
  {
    question: "Can hearing people learn sign language?",
    answer:
      "Yes. Hearing people can learn sign language, especially when they do it respectfully and learn from reliable sources and Deaf educators.",
  },
  {
    question: "Is fingerspelling enough?",
    answer:
      "No. Fingerspelling is useful, but sign language also includes vocabulary, grammar, expressions, and cultural context.",
  },
  {
    question: "Why are facial expressions important?",
    answer:
      "Facial expressions can show questions, emphasis, emotion, and grammar. In sign language, the face is part of the message.",
  },
];

function PageShell({ children, highContrast }) {
  return (
    <main
      className={`min-h-screen overflow-x-hidden ${
        highContrast ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {children}
    </main>
  );
}

function Card({ children, highContrast, className = "" }) {
  return (
    <div
      className={`min-w-0 rounded-2xl border p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-6 ${
        highContrast
          ? "border-white/20 bg-slate-800 text-white"
          : "border-slate-200 bg-white text-slate-900"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, description, highContrast }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl px-1 text-center sm:mb-10">
      <p
        className={`mb-3 break-words text-xs font-bold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.25em] ${
          highContrast ? "text-sky-300" : "text-sky-700"
        }`}
      >
        {eyebrow}
      </p>

      <h1
        className={`break-words text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl ${
          highContrast ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h1>

      <p
        className={`mt-4 break-words text-sm leading-7 sm:text-base sm:leading-8 md:text-lg ${
          highContrast ? "text-slate-200" : "text-slate-700"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function Text({ children, highContrast, className = "" }) {
  return (
    <p
      className={`break-words text-sm leading-7 sm:text-base sm:leading-8 ${
        highContrast ? "text-slate-200" : "text-slate-700"
      } ${className}`}
    >
      {children}
    </p>
  );
}

function Header({ highContrast, setHighContrast }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `block rounded-2xl px-4 py-3 text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-sky-300 xl:rounded-full xl:py-2 ${
      isActive
        ? highContrast
          ? "bg-white text-slate-950"
          : "bg-sky-700 text-white"
        : highContrast
        ? "text-slate-100 hover:bg-white/10"
        : "text-slate-700 hover:bg-sky-50 hover:text-sky-800"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        highContrast
          ? "border-white/20 bg-slate-950/95"
          : "border-slate-200 bg-white/90"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 overflow-visible rounded-2xl py-1 focus:outline-none focus:ring-4 focus:ring-sky-300"
          onClick={() => setMenuOpen(false)}
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-emerald-500 text-white shadow-lg sm:h-11 sm:w-11">
            <Hand aria-hidden="true" size={22} />
          </div>

          <div className="min-w-0 overflow-visible py-1">
            <p className="block truncate pb-1 text-base font-black leading-[1.35] sm:text-lg">
              SignBridge
            </p>
            <p
              className={`block truncate text-[11px] font-semibold leading-[1.35] sm:text-xs ${
                highContrast ? "text-slate-300" : "text-slate-500"
              }`}
            >
              Accessible Sign Language Guide
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 xl:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex xl:ml-4">
          <button
            onClick={() => setHighContrast((currentMode) => !currentMode)}
            className={`rounded-full border px-3 py-2 text-xs font-bold ${
              highContrast
                ? "border-white/30 bg-white text-slate-950"
                : "border-slate-300 text-slate-700 hover:bg-sky-50"
            }`}
          >
            {highContrast ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`shrink-0 rounded-2xl border p-2.5 xl:hidden ${
            highContrast ? "border-white/30 text-white" : "border-slate-300"
          }`}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto grid max-w-7xl gap-2 px-4 pb-4 xl:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mt-2 border-t border-slate-300 pt-3">
            <button
              onClick={() => setHighContrast((currentMode) => !currentMode)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold shadow-sm transition ${
                highContrast
                  ? "border-white/30 bg-white text-slate-950 hover:bg-slate-100"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-sky-50"
              }`}
            >
              {highContrast ? <Sun size={16} /> : <Moon size={16} />}
              <span>{highContrast ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Layout({ children, highContrast, setHighContrast }) {
  const location = useLocation();
  const hideFooter = location.pathname === "/basic-signs";

  return (
    <PageShell highContrast={highContrast}>
      <Header highContrast={highContrast} setHighContrast={setHighContrast} />

      <div className="min-w-0">{children}</div>

      {!hideFooter && (
        <footer
          className={`border-t px-4 py-8 sm:px-6 sm:py-10 lg:px-8 ${
            highContrast
              ? "border-white/10 bg-slate-950 text-white"
              : "border-slate-200 bg-white text-slate-950"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p className="break-words text-xl font-black">SignBridge</p>
              <p
                className={`mt-1 max-w-2xl break-words text-sm leading-7 sm:text-base ${
                  highContrast ? "text-slate-300" : "text-slate-600"
                }`}
              >
                A professional guide to sign language, accessibility, and inclusive
                communication.
              </p>
            </div>

            <Link
              to="/basic-signs"
              className={`w-full rounded-2xl border px-5 py-3 text-center text-sm font-bold transition focus:outline-none focus:ring-4 focus:ring-sky-300 sm:w-auto sm:text-base ${
                highContrast
                  ? "border-white/20 bg-white text-slate-950 hover:bg-slate-100"
                  : "border-sky-200 bg-sky-700 text-white hover:bg-sky-600"
              }`}
            >
              Explore Basic Signs
            </Link>
          </div>
        </footer>
      )}
    </PageShell>
  );
}

function Home({ highContrast }) {
  return (
    <>
      <section className="relative overflow-hidden">
        {!highContrast && (
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.24),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_34%)]" />
        )}

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <div className="mb-5 flex flex-wrap gap-2 sm:mb-6 sm:gap-3">
              {["Inclusive communication", "Beginner-friendly", "Accessible design"].map(
                (item) => (
                  <span
                    key={item}
                    className={`max-w-full break-words rounded-full border px-3 py-1 text-xs font-bold sm:text-sm ${
                      highContrast
                        ? "border-sky-300 bg-sky-950 text-sky-100"
                        : "border-sky-200 bg-sky-50 text-sky-800"
                    }`}
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <h1 className="max-w-4xl break-words text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Learn sign language with clarity, respect, and confidence.
            </h1>

            <p
              className={`mt-5 max-w-2xl break-words text-base leading-8 sm:mt-6 sm:text-lg sm:leading-9 md:text-xl ${
                highContrast ? "text-slate-200" : "text-slate-700"
              }`}
            >
              SignBridge is a polished educational website that introduces sign language,
              Deaf culture, basic signs, learning tips, and accessibility practices through
              clear pages and beginner-friendly content.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <Link
                to="/basic-signs"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-700 px-5 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300 sm:w-auto sm:px-6 sm:py-4 sm:text-base"
              >
                Explore Basic Signs <ArrowRight size={20} />
              </Link>

              <Link
                to="/learn"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-5 py-3.5 text-sm font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-300 sm:w-auto sm:px-6 sm:py-4 sm:text-base ${
                  highContrast
                    ? "border-white/30 bg-white text-slate-950"
                    : "border-slate-300 bg-white text-slate-900"
                }`}
              >
                Start Learning <GraduationCap size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="min-w-0"
          >
            <div
              className={`rounded-3xl border p-4 shadow-2xl sm:rounded-[2rem] sm:p-5 ${
                highContrast
                  ? "border-white/20 bg-slate-900"
                  : "border-white/70 bg-white/80"
              }`}
            >
              <div
                className={`rounded-3xl p-5 sm:rounded-[1.5rem] sm:p-6 ${
                  highContrast
                    ? "bg-slate-800"
                    : "bg-gradient-to-br from-sky-100 via-white to-emerald-100"
                }`}
              >
                <p
                  className={`break-words text-xs font-bold uppercase tracking-widest sm:text-sm ${
                    highContrast ? "text-sky-300" : "text-sky-700"
                  }`}
                >
                  Today’s focus
                </p>

                <h2 className="mt-2 break-words text-2xl font-black leading-tight sm:text-3xl">
                  Accessible Conversation
                </h2>

                <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4">
                  {[
                    ["Hands", "Shape, movement, location, and direction"],
                    ["Face", "Expression, emotion, questions, and tone"],
                    ["Space", "Grammar, people, objects, and relationships"],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className={`rounded-2xl p-4 shadow-sm ${
                        highContrast ? "bg-slate-900" : "bg-white"
                      }`}
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <CheckCircle2 className="mt-1 shrink-0 text-emerald-500" />
                        <div className="min-w-0">
                          <p className="break-words font-black">{title}</p>
                          <Text highContrast={highContrast}>{text}</Text>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:gap-6 md:grid-cols-3">
          {[
            {
              icon: Accessibility,
              title: "Accessible",
              text: "Includes high-contrast mode, clear page structure, and readable layouts.",
            },
            {
              icon: BookOpen,
              title: "Informative",
              text: "Explains sign language, types, basic signs, Deaf culture, and learning steps in simple language.",
            },
            {
              icon: HeartHandshake,
              title: "Respectful",
              text: "Encourages learners to understand sign language as part of real communities and identities.",
            },
          ].map((item) => (
            <Card key={item.title} highContrast={highContrast}>
              <item.icon className="mb-4 text-sky-500" size={32} />
              <h3 className="break-words text-lg font-black sm:text-xl">
                {item.title}
              </h3>
              <Text highContrast={highContrast} className="mt-3">
                {item.text}
              </Text>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

function About({ highContrast }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionTitle
        highContrast={highContrast}
        eyebrow="Introduction"
        title="What is sign language?"
        description="Sign language is a complete visual language that uses hand shapes, movement, facial expressions, body posture, and space to communicate meaning."
      />

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
        {[
          {
            icon: BookOpen,
            title: "Not just gestures",
            text: "Sign languages have their own grammar, structure, expressions, and cultural meaning. They are not simple hand versions of spoken languages.",
          },
          {
            icon: Users,
            title: "Community-centered",
            text: "Sign language supports communication, education, friendship, identity, and belonging within Deaf and hard-of-hearing communities.",
          },
          {
            icon: HeartHandshake,
            title: "Respect matters",
            text: "Learning sign language should include respect for Deaf culture, patience with learning, and openness to correcting mistakes.",
          },
        ].map((item) => (
          <Card key={item.title} highContrast={highContrast}>
            <item.icon className="mb-4 text-sky-500" size={32} />
            <h3 className="break-words text-lg font-black sm:text-xl">
              {item.title}
            </h3>
            <Text highContrast={highContrast} className="mt-3">
              {item.text}
            </Text>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Types({ highContrast }) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionTitle
        highContrast={highContrast}
        eyebrow="Types of Sign Language"
        title="Sign language is not universal"
        description="Different countries and communities use different sign languages. Each one has its own vocabulary, grammar, history, and cultural background."
      />

      <div className="mx-auto grid max-w-7xl gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {typeCards.map((item) => (
          <Card key={item.abbr} highContrast={highContrast} className="h-full">
            <div className="mb-5 flex min-h-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 px-3 py-3 text-center text-base font-black leading-tight text-white shadow-md sm:min-h-16 sm:rounded-3xl sm:px-4 sm:py-4 sm:text-xl">
              {item.abbr}
            </div>
            <h3 className="break-words text-lg font-black sm:text-xl">
              {item.title}
            </h3>
            <Text highContrast={highContrast} className="mt-3">
              {item.desc}
            </Text>
          </Card>
        ))}
      </div>
    </section>
  );
}

function BasicSigns({ highContrast }) {
  const [query, setQuery] = useState("");

  const filteredSigns = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return signCards;

    return signCards.filter(
      (item) =>
        item.word.toLowerCase().includes(value) ||
        item.how.toLowerCase().includes(value) ||
        item.tip.toLowerCase().includes(value)
    );
  }, [query]);

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionTitle
        highContrast={highContrast}
        eyebrow="Common Signs"
        title="Basic signs for everyday communication"
        description="Use images, descriptions, and tips together. For best results, also watch trusted video demonstrations from Deaf educators."
      />

      <div className="mx-auto mb-8 max-w-2xl">
        <label htmlFor="sign-search" className="mb-2 block text-sm font-bold sm:text-base">
          Search basic signs
        </label>

        <div
          className={`flex min-w-0 items-center gap-3 rounded-2xl border px-4 py-3 shadow-sm focus-within:ring-4 focus-within:ring-sky-200 sm:rounded-3xl ${
            highContrast ? "border-white/30 bg-slate-800" : "border-slate-300 bg-white"
          }`}
        >
          <Search
            className={`shrink-0 ${highContrast ? "text-slate-200" : "text-slate-500"}`}
            size={20}
          />

          <input
            id="sign-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try: hello, thank you, help..."
            className={`min-w-0 w-full bg-transparent py-2 text-sm outline-none sm:text-base ${
              highContrast
                ? "text-white placeholder:text-slate-400"
                : "text-slate-950 placeholder:text-slate-400"
            }`}
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
        {filteredSigns.map((sign) => (
          <Card key={sign.word} highContrast={highContrast}>
            <div
              className={`mb-4 h-[22rem] overflow-hidden rounded-2xl sm:h-[26rem] md:h-[30rem] ${
                highContrast ? "bg-slate-900" : "bg-slate-100"
              }`}
            >
              <img
                src={sign.image}
                alt={sign.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-4xl sm:text-5xl" aria-hidden="true">
                {sign.icon}
              </span>

              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold sm:text-sm ${
                  highContrast
                    ? "bg-emerald-950 text-emerald-200"
                    : "bg-emerald-50 text-emerald-800"
                }`}
              >
                Beginner
              </span>
            </div>

            <h3 className="break-words text-xl font-black sm:text-2xl">
              {sign.word}
            </h3>

            <Text highContrast={highContrast} className="mt-3">
              <strong>How to sign:</strong> {sign.how}
            </Text>

            <p
              className={`mt-3 break-words rounded-2xl p-4 text-sm leading-7 sm:text-base ${
                highContrast ? "bg-slate-900 text-slate-100" : "bg-sky-50 text-sky-900"
              }`}
            >
              <strong>Tip:</strong> {sign.tip}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Learn({ highContrast }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionTitle
        highContrast={highContrast}
        eyebrow="Learning Path"
        title="How to start learning sign language"
        description="Start small, practice often, and learn from reliable visual sources. A good learning path includes vocabulary, grammar, culture, and practice."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <Card highContrast={highContrast}>
          <h3 className="mb-5 break-words text-xl font-black sm:text-2xl">
            Beginner roadmap
          </h3>

          <ol className="grid gap-4">
            {learningSteps.map((step, index) => (
              <li
                key={step}
                className={`flex min-w-0 gap-3 rounded-2xl p-4 sm:gap-4 ${
                  highContrast ? "bg-slate-900" : "bg-slate-50"
                }`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-700 text-sm font-black text-white sm:h-9 sm:w-9 sm:text-base">
                  {index + 1}
                </span>
                <span
                  className={`min-w-0 break-words text-sm leading-7 sm:text-base ${
                    highContrast ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Card>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {[
            {
              icon: Hand,
              title: "Hand shapes",
              text: "Focus on the exact shape of your fingers and palm.",
            },
            {
              icon: Smile,
              title: "Facial expression",
              text: "Use your face to show questions, emotions, and emphasis.",
            },
            {
              icon: Globe2,
              title: "Signing space",
              text: "Use space in front of your body to organize meaning.",
            },
            {
              icon: Languages,
              title: "Grammar",
              text: "Learn sentence patterns instead of translating word-for-word.",
            },
          ].map((item) => (
            <Card key={item.title} highContrast={highContrast}>
              <item.icon className="mb-4 text-sky-500" size={32} />
              <h3 className="break-words text-lg font-black sm:text-xl">
                {item.title}
              </h3>
              <Text highContrast={highContrast} className="mt-3">
                {item.text}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resources({ highContrast }) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionTitle
        highContrast={highContrast}
        eyebrow="Resources"
        title="Helpful ways to continue learning"
        description="The strongest learning comes from visual practice, community exposure, and respectful guidance from experienced signers and Deaf educators."
      />

      <div className="mx-auto grid max-w-7xl gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource) => (
          <Card key={resource.title} highContrast={highContrast}>
            <resource.icon className="mb-4 text-emerald-500" size={32} />
            <h3 className="break-words text-lg font-black sm:text-xl">
              {resource.title}
            </h3>
            <Text highContrast={highContrast} className="mt-3">
              {resource.description}
            </Text>
          </Card>
        ))}
      </div>

      <div
        className={`mx-auto mt-10 max-w-7xl overflow-hidden rounded-3xl border p-5 shadow-2xl sm:mt-12 sm:rounded-[2rem] sm:p-8 lg:p-12 ${
          highContrast
            ? "border-white/10 bg-slate-900 text-white"
            : "border-slate-200 bg-white text-slate-950"
        }`}
      >
        <div className="grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-8">
          <div className="min-w-0">
            <p
              className={`mb-3 break-words text-xs font-bold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.25em] ${
                highContrast ? "text-sky-300" : "text-sky-700"
              }`}
            >
              Final Reminder
            </p>

            <h2
              className={`break-words text-2xl font-black leading-tight sm:text-3xl md:text-5xl ${
                highContrast ? "text-white" : "text-slate-950"
              }`}
            >
              Communication becomes kinder when more people are included.
            </h2>

            <p
              className={`mt-5 max-w-3xl break-words text-sm leading-7 sm:text-lg sm:leading-9 ${
                highContrast ? "text-slate-200" : "text-slate-700"
              }`}
            >
              Start with basic signs, continue with grammar and culture, and always
              remember that sign language is connected to real people, real communities,
              and real identities.
            </p>
          </div>

          <div
            className={`rounded-3xl border p-5 sm:p-6 ${
              highContrast
                ? "border-white/10 bg-white/10"
                : "border-slate-200 bg-sky-50"
            }`}
          >
            <ShieldCheck
              className={highContrast ? "mb-4 text-emerald-300" : "mb-4 text-emerald-600"}
              size={38}
            />

            <h3
              className={`break-words text-xl font-black sm:text-2xl ${
                highContrast ? "text-white" : "text-slate-950"
              }`}
            >
              Inclusive Learning Commitment
            </h3>

            <p
              className={`mt-3 break-words text-sm leading-7 sm:text-base sm:leading-8 ${
                highContrast ? "text-slate-200" : "text-slate-700"
              }`}
            >
              This resources page is designed to support accessible and respectful learning
              by providing clear guidance, organized references, readable content, and
              practical tools for learners who want to understand sign language with
              accuracy, confidence, and cultural awareness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ highContrast }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <SectionTitle
        highContrast={highContrast}
        eyebrow="Questions"
        title="Frequently asked questions"
        description="Here are simple answers to common beginner questions about sign language and Deaf culture."
      />

      <div className="grid gap-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className={`group rounded-2xl border p-4 shadow-sm open:shadow-lg sm:rounded-3xl sm:p-6 ${
              highContrast ? "border-white/20 bg-slate-800" : "border-slate-200 bg-white"
            }`}
          >
            <summary
              className={`cursor-pointer list-none text-base font-black marker:hidden sm:text-xl ${
                highContrast ? "text-white" : "text-slate-950"
              }`}
            >
              <div className="flex min-w-0 items-center justify-between gap-4">
                <span className="min-w-0 break-words">{item.question}</span>
                <Sparkles className="shrink-0 text-sky-500 transition group-open:rotate-45" />
              </div>
            </summary>

            <Text highContrast={highContrast} className="mt-4">
              {item.answer}
            </Text>
          </details>
        ))}
      </div>
    </section>
  );
}

function NotFound({ highContrast }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
      <SectionTitle
        highContrast={highContrast}
        eyebrow="404"
        title="Page not found"
        description="The page you are looking for does not exist. You can return to the home page or explore the basic signs page."
      />

      <Link
        to="/"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-700 px-6 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-sky-600 sm:w-auto sm:text-base"
      >
        Back to Home <ArrowRight size={20} />
      </Link>
    </section>
  );
}

export default function App() {
  const [highContrast, setHighContrast] = useState(() => {
    const savedTheme = localStorage.getItem("signbridge-theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("signbridge-theme", highContrast ? "dark" : "light");
  }, [highContrast]);

  return (
    <BrowserRouter>
      <Layout highContrast={highContrast} setHighContrast={setHighContrast}>
        <Routes>
          <Route path="/" element={<Home highContrast={highContrast} />} />
          <Route path="/about" element={<About highContrast={highContrast} />} />
          <Route path="/types" element={<Types highContrast={highContrast} />} />
          <Route
            path="/basic-signs"
            element={<BasicSigns highContrast={highContrast} />}
          />
          <Route path="/learn" element={<Learn highContrast={highContrast} />} />
          <Route
            path="/resources"
            element={<Resources highContrast={highContrast} />}
          />
          <Route path="/faq" element={<FAQ highContrast={highContrast} />} />
          <Route path="*" element={<NotFound highContrast={highContrast} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}