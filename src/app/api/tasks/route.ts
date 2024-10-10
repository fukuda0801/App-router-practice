import { NextResponse } from "next/server";

export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  { id: 1, name: "ハム太郎" },
  { id: 2, name: "ハム次郎" },
  { id: 3, name: "ハム三郎" },
];

export const GET = async () => {
  return NextResponse.json({ tasks }, { status: 200 });
};

export const dynamic = "force-dynamic";
