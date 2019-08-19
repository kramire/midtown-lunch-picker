import React from 'react';

function Filters() {
  const categorySelector = (
    <div>
      <label>
        Category:
        <input type="button" value="american" />
        <input type="button" value="bbq" />
        <input type="button" value="italian" />
      </label>
    </div>
  );

  const isOpenCheckbox = (
    <div>
      <input type="checkbox" id="isOpen" name="isOpen" checked />
      <label htmlFor="isOpen">Open Now?</label>
    </div>
  );

  return (
    <form>
      {categorySelector}
      {isOpenCheckbox}
    </form>
  );
}

export default Filters;
