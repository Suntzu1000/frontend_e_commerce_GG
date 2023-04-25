import React from "react";
import BreadCrumb from "../components/BreadCrump";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contate-nos"} />
      <BreadCrumb title="Contate-nos" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">

          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d675.583154726325!2d-49.27676154376475!3d-16.69311712277857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6ade1404ca9%3A0x66c13c9bcc70c10!2sUniCesumar%20-%20Goi%C3%A2nia%2FSetor%20Bueno!5e0!3m2!1sen!2sbr!4v1681904180622!5m2!1sen!2sbr"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-4 ">Contate-nos</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Número de Telefone"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comentários"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4 ">
                    Entre em contato conosco
                  </h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">Brazil. Goiás</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a
                          href="https://wa.me/62995396918"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          62 9 95396918
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a
                          href="mailto:gabrielfootze@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          gabrielfootze@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">
                          Segunda á Sabado, 08:00AM - 18:00PM
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};
export default Contact;
