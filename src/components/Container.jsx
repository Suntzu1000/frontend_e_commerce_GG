import React from "react";

const Container = (props) => {
  return (
    <section className={`bg-gray-100 ${props.class1}`}>
      <div className="container mx-auto p-4 sm:p-6 md:p-8">{props.children}</div>
    </section>
  );
};

export default Container;