import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BookOpen,
  BracketsCurly,
  Briefcase,
  CalendarCheck,
  ChalkboardTeacher,
  ChatCircleText,
  Check,
  Code,
  Coins,
  EnvelopeSimple,
  Gift,
  GithubLogo,
  GraduationCap,
  LinkedinLogo,
  List,
  MagicWand,
  MapPin,
  Play,
  SealCheck,
  Sparkle,
  TelegramLogo,
  UsersThree,
  VideoCamera,
  X,
} from "@phosphor-icons/react";

const EMAIL = "aminsakha2000@gmail.com";
const TELEGRAM_URL = "https://t.me/amin3379";

const copy = {
  en: {
    lang: "en",
    dir: "ltr",
    title: "Amin Sakha — Android Engineer, Educator & Practical AI",
    description:
      "Android engineer, educator, and independent builder using practical AI workflows to ship better products and teach what works.",
    nav: [
      ["Work", "work"],
      ["Teaching", "teaching"],
      ["AI", "ai"],
      ["About", "about"],
    ],
    eyebrow: "ANDROID ENGINEER · EDUCATOR · PRACTICAL AI",
    headline: (
      <>
        Building reliable products.
        <br />
        Teaching the thinking <span>behind them.</span>
      </>
    ),
    summary:
      "I design and ship Android products that last, help engineers grow through clear explanations and real-world examples, and use AI-assisted workflows every day to move faster without lowering the bar.",
    workCta: "See selected work",
    workshopCta: "AI masterclass",
    proof: [
      ["5+", "years building for Android"],
      ["700K+", "product reach"],
      ["3", "teaching platforms"],
    ],
    pillars: [
      {
        title: "Build",
        subtitle: "Reliable Android products",
        body: "Architecture, performance, media, offline systems, and product delivery—from a real brief to a real release.",
        link: "Explore work",
      },
      {
        title: "Teach",
        subtitle: "Complex ideas, made clear",
        body: "Practical Android and Kotlin education built around real projects, engineering judgment, and repeatable thinking.",
        link: "View teaching",
      },
      {
        title: "Apply AI",
        subtitle: "Speed with judgment",
        body: "AI-assisted workflows for planning, coding, research, communication, and delivery—used responsibly, every day.",
        link: "See AI practice",
      },
    ],
    workshop: {
      label: "ONE-TIME LIVE MASTERCLASS",
      title: "Practical AI for people who build",
      body: "A focused 90-minute session on turning AI tools into real workflow leverage—not another tour of prompts and products.",
      link: "View the masterclass",
    },
    sections: {
      work: {
        kicker: "SELECTED WORK",
        title: "Products, not portfolio exercises.",
        intro:
          "A few examples of ownership across consumer products, media systems, and offline-first experiences.",
      },
      teaching: {
        kicker: "TEACHING",
        title: "I teach the decisions behind the code.",
        intro:
          "Clear explanations, real projects, and enough context for students to transfer the idea to their own work.",
      },
      ai: {
        kicker: "PRACTICAL AI",
        title: "AI is useful when the workflow changes.",
        intro:
          "I use AI across engineering, teaching, research, and communication—while keeping decisions reviewable and owned.",
      },
      about: {
        kicker: "ABOUT",
        title: "Engineer. Educator. Independent builder.",
        body: "I’m Amin Sakha, an Android engineer and instructor based in Tehran. I care about reliable products, understandable systems, and teaching that survives beyond the classroom. MetroYar sharpened my product instincts; years of production work and teaching shaped how I explain, decide, and deliver.",
      },
    },
    projects: [
      {
        tag: "INDEPENDENT PRODUCT",
        title: "MetroYar",
        body: "An offline-first Tehran metro companion I took from architecture and product design through release and store growth.",
        facts: ["50K+ users", "Offline routing", "End-to-end ownership"],
      },
      {
        tag: "PRODUCTION MEDIA",
        title: "Parande & Vidzy",
        body: "Performance, modular architecture, downloads, and media playback across products reaching more than 700K users.",
        facts: ["Media3", "Jetpack Compose", "Production reliability"],
      },
    ],
    teachingItems: [
      ["Maktabkhooneh", "22-hour Android with Kotlin course"],
      ["Sokan Academy", "Kotlin education and technical content"],
      ["Mojtama Fanni", "Android, Kotlin, and Jetpack Compose instructor"],
    ],
    aiItems: [
      ["Think", "Research, compare, challenge assumptions, and make better decisions."],
      ["Build", "Plan, code, review, test, and document with a faster feedback loop."],
      ["Communicate", "Turn complex work into clear explanations, briefs, and useful artifacts."],
    ],
    resume: "Download résumé",
    contact: "Start a conversation",
    footer: "Android Engineering · Teaching · Practical AI",
  },
  fa: {
    lang: "fa",
    dir: "rtl",
    title: "امین سخا — مهندس اندروید، مدرس و متخصص AI کاربردی",
    description:
      "وب‌سایت شخصی امین سخا؛ مهندس اندروید، مدرس و سازنده محصول با تمرکز بر استفاده عملی از هوش مصنوعی.",
    nav: [
      ["پروژه‌ها", "work"],
      ["تدریس", "teaching"],
      ["هوش مصنوعی", "ai"],
      ["درباره من", "about"],
    ],
    eyebrow: "مهندس اندروید · مدرس · هوش مصنوعی کاربردی",
    headline: (
      <>
        محصول قابل‌اعتماد می‌سازم.
        <br />
        منطق پشت آن را <span>آموزش می‌دهم.</span>
      </>
    ),
    summary:
      "محصولات واقعی اندروید را طراحی و منتشر می‌کنم، مفاهیم پیچیده را با مثال‌های واقعی آموزش می‌دهم و هر روز از AI برای سریع‌تر و دقیق‌تر شدن کار استفاده می‌کنم؛ بدون اینکه کیفیت قربانی سرعت شود.",
    workCta: "دیدن پروژه‌ها",
    workshopCta: "مسترکلاس AI",
    proof: [
      ["+۵", "سال ساخت محصول اندروید"],
      ["+۷۰۰هزار", "مخاطب محصولات"],
      ["۳", "پلتفرم آموزشی"],
    ],
    pillars: [
      {
        title: "ساخت محصول",
        subtitle: "اندروید قابل‌اعتماد",
        body: "معماری، پرفورمنس، مدیا، سیستم‌های آفلاین و رساندن یک نیاز واقعی از ایده تا انتشار.",
        link: "مشاهده پروژه‌ها",
      },
      {
        title: "تدریس",
        subtitle: "ساده‌کردن مفاهیم پیچیده",
        body: "آموزش کاربردی اندروید و کاتلین با پروژه واقعی، منطق مهندسی و دانشی که قابل انتقال به مسئله‌های جدید باشد.",
        link: "مشاهده سابقه تدریس",
      },
      {
        title: "استفاده از AI",
        subtitle: "سرعت همراه با قضاوت",
        body: "ورک‌فلوهای عملی AI برای برنامه‌ریزی، کدنویسی، تحقیق، ارتباطات و تحویل بهتر کار.",
        link: "دیدن کاربردهای AI",
      },
    ],
    workshop: {
      label: "مسترکلاس زنده و یک‌باره",
      title: "هوش مصنوعی کاربردی برای آدم‌هایی که کار واقعی انجام می‌دهند",
      body: "یک جلسه فشرده ۹۰ دقیقه‌ای برای تبدیل ابزارهای AI به مزیت واقعی در کار؛ نه معرفی پشت‌سرهم ابزار و پرامپت.",
      link: "مشاهده مسترکلاس",
    },
    sections: {
      work: {
        kicker: "پروژه‌های منتخب",
        title: "محصول واقعی، نه تمرین پورتفولیو.",
        intro: "نمونه‌هایی از مسئولیت‌پذیری محصولی در اپلیکیشن‌های مصرفی، مدیا و تجربه‌های آفلاین.",
      },
      teaching: {
        kicker: "تدریس",
        title: "فقط کد را آموزش نمی‌دهم؛ دلیل تصمیم‌ها را توضیح می‌دهم.",
        intro: "توضیح شفاف، پروژه واقعی و زمینه‌ای که کمک کند دانشجو ایده را در مسئله خودش به‌کار بگیرد.",
      },
      ai: {
        kicker: "هوش مصنوعی کاربردی",
        title: "AI وقتی ارزشمند است که روش کار را تغییر دهد.",
        intro: "از AI در مهندسی، تدریس، تحقیق و ارتباطات استفاده می‌کنم؛ با تصمیم‌های قابل بررسی و مسئولیت انسانی.",
      },
      about: {
        kicker: "درباره من",
        title: "مهندس، مدرس و سازنده مستقل.",
        body: "من امین سخا، مهندس اندروید و مدرس ساکن تهران هستم. محصول قابل‌اعتماد، سیستم قابل‌فهم و آموزشی برایم مهم است که اثرش بعد از کلاس هم باقی بماند. ساخت MetroYar نگاه محصولی‌ام را شکل داد و سال‌ها کار در محصول واقعی و تدریس، روش تصمیم‌گیری و ارائه‌ام را ساخته است.",
      },
    },
    projects: [
      {
        tag: "محصول مستقل",
        title: "MetroYar",
        body: "همراه آفلاین متروی تهران که معماری، طراحی محصول، انتشار و رشد آن را از ابتدا تا انتها مدیریت کرده‌ام.",
        facts: ["+۵۰هزار کاربر", "مسیریابی آفلاین", "مالکیت کامل محصول"],
      },
      {
        tag: "مدیای واقعی در مقیاس بالا",
        title: "پرنده و Vidzy",
        body: "پرفورمنس، معماری ماژولار، دانلود و پخش مدیا در محصولاتی با بیش از ۷۰۰هزار مخاطب.",
        facts: ["Media3", "Jetpack Compose", "پایداری محصول"],
      },
    ],
    teachingItems: [
      ["مکتب‌خونه", "دوره ۲۲ ساعته برنامه‌نویسی اندروید با کاتلین"],
      ["سکان آکادمی", "آموزش کاتلین و محتوای فنی"],
      ["مجتمع فنی", "مدرس اندروید، کاتلین و Jetpack Compose"],
    ],
    aiItems: [
      ["فکرکردن", "تحقیق، مقایسه، به‌چالش‌کشیدن فرض‌ها و تصمیم‌گیری بهتر."],
      ["ساختن", "برنامه‌ریزی، کدنویسی، بازبینی، تست و مستندسازی با حلقه بازخورد سریع‌تر."],
      ["ارتباط", "تبدیل کار پیچیده به توضیح، بریف و خروجی قابل‌استفاده."],
    ],
    resume: "دانلود رزومه",
    contact: "شروع گفتگو",
    footer: "مهندسی اندروید · تدریس · هوش مصنوعی کاربردی",
  },
};

function Arrow({ rtl = false }) {
  const Icon = rtl ? ArrowLeft : ArrowRight;
  return <Icon size={18} weight="bold" aria-hidden="true" />;
}

function LanguageSwitch({ lang, campaign = false }) {
  const hash = campaign ? "" : window.location.hash;
  const enHref = campaign ? "/#ai" : `/${hash}`;
  const faHref = campaign ? "/ai/" : `/fa/${hash}`;
  return (
    <div className="language-switch" aria-label="Language selector">
      <a href={enHref} lang="en" className={lang === "en" ? "active" : ""}>
        EN
      </a>
      <span aria-hidden="true">/</span>
      <a href={faHref} lang="fa" className={lang === "fa" ? "active" : ""}>
        FA
      </a>
    </div>
  );
}

function Header({ lang, nav, campaign = false }) {
  const [open, setOpen] = useState(false);
  const rtl = lang === "fa";
  const home = rtl ? "/fa/" : "/";
  const cta = campaign ? "ثبت‌نام" : rtl ? "مسترکلاس AI" : "AI masterclass";
  const ctaHref = campaign ? "#register" : "/ai/";

  return (
    <header className="site-header">
      <a className="brand" href={home} aria-label={rtl ? "صفحه اصلی امین سخا" : "Amin Sakha home"}>
        <span className="brand-mark" aria-hidden="true">AS</span>
        <strong>Amin Sakha</strong>
      </a>
      {!campaign && (
        <nav className={open ? "main-nav open" : "main-nav"} aria-label={rtl ? "منوی اصلی" : "Primary navigation"}>
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
      <div className="header-actions">
        <LanguageSwitch lang={lang} campaign={campaign} />
        <a className="button button-small" href={ctaHref}>{cta}<Arrow rtl={rtl} /></a>
        {!campaign && (
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={rtl ? "بازکردن منو" : "Open menu"}>
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        )}
      </div>
    </header>
  );
}

function SectionHeading({ kicker, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function HomePage({ lang }) {
  const t = copy[lang];
  const rtl = lang === "fa";
  const PillarIcons = [Code, BookOpen, MagicWand];

  useEffect(() => {
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    document.title = t.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.description);
  }, [t]);

  return (
    <div className="site-shell">
      <Header lang={lang} nav={t.nav} />
      <main>
        <section className="hero section" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.headline}</h1>
            <p className="hero-summary">{t.summary}</p>
            <div className="button-row">
              <a className="button" href="#work">{t.workCta}<Arrow rtl={rtl} /></a>
              <a className="button button-ghost" href="/ai/">{t.workshopCta}<Arrow rtl={rtl} /></a>
            </div>
            <div className="proof-row" aria-label={rtl ? "خلاصه سوابق" : "Experience highlights"}>
              {t.proof.map(([value, label]) => (
                <div key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>
          <figure className="hero-photo">
            <img src="/images/amin-headshot.webp" alt={rtl ? "پرتره واقعی امین سخا" : "Amin Sakha"} />
          </figure>
        </section>

        <section className="pillar-section section" aria-label={rtl ? "حوزه‌های فعالیت" : "What I do"}>
          <div className="pillar-grid">
            {t.pillars.map((pillar, index) => {
              const Icon = PillarIcons[index];
              const target = ["work", "teaching", "ai"][index];
              return (
                <article className="pillar" key={pillar.title}>
                  <Icon size={31} weight="duotone" aria-hidden="true" />
                  <h2>{pillar.title}</h2>
                  <strong>{pillar.subtitle}</strong>
                  <p>{pillar.body}</p>
                  <a href={`#${target}`}>{pillar.link}<Arrow rtl={rtl} /></a>
                </article>
              );
            })}
            <article className="workshop-card">
              <p className="eyebrow">{t.workshop.label}</p>
              <h2>{t.workshop.title}</h2>
              <p>{t.workshop.body}</p>
              <a href="/ai/">{t.workshop.link}<Arrow rtl={rtl} /></a>
              <img src="/images/amin-context.webp" alt="" />
            </article>
          </div>
        </section>

        <section className="work-section section section-spaced" id="work">
          <SectionHeading {...t.sections.work} />
          <div className="project-grid">
            <article className="project project-featured">
              <div className="project-copy">
                <p className="eyebrow">{t.projects[0].tag}</p>
                <h3>{t.projects[0].title}</h3>
                <p>{t.projects[0].body}</p>
                <ul>{t.projects[0].facts.map((fact) => <li key={fact}><Check size={17} weight="bold" />{fact}</li>)}</ul>
              </div>
              <img src="/portfolio/metro/metroyar-route.jpg" alt={rtl ? "نمای اپلیکیشن مترویار" : "MetroYar app route screen"} />
            </article>
            <article className="project project-compact">
              <p className="eyebrow">{t.projects[1].tag}</p>
              <h3>{t.projects[1].title}</h3>
              <p>{t.projects[1].body}</p>
              <ul>{t.projects[1].facts.map((fact) => <li key={fact}><Check size={17} weight="bold" />{fact}</li>)}</ul>
            </article>
          </div>
        </section>

        <section className="teaching-section section section-spaced" id="teaching">
          <SectionHeading {...t.sections.teaching} />
          <div className="teaching-list">
            {t.teachingItems.map(([place, detail], index) => (
              <article key={place}>
                <span>0{index + 1}</span>
                <div><h3>{place}</h3><p>{detail}</p></div>
                <GraduationCap size={30} weight="duotone" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="ai-section section section-spaced" id="ai">
          <SectionHeading {...t.sections.ai} />
          <div className="ai-grid">
            {t.aiItems.map(([title, body], index) => {
              const Icon = [Sparkle, BracketsCurly, Briefcase][index];
              return <article key={title}><Icon size={30} weight="duotone" /><h3>{title}</h3><p>{body}</p></article>;
            })}
          </div>
          <a className="masterclass-banner" href="/ai/">
            <div><p className="eyebrow">{t.workshop.label}</p><h3>{t.workshop.title}</h3></div>
            <span>{t.workshop.link}<Arrow rtl={rtl} /></span>
          </a>
        </section>

        <section className="about-section section section-spaced" id="about">
          <div className="about-photo"><img src="/images/amin-context.webp" alt={rtl ? "امین سخا" : "Amin Sakha in Tehran"} /></div>
          <div className="about-copy">
            <SectionHeading kicker={t.sections.about.kicker} title={t.sections.about.title} />
            <p>{t.sections.about.body}</p>
            <div className="about-actions">
              <a href="/portfolio/amin-sakha-resume.pdf" download>{t.resume}<Arrow rtl={rtl} /></a>
              <a href={`mailto:${EMAIL}`}>{t.contact}<Arrow rtl={rtl} /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer t={t} rtl={rtl} />
    </div>
  );
}

function Footer({ t, rtl }) {
  return (
    <footer className="footer section">
      <div><strong>Amin Sakha</strong><p>{t.footer}</p></div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/aminsakha/" target="_blank" rel="noreferrer"><LinkedinLogo size={22} weight="fill" />LinkedIn</a>
        <a href="https://github.com/aminsakha" target="_blank" rel="noreferrer"><GithubLogo size={22} weight="fill" />GitHub</a>
        <a href={`mailto:${EMAIL}`}><EnvelopeSimple size={22} weight="fill" />Email</a>
      </div>
      <a className="back-top" href="#top">{rtl ? "بازگشت به بالا" : "Back to top"}<ArrowUp size={18} weight="bold" /></a>
    </footer>
  );
}

function CampaignPage() {
  const [copied, setCopied] = useState(false);

  const experience = [
    {
      company: "Dotin · Kidzy",
      role: "Senior Android Engineer",
      period: "۱۴۰۴ تا امروز",
      body: "روی Parande و Vidzy کار می‌کنم؛ محصولاتی با بیش از ۷۰۰هزار مخاطب. تمرکزم روی پرفورمنس، پایداری، معماری ماژولار، Compose و Media3 است.",
      tags: ["+۷۰۰هزار مخاطب", "پرفورمنس", "Media3"],
    },
    {
      company: "Didimoon",
      role: "Lead Mobile Developer",
      period: "۱۴۰۳ تا ۱۴۰۴",
      body: "تجربه‌های VOD و UGC را با Compose، Media3 و FFmpeg توسعه دادم و روی CI/CD و پایه‌های KMM هم کار کردم.",
      tags: ["VOD", "Compose", "FFmpeg"],
    },
    {
      company: "Finto",
      role: "Android Developer",
      period: "۱۴۰۳",
      body: "بخش‌هایی از یک اپ قدیمی Java را به Kotlin و Compose Multiplatform منتقل کردم و درگیر Bluetooth، دوربین و سرویس‌های پس‌زمینه بودم.",
      tags: ["Kotlin", "CMP", "سخت‌افزار"],
    },
    {
      company: "MetroYar",
      role: "Founder & Android Engineer",
      period: "۱۴۰۲ تا امروز",
      body: "یک محصول آفلاین را از ایده و معماری تا انتشار، رشد و پشتیبانی جلو بردم؛ با بیش از ۵۰هزار کاربر در مارکت‌ها.",
      tags: ["+۵۰هزار کاربر", "Offline-first", "مالکیت محصول"],
    },
    {
      company: "Danesh Rayan",
      role: "Android Developer",
      period: "۱۴۰۱ تا ۱۴۰۲",
      body: "یک کلاینت سازمانی BPMS را از Java و XML به Kotlin و Compose نزدیک کردم و کنار توسعه، منتورینگ اعضای جوان‌تر تیم را هم داشتم.",
      tags: ["Enterprise", "Compose", "Mentoring"],
    },
    {
      company: "پارک علم و فناوری شهید بهشتی",
      role: "Android Developer",
      period: "۱۳۹۹ تا ۱۴۰۱",
      body: "روی محصولات دسترس‌پذیری، OCR، عصای هوشمند و اپ‌های متصل به سخت‌افزار کار کردم؛ جایی که خطا واقعاً هزینه داشت.",
      tags: ["Accessibility", "OCR", "Hardware"],
    },
  ];

  useEffect(() => {
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.title = "مسترکلاس ۹۰ دقیقه‌ای هوش مصنوعی کاربردی — امین سخا";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "مسترکلاس زنده امین سخا در Google Meet؛ در ۹۰ دقیقه یاد بگیر چطور با AI یک هفته کار را به یک روز تبدیل کنی، با مثال واقعی و ورک‌فلو قابل تکرار.");
  }, []);

  const copyMessage = async () => {
    const message = "سلام، برای ثبت‌نام مسترکلاس ۹۰ دقیقه‌ای AI پیام می‌دم.\nنام و نام خانوادگی: ...\nکد معرفی (اگر دارم): ...";
    const legacyCopy = () => {
      const field = document.createElement("textarea");
      field.value = message;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const succeeded = document.execCommand("copy");
      field.remove();
      return succeeded;
    };

    try {
      const clipboard = globalThis.navigator?.clipboard;
      if (clipboard?.writeText && window.isSecureContext) {
        await clipboard.writeText.call(clipboard, message);
        setCopied(true);
      } else {
        setCopied(legacyCopy());
      }
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(legacyCopy());
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="site-shell campaign-shell">
      <Header lang="fa" nav={[]} campaign />
      <main>
        <section className="campaign-hero section" id="top">
          <div className="campaign-hero-copy">
            <p className="eyebrow">مسترکلاس زنده در Google Meet · فقط یک‌بار</p>
            <h1>در ۹۰ دقیقه یاد بگیر چطور با AI یک هفته کار را به یک روز تبدیل کنی.</h1>
            <p>اگه از AI استفاده می‌کنی ولی هنوز هر بار باید از صفر شروع کنی و تهش هم معلوم نیست خروجی خوب درمیاد یا نه، این جلسه دقیقاً برای همینه. قرار نیست ۹۰ دقیقه اسم ابزار حفظ کنیم؛ با هم یک کار واقعی رو از مسئله تا خروجی جلو می‌بریم.</p>
            <div className="campaign-meta">
              <span><Play size={20} weight="fill" />جمعه · ۱۱:۰۰ تا ۱۲:۳۰</span>
              <span><VideoCamera size={20} weight="fill" />آنلاین و زنده در Google Meet</span>
            </div>
            <div className="campaign-price">
              <span>هزینه ثبت‌نام</span>
              <strong>۲٬۹۹۰٬۰۰۰ تومان</strong>
              <small>با کد معرفی ۱۰٪ کمتر: ۲٬۶۹۱٬۰۰۰ تومان</small>
              <a href="#referral">کد معرفی چطور هزینه خودم رو هم کم می‌کنه؟</a>
            </div>
            <div className="button-row">
              <a className="button" href="#register">می‌خوام ثبت‌نام کنم<Arrow rtl /></a>
              <a className="button button-ghost" href="#agenda">اول برنامه رو ببینم<Arrow rtl /></a>
            </div>
          </div>
          <figure className="campaign-photo">
            <img src="/images/amin-teaching.jpg" alt="امین سخا در حال تدریس" />
            <figcaption>تجربه واقعی، توضیح ساده، مثال قابل استفاده</figcaption>
          </figure>
        </section>

        <section className="campaign-proof section">
          <article><Play size={23} weight="fill" /><div><strong>۹۰ دقیقه</strong><span>فشرده، زنده و بدون حاشیه</span></div></article>
          <article><VideoCamera size={23} weight="fill" /><div><strong>Google Meet</strong><span>آنلاین و تعاملی</span></div></article>
          <article><TelegramLogo size={23} weight="fill" /><div><strong>کانال اختصاصی</strong><span>نکات و محتوای تکمیلی</span></div></article>
          <article><CalendarCheck size={23} weight="fill" /><div><strong>فقط یک‌بار</strong><span>برگزاری زنده</span></div></article>
        </section>

        <section className="student-origin section" aria-labelledby="student-origin-title">
          <Sparkle size={31} weight="fill" aria-hidden="true" />
          <div>
            <p className="eyebrow">این مسترکلاس از یک درخواست واقعی شروع شد</p>
            <h2 id="student-origin-title">دانشجوهام مدت‌ها می‌گفتن این روش کار با AI رو یک‌جا آموزش بده؛ بالاخره تصمیم گرفتم انجامش بدم.</h2>
            <p>به درخواست دانشجوهای عزیزی که همیشه مشتاق یادگرفتن و همین‌طور همکارهایی که نتیجه کارم با AI رو از نزدیک دیده بودن، تجربه‌ای رو که هر روز واقعاً ازش استفاده می‌کنم توی یک جلسه فشرده جمع کردم؛ ساده، مستقیم و با مثال واقعی.</p>
          </div>
        </section>

        <section className="campaign-section section" id="outcomes">
          <SectionHeading kicker="ته این جلسه چی گیرت میاد؟" title="قرار نیست فقط با چند تا ابزار جدید برگردی؛ باید روش کارت عوض بشه." intro="هدف اینه که دفعه بعد برای یک کار جدی سراغ AI رفتی، بدونی دقیقاً از کجا شروع کنی، چطور جلو بری و کجا خروجی رو زیر سؤال ببری." />
          <div className="outcome-grid">
            {[
              ["خروجی شانسی؟ نه.", "یاد می‌گیری مسئله و اطلاعات زمینه‌ای رو جوری بچینی که AI جواب عمومی و بی‌مصرف تحویلت نده."],
              ["یک روند قابل تکرار", "تحقیق، تولید، نقد و اصلاح رو به یک ورک‌فلو وصل می‌کنی؛ روندی که برای کار بعدی هم قابل استفاده است."],
              ["خروجی قابل اعتماد", "می‌فهمی کجا باید به AI شک کنی، چطور جوابش رو بررسی کنی و کیفیت نهایی رو دست خودت نگه داری."],
            ].map(([title, body], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </section>

        <section className="campaign-section section" id="agenda">
          <SectionHeading kicker="قراره چه کار کنیم؟" title="اول می‌فهمیم مشکل کجاست، بعد زنده حلش می‌کنیم." intro="بخش اصلی جلسه ارائه خشک نیست؛ یک ورک‌فلو رو جلوی خودت می‌سازم تا منطق تصمیم‌ها رو هم ببینی، نه فقط نتیجه آخر رو." />
          <ol className="agenda-list">
            <li><time>۱۰ دقیقه</time><div><strong>چرا بیشتر خروجی‌ها متوسط از آب درمیاد؟</strong><p>اشتباه‌های رایجی که باعث می‌شن AI فقط جواب خوشگل بده، نه جواب به‌دردبخور.</p></div></li>
            <li><time>۵۵ دقیقه</time><div><strong>یک کار واقعی رو زنده جلو می‌بریم</strong><p>از تعریف مسئله و دادن زمینه تا ساخت خروجی، نقدکردن و اصلاحش.</p></div></li>
            <li><time>۱۵ دقیقه</time><div><strong>همین روش برای کد، دیزاین و بیزینس</strong><p>می‌بینیم چطور منطق ثابت می‌مونه ولی ورودی و معیار بررسی برای هر حوزه عوض می‌شه.</p></div></li>
            <li><time>۱۰ دقیقه</time><div><strong>سؤال‌های خودتون</strong><p>هر چیزی که هنوز مبهمه یا به کار خودت مربوطه رو مستقیم می‌پرسی.</p></div></li>
          </ol>
        </section>

        <section className="referral-section section" id="referral">
          <div className="referral-intro">
            <p className="eyebrow">کد معرفی</p>
            <span className="referral-badge"><UsersThree size={18} weight="fill" />هر دو نفر ۱۰٪ سود می‌کنن</span>
            <h2>دوستت ارزون‌تر میاد؛ هزینه خودت هم با هر معرفی کمتر می‌شه.</h2>
            <p>لازم نیست اول دوره رو بخری. از ادمین یک کد بگیر، برای دوستات بفرست و به‌ازای هر ثبت‌نام موفق، ۳۰۰هزار تومان اعتبار برای خودت جمع کن.</p>
          </div>
          <div className="referral-highlight">
            <Gift size={32} weight="fill" />
            <span>مثال خیلی ساده</span>
            <strong>۱۰ معرفی موفق = ۳ میلیون تومان اعتبار</strong>
            <p>یعنی هزینه ۲٬۹۹۰٬۰۰۰ تومانی مسترکلاس کامل پوشش داده می‌شه و عملاً رایگان شرکت می‌کنی.</p>
          </div>
          <div className="referral-benefits">
            <article><UsersThree size={24} weight="fill" /><span>سود دوستت</span><strong>۱۰٪ تخفیف</strong><p>به‌جای ۲٬۹۹۰٬۰۰۰ تومان، با کد تو ۲٬۶۹۱٬۰۰۰ تومان پرداخت می‌کنه.</p></article>
            <article><Coins size={24} weight="fill" /><span>سود خودت</span><strong>۳۰۰هزار تومان</strong><p>برای هر پرداخت تأییدشده، این مبلغ به اعتبار معرفی‌های تو اضافه می‌شه.</p></article>
          </div>
          <div className="referral-steps">
            <p><strong>۱</strong>کد معرفی را از ادمین بگیر و برای دوستانت بفرست.</p>
            <p><strong>۲</strong>دوستت موقع ثبت‌نام کد رو اعلام می‌کنه و ۱۰٪ کمتر پرداخت می‌کنه.</p>
            <p><strong>۳</strong>به محض تأیید پرداختش، ۳۰۰هزار تومان برای تو ثبت می‌شه.</p>
          </div>
          <div className="referral-rules">
            <div><p className="eyebrow">قوانین شفاف معرفی</p><h3>قبل از فرستادن کد این چند مورد رو بدون.</h3></div>
            <ul>
              <li><Check size={18} weight="bold" />گرفتن کد رایگانه و حتی قبل از ثبت‌نام خودت هم می‌تونی کد داشته باشی.</li>
              <li><Check size={18} weight="bold" />کد باید قبل از پرداختِ دوستت به ادمین اعلام بشه؛ بعد از پرداخت قابل اضافه‌کردن نیست.</li>
              <li><Check size={18} weight="bold" />هر نفر فقط می‌تونه از یک کد استفاده کنه و معرفی خودت با کد خودت حساب نمی‌شه.</li>
              <li><Check size={18} weight="bold" />معرفی موفق یعنی پرداخت دوستت توسط ادمین تأیید شده باشه.</li>
              <li><Check size={18} weight="bold" />اعتبارها تا پوشش کامل هزینه ثبت‌نامت جمع می‌شن؛ اگر قبلاً پرداخت کردی، تسویه از طریق ادمین هماهنگ می‌شه.</li>
            </ul>
          </div>
        </section>

        <section className="campaign-section experience-section section" id="experience">
          <SectionHeading kicker="این تجربه از کجا اومده؟" title="از بیشتر از ۵ سال کار روی محصول واقعی؛ نه فقط بازی‌کردن با چند تا ابزار AI." intro="من چیزهایی رو می‌گم که وسط پروژه، کلاس، ددلاین و تصمیم واقعی به کارم اومدن. این هم خلاصه مسیریه که پشت این مسترکلاس قرار داره." />
          <div className="experience-grid">
            {experience.map((item) => (
              <article className="experience-card" key={item.company}>
                <header><div><span>{item.company}</span><h3>{item.role}</h3></div><time>{item.period}</time></header>
                <p>{item.body}</p>
                <div className="experience-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="teaching-proof">
            <ChalkboardTeacher size={34} weight="fill" />
            <div><span>در کنارش، سال‌هاست تدریس می‌کنم</span><strong>مکتب‌خونه · سکان آکادمی · مجتمع فنی</strong><p>پس فقط انجام‌دادن کار مهم نیست؛ بلدم منطق پشتش رو ساده، مرتب و قابل استفاده توضیح بدم.</p></div>
          </div>
        </section>

        <section className="campaign-section section audience-section">
          <SectionHeading kicker="این جلسه به درد چه کسی می‌خوره؟" title="اگر کار فکری انجام می‌دی و از AI خروجی واقعی می‌خوای، احتمالاً جای درستی اومدی." intro="لازم نیست برنامه‌نویس باشی یا از قبل صد تا ابزار بلد باشی؛ مهم اینه که یک کار واقعی داشته باشی که می‌خوای بهتر و سریع‌تر انجامش بدی." />
          <div className="audience-grid">
            {["برنامه‌نویس و مهندس", "طراح و تولیدکننده محتوا", "مدیر، فریلنسر و صاحب کسب‌وکار", "دانشجو و مدرس"].map((item) => <span key={item}><Check size={19} weight="bold" />{item}</span>)}
          </div>
        </section>

        <section className="campaign-section section logistics-section">
          <SectionHeading kicker="بعد از ثبت‌نام چی می‌شه؟" title="همه‌چیز از تلگرام هماهنگ می‌شه؛ جلسه هم روی Google Meet برگزار می‌شه." />
          <div className="logistics-grid">
            <article><span>۱</span><ChatCircleText size={27} weight="fill" /><h3>به ادمین پیام می‌دی</h3><p>نامت و کد معرفی رو می‌فرستی، اطلاعات کارت‌به‌کارت رو می‌گیری و پرداختت تأیید می‌شه.</p></article>
            <article><span>۲</span><TelegramLogo size={27} weight="fill" /><h3>وارد کانال اختصاصی می‌شی</h3><p>اطلاعیه‌ها، نکات آماده‌سازی و محتوای تکمیلی مسترکلاس داخل همین کانال برات ارسال می‌شه.</p></article>
            <article><span>۳</span><VideoCamera size={27} weight="fill" /><h3>لینک Google Meet رو می‌گیری</h3><p>لینک جلسه داخل کانال قرار می‌گیره و جمعه از ساعت ۱۱ تا ۱۲:۳۰ به‌صورت زنده کنار هم هستیم.</p></article>
          </div>
        </section>

        <section className="register-section section" id="register">
          <div>
            <p className="eyebrow">ثبت‌نام</p>
            <h2>اگه می‌خوای این بار AI از یک ابزار جذاب تبدیل بشه به بخشی از روش کارت، از تلگرام پیام بده.</h2>
            <p>ثبت‌نام با کارت‌به‌کارت انجام می‌شه. اگه کد معرفی داری، همون اول داخل پیامت بنویس تا تخفیف ۱۰٪ برات حساب بشه.</p>
            <div className="register-note"><SealCheck size={20} weight="fill" />بعد از تأیید پرداخت، مستقیم وارد کانال اختصاصی شرکت‌کننده‌ها می‌شی.</div>
          </div>
          <div className="register-actions">
            <a className="button button-light" href={TELEGRAM_URL} target="_blank" rel="noreferrer"><TelegramLogo size={20} weight="fill" />پیام به @amin3379</a>
            <button className="button button-ghost" type="button" onClick={copyMessage}>{copied ? "متن کپی شد" : "کپی متن ثبت‌نام"}</button>
          </div>
        </section>
      </main>
      <Footer t={copy.fa} rtl />
    </div>
  );
}

export function App() {
  const path = window.location.pathname;
  if (path.startsWith("/ai")) return <CampaignPage />;
  return <HomePage lang={path.startsWith("/fa") ? "fa" : "en"} />;
}
