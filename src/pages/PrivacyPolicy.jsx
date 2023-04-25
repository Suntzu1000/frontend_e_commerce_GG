import React from 'react'
import BreadCrumb from '../components/BreadCrump'
import Meta from '../components/Meta'
import Container from '../components/Container'

const PrivacyPolicy = () => {
  return (
   <>
    <Meta title={"Politica de Privacidade"} />
    <BreadCrumb title="Politica de Privacidade" />
    <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">Blablabla</div>
            </div>
          </div>
      </Container>
   </>
  )
}

export default PrivacyPolicy