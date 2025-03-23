


"use client";




import { ClerkProvider, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { UserButton, useUser } from "@clerk/nextjs";// текущие данные конкрктного пользователя кто залогинен
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import Loader from "@components/Loader";
//import Loader from "../Loader";


import { useClerk } from '@clerk/clerk-react';// работает сам поставил
import LogoutIcon from '@mui/icons-material/Logout';



//* to (root)/layout.js    левая сторона сайта
const LeftSideBar = () => {

  const { signOut } = useClerk();// работает сам поставил


  // start STEPS 1:48:00 min. ========================================================================================================
  //TODO ШАГ 1 => получаем из Clerk текущего залогиненого user, все его данные в clerk используя useUser()
  const { user, isLoaded } = useUser();// текущие данные конкрктного пользователя кто залогинен
  console.log("current user data Clerk LeftSideBar.jsx ==============> ", user)
  //TODO ШАГ 2 создаем GET endpoint => api/user/[id]/route.js для получения user из MongoDB
  //TODO ШАГ 3 
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  //TODO ШАГ 4 
  const getUser = async () => {
    // ${user.id} значит id Clerk пользователя/user и получаем его из MongoDB
    // те в MongoDB этот же пользователь как clerkId
    // те ${user.id} это user id в Clerk и он же как clerkId в MongoDB
    const response = await fetch(`/api/user/${user.id}`);// это Clerk id
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };
   //TODO ШАГ 5
  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);//[user] значит если [user] данные сменятся то getUser(); снова сработает
  // end STEPS ========================================================================================================






  return loading || !isLoaded ? ( <Loader /> ) : (
   // return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar">
      <Link href="/">

      {/* original */}
      <Image src="/assets/logo.png" alt="logo" width={200} height={200} />

        {/* <Image
          src="https://tse1.mm.bing.net/th?id=OIP.lfKmO91p_sJaYBSg4BIeTAHaE8&pid=Api" // Direct link to the image
          alt="logo"
          width={200}
          height={200}
        /> */}
       
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href={`/profile/${userData._id}/posts`}>

            <Image
              src={userData?.profilePhoto}     // original
              //src="/assets/phucmai.png"
              alt="profile photo"
              width={50}
              height={50}
              className="rounded-full"
            />

          </Link>

          <p className="text-small-bold text-orange-600"> {userData?.firstName} <span className='text-white'>/</span> {userData?.lastName} </p>
      

        </div>
        <div className="flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.posts?.length}</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.followers?.length}</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.following?.length}</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
      </div>

      <hr />

      <Menu />

      <hr />

      <div className="flex gap-4 items-center">
        {/* <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/sign-in"/>            original  */}

        {/* эти кнопки я сам поставил чтобы sign-in появлялся*/}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>

        <br />

        {/* <UserButton appearance={{ baseTheme: dark }} /> */}
        <p className="text-light-1 text-body-bold">Manage Account</p>
      </div>





      {/* эту я сам добавил    работает так */}
      {/* <SignedIn className="s-out">
        <LogoutIcon />
        <button onClick={() => signOut()}>Sign Out</button>
      </SignedIn> */}
      <SignedIn>
        <div className="s-out">
          <LogoutIcon />
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      </SignedIn>




    </div>

  );

};

export default LeftSideBar;





