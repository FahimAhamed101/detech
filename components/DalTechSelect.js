"use client";
import useClickOutside from "@/utility/useClickOutside";
import { useState } from "react";

const DalTechSelect = ({ items, style = "" }) => {
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  let items_ = items
    ? items
    : [
        { id: 1, title: "USD" },
        { id: 2, title: "BSD" },
        { id: 3, title: "NSD" },
      ];

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(items_[0].title);
  return (
    <div
      className={`nice-select ${style} ${toggle ? "open" : ""}`}
      ref={domNode}
      onClick={() => setToggle(!toggle)}
    >
      <span className="current">{active}</span>
      <ul className="list">
        {items_.map((item) => (
          <li
            key={item.id}
            className={`option ${active == item.title ? "selected focus" : ""}`}
            onClick={() => {
              setActive(item.title);
              setToggle(false);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DalTechSelect;
