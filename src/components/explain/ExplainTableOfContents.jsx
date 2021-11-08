/* eslint-disable react/prop-types, no-undef */
// ref: https://www.emgoto.com/react-table-of-contents/
import React, { useEffect, useState, useRef } from 'react';
import {
  chakra,
  Box,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { HEADER_HEIGHT } from '#/constants';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '0.2rem',
    position: 'fixed',
    right: 0,
    top: HEADER_HEIGHT,

    width: '18%',
    marginTop: '1rem',
    padding: '1.5rem',
    maxHeight: `calc(100% - ${HEADER_HEIGHT})`,

    /* Give table of contents a scrollbar */
    overflow: 'auto',

    /* 왼쪽의 라인 */
    _before: {
      content: '""',
      position: 'absolute',
      left: 0,
      width: '0.1rem',
      height: '70%',
      backgroundColor: 'teal.500',
    },
  },
});

const Link = chakra(Text, {
  baseStyle: {
    fontSize: '1rem',
  },
});

const DepthOneLI = chakra(Box, {
  baseStyle: {
    listStyleType: 'none',
    color: 'rgba(0, 0, 0, 0.4)',

    '&.active': {
      color: 'teal.500',
      fontWeight: 'bold',
    },

    _hover: {
      color: 'teal.500',
    },
  },
});

const DepthTwoLI = chakra(DepthOneLI, {
  baseStyle: {
    marginLeft: '1.5rem',
  },
});

const useIntersectionObserver = (setActiveTitle) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const headingElementsRef = useRef({});

  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        // eslint-disable-next-line no-param-reassign
        map[headingElement.target.innerText] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromTitle = (title) =>
        // eslint-disable-next-line @typescript-eslint/no-use-before-define,implicit-arrow-linebreak
        headingElements.findIndex((heading) => heading.title === title);

      if (visibleHeadings.length === 1) {
        setActiveTitle(visibleHeadings[0].target.innerText);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromTitle(a.target.innerText) > getIndexFromTitle(b.target.innerText),
        );
        setActiveTitle(sortedVisibleHeadings[0].target.innerText);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-100px 0px -40% 0px',
    });

    const headingElements = Array.from(document.querySelectorAll('h1, h2'));
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveTitle]);
};

const Headings = ({ activeTitle }) => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const [contents, getContents] = useState([]);

  useEffect(() => {
    const contentsArray = [];

    const H1Elements = Array.from(document.querySelectorAll('h1'));
    const H2Elements = Array.from(document.querySelectorAll('h2'));

    H1Elements.forEach((H1) => {
      const innerTextOfH1 = H1.innerText;
      const items = [];

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
          <Container as="ul">
            {contents.map(((content) => (
              <Box key={content.title}>
                {/* 1레벨 Depth */}
                <DepthOneLI
                  as="li"
                  className={content.title === activeTitle ? 'active' : ''}
                >
                  <Link href={`#${content.title}`} as="a">{content.title}</Link>
                </DepthOneLI>
                {/* 2레벨 Depth */}
                <Box as="ul">
                  {content.items.length > 0 && content.items.map((subContent) => (
                    <DepthTwoLI
                      key={subContent.title}
                      as="li"
                      className={subContent.title === activeTitle ? 'active' : ''}
                    >
                      <Link href={`#${subContent.title}`} as="a">{subContent.title}</Link>
                    </DepthTwoLI>
                  ))}
                </Box>
              </Box>
            )))}
          </Container>
        ) : ''}
    </>
  );
};

const TableOfContents = () => {
  const [activeTitle, setActiveTitle] = useState('');
  useIntersectionObserver(setActiveTitle);

  return (
    <>
      <Headings activeTitle={activeTitle} />
    </>
  );
};

export default TableOfContents;
