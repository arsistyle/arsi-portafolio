import React from 'react';

function removeDuplicates(arr, comp) {
  const unique = arr
    .map(e => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => arr[e])
    .map(e => arr[e]);
  return unique;
}

const Filter = props => {
  let filters = removeDuplicates(props.filters, 'label').sort((a, b) => {
    if (a.filter < b.filter) return -1;
    if (a.filter > b.filter) return 1;
    return 0;
  });

  return (
    <div className='filter'>
      <span className="filter__item" data-filter="">Todos</span>
      {filters.map(x => (
        <span className='filter__item' data-filter={x.filter} key={x.filter}>
          {x.label}
        </span>
      ))}
    </div>
  );
};

export default Filter;
