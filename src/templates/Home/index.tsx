import Head from 'next/head';
import { GridTwoColumns, GridTwoColumnsProps } from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import Config from '../../Config';
import { MenuProps } from '../../components/Menu';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  title: string,
  slug: string,
  footerHtml: string,
  menu: LogoLinkProps & { links: MenuLinkProps[]}
  sections: SectionProps[]
};

export type SectionProps = ( GridImageProps | GridTextProps | GridTwoColumnsProps | GridContentProps);

export type HomeProps = {
  data: PageData
};


function Home({ data }: HomeProps) {

  const { menu, sections, footerHtml, slug, title } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <>
      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        <Head>
          <title>{title} | {Config.siteName}</title>

          <meta name="theme-color" content="#0A1128" />

          <meta name="description" content="As Land Page mais legais da internet" />



        </Head>
        {sections.map((section, index) => {
            const { component } = section;
            const key = `${slug}-${index}`;

            if (component === 'section.section-two-columns') {
              return <GridTwoColumns key={key} {...section as GridTwoColumnsProps} />;
            }

            if (component === 'section.section-content') {
              return <GridContent key={key} {...section as GridContentProps} />;
            }

            if (component === 'section.section-grid-text') {
              return <GridText key={key} {...section as GridTextProps} />;
            }

            if (component === 'section.section-grid-image') {
              return <GridImage key={key} {...section as GridImageProps} />;
          }
        })}
      </Base>
    </>

  );
}

export default Home;

