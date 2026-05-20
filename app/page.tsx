"use client";

import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Home() {

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

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

  // SUMAR CANTIDAD

  const increaseQuantity = (name: string) => {

    setCartItems(
      cartItems.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  };

  // RESTAR CANTIDAD

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

  // CONTADOR TOTAL

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // SUBTOTAL

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
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

        {/* PRODUCTOS */}

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
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>

                    {/* CONTROLES */}

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

        {/* SUBTOTAL */}

        {cartItems.length > 0 && (

          <div className="mt-10 border-t border-white/10 pt-6">

            <div className="flex items-center justify-between">

              <span className="text-lg text-gray-400">
                Subtotal
              </span>

              <span className="text-2xl font-black text-blue-500">
                ${subtotal.toLocaleString()}
              </span>

            </div>

            <button className="mt-6 w-full rounded-2xl bg-blue-600 py-4 font-bold transition hover:bg-blue-500">
              Finalizar compra
            </button>

          </div>

        )}

      </div>

      {/* NAVBAR */}

      <header className="fixed top-0 z-30 w-full border-b border-white/10 bg-black/40 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-4">

          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Padel<span className="text-blue-500">Core</span>
          </h1>

          <button
            onClick={() => setCartOpen(true)}
            className="relative rounded-full border border-white/10 p-2 md:p-3 transition hover:border-blue-500 hover:bg-blue-500/10"
          >

            <ShoppingCart size={20} className="md:size-[22px]" />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] md:text-xs font-bold">
              {totalItems}
            </span>

          </button>

        </div>

      </header>

      {/* HERO */}

      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/banner.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-black/40" />

      </section>

      {/* PRODUCTOS */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-14 text-3xl md:text-4xl font-black">
          Productos Destacados
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {/* PRODUCTO 1 */}

          <div className="rounded-3xl border border-white/10 bg-zinc-900">

            <img
              src="/grip1.jpg"
              alt="Grip x1"
              className="h-80 w-full rounded-t-3xl object-cover"
            />

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

                <button
                  onClick={() =>
                    addToCart({
                      name: "Overgrip X1",
                      price: 7999,
                      image: "/grip1.jpg",
                    })
                  }
                  className="rounded-xl bg-blue-600 px-5 py-3 font-bold transition hover:bg-blue-500"
                >
                  Comprar
                </button>

              </div>

            </div>

          </div>

          {/* PRODUCTO 2 */}

          <div className="rounded-3xl border border-white/10 bg-zinc-900">

            <img
              src="/grip3.jpg"
              alt="Grip x3"
              className="h-80 w-full rounded-t-3xl object-cover"
            />

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

                <button
                  onClick={() =>
                    addToCart({
                      name: "Overgrip X3",
                      price: 14999,
                      image: "/grip3.jpg",
                    })
                  }
                  className="rounded-xl bg-blue-600 px-5 py-3 font-bold transition hover:bg-blue-500"
                >
                  Comprar
                </button>

              </div>

            </div>

          </div>

          {/* PRODUCTO 3 */}

          <div className="rounded-3xl border border-white/10 bg-zinc-900">

            <img
              src="/grip6.jpg"
              alt="Grip x6"
              className="h-80 w-full rounded-t-3xl object-cover"
            />

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

                <button
                  onClick={() =>
                    addToCart({
                      name: "Overgrip X6",
                      price: 24999,
                      image: "/grip6.jpg",
                    })
                  }
                  className="rounded-xl bg-blue-600 px-5 py-3 font-bold transition hover:bg-blue-500"
                >
                  Comprar
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}