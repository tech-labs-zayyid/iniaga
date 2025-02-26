import { NextRequest, NextResponse } from "next/server";
import midtransClient from "midtrans-client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { order_id, gross_amount, customer_name, email, phone } = body;

    // Inisialisasi Midtrans Snap
    let snap = new midtransClient.Snap({
      isProduction: false, // Ubah ke true jika production
      serverKey: "SB-Mid-server-HKeSO-0JmDGgM8-fmnl2L7Mu" as string, // Ambil dari .env
    });

    let parameter = {
      transaction_details: {
        order_id,
        gross_amount,
      },
      customer_details: {
        first_name: customer_name,
        email,
        phone,
      },
    };

    // Buat transaksi dan dapatkan Snap Token
    const transaction = await snap.createTransaction(parameter);

    return NextResponse.json(transaction, { status: 200 });
  } catch (error) {
    console.error("Midtrans Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
