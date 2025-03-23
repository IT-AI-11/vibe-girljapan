


//import Post from "@lib/models/Post";
import User from "@lib/models/User";
import { connectToDB } from "@lib/mongodb/mongoose";


//* request from LeftSideBar.jsx
//* CreatePost.jsx 
export const GET = async (req, { params }) => {

    const awaitparams = await params;//await чтобы ошибку убрать 

  try {
    await connectToDB();

    //const user = await User.findOne({ clerkId: params.id }).populate("followers following").exec();    original
    const user = await User.findOne({ clerkId: awaitparams.id }).populate("followers following").exec();

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Failed to get user", { status: 500 });
  }
};