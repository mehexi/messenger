import { connectToDatabase } from "@/lib/mongoDb";

export async function GET(req) {
    try {
        await connectToDatabase();
        return new Response(JSON.stringify({ message: 'Successfully connected to MongoDB' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Database connection failed', error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
