




"use client";

import {
  Home,
  AddPhotoAlternateOutlined,
  GroupOutlined,
  BookmarksOutlined,
  FavoriteBorder,
} from "@mui/icons-material";


import { useEffect, useState } from "react";
import { Add, Logout, Person, Search } from "@mui/icons-material";

//import { PersonAddIcon } from '@mui/icons-material';

import { useRouter } from "next/navigation";
import { SignOutButton, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { dark } from "@clerk/themes";
import Loader from "@components/Loader";



//* to MainContainer.jsx  середина сайта
const TopBar = () => {

  const { user, isLoaded } = useUser();

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});




  // start request to api endpoint ========================================
  // const getUser = async () => {
  //   const response = await fetch(`/api/user/${user.id}`);
  //   const data = await response.json();
  //   setUserData(data);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   if (user) {
  //     getUser();
  //   }
  // }, [user]);
  // end request to api endpoint ========================================




  const router = useRouter();

  const [search, setSearch] = useState("");

  // original
  // return !isLoaded || loading ? (
  //   <Loader />
  // ) : (

  // my
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          className="search-bar"
          placeholder="Search posts, people, ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search
          className="search-icon"
          onClick={() => router.push(`/search/posts/${search}`)}
        />
      </div>



      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add /> <p>Create A Post</p>
      </button>


      <SignedIn>
        <UserButton />
      </SignedIn>
      <Link href={`/profile/${userData._id}/posts`}>
        <Person sx={{ fontSize: "35px", color: "white" }} />
      </Link>


      {/* на большом экране этот код спрятан md:hidden */}
      <div className="flex gap-4 md:hidden">
        <Link href={`/profile/${userData._id}/posts`}>
          <Person sx={{ fontSize: "35px", color: "white" }} />
        </Link>
        {/* <AddPhotoAlternateOutlined sx={{ color: "white", fontSize: "26px" }} /> */}
        {/* <PersonAddIcon sx={{ color: "white", fontSize: "26px" }}/> */}
        {/* <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/sign-in" />   original  */}
        <UserButton appearance={{ baseTheme: dark }} />
      </div>


    </div>


  );
};

export default TopBar;
