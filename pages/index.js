import Head from 'next/head'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'

export default function Home({exploreData, cardData}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="https://res.cloudinary.com/codegowdacloud/image/upload/v1628091208/Screenshot_2021-08-04_at_9.03.16_PM_oaguoh.png" />

      </Head>
      <Nav />
      <br/>
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16' >
        <section className='pt-6' >
          <h2 className='text-4xl font-semibold pb-5' >Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cold-2 lg:grid-cols-3 xl-grid-cols-4' >
            {exploreData?.map(({img, distance, location}) => (
                <SmallCard 
                key={img}
                img={img}
                distance={distance}
                location={location}
                />
              ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-6 overflow-scroll ' >
            {cardData?.map(({img, title}) => (
              <MediumCard
              key={img}
              img={img}
              title={title}
              />
            ))}
          </div>
        </section>
        <section>
          <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          desc='Wishlist curated by Houserent'
          buttonTitle='Get Inspired'
          />
        </section>
      </main>

    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').
  then(
    (res) => res.json()
  );

  const cardData = await fetch('https://links.papareact.com/zp1').
  then(
    (res) => res.json()
    )

  return{
    props: {
      exploreData,
      cardData
    }
  }
}