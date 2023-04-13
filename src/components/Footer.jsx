import React from "react";

import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center ">
                <img src="images/newsletter.png" alt="Notícias" />
                <h2 className="mb-0 text-white">Receber Notícias</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Seu E-mail "
                  aria-label="Seu E-mail "
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Inscrever-se
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4 ">Contate-nos</h4>
              <div>
                <a
                  href="tel: 62 995396918"
                  className="mt-3 d-block mb-1 text-white "
                >
                  62 995396918
                </a>
                <a
                  href="mailto: gabrielfootze@gmail.com"
                  className="mt-2 d-block mb-0 text-white "
                >
                  gabrielfootze@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4 ">
                  <a
                    className="text-white"
                    href="https://www.linkedin.com/in/gabriel-andrade-52a803205/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://github.com/Suntzu1000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://wa.me/62995396918"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsWhatsapp className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4 ">Informações</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-3 mb-1">
                  Política de Privacidade
                </Link>
                <Link className="text-white py-3 mb-1">
                  Política de Reembolso
                </Link>
                <Link className="text-white py-3 mb-1">Política de Envio</Link>
                <Link className="text-white py-3 mb-1">Termos & Condições</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4 ">Conta</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-3 mb-1">Sobre</Link>
                <Link className="text-white py-3 mb-1">Contato</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4 ">Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-3 mb-1">Laptops</Link>
                <Link className="text-white py-3 mb-1">Fones de Ouvido</Link>
                <Link className="text-white py-3 mb-1">Tablets</Link>
                <Link className="text-white py-3 mb-1">Relógios</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white ">
                &copy; {new Date().getFullYear()} Desenvolvido por{" "}
                <a
                  href="https://portfolio2-0-ochre.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gabriel
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
