import React from "react";

import moment from "moment";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt=""
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex flex-wrap items-center mb-8 w-full">
            <div className="flex md:flex  justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
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
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
