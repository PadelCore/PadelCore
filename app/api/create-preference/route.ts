import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: body.items,

        back_urls: {
          success: "https://google.com",
          failure: "https://google.com",
          pending: "https://google.com",
        },

        auto_return: "approved",
      },
    });

    return NextResponse.json({
      id: result.id,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Error creando preferencia",
      },
      {
        status: 500,
      }
    );

  }

}