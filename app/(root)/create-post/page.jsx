




"use client";



import { useUser } from "@clerk/nextjs";
import Loader from "@components/Loader";
import Posting from "@components/form/Posting";
import { useEffect, useState } from "react";




const CreatePost = () => {

  const { user, isLoaded } = useUser();// current user in Clerk (whole user's data)
  const [loading, setLoading] = useState(true);// for Loader


  //* получаем user из MongoDB ========================== 
  //* api/user/[id]/route.jsx
  const [userData, setUserData] = useState({});// получаем response из MongoDB

  const getUser = async () => {
    const response = await fetch(`/api/user/${user.id}`);
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);
  //* получаем user из MongoDB ========================== 


  // to Posting.jsx component
  const postData = {
    creatorId: userData?._id,
    caption: "",
    tag: "",
    postPhoto: null,
  };



  return loading || !isLoaded ? ( <Loader /> )
   : (
    <div className="pt-6">
      <Posting post={postData} apiEndpoint={"/api/post/new"} />
    </div>
  );
};

export default CreatePost;
