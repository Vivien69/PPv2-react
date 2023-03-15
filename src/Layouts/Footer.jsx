import React from 'react'

function Footer() {
  return (
    <footer role="foot" className='bg-slate-800 px-4 py-8 text-white'>
        <section className='mb-6 flex justify-center'>
            Bienvenue sur le meilleur site de parrainage<br />
            Venez déposer vos annonces de parrainage et remporter de nombeux filleuls
        </section>

        <section className='flex space-between justify-center'>

            <div className='py-3 px-1 lg:px-6'>
                <span className='block font-semibold py-2'>Communauté</span>
                <ul>
                    <li>Ajouter un parrainage</li>
                    <li>Discussion</li>
                </ul>
            </div>

            <div className='py-3 px-1 lg:px-6'>
            <span className='block font-semibold py-2'>Promo-parrain</span>
                <ul>
                    <li>Mentions légales</li>
                    <li>Conditions Générales d'Utilisation</li>
                    <li>Contactez-nous</li>
                </ul>
            </div>

            <div className='py-3 px-1 lg:px-6'>
            <span className='block font-semibold py-2'>Partenaires</span>
                <ul>
                    <li></li>
                </ul>
            </div>

        </section>
    </footer>
  )
}

export default Footer