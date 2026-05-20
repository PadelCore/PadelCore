"use client";

import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  ArrowLeft,
} from "lucide-react";

import { useState } from "react";

export default function Home() {

  // PRODUCTOS

  const products = [
    {
      id: 1,
      name: "Overgrip X1",
      price: 7999,
      image: "/grip1.jpg",
      description:
        "Máximo confort y agarre profesional para jugadores exigentes.",
    },

    {
      id: 2,
      name: "Overgrip X3",
      price: 14999,
      image: "/grip3.jpg",
      description:
        "El pack ideal para jugadores frecuentes que buscan rendimiento.",
    },

    {
      id: 3,
      name: "Overgrip X6",
      price: 24999,
      image: "/grip6.jpg",
      description:
        "Rendimiento premium para competir al máximo nivel.",
    },
  ];

  // ESTADOS

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // AGREGAR PRODUCTO

  const addToCart = (product: any) => {

    const existingProduct = cartItems.find(
      (item) => item.name === product.name
    );

    if (existingProduct) {

      setCartItems(
        cartItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 },
      ]);

    }

  };

  // SUMAR

  const increaseQuantity = (name: string) => {

    setCartItems(
      cartItems.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  };

  // RESTAR

  const decreaseQuantity = (name: string) => {

    const updatedItems = cartItems
      .map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedItems);

  };

  // TOTALES

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (

    <>

      {/* PRODUCT PAGE */}

      {selectedProduct && (

  <main className="min-h-screen bg-black text-white">

  {/* OVERLAY */}

  {cartOpen && (
    <div
      onClick={() => setCartOpen(false)}
      className="fixed inset-0 z-40 bg-black/70"
    />
  )}

  {/* CARRITO */}

  <div
    className={`fixed right-0 top-0 z-50 h-full w-[350px] transform border-l border-white/10 bg-zinc-950 p-6 transition-transform duration-300 ${
      cartOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >

    <div className="flex items-center justify-between">

      <h2 className="text-2xl font-black">
        Tu carrito
      </h2>

      <button
        onClick={() => setCartOpen(false)}
        className="rounded-full p-2 transition hover:bg-white/10"
      >
        <X size={24} />
      </button>

    </div>

    <div className="mt-8 space-y-4">

      {cartItems.length === 0 ? (

        <p className="text-gray-400">
          Todavía no agregaste productos.
        </p>

      ) : (

        cartItems.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-xl object-cover"
              />

              <div className="flex-1">

                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p className="font-bold text-blue-500">
                  ${(item.price * item.quantity).toLocaleString("es-AR")}
                </p>

              </div>

            </div>

          </div>

        ))

      )}

    </div>

  </div>

    {/* NAVBAR */}

    <header className="fixed top-0 z-30 w-full border-b border-white/10 bg-black/40 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">

        <h1 className="text-2xl font-black tracking-tight md:text-3xl">
          Padel<span className="text-blue-500">Core</span>
        </h1>

        <button
          onClick={() => setCartOpen(true)}
          className="relative rounded-full border border-white/10 p-2 transition hover:border-blue-500 hover:bg-blue-500/10 md:p-3"
        >

          <ShoppingCart size={20} />

          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold md:h-6 md:w-6 md:text-xs">
            {totalItems}
          </span>

        </button>

      </div>

    </header>

          <div className="mx-auto max-w-7xl px-6 py-20">

            {/* VOLVER */}

            <button
              onClick={() => setSelectedProduct(null)}
              className="mb-10 flex items-center gap-3 rounded-2xl border border-white/10 px-5 py-3 transition hover:bg-white/10"
            >

              <ArrowLeft size={20} />

              Volver

            </button>

            {/* PRODUCTO */}

            <div className="grid gap-12 lg:grid-cols-2">

              {/* IMAGEN */}

              <div>

                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full rounded-3xl border border-white/10 object-cover"
                />

              </div>

              {/* INFO */}

              <div>

                <p className="mb-3 font-bold text-blue-500">
                  PadelCore
                </p>

                <h1 className="text-5xl font-black">
                  {selectedProduct.name}
                </h1>

                <p className="mt-6 text-5xl font-black text-blue-500">
                  ${selectedProduct.price.toLocaleString("es-AR")}
                </p>

                <p className="mt-8 text-lg leading-relaxed text-gray-400">
                  {selectedProduct.description}
                </p>

                {/* BENEFICIOS */}

                <div className="mt-10 space-y-4">

                  <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
                    ✅ Envíos a todo el país
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
                    ✅ Calidad premium garantizada
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
                    ✅ Pagos seguros con Mercado Pago
                  </div>

                </div>

                {/* BOTONES */}

<div className="mt-10 flex flex-col gap-4 md:flex-row">

  <button
    onClick={() => {
      addToCart(selectedProduct);
      setCartOpen(true);
    }}
    className="w-full rounded-2xl bg-blue-600 py-5 text-lg font-bold transition hover:bg-blue-500"
  >
    Agregar al carrito
  </button>

  <button
    onClick={() => {
      addToCart(selectedProduct);
      setSelectedProduct(null);
      setCheckoutOpen(true);
    }}
    className="w-full rounded-2xl border border-white/10 py-5 text-lg font-bold transition hover:bg-white/10"
  >
    Comprar ahora
  </button>

</div>

              </div>

            </div>

          </div>

        </main>

      )}

      {/* CHECKOUT */}

      {!selectedProduct && checkoutOpen && (


        <main className="min-h-screen bg-black text-white">

          <div className="mx-auto max-w-7xl px-6 py-32">

            {/* HEADER */}

            <div className="mb-14 flex items-center justify-between">

              <h1 className="text-4xl font-black">
                Checkout
              </h1>

              <button
                onClick={() => setCheckoutOpen(false)}
                className="rounded-full border border-white/10 p-3 transition hover:bg-white/10"
              >
                <X size={24} />
              </button>

            </div>

            {/* PASOS */}

            <div className="mb-14 flex flex-wrap items-center gap-4">

              <div className={`rounded-full px-5 py-2 font-bold ${checkoutStep === 1 ? "bg-blue-600" : "bg-white/10 text-gray-400"}`}>
                1. Datos
              </div>

              <div className={`rounded-full px-5 py-2 font-bold ${checkoutStep === 2 ? "bg-blue-600" : "bg-white/10 text-gray-400"}`}>
                2. Envío
              </div>

              <div className={`rounded-full px-5 py-2 font-bold ${checkoutStep === 3 ? "bg-blue-600" : "bg-white/10 text-gray-400"}`}>
                3. Pago
              </div>

            </div>

            <div className="grid gap-10 lg:grid-cols-2">

              {/* FORM */}

              <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">

                {/* STEP 1 */}

                {checkoutStep === 1 && (

                  <>

                    <h2 className="mb-8 text-3xl font-black">
                      Datos personales
                    </h2>

                    <div className="grid gap-5">

                      <input type="text" placeholder="Nombre" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                      <input type="text" placeholder="Apellido" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                      <input type="email" placeholder="Correo electrónico" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                      <input type="text" placeholder="Teléfono" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                      <input type="text" placeholder="DNI" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                    </div>

                    <button
                      onClick={() => setCheckoutStep(2)}
                      className="mt-8 w-full rounded-2xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500"
                    >
                      Continuar
                    </button>

                  </>

                )}

                {/* STEP 2 */}

                {checkoutStep === 2 && (

                  <>

                    <h2 className="mb-8 text-3xl font-black">
                      Dirección de envío
                    </h2>

                    <div className="grid gap-5">

                      <input type="text" placeholder="Dirección" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                      <input type="text" placeholder="Número" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                      <input type="text" placeholder="Departamento / Piso" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                      <input type="text" placeholder="Ciudad" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                      <input type="text" placeholder="Provincia" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                      <input type="text" placeholder="Código postal" className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-blue-500" />

                    </div>

                    <div className="mt-8 flex gap-4">

                      <button
                        onClick={() => setCheckoutStep(1)}
                        className="w-full rounded-2xl border border-white/10 py-4 font-bold transition hover:bg-white/10"
                      >
                        Volver
                      </button>

                      <button
                        onClick={() => setCheckoutStep(3)}
                        className="w-full rounded-2xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500"
                      >
                        Continuar
                      </button>

                    </div>

                  </>

                )}

                {/* STEP 3 */}

                {checkoutStep === 3 && (

                  <>

                    <h2 className="mb-8 text-3xl font-black">
  Pago seguro
</h2>

<div className="rounded-3xl border border-blue-500/20 bg-zinc-950 p-8">

  <div className="flex items-center gap-4">

   <img
  src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Mercado_Pago_Logo.svg"
      alt="Mercado Pago"
      className="h-14 w-auto object-contain"
    />

    <div>

      <h3 className="text-xl font-bold">
        Mercado Pago
      </h3>

      <p className="mt-1 text-gray-400">
        Pagá con tarjetas, saldo en cuenta, transferencia o cuotas.
      </p>

    </div>

  </div>

  <div className="mt-8 space-y-3 text-gray-300">

    <p>
      ✅ Compra protegida
    </p>

    <p>
      ✅ Pagos 100% seguros
    </p>

    <p>
      ✅ Acepta todas las tarjetas
    </p>

  </div>

</div>

                    <div className="mt-8 flex gap-4">

                      <button
                        onClick={() => setCheckoutStep(2)}
                        className="w-full rounded-2xl border border-white/10 py-4 font-bold transition hover:bg-white/10"
                      >
                        Volver
                      </button>

                     <button
  onClick={async () => {

    const response = await fetch("/api/create-preference", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        items: cartItems.map((item) => ({
          title: item.name,
          quantity: item.quantity,
         unit_price: Number(item.price),
        })),
      }),
    });

    const data = await response.json();

    window.location.href =
      `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${data.id}`;

  }}
  className="w-full rounded-2xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500"
>
  Confirmar compra
</button>

                    </div>

                  </>

                )}

              </div>

              {/* RESUMEN */}

              <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">

                <h2 className="mb-8 text-3xl font-black">
                  Tu pedido
                </h2>

                <div className="space-y-5">

                  {cartItems.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-white/10 pb-4"
                    >

                      <div className="flex items-center gap-4">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-xl object-cover"
                        />

                        <div>

                          <h3 className="font-bold">
                            {item.name}
                          </h3>

                          <p className="text-gray-400">
                            Cantidad: {item.quantity}
                          </p>

                        </div>

                      </div>

                      <span className="font-bold text-blue-500">
                        ${(item.price * item.quantity).toLocaleString("es-AR")}
                      </span>

                    </div>

                  ))}

                </div>

                <div className="mt-10 border-t border-white/10 pt-6">

                  <div className="flex items-center justify-between">

                    <span className="text-xl text-gray-400">
                      Total
                    </span>

                    <span className="text-3xl font-black text-blue-500">
                      ${subtotal.toLocaleString("es-AR")}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </main>

      )}

      {/* STORE */}

      {!selectedProduct && !checkoutOpen && (

        <main className="min-h-screen bg-black text-white">

          {/* OVERLAY */}

          {cartOpen && (
            <div
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 z-40 bg-black/70"
            />
          )}

          {/* CARRITO */}

          <div
            className={`fixed right-0 top-0 z-50 h-full w-[350px] transform border-l border-white/10 bg-zinc-950 p-6 transition-transform duration-300 ${
              cartOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-black">
                Tu carrito
              </h2>

              <button
                onClick={() => setCartOpen(false)}
                className="rounded-full p-2 transition hover:bg-white/10"
              >
                <X size={24} />
              </button>

            </div>

            <div className="mt-8 space-y-4">

              {cartItems.length === 0 ? (

                <p className="text-gray-400">
                  Todavía no agregaste productos.
                </p>

              ) : (

                cartItems.map((item, index) => (

                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >

                    <div className="flex items-center gap-4">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-xl object-cover"
                      />

                      <div className="flex-1">

                        <h3 className="font-bold">
                          {item.name}
                        </h3>

                        <p className="font-bold text-blue-500">
                          ${(item.price * item.quantity).toLocaleString("es-AR")}
                        </p>

                        <div className="mt-3 flex items-center gap-3">

                          <button
                            onClick={() => decreaseQuantity(item.name)}
                            className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.name)}
                            className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                          >
                            <Plus size={16} />
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                ))

              )}

            </div>

            {cartItems.length > 0 && (

              <div className="mt-10 border-t border-white/10 pt-6">

                <div className="flex items-center justify-between">

                  <span className="text-lg text-gray-400">
                    Subtotal
                  </span>

                  <span className="text-2xl font-black text-blue-500">
                    ${subtotal.toLocaleString("es-AR")}
                  </span>

                </div>

                <button
                  onClick={() => {
                    setCheckoutOpen(true);
                    setCartOpen(false);
                  }}
                  className="mt-6 w-full rounded-2xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500"
                >
                  Finalizar compra
                </button>

              </div>

            )}

          </div>

          {/* NAVBAR */}

          <header className="fixed top-0 z-30 w-full border-b border-white/10 bg-black/40 backdrop-blur">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">

              <h1 className="text-2xl font-black tracking-tight md:text-3xl">
                Padel<span className="text-blue-500">Core</span>
              </h1>

              <button
                onClick={() => setCartOpen(true)}
                className="relative rounded-full border border-white/10 p-2 transition hover:border-blue-500 hover:bg-blue-500/10 md:p-3"
              >

                <ShoppingCart size={20} />

                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold md:h-6 md:w-6 md:text-xs">
                  {totalItems}
                </span>

              </button>

            </div>

          </header>

          {/* HERO */}

          <section
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage: "url('/banner.jpg')",
            }}
          >

            <div className="absolute inset-0 bg-black/40" />

          </section>

          {/* PRODUCTOS */}

          <section className="mx-auto max-w-7xl px-6 py-20">

            <h2 className="mb-14 text-3xl font-black md:text-4xl">
              Productos Destacados
            </h2>

            <div className="grid gap-8 md:grid-cols-3">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="cursor-pointer rounded-3xl border border-white/10 bg-zinc-900 transition hover:-translate-y-2 hover:border-blue-500"
                  onClick={() => setSelectedProduct(product)}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full rounded-t-3xl object-cover"
                  />

                  <div className="p-6">

                    <h3 className="text-2xl font-bold">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {product.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">

                      <span className="text-2xl font-black text-blue-500">
                        ${product.price.toLocaleString("es-AR")}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className="rounded-xl bg-blue-600 px-5 py-3 font-bold transition hover:bg-blue-500"
                      >
                        Comprar
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </main>

      )}

    </>

  );
}