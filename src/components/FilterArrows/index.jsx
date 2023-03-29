import React from 'react';
import {ReactComponent as Arrows} from '../../images/filter-arrows.svg'
import {ReactComponent as ActiveArrowsTop} from '../../images/active-filter-arrows-top.svg'
import {ReactComponent as ActiveArrowsBottom} from '../../images/active-filter-arrows-bottom.svg'

const FilterArrows = ({filterType, filterOrder}) => {
  if (filterType) {
    if (filterOrder) {
      return <ActiveArrowsTop/>
    }
    return <ActiveArrowsBottom/>
  }
  return <Arrows/>
};

export default FilterArrows;