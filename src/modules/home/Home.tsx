import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <p>Hello from home page</p>
      <Link href="/posts">
        <a>Go to posts</a>
      </Link>
    </div>
  );
};

export default Home;
