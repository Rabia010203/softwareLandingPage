import React from "react";
import Title from "./Title";
import Accordion from 'react-bootstrap/Accordion';

const Faqs = () => {
// The first item will always be open (eventKey 0)
// const [activeKey, setActiveKey] = useState(["0"]);

// const handleSelect = (eventKey) => {
  // Check if the selected key is already active
  // if (activeKey.includes(eventKey)) {
    // If it's the first item, don't allow closing
    // if (eventKey === "0") {
      // return;
    // }
    // Otherwise, allow toggling the item
    // setActiveKey((prevKeys) => prevKeys.filter((key) => key !== eventKey));
  // } else {
    // Open the selected item
    // setActiveKey((prevKeys) => [...prevKeys, eventKey]);
  // }
// };
  return (
    <section className="equal-margin grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-36" id="faqs">
      <div>
        <Title
          title="Faqs"
          text="Have some query? We have got you. Here are some most frequently asked questions regarding our platform"
        />
        <div className="mt-12">
        <Accordion defaultActiveKey="0"   className="">
      <Accordion.Item eventKey="0" className="mb-4 hover:shadow-lg">
        <Accordion.Header className=""> Accordion Item #1  </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="mb-4 hover:shadow-lg">
        <Accordion.Header className="outline-none">Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="mb-4 hover:shadow-lg">
        <Accordion.Header className="">Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

        </div>
      </div>
      <figure>
        <img src="/faqs2.svg" alt="faqs" className="mt-12" width= '450px'/>
      </figure>
    </section>
  );
};

export default Faqs;
