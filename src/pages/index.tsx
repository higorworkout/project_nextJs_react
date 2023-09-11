import Home, { HomeProps } from '../templates/Home';
import { loadPages } from '../API/load_pages'
import { GetStaticProps } from 'next';


function Index({ data = null}: HomeProps) {

  return (
      <Home data={data} />
  )
}

export default Index;

// getServerSideProps function async o next vai fazer a pre renderização da pagina em cada requisição


export const getStaticProps: GetStaticProps<HomeProps> = async () => {

    let data;

    try {
      data = await loadPages('?filters[slug]=landing-page&populate=deep')

    }catch(e) {
      console.log(e);
    }

    if(!data) {
       return {
          notFound: true,
       }
    }

    return {
       props: {
          data,
       }
    }

}


