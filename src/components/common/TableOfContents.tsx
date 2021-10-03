import React, { useEffect, useState } from 'react';
import {
  chakra,
  Box,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { HEADER_HEIGHT } from '#/constants';

interface Item {
  title: string;
  items: Item[];
}

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    right: 0,
    top: HEADER_HEIGHT,

    width: '23%',
    marginTop: '1rem',
    padding: '1rem',
    maxHeight: `calc(100% - ${HEADER_HEIGHT})`,

    /* Give table of contents a scrollbar */
    overflow: 'auto',
  },
});

const Link = chakra(Text, {
  baseStyle: {
    fontSize: '1rem',
  },
});

const TableOfContents = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const [contents, getContents] = useState<Item[]>([]);

  useEffect(() => {
    const contentsArray: Item[] = [];

    const H1Elements = Array.from(document.querySelectorAll('h1'));
    const H2Elements = Array.from(document.querySelectorAll('h2'));

    H1Elements.forEach((H1) => {
      const innerTextOfH1 = H1.innerText;
      const items: Item[] = [];

      if (innerTextOfH1 === 'Tools') {
        H2Elements.forEach((H2) => {
          const innerTextOfH2 = H2.innerText;
          items.push({
            title: innerTextOfH2,
            items: [],
          });
        });
      }

      contentsArray.push({
        title: innerTextOfH1,
        items,
      });
    });

    getContents(contentsArray);
  }, []);

  return (
    <>
      {isLargerThan1000
        ? (
          <Container>
            {contents.map(((content) => {
              // 아이템 있을 때
              if (content.items.length !== 0) {
                return (
                  <>
                    <Link key={content.title} href={`#${content.title}`} as="a">{content.title}</Link>
                    {content.items.map((subContent) => <Link key={subContent.title} href={`#${subContent.title}`} as="a">{subContent.title}</Link>)}
                  </>
                );
              }

              // 아이템 없을 때
              return (
                <Link key={content.title} href={`#${content.title}`} as="a">{content.title}</Link>
              );
            }))}
          </Container>
        ) : ''}
    </>
  );
};

export default TableOfContents;
