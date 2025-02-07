import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json({
    email: "hitler@gmail.com",
    name: "Hitler",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("body" + body.email);

  const token = req.headers.get("Authorization");
  console.log("token is " + token?.split("")[1]);

  const query = req.nextUrl.searchParams.get("name");
  console.log("query" + query);

  return NextResponse.json({
    msg: "You are signed up",
  });
}
