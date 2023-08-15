import P from 'prop-types';
import config from '../Config/index';
import { mapData } from '../API/map_data';
import Home from '../templates/Home';
import { loadPages } from '../API/load_pages'

function Index({ data = null}) {
  return (
      <Home data={data} />
  )
}

export default Index;

export const getStaticProps = async () => {
    // const raw = await fetch(config.url);
    // const json = await raw.json();
    // const  att = json.data.attributes
    // const data = mapData([att])[0];

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

Index.propTypes = {
  data: P.object,
}
