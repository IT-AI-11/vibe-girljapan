



import Post from "@lib/models/Post"
import User from "@lib/models/User"
import { connectToDB } from "@lib/mongodb/mongoose"
import { writeFile } from "fs/promises"//* внутренняя помять лаптопа



//* from Posting.js component
export const POST = async (req) => {

  //* из Компьютера фото загружать эти две строки  
  const path = require("path")
  //* C:\Users\Laptop NET\Desktop\Next.js projects\nextjs-mongodb-19-vibe-girljapan
  const currentWorkingDirectory = process.cwd()//* cwd значит current working directory =>  C:\Users\Laptop NET\Desktop\Next.js projects\nextjs-mongodb-19-vibe-girljapan
  
  try {
    await connectToDB()

    const data = await req.formData()

    let postPhoto = data.get("postPhoto")

    const bytes = await postPhoto.arrayBuffer()//* внутренняя память Лаптопа
    const buffer = Buffer.from(bytes)

    //* из внутренней памяти компьютера
    const postPhotoPath = path.join(
      currentWorkingDirectory,
      "public",
      "uploads",
      postPhoto.name
    )

    await writeFile(postPhotoPath, buffer)//* внутренняя память Лаптопа

    // это для MongoDB
    postPhoto = `/uploads/${postPhoto.name}`

    const newPost = await Post.create({
      creator: data.get("creatorId"),
      caption: data.get("caption"),
      tag: data.get("tag"),
      postPhoto: postPhoto
    })

    await newPost.save()

    // Update the user's posts array
    await User.findByIdAndUpdate(
      data.get("creatorId"),
      { $push: { posts: newPost._id } },
      { new: true, useFindAndModify: false }
    )

    return new Response(JSON.stringify(newPost), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response("Failed to create a new post", { status: 500 })
  }
}



