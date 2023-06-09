import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Menu({ cat }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://blog-backend.up.railway.app/api/posts/?cat=${cat}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis architecto vitae soluta molestias consequuntur dignissimos hic harum vel quaerat mollitia reiciendis, at, excepturi quidem dicta qui facere porro similique molestiae.",
  //     img: "https://images.pexels.com/photos/13072621/pexels-photo-13072621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis architecto vitae soluta molestias consequuntur dignissimos hic harum vel quaerat mollitia reiciendis, at, excepturi quidem dicta qui facere porro similique molestiae.",
  //     img: "https://images.pexels.com/photos/13766882/pexels-photo-13766882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis architecto vitae soluta molestias consequuntur dignissimos hic harum vel quaerat mollitia reiciendis, at, excepturi quidem dicta qui facere porro similique molestiae.",
  //     img: "https://images.pexels.com/photos/14935624/pexels-photo-14935624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}
