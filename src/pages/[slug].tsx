import { useRouter } from 'next/router';

import { Loading } from '../templates/Loading'
import Home, { HomeProps } from '../templates/Home'
import { loadPages } from '../API/load_pages'
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Page({ data }: HomeProps) {
  const  router = useRouter();

  if(router.isFallback) {
      return <Loading />
  }

  return <Home data={data} /> ;
}



export const getStaticPaths: GetStaticPaths = async () => {
  // const load = [await loadPages()]
  // const paths = load.map((page) => {
  //   return {
  //     params: {
  //       slug: page.slug,
  //     },
  //   };
  // });


    return {
      paths: [ { params: { slug: 'udemy'}}],
      fallback: true
    }
}

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug as string)
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
    },
    // Incremental static regeneration
    revalidate: 600,
  }
}



