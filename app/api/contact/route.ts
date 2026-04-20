import { sendContactMail } from "@/service/email";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        await sendContactMail(data);

        return Response.json({
            success: true,
            message: "Email sent successfully",
        });
    } catch (error: unknown) {
        console.error("FULL ERROR:", error);

        let message = "Unknown error";

        if (error instanceof Error) {
            message = error.message;
        }

        return Response.json(
            {
                success: false,
                message,
            },
            { status: 500 }
        );
    }
}