import { useEffect, useState, type FormEvent } from 'react'
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  Flame,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

const phoneNumber = '2039481557'
const displayPhone = '(203) 948-1557'
const businessName = 'DPT Plumbing, Heating, Pumps & Water Treatments'

const services: {
  title: string
  description: string
  Icon: LucideIcon
  accent: string
}[] = [
  {
    title: 'Emergency Pipe Repair & Frozen Lines',
    description:
      'Burst pipes, urgent leaks, frozen lines, pipe thawing, and backed-up drains. Call any time for emergency help.',
    Icon: AlertCircle,
    accent: 'text-orange-400',
  },
  {
    title: 'Water Heaters',
    description:
      'Troubleshooting, repair, and replacement for standard tanks, plus efficient tankless upgrades.',
    Icon: Flame,
    accent: 'text-amber-400',
  },
  {
    title: 'Well Pumps & Pressure Tanks',
    description:
      'No-water diagnostics, submersible pump service, booster tanks, and pressure system repairs.',
    Icon: Droplets,
    accent: 'text-cyan-400',
  },
  {
    title: 'Water Treatment, Softeners & Testing',
    description:
      'Whole-home filtration, softening, conditioning, and hardness and mineral testing for your water.',
    Icon: ShieldCheck,
    accent: 'text-cyan-400',
  },
  {
    title: 'Kitchen, Bath & Gas Piping',
    description:
      'Fixture installations, remodel plumbing, outdoor spigots, and gas line hooks for your home.',
    Icon: Wrench,
    accent: 'text-amber-400',
  },
  {
    title: 'Seasonal De-Winterizing & Outdoor Plumbing',
    description:
      'Get cottages, camps, sprinklers, and outdoor plumbing ready for the season with dependable turn-on service.',
    Icon: Clock,
    accent: 'text-cyan-400',
  },
]

const towns = [
  'New Milford',
  'Brookfield',
  'Sherman',
  'Bridgewater',
  'Danbury',
  'Kent',
  'Roxbury',
]

const reasons = [
  {
    number: '01',
    title: 'We actually return your call',
    description:
      'Reach a local team that takes your call seriously and follows up promptly, especially when something goes wrong.',
    Icon: Phone,
  },
  {
    number: '02',
    title: 'Honest, upfront quotes',
    description:
      'Understand the work and expected cost before we get started. No hidden diagnostic surcharges.',
    Icon: CheckCircle2,
  },
  {
    number: '03',
    title: 'Respect for your home',
    description:
      'We work cleanly, protect your space, and explain the repair so you know what was done and why.',
    Icon: ShieldCheck,
  },
]

function App() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'DPT Plumbing | 24/7 New Milford Plumber'
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.append(description)
    }
    description.content =
      'DPT Plumbing, Heating, Pumps & Water Treatments provides 24/7 emergency plumbing, well pump service, water heaters, and water treatment in New Milford, CT.'
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <style>{`
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
        }
      `}</style>

      <div className="bg-orange-500 px-4 py-2.5 text-center text-xs font-extrabold uppercase tracking-[0.08em] text-slate-950 sm:text-sm">
        <a
          href={`tel:${phoneNumber}`}
          className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 hover:text-white"
        >
          <span aria-hidden="true">🚨</span>
          <span>24/7 Emergency Plumbing Dispatch</span>
          <span className="hidden sm:inline">•</span>
          <span>New Milford, CT</span>
          <span className="hidden sm:inline">•</span>
          <span>Call Now: {displayPhone}</span>
        </a>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="DPT Plumbing home">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-950/40">
              <Wrench size={21} strokeWidth={2.5} aria-hidden="true" />
              <Droplets className="-ml-1 -mt-4" size={14} strokeWidth={2.8} aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black tracking-[0.12em] text-white sm:text-base">
                DPT PLUMBING
              </span>
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-400 sm:block">
                Heating · Pumps · Water Treatment
              </span>
            </span>
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-500 px-3 py-2.5 text-xs font-extrabold text-slate-950 transition hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 sm:px-4 sm:text-sm"
          >
            <Phone size={16} aria-hidden="true" />
            <span className="sm:hidden">Call Now</span>
            <span className="hidden sm:inline">Emergency Call</span>
          </a>
        </div>

        <div className="border-t border-slate-800/80">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-4 py-2.5 text-xs font-semibold text-slate-300 sm:px-6 lg:px-8"
          >
            <a className="shrink-0 transition hover:text-cyan-300" href="#services">Services</a>
            <a className="shrink-0 transition hover:text-cyan-300" href="#difference">Why Darren</a>
            <a className="shrink-0 transition hover:text-cyan-300" href="#water-treatment">Water Filtration</a>
            <a className="shrink-0 transition hover:text-cyan-300" href="#reviews">Reviews</a>
            <a className="shrink-0 transition hover:text-cyan-300" href="#quote">Free Estimate</a>
            <a
              href="#quote"
              className="ml-auto hidden shrink-0 items-center gap-1.5 rounded-md bg-cyan-500 px-3 py-2 font-extrabold text-slate-950 transition hover:bg-cyan-400 md:inline-flex"
            >
              Get Free Quote <ArrowRight size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="relative isolate overflow-hidden border-b border-slate-800">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_28%,rgba(8,145,178,0.18),transparent_42%),radial-gradient(ellipse_at_15%_95%,rgba(249,115,22,0.10),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-3.5 py-2 text-xs font-bold text-orange-200">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-orange-400" />
                </span>
                24/7 Emergency Service Available
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Reliable Hometown Plumbing.
                <span className="mt-1 block text-cyan-400">Done Right. Call Answered.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                New Milford&apos;s trusted local plumber for 24/7 emergency pipe repair, well pump
                replacement, water heater installs, and advanced water filtration throughout
                Litchfield County.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-center text-sm font-extrabold text-slate-950 shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
                >
                  <Phone size={18} aria-hidden="true" />
                  Call {displayPhone} for Immediate Service
                </a>
                <a
                  href="#quote"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-900 px-6 py-4 text-sm font-bold text-white transition hover:border-cyan-400 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  Request an Estimate <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm text-slate-300">
                <span className="flex text-amber-400" aria-label="Member of local business associations">
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                </span>
                <span>Local, responsive service from Darren &amp; Team</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] bg-cyan-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/90 p-6 shadow-2xl shadow-black/30 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                      Your local plumbing team
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold text-white">Ready when it matters.</h2>
                  </div>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                    <Wrench size={24} aria-hidden="true" />
                  </div>
                </div>
                <div className="my-6 h-px bg-slate-700" />
                <ul className="space-y-4">
                  {[
                    '24/7 emergency plumbing response',
                    'Local team serving New Milford and nearby towns',
                    'Straightforward explanations and upfront quotes',
                    'Veteran discounts available',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-400" size={18} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${phoneNumber}`}
                  className="mt-7 flex items-center justify-center gap-2 rounded-lg border border-orange-400/50 bg-orange-400/10 px-4 py-3 text-sm font-extrabold text-orange-200 transition hover:bg-orange-400 hover:text-slate-950"
                >
                  <Phone size={17} aria-hidden="true" /> The Plumber Who Returns Your Call
                </a>
              </div>
              <div className="relative mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  ['24/7', 'Emergency'],
                  ['Licensed', '& Insured'],
                  ['GNMBA', 'Member'],
                  ['BNI', 'Danbury'],
                  ['Veteran', 'Discounts'],
                ].map(([title, subtitle]) => (
                  <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-3 text-center">
                    <p className="text-sm font-extrabold text-white">{title}</p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">{subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-400">What we do</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Plumbing help for the whole home
              </h2>
              <p className="mt-4 leading-7 text-slate-400">
                From urgent leaks to cleaner, better-tasting water, get dependable service from one local team.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, description, Icon, accent }) => (
                <a
                  key={title}
                  href="#quote"
                  className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-500/60 hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className={`flex size-12 items-center justify-center rounded-xl bg-slate-800 ${accent}`}>
                      <Icon size={23} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <ArrowRight
                      className="mt-1 text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-400"
                      size={18}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="difference" className="scroll-mt-32 border-y border-slate-800 bg-slate-900/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-400">The DPT difference</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                A real local team. A call that gets answered.
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                When a plumbing problem disrupts your day, you deserve clear answers—not a maze of
                corporate dispatch. Darren and the DPT team are right here in New Milford, ready to
                help neighbors across the area.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-300">Greater New Milford Business Association</span>
                <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-300">BNI Danbury Member</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {reasons.map(({ number, title, description, Icon }) => (
                <article key={number} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-black tracking-widest text-slate-600">{number}</span>
                  </div>
                  <h3 className="mt-5 font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="water-treatment" className="scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-cyan-900/60 bg-gradient-to-br from-cyan-950/60 via-slate-900 to-slate-900 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-400">Water filtration &amp; softening</p>
              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                Better water starts with knowing what&apos;s in it.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Hardness, minerals, and other water quality issues can affect your fixtures and
                everyday comfort. DPT can test your water and recommend whole-home filtration,
                conditioning, or a softener that fits your home.
              </p>
              <a
                href="#quote"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-extrabold text-slate-950 transition hover:bg-cyan-400"
              >
                Ask about water testing <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="flex items-center justify-center border-t border-cyan-900/50 bg-cyan-950/20 p-8 lg:border-l lg:border-t-0">
              <div className="w-full max-w-sm rounded-2xl border border-cyan-800/50 bg-slate-950/70 p-6">
                <Droplets className="text-cyan-400" size={34} aria-hidden="true" />
                <h3 className="mt-4 text-xl font-extrabold text-white">From source to tap</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {['Water hardness & mineral testing', 'Whole-home filtration', 'Water softener installation', 'System conditioning & service'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="shrink-0 text-cyan-400" size={16} aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="scroll-mt-32 border-y border-slate-800 bg-slate-900/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center gap-1 text-amber-400" aria-hidden="true">
                <Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" />
              </div>
              <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-400">Local service, personal attention</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                The kind of service neighbors remember
              </h2>
              <p className="mt-4 leading-7 text-slate-400">
                We believe trust comes from showing up, communicating clearly, and treating every
                home with care. Ask Darren&apos;s team for local references when you call.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ['Prompt response', 'A plumbing emergency cannot wait. We make answering and returning calls a priority.'],
                ['Fair, clear pricing', 'Know what the repair involves and what it costs before work gets underway.'],
                ['Reliable communication', 'Get a clear explanation of the issue, the options, and the work completed.'],
              ].map(([title, description]) => (
                <article key={title} className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                  <div className="flex gap-1 text-amber-400" aria-hidden="true">
                    <Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="lg:py-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange-400">Fast quote &amp; service request</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Tell us what&apos;s going on.
              </h2>
              <p className="mt-4 leading-7 text-slate-400">
                Need help now? Call for 24/7 emergency service. For an estimate or non-emergency
                request, leave your details and Darren or dispatch will get back to you.
              </p>
              <a
                href={`tel:${phoneNumber}`}
                className="mt-6 inline-flex items-center gap-2 text-lg font-extrabold text-orange-400 hover:text-orange-300"
              >
                <Phone size={20} aria-hidden="true" /> {displayPhone}
              </a>
              <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/80 p-5">
                <div className="flex gap-3">
                  <Clock className="mt-0.5 shrink-0 text-cyan-400" size={20} aria-hidden="true" />
                  <p className="text-sm leading-6 text-slate-300">
                    <strong className="text-white">Emergency?</strong> Call anytime for urgent leaks,
                    burst lines, frozen pipes, and other plumbing emergencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl shadow-black/20 sm:p-8">
              {submitted ? (
                <div role="status" aria-live="polite" className="flex min-h-96 flex-col items-center justify-center text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                    <CheckCircle2 size={34} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold text-white">Request received!</h3>
                  <p className="mt-2 max-w-sm text-slate-300">
                    Darren or dispatch will call you back shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-bold text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-semibold text-slate-200">
                      Name <span className="text-orange-400">*</span>
                      <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="mt-2 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block text-sm font-semibold text-slate-200">
                      Phone number <span className="text-orange-400">*</span>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        className="mt-2 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                        placeholder="(203) 555-0123"
                      />
                    </label>
                  </div>
                  <label className="block text-sm font-semibold text-slate-200">
                    Town / City <span className="text-orange-400">*</span>
                    <input
                      name="town"
                      type="text"
                      autoComplete="address-level2"
                      required
                      className="mt-2 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Where do you need service?"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-slate-200">
                    Service needed <span className="text-orange-400">*</span>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="mt-2 min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 text-base text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="" disabled>Select a service</option>
                      <option>Emergency Burst / Leak</option>
                      <option>Water Heater Issue</option>
                      <option>Well Pump / Low Pressure</option>
                      <option>Water Softener / Filtration</option>
                      <option>General Plumbing Repair</option>
                    </select>
                  </label>
                  <label className="block text-sm font-semibold text-slate-200">
                    Message
                    <textarea
                      name="message"
                      rows={4}
                      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Briefly describe the issue and the best time to call."
                    />
                  </label>
                  <button
                    type="submit"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-extrabold text-slate-950 transition hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
                  >
                    Request a Free Estimate <ArrowRight size={17} aria-hidden="true" />
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    For emergencies, please call us directly at{' '}
                    <a className="font-bold text-slate-300 underline underline-offset-2" href={`tel:${phoneNumber}`}>
                      {displayPhone}
                    </a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-32 border-t border-slate-800 bg-slate-900/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-cyan-400">Service territory &amp; contact</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Your hometown plumbing team.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Serving New Milford, Danbury, Brookfield, Sherman, and surrounding Litchfield and Fairfield Counties.
              </p>
              <div className="mt-7 flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-orange-400" size={21} aria-hidden="true" />
                <address className="not-italic leading-7 text-slate-200">
                  <strong className="text-white">{businessName}</strong>
                  <br />
                  50 Little Bear Hill Rd
                  <br />
                  New Milford, CT 06776
                </address>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {towns.map((town) => (
                  <span key={town} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-300">
                    {town}
                  </span>
                ))}
                <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-300">Surrounding counties</span>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
              <h3 className="text-xl font-extrabold text-white">Talk with Darren &amp; Team</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Emergency, estimate, or a question about your water—get in touch the way that works for you.
              </p>
              <a
                href={`tel:${phoneNumber}`}
                className="mt-6 flex min-h-14 items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 font-extrabold text-slate-950 transition hover:bg-orange-400"
              >
                <Phone size={18} aria-hidden="true" /> Call {displayPhone}
              </a>
              <a
                href="#quote"
                className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <ArrowRight size={17} aria-hidden="true" /> Email Service Team
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=50+Little+Bear+Hill+Rd%2C+New+Milford%2C+CT+06776"
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <MapPin size={17} aria-hidden="true" /> Directions via Google Maps
              </a>
              <div className="mt-6 border-t border-slate-800 pt-5 text-xs leading-5 text-slate-400">
                <p>Greater New Milford Business Association Member · BNI Danbury Member</p>
                <p className="mt-1">Veteran discounts available · 24/7 emergency service</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} {businessName}</p>
          <p>Licensed &amp; Insured CT Contractor · 24/7 Dispatch</p>
          <a href={`tel:${phoneNumber}`} className="font-bold text-slate-300 transition hover:text-orange-400">
            Call {displayPhone}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
