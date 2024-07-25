"use server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const token = process.env.DIRECTUS_TOKEN;

export async function POST(req: Request) {
    const auth = req.headers.get("Authorization");
    if (auth !== `Bearer ${token}`) {
        return new NextResponse("Unauthorized!!! >:(", {
            status: 401
        });
    }

    revalidatePath("/", "layout");
    return new NextResponse("Revalidated root", {
        status: 200
    });
}
