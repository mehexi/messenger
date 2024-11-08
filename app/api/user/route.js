import { connectToDatabase } from "@/lib/mongoDb";
import User from "@/schema/userScema.js";

export async function GET(req) {
    await connectToDatabase();
  
    // Extract user ID from the query parameters
    const url = new URL(req.url);
    const userId = url.searchParams.get("id");
  const username = url.searchParams.get("username");
  
    const users = await User.find();
  
    if (!userId && !username) {
      return new Response(JSON.stringify(users), {
        status: 400,
      });
    }
  
    try {
      // Fetch user by ID or username
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username });
  
      if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
          status: 404,
        });
      }
  
      // Exclude sensitive data (like password) from the response
      const { password, ...userData } = user._doc;
  
      return new Response(JSON.stringify(userData), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
}
  
export async function POST(req) {
    try {
        await connectToDatabase();
        const { username, email, password, profilePicture, role } = await req.json();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new Response(JSON.stringify({ error: "User already exists" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const newUser = await User.create({ username, email, password, profilePicture, role });
        return new Response(JSON.stringify(newUser), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

