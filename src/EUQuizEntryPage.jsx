import React, { useState } from "react";

// Place these 6 files in your project public/root folder.
// They will be loaded by the browser from /filename.png.
const quizImages = {
  prosperityScience: {
    en: "/quiz1-prosperity-village-en.png",
    fr: "/quiz1-prosperity-village-fr.png",
  },
  chooseEurope: {
    en: "/quiz2-social-fairness-village-en.png",
    fr: "/quiz2-social-fairness-village-fr.png",
  },
  ercFrontiers: {
    en: "/quiz3-social-fairness-erc-en.png",
    fr: "/quiz3-social-fairness-erc-fr.png",
  },
};

const quizzes = [
  {
    id: "prosperity-science",
    images: quizImages.prosperityScience,
    icon: "atom",
    theme: {
      en: "Science, innovation and prosperity",
      fr: "Science, innovation et prospérité",
    },
    copy: {
      en: {
        eyebrow: "Prosperity Village",
        title: "The EU stands for Science — Do You?",
        cta: "Start the English quiz",
        badge: "Science challenge",
      },
      fr: {
        eyebrow: "Village Prospérité",
        title: "L’UE mise sur la science — et vous ?",
        cta: "Lancer le quiz en français",
        badge: "Défi science",
      },
    },
    links: {
      en: "https://kahoot.it/challenge/06855606?challenge-id=2a71d7ed-52c5-47d9-a84e-ddf6d0040bd7_1778006069798",
      fr: "https://kahoot.it/challenge/03693368?challenge-id=2a71d7ed-52c5-47d9-a84e-ddf6d0040bd7_1778006046631",
    },
  },
  {
    id: "choose-europe",
    images: quizImages.chooseEurope,
    icon: "people",
    theme: {
      en: "Choose Europe",
      fr: "Choisir l’Europe",
    },
    copy: {
      en: {
        eyebrow: "Social Fairness Village",
        title: "Choose Europe!",
        cta: "Start the English quiz",
        badge: "Europe challenge",
      },
      fr: {
        eyebrow: "Village Équité sociale",
        title: "Choisir l’Europe",
        cta: "Lancer le quiz en français",
        badge: "Défi Europe",
      },
    },
    links: {
      en: "https://kahoot.it/challenge/08751377?challenge-id=2a71d7ed-52c5-47d9-a84e-ddf6d0040bd7_1777931311081",
      fr: "https://kahoot.it/challenge/06621854?challenge-id=2a71d7ed-52c5-47d9-a84e-ddf6d0040bd7_1777932155310",
    },
  },
  {
    id: "erc-frontiers",
    images: quizImages.ercFrontiers,
    icon: "compass",
    theme: {
      en: "Frontiers of science",
      fr: "Frontières de la science",
    },
    copy: {
      en: {
        eyebrow: "Social Fairness — ERC",
        title: "Ready to Explore the Frontiers of Science?",
        cta: "Start the English quiz",
        badge: "ERC discovery",
      },
      fr: {
        eyebrow: "Équité sociale — ERC",
        title: "Prêt(e) à explorer les frontières de la science ?",
        cta: "Lancer le quiz en français",
        badge: "Découverte ERC",
      },
    },
    links: {
      en: "https://kahoot.it/challenge/09519407?challenge-id=2a71d7ed-52c5-47d9-a84e-ddf6d0040bd7_1778006021611",
      fr: "https://kahoot.it/challenge/0516471?challenge-id=2a71d7ed-52c5-47d9-a84e-ddf6d0040bd7_1778005878250",
    },
  },
];

function Icon({ name, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "atom") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="1.5" />
        <path d="M20.2 12c0 2.1-3.7 3.8-8.2 3.8S3.8 14.1 3.8 12 7.5 8.2 12 8.2s8.2 1.7 8.2 3.8Z" />
        <path d="M16.1 19.1c-1.8 1.1-4.9-1.6-7.1-5.5S6.6 5.5 8.4 4.4s4.9 1.6 7.1 5.5 2.4 8.1.6 9.2Z" />
        <path d="M7.9 19.1c-1.8-1.1-1.6-5.2.6-9.2s5.3-6.6 7.1-5.5 1.6 5.2-.6 9.2-5.3 6.6-7.1 5.5Z" />
      </svg>
    );
  }

  if (name === "people") {
    return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (name === "compass") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z" />
      </svg>
    );
  }

  if (name === "external") {
    return (
      <svg {...common}>
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    );
  }

  return null;
}

function QuizCard({ quiz, lang, index }) {
  const q = quiz.copy[lang];
  const imageSrc = quiz.images[lang];

  return (
    <article
      className="group animate-cardIn relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/[0.08] shadow-2xl shadow-blue-950/30 backdrop-blur-2xl"
      style={{ animationDelay: `${0.1 + index * 0.08}s` }}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-[2rem] bg-[#004494]">
        <img
          src={imageSrc}
          alt={`${q.eyebrow} — ${q.title}`}
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051036]/45 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-[#004494]/85 text-white ring-2 ring-white/40 backdrop-blur-md">
          <Icon name={quiz.icon} className="h-5 w-5" />
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-[#004494] shadow-lg">
          {q.badge}
        </div>
      </div>

      <div className="relative flex min-h-[330px] flex-col justify-between p-7">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#FFED00]">{q.eyebrow}</p>
          <h2 className="text-3xl font-black leading-[0.95] tracking-[-0.055em] text-white md:text-4xl">
            {q.title}
          </h2>
          <p className="mt-5 text-sm font-bold leading-6 text-white/70">{quiz.theme[lang]}</p>
        </div>

        <div className="mt-8 space-y-3">
          <a
            href={quiz.links[lang]}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#FFED00] text-base font-black text-[#004494] shadow-xl shadow-yellow-500/20 transition hover:bg-white"
          >
            {q.cta}
            <Icon name="arrow" className="ml-2 h-5 w-5" />
          </a>
          <div className="flex gap-2">
            <a
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-sm font-bold text-white/85 transition hover:bg-white hover:text-[#004494]"
              href={quiz.links.en}
              target="_blank"
              rel="noreferrer"
            >
              EN <Icon name="external" className="h-4 w-4" />
            </a>
            <a
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-sm font-bold text-white/85 transition hover:bg-white hover:text-[#004494]"
              href={quiz.links.fr}
              target="_blank"
              rel="noreferrer"
            >
              FR <Icon name="external" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EUQuizEntryPage() {
  const [lang, setLang] = useState("en");

  return (
    <main className="min-h-screen overflow-hidden bg-[#051036] text-white">
      <style>{`
        @keyframes floatStar {
          0%, 100% { opacity: .18; transform: translateY(10px) scale(.72); }
          50% { opacity: .85; transform: translateY(-22px) scale(1.15); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-floatStar { animation-name: floatStar; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
        .animate-cardIn { opacity: 0; animation: cardIn .65s cubic-bezier(.16,1,.3,1) forwards; }
      `}</style>

      <section className="relative min-h-screen px-5 py-10 md:px-10 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,237,0,0.18),transparent_26%),radial-gradient(circle_at_80%_25%,rgba(0,68,148,0.55),transparent_38%),linear-gradient(135deg,#051036_0%,#004494_52%,#051036_100%)]" />
        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 26 }).map((_, index) => (
            <span
              key={index}
              className="animate-floatStar absolute text-[#FFED00]/70 drop-shadow-lg"
              style={{
                left: `${(index * 37) % 100}%`,
                top: `${(index * 19) % 100}%`,
                animationDuration: `${5 + (index % 5)}s`,
                animationDelay: `${index * 0.15}s`,
              }}
            >
              ✦
            </span>
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex justify-end">
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">
              {[
                ["en", "English"],
                ["fr", "Français"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setLang(value)}
                  className={`rounded-xl px-4 py-2 text-sm font-black transition ${
                    lang === value ? "bg-[#FFED00] text-[#004494] shadow-lg" : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <section id="quizzes" className="grid gap-5 pb-10 md:grid-cols-3">
            {quizzes.map((quiz, index) => (
              <QuizCard key={quiz.id} quiz={quiz} lang={lang} index={index} />
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
