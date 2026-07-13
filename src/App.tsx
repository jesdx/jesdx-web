import heroImg from './assets/personal-hero.png'

const navItems = ['Work', 'Systems', 'Stack', 'Contact']
const frameClass = 'mx-auto max-w-[1600px]'
const mStripeClass =
  'bg-[linear-gradient(90deg,#0066b1_0_33.333%,#1c69d4_33.333%_66.666%,#e22718_66.666%_100%)]'

const stats = [
  { value: '04+', label: 'Years shipping UI' },
  { value: '32', label: 'Production releases' },
  { value: '99', label: 'Lighthouse target' },
  { value: '0.2s', label: 'Interaction budget' },
]

const projects = [
  {
    code: '01',
    title: 'Command Center',
    type: 'Dashboard / Data UX',
    body: 'Dense operational interface for scanning metrics, incidents, and team ownership without visual noise.',
  },
  {
    code: '02',
    title: 'Launch Surface',
    type: 'Marketing / Motion',
    body: 'High-contrast launch page with sharp copy hierarchy, fast media loading, and crisp conversion states.',
  },
  {
    code: '03',
    title: 'Design Runtime',
    type: 'React / Tailwind',
    body: 'Reusable component layer for typography, spacing, form states, and responsive editorial layouts.',
  },
]

const stack = ['React', 'TypeScript', 'Tailwind', 'Vite', 'Node', 'Design Systems']

function App() {
  return (
    <main className="min-h-svh bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-[#262626] bg-black/92 backdrop-blur">
        <nav className={`${frameClass} flex h-16 items-center justify-between px-5 md:px-10`}>
          <a href="#top" className="flex items-center gap-3" aria-label="JESDX home">
            <span className={`${mStripeClass} h-8 w-2`} aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-[1.5px]">JESDX</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-light text-[#bbbbbb] transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@jesdx.dev"
            className="border border-white px-5 py-3 text-xs font-bold uppercase tracking-[1.5px] transition hover:bg-white hover:text-black"
          >
            Start
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-svh overflow-hidden border-b border-[#262626]">
        <img
          src={heroImg}
          alt="Dark engineering workspace with a laptop and blue red light trails"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.94)_30%,rgba(0,0,0,0.28)_66%,rgba(0,0,0,0.62)_100%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#000_0%,rgba(0,0,0,0)_34%)]" aria-hidden="true" />
        <div className={`${frameClass} relative flex min-h-svh items-center px-5 pb-10 pt-28 md:px-10 md:pt-20 lg:-translate-y-4`}>
          <div className="max-w-4xl">
            <div className={`${mStripeClass} mb-8 h-1 w-72 max-w-full`} aria-hidden="true" />
            <p className="mb-5 text-sm font-bold uppercase tracking-[1.5px] text-[#e6e6e6]">
              Personal Web / Frontend Engineering
            </p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.98] tracking-0 md:text-7xl lg:text-8xl">
              Build Fast.
              <br />
              Look Sharp.
              <br />
              Stay Precise.
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-[#bbbbbb] md:text-xl">
              I craft React interfaces with cinematic restraint, engineered layout,
              and production-grade TypeScript. A personal surface for work, systems,
              and experiments.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="border border-white bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-[1.5px] text-black transition hover:bg-transparent hover:text-white"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="border border-white px-8 py-4 text-center text-sm font-bold uppercase tracking-[1.5px] transition hover:bg-white hover:text-black"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="border-b border-[#262626] bg-[#0d0d0d]">
        <div className={`${frameClass} grid grid-cols-1 md:grid-cols-4`}>
          {stats.map((item) => (
            <div key={item.label} className="border-b border-[#262626] p-6 md:border-b-0 md:border-r md:p-10">
              <p className="text-4xl font-black uppercase leading-none md:text-5xl">{item.value}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className={`${frameClass} px-5 py-24 md:px-10`}>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">Selected Work</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[1.05] md:text-6xl">
              Interfaces with an engineered pulse.
            </h2>
          </div>
          <div className="grid gap-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border border-[#3c3c3c] bg-[#111] p-6 transition hover:border-white md:p-8"
              >
                <div className="mb-8 flex items-start justify-between gap-6">
                  <span className="text-sm font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">
                    {project.code}
                  </span>
                  <span className={`${mStripeClass} h-1 w-24`} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight md:text-3xl">{project.title}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[1.5px] text-[#bbbbbb]">{project.type}</p>
                <p className="mt-5 max-w-2xl font-light leading-7 text-[#bbbbbb]">{project.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#262626] bg-[#050505]">
        <div className={`${frameClass} grid gap-12 px-5 py-24 md:px-10 lg:grid-cols-2`}>
          <div className="min-h-[420px] bg-[url('/src/assets/personal-hero.png')] bg-cover bg-center" aria-hidden="true" />
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">Process</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[1.05] md:text-6xl">
              From blank canvas to shipped surface.
            </h2>
            <p className="mt-7 font-light leading-8 text-[#bbbbbb]">
              I start with hierarchy and constraints, then shape the product into
              clear components, responsive states, and interaction details that feel
              fast under the hand.
            </p>
          </div>
        </div>
      </section>

      <section id="stack" className={`${frameClass} px-5 py-24 md:px-10`}>
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#7e7e7e]">Stack</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[1.05] md:text-6xl">
              Lean tools.
              <br />
              Strong output.
            </h2>
          </div>
          <p className="max-w-xl font-light leading-8 text-[#bbbbbb]">
            React TS + Tailwind keeps the system direct: fast iteration, explicit
            markup, and enough control to make the interface feel intentional.
          </p>
        </div>
        <div className="grid grid-cols-2 border-l border-t border-[#262626] md:grid-cols-3 lg:grid-cols-6">
          {stack.map((item) => (
            <div key={item} className="border-b border-r border-[#262626] p-6">
              <p className="text-sm font-bold uppercase tracking-[1.5px]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-[#262626] bg-[#0d0d0d]">
        <div className={`${frameClass} grid gap-10 px-5 py-16 md:grid-cols-[1fr_auto] md:px-10`}>
          <div>
            <div className={`${mStripeClass} mb-8 h-1 w-56`} aria-hidden="true" />
            <h2 className="text-4xl font-black uppercase leading-[1.05] md:text-6xl">
              Let's build the next surface.
            </h2>
            <p className="mt-6 max-w-2xl font-light leading-8 text-[#bbbbbb]">
              Available for frontend systems, portfolio direction, and sharp product
              interfaces.
            </p>
          </div>
          <div className="flex items-end">
            <a
              href="mailto:hello@jesdx.dev"
              className="border border-white px-8 py-4 text-sm font-bold uppercase tracking-[1.5px] transition hover:bg-white hover:text-black"
            >
              hello@jesdx.dev
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
