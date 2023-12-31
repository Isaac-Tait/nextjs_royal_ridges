'use client';
import Link from 'next/link';

import { Highlight } from 'react-instantsearch-dom';

const SearchPreview = ({ hit }) => {
  return (
    <div>
      <Link
        href={`/${hit.slug}`}
        className='text-2xl text-green-200 hover:text-indigo-600'
      >
        <Highlight hit={hit} attribute='title' tagName='mark' />
      </Link>

      <div class='italic ml-2'>
        <Highlight hit={hit} attribute='excerpt' tagName='mark' />
      </div>
    </div>
  );
};

export default SearchPreview;
