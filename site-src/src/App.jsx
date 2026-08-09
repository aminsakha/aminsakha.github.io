import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BookOpen,
  BracketsCurly,
  Briefcase,
  Check,
  Code,
  EnvelopeSimple,
  GithubLogo,
  GraduationCap,
  LinkedinLogo,
  List,
  MagicWand,
  MapPin,
  Play,
  Sparkle,
  TelegramLogo,
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

  useEffect(() => {
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.title = "مسترکلاس ۹۰ دقیقه‌ای هوش مصنوعی کاربردی — امین سخا";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "در ۹۰ دقیقه یاد بگیر چطور با AI یک هفته کار را به یک روز تبدیل کنی؛ با مثال‌های واقعی و ورک‌فلوهای قابل استفاده.");
  }, []);

  const copyMessage = async () => {
    const message = "سلام، برای ثبت‌نام در مسترکلاس ۹۰ دقیقه‌ای هوش مصنوعی پیام می‌دهم. نام و نام خانوادگی: ... کد معرفی: ...";
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(message);
      } else {
        const field = document.createElement("textarea");
        field.value = message;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="site-shell campaign-shell">
      <Header lang="fa" nav={[]} campaign />
      <main>
        <section className="campaign-hero section" id="top">
          <div className="campaign-hero-copy">
            <p className="eyebrow">مسترکلاس زنده · ۹۰ دقیقه · فقط یک‌بار</p>
            <h1>در ۹۰ دقیقه یاد بگیر چطور با AI یک هفته کار را به یک روز تبدیل کنی.</h1>
            <p>نه با معرفی پشت‌سرهم ابزارها؛ با روش فکرکردن، ورک‌فلوهای واقعی و مثال‌هایی که در کدنویسی، طراحی و بیزینس قابل استفاده‌اند.</p>
            <div className="campaign-meta">
              <span><Play size={20} weight="fill" />جمعه · ۱۱:۰۰ تا ۱۲:۳۰</span>
              <span><MapPin size={20} weight="fill" />آنلاین و زنده</span>
            </div>
            <div className="campaign-price"><span>هزینه ثبت‌نام</span><strong>۲٬۹۹۰٬۰۰۰ تومان</strong><small>با کد معرفی: ۲٬۶۹۱٬۰۰۰ تومان</small></div>
            <div className="button-row">
              <a className="button" href="#register">درخواست ثبت‌نام<Arrow rtl /></a>
              <a className="button button-ghost" href="#agenda">دیدن برنامه جلسه<Arrow rtl /></a>
            </div>
          </div>
          <figure className="campaign-photo"><img src="/images/amin-headshot.webp" alt="امین سخا، مدرس مسترکلاس" /></figure>
        </section>

        <section className="campaign-proof section">
          <div><strong>+۵ سال</strong><span>ساخت محصول واقعی</span></div>
          <div><strong>۳ پلتفرم</strong><span>سابقه تدریس</span></div>
          <div><strong>۹۰ دقیقه</strong><span>فشرده و کاربردی</span></div>
          <div><strong>یک‌بار</strong><span>برگزاری زنده</span></div>
        </section>

        <section className="campaign-section section" id="outcomes">
          <SectionHeading kicker="خروجی جلسه" title="بعد از این ۹۰ دقیقه، ابزار بیشتر نمی‌شناسی؛ بهتر کار می‌کنی." />
          <div className="outcome-grid">
            {[
              ["صورت مسئله بهتر", "یاد می‌گیری مسئله را طوری به AI بدهی که خروجی قابل استفاده بگیری، نه جواب‌های عمومی."],
              ["ورک‌فلو قابل تکرار", "از یک درخواست پراکنده به فرایندی می‌رسی که تحقیق، تولید، بازبینی و اصلاح را به هم وصل می‌کند."],
              ["قضاوت انسانی", "می‌فهمی کجا باید به AI اعتماد نکنی و چطور کیفیت خروجی را بررسی و مسئولیتش را حفظ کنی."],
            ].map(([title, body], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </section>

        <section className="campaign-section section" id="agenda">
          <SectionHeading kicker="برنامه مسترکلاس" title="یک مسیر مستقیم از مسئله تا خروجی واقعی." />
          <ol className="agenda-list">
            <li><time>۱۰ دقیقه</time><div><strong>چرا بیشتر آدم‌ها از AI خروجی متوسط می‌گیرند؟</strong><p>مدل ذهنی درست برای استفاده از AI و اشتباه‌های رایج.</p></div></li>
            <li><time>۵۵ دقیقه</time><div><strong>ساخت یک ورک‌فلو واقعی، زنده</strong><p>از تعریف مسئله و جمع‌آوری زمینه تا تولید، نقد و اصلاح خروجی.</p></div></li>
            <li><time>۱۵ دقیقه</time><div><strong>تعمیم به کد، طراحی و بیزینس</strong><p>چطور همان منطق را برای حوزه‌های مختلف تنظیم کنیم.</p></div></li>
            <li><time>۱۰ دقیقه</time><div><strong>پرسش و پاسخ</strong><p>پاسخ مستقیم به مسئله‌های واقعی شرکت‌کنندگان.</p></div></li>
          </ol>
        </section>

        <section className="campaign-section section audience-section">
          <SectionHeading kicker="این جلسه برای کیه؟" title="برای کسی که کار دانشی انجام می‌دهد و خروجی واقعی می‌خواهد." />
          <div className="audience-grid">
            {["برنامه‌نویس و مهندس", "طراح و تولیدکننده محتوا", "مدیر، فریلنسر و صاحب کسب‌وکار", "دانشجو و مدرس"].map((item) => <span key={item}><Check size={19} weight="bold" />{item}</span>)}
          </div>
        </section>

        <section className="referral-section section">
          <div><p className="eyebrow">کد معرفی</p><h2>با معرفی درست، همه سود می‌کنند.</h2></div>
          <div className="referral-steps">
            <p><strong>۱</strong>کد معرفی را از ادمین بگیر و برای دوستانت بفرست.</p>
            <p><strong>۲</strong>دوستت با همان کد ۱۰٪ کمتر پرداخت می‌کند.</p>
            <p><strong>۳</strong>بعد از تأیید پرداخت او، ۳۰۰هزار تومان برای تو ثبت می‌شود.</p>
          </div>
        </section>

        <section className="register-section section" id="register">
          <div>
            <p className="eyebrow">ثبت‌نام</p>
            <h2>اگر می‌خواهی AI واقعاً روش کارت را تغییر دهد، این ۹۰ دقیقه برای توست.</h2>
            <p>پرداخت به‌صورت کارت‌به‌کارت و ثبت‌نام از طریق ادمین انجام می‌شود. اگر کد معرفی داری، قبل از پرداخت در پیام بنویس.</p>
          </div>
          <div className="register-actions">
            <a className="button button-light" href={TELEGRAM_URL} target="_blank" rel="noreferrer"><TelegramLogo size={20} weight="fill" />پیام در تلگرام</a>
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
