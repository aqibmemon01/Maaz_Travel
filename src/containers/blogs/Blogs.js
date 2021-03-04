import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Blogs() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">VEHICLES</h1>
        <p className="subTitle blog-subtitle">
          We are providing different types of vehicles 
          </p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogSection.blogs.map(blog => {
            return (
              <BlogCard
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
