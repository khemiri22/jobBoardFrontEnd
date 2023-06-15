import React, { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import { Link, Navigate } from "react-router-dom";
import CompanyNavbar from "./CompanyNavbar";
import { isAuth } from "../../services/shared/isAuth";
import { isCompany } from "../../services/company/IsCompany";
import { getOffre } from "./../../services/company/offer";
const CompanyHome = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getOffre()
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!isAuth() || !isCompany())
    return <Navigate to={"/company/login"} replace />;

  return (
    <div>
      <CompanyNavbar />

      <div className="clearfix"></div>

      <section
        className="inner-header-title"
        style={{ backgroundImage: "url('/assets/img/banner-10.jpg')" }}
      >
        <div className="container">
          <h1>Company Home</h1>
        </div>
      </section>
      <div className="clearfix"></div>

      <section className="manage-company gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="search-filter" style={{ background: "none" }}>
                <div className="col-md-4 col-sm-5">
                  <div className="filter-form">
                    <div className="input-group">
                      <span className="input-group-btn">
                        <Link to={"/company/createoffer"}>
                          <button
                            type="button"
                            className="btn btn-default"
                            style={{ left: "105vh", top: "-6vh" }}
                          >
                            Create Job Offer
                          </button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-12"
              style={{
                top: "-6vh",
              }}
            >
              <h3>Jobs Available in our company</h3>

              {data.map((item, index) => (
                <article key={index}>
                  <div className="mng-company">
                    <div className="col-md-2 col-sm-1">
                      <img
                        src={item.image}
                        className="img-responsive"
                        alt="hello"
                        style={{ width: "10em" }}
                      />
                    </div>
                    <div className="col-md-2 col-sm-1">
                      <div className="mng-company-location">
                        <p style={{ fontWeight: "bolder" }}>{item.titre}</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-1">
                      <div className="mng-company-location">
                        <p style={{ fontWeight: "bold" }}>{item.salaire} $</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-1">
                      <div className="mng-company-location">
                        <p style={{ fontWeight: "bold" }}>{item.typee} </p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-1">
                      <div className="mng-company-location">
                        <p style={{ fontWeight: "bold" }}>{item.deadLine} </p>
                      </div>
                    </div>
                    <div className="col-md-1 col-sm-1">
                      <div className="mng-company-location">
                        <p style={{ fontWeight: "bold" }}>
                          {item.experience} years
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1 col-sm-1">
                      <div className="mng-company-action">
                        <a href="#" data-toggle="tooltip" title="Edit">
                          <i className="fa fa-edit"></i>
                        </a>
                        <a href="#" data-toggle="tooltip" title="Delete">
                          <i className="fa fa-trash-o"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="row">
            <ul className="pagination">
              <li>
                <a href="#">&laquo;</a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-ellipsis-h"></i>
                </a>
              </li>
              <li>
                <a href="#">&raquo;</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyHome;
