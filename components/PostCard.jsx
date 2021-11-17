import React from "react";
import moment from "moment";
import Link from "next/link";
// import Image from "next/image";

const PostCard = ({ post }) => {
  // console.log(post);
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            width="30px"
            height="30px"
            className="rounded-full align-middle"
          />
          <p className="align-middle inline text-gray-700 font-light ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <img
            className="inline h-6 w-6 mr-2"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAARZJREFUOE/t1L8rxVEYx/HXLX+AzAYWLAazhfzYxMJCSklWZTNIWVmVQmKSJOtVLEYTA4sfxewfUHS650TH99b93oz31OkM53nez+d8znlOxT+PSgGvH5s4wmmdejOYxRruf8ckYBem8YYhLOERixjMoDfYQw92cY1OnOA1AS8wETefsYCnqHI9A25gHt04iGsQERiTCXgVlQXYKvaxEyvPZcBjvGM5Ft6K0KB0OAeG3AA/w0BMyH3+wiFuMYWRWLAQ+IEwy4x2dES7/ijsi5dRBtiLh3rAYPRLGRrCCwneFx65BWzIzZaHNZtSL4dWumvIuZ+g8N2d5++witGSoDz8EmOp8cexgrYmoZ/YRrXox26SWUv7BndNVBUHC808AAAAAElFTkSuQmCC"
            alt=""
          />
          <span>{moment(post.createdAt).format("MMM DD,YYYY")}</span>
        </div>
      </div>
      <p className="text-center text-gray-700 text-lg font-normal px-4">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block mt-1 bg-purple-600 text-lg rounded-full font-medium px-4 py-2 text-white cursor-pointer">
            Continue Reading...
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
