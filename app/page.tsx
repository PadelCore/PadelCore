export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <h1 className="text-3xl font-black tracking-tight">
            Padel<span className="text-blue-500">Core</span>
          </h1>

          <nav className="hidden gap-8 md:flex">

            <a href="#" className="text-gray-300 hover:text-blue-500 transition">
              Inicio
            </a>

            <a href="#" className="text-gray-300 hover:text-blue-500 transition">
              Productos
            </a>

            <a href="#" className="text-gray-300 hover:text-blue-500 transition">
              Nosotros
            </a>

          </nav>

        </div>

      </header>

      {/* HERO DESKTOP */}

      <section
        className="relative hidden h-screen bg-cover bg-center md:block"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-black/40" />

      </section>

      {/* HERO MOBILE */}

      <section
        className="relative h-screen bg-cover bg-center md:hidden"
        style={{
          backgroundImage: "url('/banner-mobile.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-black/10" />

      </section>

      {/* BENEFICIOS */}

      <section className="border-y border-white/10 bg-zinc-950">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">

          <div className="text-center">

            <h3 className="text-xl font-bold text-blue-500">
              Envíos a todo el país
            </h3>

            <p className="mt-2 text-gray-400">
              Recibí tus productos rápido y seguro.
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-xl font-bold text-blue-500">
              Calidad Premium
            </h3>

            <p className="mt-2 text-gray-400">
              Productos seleccionados para máximo rendimiento.
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-xl font-bold text-blue-500">
              Pagos Seguros
            </h3>

            <p className="mt-2 text-gray-400">
              Comprá con Mercado Pago y tarjetas.
            </p>

          </div>

        </div>

      </section>

      {/* PRODUCTOS */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-14 flex items-center justify-between">

          <h2 className="text-4xl font-black">
            Productos Destacados
          </h2>

          <button className="rounded-full border border-blue-500 px-6 py-3 text-blue-500 transition hover:bg-blue-500 hover:text-white">
            Ver Todo
          </button>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition hover:-translate-y-2 hover:border-blue-500">

            <div className="overflow-hidden">

              <img
                src="/grip1.jpg"
                alt="Grip x1"
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Overgrip X1
              </h3>

              <p className="mt-2 text-gray-400">
                Máximo confort y agarre profesional.
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-2xl font-black text-blue-500">
                  $7.999
                </span>

                <button className="rounded-xl bg-blue-600 px-5 py-3 font-bold transition hover:bg-blue-500">
                  Comprar
                </button>

              </div>

            </div>

          </div>

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition hover:-translate-y-2 hover:border-blue-500">

            <div className="overflow-hidden">

              <img
                src="/grip3.jpg"
                alt="Grip x3"
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Overgrip X3
              </h3>

              <p className="mt-2 text-gray-400">
                El pack ideal para jugadores frecuentes.
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-2xl font-black text-blue-500">
                  $14.999
                </span>

                <button className="rounded-xl bg-blue-600 px-5 py-3 font-bold transition hover:bg-blue-500">
                  Comprar
                </button>

              </div>

            </div>

          </div>

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition hover:-translate-y-2 hover:border-blue-500">

            <div className="overflow-hidden">

              <img
                src="/grip6.jpg"
                alt="Grip x6"
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Overgrip X6
              </h3>

              <p className="mt-2 text-gray-400">
                Rendimiento premium para competir al máximo nivel.
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-2xl font-black text-blue-500">
                  $24.999
                </span>

                <button className="rounded-xl bg-blue-600 px-5 py-3 font-bold transition hover:bg-blue-500">
                  Comprar
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-zinc-950">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

          <div>

            <h2 className="text-3xl font-black">
              Padel<span className="text-blue-500">Core</span>
            </h2>

            <p className="mt-2 text-gray-400">
              Máximo agarre. Máximo rendimiento.
            </p>

          </div>

          <div className="flex gap-6 text-gray-400">

            <a href="#" className="hover:text-blue-500 transition">
              Instagram
            </a>

            <a href="#" className="hover:text-blue-500 transition">
              Contacto
            </a>

            <a href="#" className="hover:text-blue-500 transition">
              WhatsApp
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}