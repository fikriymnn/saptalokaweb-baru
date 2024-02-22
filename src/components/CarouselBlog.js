"use client";
import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import BlogCardLS from "./BlogCardLS";

export default function CarouselBlog({ dataBlog }) {
  return (
    <div className="h-40 md:h-80 border">
      <Carousel>
        {dataBlog.map((data, i) => {
          return (
            <BlogCardLS
              key={i}
              image={data.img}
              title={data.title}
              slug={"/" + data.id}
              content={data.description}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
