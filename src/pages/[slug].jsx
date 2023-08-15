import { loadPages } from '../API/load_pages'
import Home from '../templates/Home'
import P from 'prop-types'

export default function Page({ data }) {
  return <Home data={data} /> ;
}

Page.propTypes = {
  data: P.array,
}

export const getStaticPaths = async () => {
  const load = [await loadPages()]
  const paths = load.map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });


    return {
      paths,
      fallback: false,
    }
}

export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug)
  }catch(e) {
     data = null;
  }

  if (!data) {
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



