
// endpoint


import User from "@lib/models/User";
import { connectToDB } from "@lib/mongodb/mongoose";


// эта функция положит нового пользователя из Clerk в MongoDB 
// POST, UPDATE одной функцией
//! from api/webhook/route.js
export const createOrUpdateUser = async (

  // ШАГ 3. получаем эти данные из from api/webhook/route.js в том же порядке как они там
  // из Clerk приходят эти свойства, когда пользователь создан 
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    
    // connect to MongoDB
    await connectToDB();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_addresses[0].email_address,
          username: username,
        },
      },
      { upsert: true, new: true } // if user doesn't exist, create a new one
    );

    await user.save();
    return user;
  } catch (error) {
    console.error(error);
  }
};


// удалит пользователя
// DELETE
export const deleteUser = async (id) => {
  try {
    await connectToDB();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.error(error);
  }
};