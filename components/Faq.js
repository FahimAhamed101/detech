"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { agencyFaqs } from "@/utility/fiverrContent";

const Faq = () => {
  const [accordionActive, setAccordionActive] = useState(1);
  return (
    <div className="faq-accordion">
      <Accordion className="accordion" id="accordion" defaultActiveKey="faq1">
        {agencyFaqs.map((item, index) => (
          <div
            key={item.question}
            className="accordion-item wow fadeInUp"
            data-wow-delay=".3s"
          >
            <h4 className="accordion-header">
              <Accordion.Toggle
                as={"button"}
                onClick={() =>
                  setAccordionActive(
                    accordionActive === index + 1 ? null : index + 1
                  )
                }
                className={`accordion-button ${
                  accordionActive === index + 1 ? "" : "collapsed"
                }`}
                eventKey={`faq${index + 1}`}
              >
                {item.question}
              </Accordion.Toggle>
            </h4>
            <Accordion.Collapse
              className="accordion-collapse"
              eventKey={`faq${index + 1}`}
            >
              <div className="accordion-body">{item.answer}</div>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
    </div>
  );
};
export default Faq;
