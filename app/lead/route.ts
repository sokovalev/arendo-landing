import { NextResponse } from "next/server";
import { addLead } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Неверный формат email" },
        { status: 400 }
      );
    }

    const lead = addLead(email);

    if (!lead) {
      return NextResponse.json(
        { error: "Не удалось сохранить email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email сохранен успешно", lead },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
