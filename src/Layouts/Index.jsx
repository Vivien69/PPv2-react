import React from 'react'
import AsideVisited from './Asides/AsideVisited'
import { Link
 } from 'react-router-dom'
function Index() {
  return (
    <main className='flex p-1'>

      <Link to='/register'>Inscription </Link>

        <section className='lg:w-3/4'>
            
            <h1 className='py-3 font-medium uppercase text-lg sm:text-xl lg:text-3xl md:text-2xl '>Code parrainage - Trouver votre code promo de parrainage</h1>
            <p className='pl-2'>Gagnez des €uros en trouvant facilement des codes promo provenant des parrains sur le marchand de votre choix ou proposez vos offres et vos services de parrainage pour économiser de l'argent.</p>
        
            <h2 className='py-3 font-medium uppercase text-md sm:text-lg lg:text-2xl md:text-xl '>L'expert du Parrainage</h2>
            <p className='pl-2'>Sur Promo-Parrain.com déposer votre offre de parrainage pour la boutiques en ligne de votre choix et trouvez de nombreux filleuls qui vous feront gagner de l'argent. Filleuls trouvez votre parrain et gagnez également de l'argent sur votre 1er achat.
    Promo-parrain est une solution gagnant sur les boutiques en ligne et les sites de cashback, missions... Profitez en dès à présent.</p>

            <h3 className='py-3 font-medium uppercase text-md sm:text-lg lg:text-2xl md:text-xl '>Nouveaux codes promo de parrainage</h3>

        </section>


        <AsideVisited />

    </main>
  )
}

export default Index