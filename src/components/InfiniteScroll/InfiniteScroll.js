import React, { useState, useEffect, useRef, useCallback } from 'react';
import data from './beers.json';
import * as paginate from 'paginatejson';
import {
  Wrapper,
  ItemWrapper,
  LoaderWrapper,
  Bubbles,
  Bubble,
} from './InfiniteScroll.styled';

const Beer = React.forwardRef(
  ({ data: { image_url: imageUrl, name, abv } }, ref) => {
    const getShortName = (name) => {
      const words = name.split(' ');
      return `${words[0]} ${words[1]}`;
    };

    return (
      <ItemWrapper ref={ref}>
        <img src={imageUrl} alt={data.name} />
        <div>
          <p>{name.length > 10 ? getShortName(name) : name}</p>
          <p>{abv}</p>
        </div>
      </ItemWrapper>
    );
  }
);

const Loader = () => (
  <LoaderWrapper>
    <Bubbles>
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
    </Bubbles>
    <p>More beers coming in...</p>
  </LoaderWrapper>
);

const fetchBeers = (page = 1) => {
  const { items, ...pageInfo } = paginate.paginate(data, page, 6);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ items, page: pageInfo }), 2500)
  );
};

const InfiniteScroll = () => {
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const lastItemRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    fetchBeers().then((res) => {
      setItems([...res.items]);
      setPage(res.page);
    });
  }, []);

  const getMoreBeers = useCallback(() => {
    if (!page || !page.next || isLoading) return;
    setIsLoading(true);
    fetchBeers(page.next).then((res) => {
      setItems([...items, ...res.items]);
      setPage(res.page);
      setIsLoading(false);
    });
  }, [isLoading, items, page]);

  useEffect(() => {
    const options = {
      root: document,
      threshold: 1,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        getMoreBeers();
      }
    };
    observer.current = new IntersectionObserver(callback, options);
    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }
    return () => {
      observer.current.disconnect();
    };
  }, [getMoreBeers]);

  return (
    <>
      <Wrapper>
        {items.map((item, i) => {
          if (i === items.length - 1)
            return <Beer key={item.name} ref={lastItemRef} data={item} />;
          return <Beer key={item.name} data={item} />;
        })}
      </Wrapper>
      {isLoading ? <Loader /> : null}
    </>
  );
};

export default InfiniteScroll;
