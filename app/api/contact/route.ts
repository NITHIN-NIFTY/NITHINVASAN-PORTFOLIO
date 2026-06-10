import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const response = await fetch(
      "https://hook.eu1.make.com/fu4yuqteiwgfiihr2odi8v7u1ym7c535",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )

    if (!response.ok) {
      throw new Error("Webhook request failed")
    }

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}