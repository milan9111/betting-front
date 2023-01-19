import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";
import "./error.scss";

const Error: React.FC = () => {
  return (
    <section className="error">
      <div className="error__container">
        <Result
          status="404"
          title={<p className="error__title">404</p>}
          subTitle={
            <p className="error__subtitle">
              Sorry, the page you visited does not exist.
            </p>
          }
          extra={
            <Link to="/" className="error__link">
              Back Home
            </Link>
          }
        />
      </div>
    </section>
  );
};

export default Error;
