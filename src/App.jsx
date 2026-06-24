import { useState } from 'react'

const STYLE_OPTIONS = [
  'Casual',
  'Street',
  'Luxury',
  'Vintage',
  'Sport',
  'Formal',
  'Boho',
]

const paperSceneClass =
  'pointer-events-none absolute inset-0 origin-[51%_43%] scale-[1.34]'

function WaitlistForm({
  variant,
  titleId,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  selectedStyle,
  setSelectedStyle,
  closetContact,
  setClosetContact,
  smsConsent,
  setSmsConsent,
  onSubmit,
}) {
  const isMobile = variant === 'mobile'

  const inputClass = isMobile
    ? 'h-12 w-full rounded-xl border border-anna-dark bg-anna-cream px-4 text-base text-anna-ink placeholder:text-anna-placeholder outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-anna-accent/80'
    : 'h-[3.4cqw] w-full rounded-[0.8cqw] border border-anna-dark bg-anna-cream px-[1cqw] text-[0.9cqw] text-anna-ink placeholder:text-anna-placeholder outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-anna-accent/80'

  const labelClass = isMobile
    ? 'text-xs font-semibold uppercase tracking-[0.08em]'
    : 'text-[0.72cqw] font-semibold uppercase tracking-[0.08em]'

  const styleButtonClass = (active) =>
    isMobile
      ? `min-h-10 cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
          active
            ? 'border-anna-cream bg-anna-cream text-anna-dark'
            : 'border-anna-dark bg-anna-dark text-anna-cream'
        }`
      : `min-h-[2.1cqw] cursor-pointer rounded-full border px-[0.75cqw] py-[0.5cqw] text-[0.78cqw] font-semibold transition-colors duration-200 ${
          active
            ? 'border-anna-cream bg-anna-cream text-anna-dark'
            : 'border-anna-dark bg-anna-dark text-anna-cream hover:border-anna-cream/70'
        }`

  const checkboxClass = isMobile
    ? 'mt-1 size-5 shrink-0 appearance-none rounded-md border border-anna-cream bg-transparent checked:bg-anna-cream'
    : 'mt-[0.1cqw] size-[1.65cqw] shrink-0 appearance-none rounded-[0.45cqw] border border-anna-cream bg-transparent checked:bg-anna-cream'

  return (
    <>
      <header className={isMobile ? 'relative z-10' : 'relative z-10'}>
        <h1
          id={titleId}
          className={
            isMobile
              ? 'mb-2 font-serif text-3xl leading-tight font-extralight tracking-wide uppercase'
              : 'mb-[0.8cqw] font-serif text-[3.1cqw] leading-[1.1] font-extralight tracking-wide uppercase'
          }
        >
          Únete a la comunidad
        </h1>
        <p
          className={
            isMobile
              ? 'm-0 text-sm leading-relaxed text-anna-muted'
              : 'm-0 text-[0.92cqw] leading-relaxed text-anna-muted'
          }
        >
          Descubre drops exclusivas, lanzamientos y consejos de estilo antes que
          nadie.
        </p>
      </header>

      <form
        className={
          isMobile
            ? 'relative z-10 grid gap-4'
            : 'relative z-10 grid gap-[1.7cqw]'
        }
        onSubmit={onSubmit}
      >
        <div
          className={
            isMobile
              ? 'grid grid-cols-1 gap-4 sm:grid-cols-2'
              : 'grid grid-cols-2 gap-[0.75cqw]'
          }
        >
          <label className={isMobile ? 'grid gap-2' : 'grid gap-[0.55cqw]'}>
            <span className={labelClass}>Nombre completo</span>
            <input
              type="text"
              name="firstName"
              className={inputClass}
              placeholder="Nombre"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              autoComplete="given-name"
            />
          </label>

          <label className={isMobile ? 'grid gap-2' : 'grid gap-[0.55cqw]'}>
            <span className={`${labelClass} ${isMobile ? '' : 'opacity-0'}`}>
              Apellido
            </span>
            <input
              type="text"
              name="lastName"
              className={inputClass}
              placeholder="Apellido"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              autoComplete="family-name"
            />
          </label>
        </div>

        <label className={isMobile ? 'grid gap-2' : 'grid gap-[0.55cqw]'}>
          <span className={labelClass}>Correo electrónico</span>
          <input
            type="email"
            name="email"
            className={inputClass}
            placeholder="tu@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />
        </label>

        <fieldset
          className={
            isMobile
              ? 'm-0 grid gap-2 border-0 p-0'
              : 'm-0 grid gap-[0.55cqw] border-0 p-0'
          }
        >
          <legend className={labelClass}>Estilo</legend>
          <div
            className={
              isMobile
                ? 'flex flex-wrap gap-2'
                : 'flex flex-wrap gap-[0.5cqw_0.65cqw]'
            }
            role="group"
            aria-label="Estilo"
          >
            {STYLE_OPTIONS.map((style) => (
              <button
                key={style}
                type="button"
                className={styleButtonClass(selectedStyle === style)}
                aria-pressed={selectedStyle === style}
                onClick={() => setSelectedStyle(style)}
              >
                {style}
              </button>
            ))}
          </div>
        </fieldset>

        <label
          className={
            isMobile
              ? 'flex cursor-pointer items-start gap-3 text-xs leading-snug font-semibold tracking-[0.06em] uppercase'
              : 'flex cursor-pointer items-start gap-[0.6cqw] text-[0.78cqw] leading-snug font-semibold tracking-[0.08em] uppercase'
          }
        >
          <input
            type="checkbox"
            name="closetContact"
            className={checkboxClass}
            checked={closetContact}
            onChange={(event) => setClosetContact(event.target.checked)}
          />
          <span>quieres que te contactemos para ser vender tu clóset</span>
        </label>

        <label
          className={
            isMobile
              ? 'flex cursor-pointer items-start gap-3 text-[0.7rem] leading-snug font-semibold tracking-[0.05em] uppercase'
              : 'flex cursor-pointer items-start gap-[0.6cqw] text-[0.52cqw] leading-snug font-semibold tracking-[0.08em] uppercase'
          }
        >
          <input
            type="checkbox"
            name="smsConsent"
            className={checkboxClass}
            checked={smsConsent}
            onChange={(event) => setSmsConsent(event.target.checked)}
          />
          <span>
            autorización para recibir SMS, notificaciones, y ser parte de la
            comunidad.
          </span>
        </label>

        <button
          type="submit"
          className={
            isMobile
              ? 'mt-1 h-12 cursor-pointer rounded-xl bg-anna-accent text-base font-bold tracking-[0.1em] text-anna-dark uppercase shadow-lg transition-all duration-200 hover:brightness-105 active:scale-[0.99]'
              : 'mt-[0.4cqw] h-[3.5cqw] cursor-pointer rounded-[0.85cqw] bg-anna-accent text-[0.85cqw] font-bold tracking-[0.1em] text-anna-dark uppercase shadow-[0_0.5cqw_1.22cqw_-0.5cqw_rgba(0,0,0,0.25)] transition-all duration-200 hover:brightness-105 active:scale-[0.99]'
          }
        >
          Quiero ser parte
        </button>
      </form>
    </>
  )
}

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('Casual')
  const [smsConsent, setSmsConsent] = useState(false)
  const [closetContact, setClosetContact] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  const formProps = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    selectedStyle,
    setSelectedStyle,
    closetContact,
    setClosetContact,
    smsConsent,
    setSmsConsent,
    onSubmit: handleSubmit,
  }

  return (
    <main className="min-h-dvh overflow-x-hidden bg-anna-bg font-sans text-anna-cream">
      {/* ── Mobile view ── */}
      <div className="lg:hidden">
        <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-4 pb-10 pt-6">
          <header className="mb-6 shrink-0 text-center">
            <img
              className="mx-auto w-full max-w-[220px]"
              src="/assets/anna-logo.svg"
              alt="ANNA"
              width={484}
              height={98}
            />
            <p className="mt-[-0.25rem] pr-2 text-right font-script text-[clamp(1.5rem,6vw,2rem)] leading-none">
              marketplace
            </p>
          </header>

          <div className="relative overflow-hidden rounded-2xl border border-anna-burgundy-border bg-anna-burgundy p-5 shadow-[0_16px_48px_rgba(0,0,0,0.4)] sm:p-6">
            <div
              className="pointer-events-none absolute inset-0 bg-anna-burgundy-texture opacity-35"
              aria-hidden="true"
            />
            <section className="relative grid gap-5" aria-labelledby="waitlist-title-mobile">
              <WaitlistForm
                variant="mobile"
                titleId="waitlist-title-mobile"
                {...formProps}
              />
            </section>
          </div>

          <p className="mt-6 text-center font-script text-2xl text-anna-muted/80">
            Visto x gusto
          </p>
        </div>
      </div>

      {/* ── Desktop view ── */}
      <div className="relative hidden min-h-dvh lg:block">
        <aside className="absolute top-1/2 left-[2.5vw] z-10 w-[min(20vw,240px)] -translate-y-1/2">
          <div className="w-full max-w-[min(380px,88vw)]">
            <img
              className="block w-full"
              src="/assets/anna-logo.svg"
              alt="ANNA"
              width={484}
              height={98}
            />
            <p className="mt-[-0.5rem] pr-3 text-right font-script text-[clamp(1.85rem,4vw,3.25rem)] leading-none">
              marketplace
            </p>
          </div>
        </aside>

        <section className="flex min-h-dvh items-center justify-center py-2 pl-[min(22vw,270px)]">
          <div className="@container relative aspect-[1724/2153] h-[min(86dvh,1080px)] w-auto max-w-[calc(100vw-min(22vw,270px)-1rem)] shrink-0 origin-center overflow-visible drop-shadow-[0_32px_64px_rgba(0,0,0,0.45)] zoom-[1.48] xl:zoom-[1.58]">
            <div className={`${paperSceneClass} z-0`} aria-hidden="true">
              <img
                className="absolute inset-0 h-full w-full rounded-[1.2cqw] object-fill"
                src="/assets/background.png"
                alt=""
              />
              <img
                className="absolute top-[22.8%] left-[26.7%] z-20 w-[19%] -rotate-[11deg] shadow-[0_0.9cqw_1.7cqw_rgba(0,0,0,0.28)]"
                src="/assets/hero-image.png"
                alt=""
              />
              <img
                className="absolute top-[21.2%] left-[28.5%] z-30 w-[5.6%]"
                src="/assets/object-left-59747c.png"
                alt=""
              />
              <p className="absolute top-[27.5%] left-[49%] z-20 m-0 font-script text-[4.25cqw] leading-none text-anna-ink">
                Visto x gusto
              </p>
            </div>

            <section
              className="absolute top-[46.5%] left-[18.8%] z-40 grid w-[61.5%] gap-[2.8cqw] rounded-[1.1cqw] border border-anna-burgundy-border bg-anna-burgundy px-[4.2cqw] py-[4.8cqw] shadow-[0_0.9cqw_1.7cqw_rgba(0,0,0,0.25)]"
              aria-labelledby="waitlist-title-desktop"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-anna-burgundy-texture opacity-35"
                aria-hidden="true"
              />
              <WaitlistForm
                variant="desktop"
                titleId="waitlist-title-desktop"
                {...formProps}
              />
            </section>

            <div className={`${paperSceneClass} z-50`} aria-hidden="true">
              <img
                className="absolute top-[47.3%] left-[69.7%] w-[13%]"
                src="/assets/object-right-76481c.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
