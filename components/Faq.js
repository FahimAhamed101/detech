"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const items = [
  { id: 1, title: "How can I get a venture capitalist to pay?" },
  { id: 2, title: "How do you find different criteria in your process?" },
  { id: 3, title: "How can I get a venture capitalist to pay?" },
  { id: 4, title: "How can I get a venture capitalist to pay?" },
];

const Faq = () => {
  const [accordionActive, setAccordionActive] = useState(1);
  const collapseClass = (value) =>
    accordionActive == value ? "" : "collapsed";
  return (
    <div className="faq-accordion">
      <Accordion className="accordion" id="accordion" defaultActiveKey="faq1">
        {items.map((item) => (
          <div
            key={item.id}
            className="accordion-item wow fadeInUp"
            data-wow-delay=".3s"
          >
            <h4 className="accordion-header">
              <Accordion.Toggle
                as={"button"}
                onClick={() =>
                  setAccordionActive(
                    accordionActive == item.id ? null : item.id
                  )
                }
                className={`accordion-button ${
                  accordionActive == item.id ? "" : "collapsed"
                }`}
                eventKey={`faq${item.id}`}
              >
                {item.title}
              </Accordion.Toggle>
            </h4>
            <Accordion.Collapse
              className="accordion-collapse"
              eventKey={`faq${item.id}`}
            >
              <div className="accordion-body">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit .
              </div>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
    </div>
  );
};
export default Faq;
