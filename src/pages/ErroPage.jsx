import React from 'react'
import { Link } from "react-router-dom";

const ErroPage = () => {
  return (
    <section className='error-page'>
      <div className='center'>
        <Link to="/" className="btn primary">Retour à l'accueil</Link>
        <h2>Page Not Found</h2>
      </div>

    </section>
  )
}

export default ErroPage