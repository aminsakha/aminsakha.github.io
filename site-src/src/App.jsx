import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BookOpen,
  BracketsCurly,
  Briefcase,
  CalendarCheck,
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
  UserCircle,
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
  const ctaHref = campaign ? TELEGRAM_URL : "/ai/";

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
        <a className="button button-small" href={ctaHref} target={campaign ? "_blank" : undefined} rel={campaign ? "noreferrer" : undefined}>{cta}<Arrow rtl={rtl} /></a>
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
    },
    {
      company: "Didimoon",
      role: "Lead Mobile Developer",
      period: "۱۴۰۳ تا ۱۴۰۴",
    },
    {
      company: "Finto",
      role: "Android Developer",
      period: "۱۴۰۳",
    },
    {
      company: "MetroYar",
      role: "Founder & Android Engineer",
      period: "۱۴۰۲ تا امروز",
    },
    {
      company: "Danesh Rayan",
      role: "Android Developer",
      period: "۱۴۰۱ تا ۱۴۰۲",
    },
    {
      company: "پارک علم و فناوری شهید بهشتی",
      role: "Android Developer",
      period: "۱۳۹۹ تا ۱۴۰۱",
    },
  ];

  const teaching = [
    {
      platform: "مکتب‌خونه",
      title: "آموزش اندروید از پایه تا پیشرفته",
      body: "یک دوره جامع و پروژه‌محور؛ از Kotlin تا ساخت اپلیکیشن واقعی. نزدیک ۹۰۰ دانشجو و امتیاز ۴٫۶ از ۵.",
      fact: "۲۲ ساعت ویدئو · نزدیک ۹۰۰ دانشجو",
      href: "https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%D9%BE%D8%A7%DB%8C%D9%87-%D9%BE%DB%8C%D8%B4%D8%B1%D9%81%D8%AA%D9%87-mk2113/",
      cta: "دیدن دوره در مکتب‌خونه",
    },
    {
      platform: "سکان آکادمی",
      title: "دوره آموزش زبان برنامه‌نویسی Kotlin",
      body: "آموزش قدم‌به‌قدم زبانی که پایه توسعه مدرن اندرویده؛ با تمرکز روی فهمیدن منطق، نه حفظ‌کردن سینتکس.",
      fact: "۷ ساعت و ۵۰ دقیقه آموزش ویدیویی",
      href: "https://sokanac.ir/ktQ",
      cta: "دیدن دوره در سکان",
    },
    {
      platform: "مجتمع فنی تهران",
      title: "مدرس Kotlin، Android و Jetpack Compose",
      body: "تجربه تدریس حضوری و آنلاین در شعب ونک و نارمک؛ جایی که سؤال‌های واقعی دانشجوها بخشی از خود کلاس بوده.",
      fact: "۳۵۰ ساعت آموزش حضوری",
      href: "https://mftplus.com/",
      cta: "دیدن مجتمع فنی تهران",
    },
  ];

  useEffect(() => {
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.title = "مسترکلاس ۹۰ دقیقه‌ای هوش مصنوعی کاربردی — امین سخا";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "مسترکلاس زنده امین سخا در Google Meet؛ آشنایی با ابزارهای به‌روز AI، روش درست دستور دادن و ساخت خروجی حرفه‌ای با مثال واقعی در ۹۰ دقیقه.");
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
            <p className="campaign-tagline">از یک درخواست ساده تا یک خروجی حرفه‌ای</p>
            <p>اگه از AI استفاده می‌کنی ولی هنوز هر بار باید از صفر شروع کنی و تهش هم معلوم نیست خروجی خوب درمیاد یا نه، این جلسه دقیقاً برای همینه. قرار نیست ۹۰ دقیقه اسم ابزار حفظ کنیم؛ با هم یک کار واقعی رو از مسئله تا خروجی جلو می‌بریم.</p>
            <div className="campaign-meta">
              <span><Play size={20} weight="fill" />جمعه · ۱۱:۰۰ تا ۱۲:۳۰</span>
              <span><VideoCamera size={20} weight="fill" />آنلاین و زنده در Google Meet</span>
            </div>
            <div className="campaign-price">
              <span>هزینه ثبت‌نام</span>
              <div className="campaign-price-offer">
                <del>۱٬۹۹۰٬۰۰۰ تومان</del>
                <b>۱ میلیون تومان تخفیف</b>
              </div>
              <strong>۹۹۰٬۰۰۰ تومان</strong>
              <small>با هر معرفی موفق، ۱۰٪ از پرداخت خودت کم می‌شه</small>
              <a href="#referral">چطور با ۱۰ معرفی رایگان شرکت کنم؟</a>
            </div>
            <div className="button-row">
              <a className="button" href={TELEGRAM_URL} target="_blank" rel="noreferrer">ثبت‌نام از طریق تلگرام<Arrow rtl /></a>
              <a className="button button-ghost" href="#agenda">اول برنامه رو ببینم<Arrow rtl /></a>
            </div>
          </div>
          <figure className="campaign-photo">
            <img src="/images/amin-teaching.jpg?v=20260809" alt="امین سخا در حال تدریس" />
            <figcaption>تجربه واقعی، توضیح ساده، مثال قابل استفاده</figcaption>
          </figure>
        </section>

        <section className="campaign-proof section">
          <article><Play size={23} weight="fill" /><div><strong>۹۰ دقیقه</strong><span>فشرده، زنده و بدون حاشیه</span></div></article>
          <article><VideoCamera size={23} weight="fill" /><div><strong>Google Meet</strong><span>آنلاین و تعاملی</span></div></article>
          <article><TelegramLogo size={23} weight="fill" /><div><strong>کانال اختصاصی</strong><span>نکات و محتوای تکمیلی</span></div></article>
          <article><CalendarCheck size={23} weight="fill" /><div><strong>فقط یک‌بار</strong><span>برگزاری زنده</span></div></article>
        </section>

        <section className="instructor-intro section" aria-labelledby="instructor-title">
          <figure>
            <img src="/images/amin-headshot.webp" alt="امین سخا، مهندس اندروید و مدرس" />
          </figure>
          <div className="instructor-copy">
            <p className="eyebrow">قبل از هر چیزی، من کی‌ام؟</p>
            <h2 id="instructor-title">من امین سخا هستم؛ مهندس اندروید و مدرسی که AI بخشی از کار هرروزشه.</h2>
            <p>من فارغ‌التحصیل مهندسی کامپیوتر از دانشگاه شهید بهشتی‌ام و بیشتر از ۵ ساله روی محصول واقعی کار می‌کنم؛ از اپ‌های رسانه‌ای با صدها هزار مخاطب تا محصول شخصی خودم، MetroYar. در کنارش Android، Kotlin و Jetpack Compose رو در مکتب‌خونه، سکان آکادمی و مجتمع فنی تهران تدریس کردم.</p>
            <div className="student-origin-note">
              <Sparkle size={24} weight="fill" aria-hidden="true" />
              <p><strong>این مسترکلاس از یک درخواست واقعی شروع شد.</strong> دانشجوها و همکارهایی که روش کارم با AI رو دیده بودن، مدت‌ها می‌گفتن این تجربه رو یک‌جا و کاربردی آموزش بده؛ بالاخره تصمیم گرفتم انجامش بدم.</p>
            </div>
            <div className="instructor-facts" aria-label="خلاصه سابقه آموزشی امین سخا">
              <span><strong>نزدیک ۳۰ ساعت</strong>آموزش آنلاین منتشرشده</span>
              <span><strong>۳۵۰ ساعت</strong>آموزش حضوری در مجتمع فنی</span>
              <span><strong>نزدیک ۹۰۰ نفر</strong>دانشجوی دوره اندروید</span>
            </div>
          </div>
        </section>

        <section className="campaign-section experience-section section" id="experience">
          <SectionHeading kicker="در کنار تدریس" title="بیشتر از ۵ سال تجربه ساخت محصول واقعی هم پشت این کلاس قرار داره." intro="این تجربه باعث شده مثال‌های کلاس از جنس کار واقعی باشن، نه فقط چند سناریوی تئوری و ساختگی." />
          <div className="experience-grid">
            {experience.map((item) => (
              <article className="experience-card" key={item.company}>
                <header><div><span>{item.company}</span><h3>{item.role}</h3></div><time>{item.period}</time></header>
              </article>
            ))}
          </div>
        </section>

        <section className="campaign-section teaching-spotlight section" id="teaching">
          <SectionHeading kicker="سابقه تدریس" title="قبل از این مسترکلاس هم سال‌هاست آموزش می‌دم؛ می‌تونی نمونه‌هاش رو خودت ببینی." intro="اعتبار این جلسه فقط به سابقه کار با AI نیست. تجربه آموزش به من یاد داده موضوع پیچیده رو چطور ساده، مرحله‌به‌مرحله و قابل استفاده توضیح بدم." />
          <div className="teaching-card-grid">
            {teaching.map((item, index) => (
              <article className={index === 0 ? "teaching-card teaching-card-featured" : "teaching-card"} key={item.platform}>
                <div className="teaching-card-icon"><GraduationCap size={30} weight="fill" /></div>
                <span>{item.platform}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <strong>{item.fact}</strong>
                <a href={item.href} target="_blank" rel="noreferrer">{item.cta}<Arrow rtl /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="campaign-section section audience-section">
          <SectionHeading kicker="این جلسه به درد چه کسی می‌خوره؟" title="اگر کار فکری انجام می‌دی و از AI خروجی واقعی می‌خوای، احتمالاً جای درستی اومدی." intro="لازم نیست برنامه‌نویس باشی یا از قبل صد تا ابزار بلد باشی؛ مهم اینه که یک کار واقعی داشته باشی که می‌خوای بهتر و سریع‌تر انجامش بدی." />
          <div className="audience-grid">
            {["برنامه‌نویس و مهندس", "طراح و تولیدکننده محتوا", "مدیر، فریلنسر و صاحب کسب‌وکار", "دانشجو و مدرس"].map((item) => <span key={item}><Check size={19} weight="bold" />{item}</span>)}
          </div>
        </section>

        <section className="campaign-section section" id="outcomes">
          <SectionHeading kicker="ته این جلسه چی گیرت میاد؟" title="ابزار درست رو می‌شناسی، بهتر دستور می‌دی و تفاوت خروجی رو با چشم خودت می‌بینی." intro="بدون اصطلاح‌های پیچیده می‌بینی برای هر کار سراغ چه ابزاری بری، دقیقاً چه چیزی بهش بگی و چطور جواب معمولی رو مرحله‌به‌مرحله به یک خروجی حرفه‌ای و قابل ارائه تبدیل کنی." />
          <div className="outcome-grid">
            {[
              ["ابزار مناسب هر کار", "با ابزارهای به‌روز و کاربردی AI آشنا می‌شی و می‌فهمی برای تحقیق، نوشتن، تصویر، کد یا کارهای روزمره سراغ کدومشون بری."],
              ["دستورهایی که جواب دقیق می‌گیرن", "یاد می‌گیری چطور خواسته، اطلاعات، مثال و محدودیت‌هات رو واضح بگی تا AI جواب کلی و بی‌مصرف تحویلت نده."],
              ["خروجی‌ای که واقعاً فرق داره", "قبل و بعد رو کنار هم می‌بینی؛ اینکه چطور یک جواب معمولی با اصلاح و بررسی به خروجی حرفه‌ای، چشم‌گیر و قابل استفاده تبدیل می‌شه."],
            ].map(([title, body], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </section>

        <section className="campaign-section section" id="agenda">
          <SectionHeading kicker="قراره چه کار کنیم؟" title="ابزارهای به‌روز، دستور درست و خروجی‌ای که تفاوتش رو همون‌جا می‌بینی." intro="جلسه معرفی خشک ابزارها نیست. اول می‌فهمی برای هر کار کدوم ابزار به‌دردت می‌خوره، بعد روش درست دستور دادن رو یاد می‌گیری و در بخش اصلی، همه‌چیز جلوی خودت به یک خروجی واقعی تبدیل می‌شه." />
          <ol className="agenda-list">
            <li><time>۱۰ دقیقه</time><div><strong>نقشه ابزارهای به‌روز AI</strong><p>مهم‌ترین ابزارهای کاربردی رو می‌بینی و خیلی روشن می‌فهمی هرکدوم برای چه کاری خوبن و کجا نباید سراغشون بری.</p></div></li>
            <li><time>۲۰ دقیقه</time><div><strong>چطور درست و حرفه‌ای دستور بدیم؟</strong><p>با مثال می‌بینی چطور خواسته، زمینه، نمونه و محدودیت رو بنویسی تا جواب دقیق‌تر، خلاق‌تر و قابل استفاده‌تری بگیری.</p></div></li>
            <li><time>۳۵ دقیقه</time><div><strong>از یک درخواست ساده تا یک خروجی شگفت‌انگیز؛ زنده</strong><p>یک کار واقعی رو با چند ابزار جلو می‌بریم و تفاوت قبل و بعدِ دستور درست، نقد خروجی و اصلاح مرحله‌ای رو همون‌جا می‌بینی.</p></div></li>
            <li><time>۱۵ دقیقه</time><div><strong>همین روش برای کد، دیزاین، محتوا و بیزینس</strong><p>با چند مثال کوتاه می‌بینی چطور همین روش رو متناسب با کار خودت استفاده کنی.</p></div></li>
            <li><time>۱۰ دقیقه</time><div><strong>سؤال‌های خودتون</strong><p>هر چیزی که هنوز مبهمه یا به کار خودت مربوطه رو مستقیم می‌پرسی.</p></div></li>
          </ol>
        </section>

        <section className="referral-section section" id="referral">
          <div className="referral-intro">
            <p className="eyebrow">کد معرفی</p>
            <span className="referral-badge"><UsersThree size={18} weight="fill" />هر دوست = ۱۰٪ تخفیف برای هر دوتون</span>
            <h2>دوستت رو دعوت کن؛ هم اون تخفیف می‌گیره، هم تو.</h2>
            <p>کد دعوتت رو از ادمین تلگرام بگیر و برای دوستات بفرست. هر کسی با کد تو ثبت‌نام کنه، خودش ۱۰٪ کمتر می‌پردازه و بعد از تأیید پرداختش، ۱۰٪ هم از هزینه ثبت‌نام تو کم می‌شه.</p>
            <a className="button" href={TELEGRAM_URL} target="_blank" rel="noreferrer"><TelegramLogo size={20} weight="fill" />گرفتن کد از ادمین تلگرام</a>
          </div>
          <div className="referral-highlight">
            <Gift size={32} weight="fill" />
            <span>حسابش خیلی ساده‌ست</span>
            <strong>۱۰ دوست دعوت کن؛ رایگان شرکت کن</strong>
            <p>هر معرفی موفق ۱۰٪ تخفیف بهت می‌ده. با ۵ نفر، نصف قیمت رو می‌پردازی و با ۱۰ نفر، تخفیفت به ۱۰۰٪ می‌رسه.</p>
          </div>
          <div className="referral-benefits">
            <article><UsersThree size={24} weight="fill" /><span>دوستت چقدر تخفیف می‌گیره؟</span><strong>۱۰٪</strong><p>با کد تو به‌جای ۹۹۰٬۰۰۰ تومان، ۸۹۱٬۰۰۰ تومان پرداخت می‌کنه.</p></article>
            <article><Coins size={24} weight="fill" /><span>تو چقدر تخفیف می‌گیری؟</span><strong>برای هر دوست ۱۰٪</strong><p>تعداد دعوت‌هات محدود نیست و تخفیفت تا سقف ۱۰۰٪ روی هم جمع می‌شه.</p></article>
          </div>
          <div className="referral-steps">
            <p><strong>۱</strong>کد دعوتت رو از ادمین تلگرام بگیر.</p>
            <p><strong>۲</strong>دوستات با کد تو ثبت‌نام می‌کنن و ۱۰٪ تخفیف می‌گیرن.</p>
            <p><strong>۳</strong>بعد از تأیید پرداخت هر نفر، ۱۰٪ از هزینه خودت هم کم می‌شه.</p>
          </div>
          <div className="referral-rules">
            <div><p className="eyebrow">فقط این چند نکته رو یادت باشه</p><h3>اول دوستات پرداخت می‌کنن؛ بعد تخفیف تو حساب می‌شه.</h3></div>
            <ul>
              <li><Check size={18} weight="bold" />دوستت باید قبل از پرداخت، کد تو رو به ادمین اعلام کنه.</li>
              <li><Check size={18} weight="bold" />بعد از تأیید پرداخت دوستات، تخفیف نهایی تو محاسبه می‌شه و بعد خودت پرداخت می‌کنی.</li>
              <li><Check size={18} weight="bold" />تخفیف تا سقف ۱۰۰٪ هزینه مسترکلاس جمع می‌شه و امکان تبدیلش به پول نقد وجود نداره.</li>
            </ul>
          </div>
        </section>

        <section className="campaign-section testimonials-section section" id="testimonials">
          <SectionHeading kicker="نظر دانشجوهای قبلی" title="این بخش قراره با تجربه واقعی دانشجوهایی کامل بشه که قبلاً با من کلاس داشتن." intro="به‌زودی پنج نظر واقعی، همراه با نام و عکس هر دانشجو اینجا قرار می‌گیره. فعلاً جای کارت‌ها رو آماده کردم تا ساختار صفحه از همین حالا مشخص باشه." />
          <div className="testimonial-grid">
            {Array.from({ length: 5 }, (_, index) => (
              <article className="testimonial-placeholder" key={index}>
                <blockquote>نظر کامل یکی از دانشجوهای قبلی درباره کیفیت تدریس، شیوه توضیح و تجربه کلاس اینجا قرار می‌گیره.</blockquote>
                <footer><UserCircle size={42} weight="duotone" /><div><strong>نام دانشجو</strong><span>دانشجوی دوره قبلی</span></div></footer>
              </article>
            ))}
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
            <a className="button button-light" href={TELEGRAM_URL} target="_blank" rel="noreferrer"><TelegramLogo size={20} weight="fill" />ثبت‌نام در تلگرام</a>
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
