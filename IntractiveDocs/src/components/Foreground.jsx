import { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const reference = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "100mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "This is just a test to test components of javascript.",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Submit Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload Now",
        tagColor: "blue",
      },
    },
  ];
  return (
    <div
      ref={reference}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} key={index} refer={reference} />
      ))}
    </div>
  );
}

export default Foreground;
