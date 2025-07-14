import { NextResponse } from "next/server";
import { addLead, getLeads } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email, isAgreed } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!isAgreed) {
      return NextResponse.json(
        { error: "Согласие на обработку данных не получено" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Неверный формат email" },
        { status: 400 }
      );
    }

    const lead = addLead(email, isAgreed);

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

export async function GET() {
  const leads = await getLeads();
  return NextResponse.json(leads);
}
