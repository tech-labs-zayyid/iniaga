import { NextRequest, NextResponse } from 'next/server';

const API_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/register`;
console.log('API_URL: ', API_URL)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, image_url, name, password, role, sales_id, username, whatsapp_number } = body;

    // Validasi input
    if (!email || !password || !role || !username) {
      return NextResponse.json({ message: 'Email, password, role, dan username wajib diisi.' }, { status: 400 });
    }

    // Kirim data ke API eksternal
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        image_url,
        name,
        password,
        role,
        sales_id,
        username,
        whatsapp_number
      })
    });

    const result = await response.json();

    return NextResponse.json(result, { status: response.status });
  } catch (error: any) {
    console.log('error: ', error)
    let statusCode = 500;
    let errorMessage = 'Internal Server Error';

    if (error instanceof SyntaxError) {
      statusCode = 400;
      errorMessage = 'Invalid JSON format';
    } else if (error.message.includes('validation failed')) {
      statusCode = 422;
      errorMessage = 'Unprocessable Entity: ' + error.message;
    }

    return NextResponse.json({ message: errorMessage, error: error.message }, { status: statusCode });
  }
}