import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";

const token = process.env.OG_IMAGE_TOKEN;

interface PostRequest {
    title: string;
    description: string;
    author: string;
}

export async function POST(req: Request) {
    try {
        const auth = req.headers.get("Authorization");
        if (auth !== `Bearer ${token}`) {
            return new NextResponse("Unauthorized!!! >:(", {
                status: 401
            });
        }

        const data: PostRequest = await req.json();
        const url = process.env.NEXT_PUBLIC_SITE_URL_SHORT;

        if (!data.title || !data.description || !data.author) {
            return new NextResponse("Missing required fields.", {
                status: 400
            });
        }

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#fff"
                    }}
                >
                    <h1 style={{ fontSize: 32, fontWeight: 800 }}>{data.title}</h1>
                    <h2>{data.description}</h2>
                    <h3>{data.author}</h3>
                    <h4>{url}</h4>
                </div>
            ),
            {
                width: 800,
                height: 400
            }
        );
    } catch (error) {
        console.error(error);
        return new NextResponse("Sorry, something went wrong.", {
            status: 500
        });
    }
}
