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

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async () => {
  await sleep(3000);
  return NextResponse.json({ tasks }, { status: 200 });
};

export const dynamic = "force-dynamic";
