import { connectToDatabase } from "@/lib/mongoDb";

export default async function handler(req, res) {
    try {
        await connectToDatabase();
        res.status(200).json({ message: 'Successfully connected to MongoDB' });
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
}
