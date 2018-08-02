import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

export const Grid = ({ className, children }) => (
  <div className={cn('bx--grid', className)}>{children}</div>
);

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const Row = ({ className, children }) => (
  <div className={cn('bx--row', className)}>{children}</div>
);

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const breakPointRegex = /^(xs|sm|md|lg|xl|xxl)((Auto)|(Offset)?(\d+))/;

export const Col = props => {
  const classNames = cn(
    props.className,
    Object.keys(props).map(function(pn) {
      const m = pn.match(breakPointRegex);
      if (m) {
        const [ignore1, bp, ignore2, auto, offset, cols] = m;
        if (auto) {
          return `bx--col-${bp}-auto`;
        } else if (offset) {
          return `bx--offset-${bp}-${cols}`;
        } else {
          return `bx--col-${bp}-${cols}`;
        }
      } else {
        return null;
      }
    })
  );

  return <div className={classNames}>{props.children}</div>;
};

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,

  xs1: PropTypes.bool,
  xs2: PropTypes.bool,
  xs3: PropTypes.bool,
  xs4: PropTypes.bool,
  xs5: PropTypes.bool,
  xs6: PropTypes.bool,
  xs7: PropTypes.bool,
  xs8: PropTypes.bool,
  xs9: PropTypes.bool,
  xs10: PropTypes.bool,
  xs11: PropTypes.bool,
  xs12: PropTypes.bool,
  xsOffset1: PropTypes.bool,
  xsOffset2: PropTypes.bool,
  xsOffset3: PropTypes.bool,
  xsOffset4: PropTypes.bool,
  xsOffset5: PropTypes.bool,
  xsOffset6: PropTypes.bool,
  xsOffset7: PropTypes.bool,
  xsOffset8: PropTypes.bool,
  xsOffset9: PropTypes.bool,
  xsOffset10: PropTypes.bool,
  xsOffset11: PropTypes.bool,
  xsOffset12: PropTypes.bool,
  xsAuto: PropTypes.bool,

  sm1: PropTypes.bool,
  sm2: PropTypes.bool,
  sm3: PropTypes.bool,
  sm4: PropTypes.bool,
  sm5: PropTypes.bool,
  sm6: PropTypes.bool,
  sm7: PropTypes.bool,
  sm8: PropTypes.bool,
  sm9: PropTypes.bool,
  sm10: PropTypes.bool,
  sm11: PropTypes.bool,
  sm12: PropTypes.bool,
  smOffset1: PropTypes.bool,
  smOffset2: PropTypes.bool,
  smOffset3: PropTypes.bool,
  smOffset4: PropTypes.bool,
  smOffset5: PropTypes.bool,
  smOffset6: PropTypes.bool,
  smOffset7: PropTypes.bool,
  smOffset8: PropTypes.bool,
  smOffset9: PropTypes.bool,
  smOffset10: PropTypes.bool,
  smOffset11: PropTypes.bool,
  smOffset12: PropTypes.bool,
  smAuto: PropTypes.bool,

  md1: PropTypes.bool,
  md2: PropTypes.bool,
  md3: PropTypes.bool,
  md4: PropTypes.bool,
  md5: PropTypes.bool,
  md6: PropTypes.bool,
  md7: PropTypes.bool,
  md8: PropTypes.bool,
  md9: PropTypes.bool,
  md10: PropTypes.bool,
  md11: PropTypes.bool,
  md12: PropTypes.bool,
  mdOffset1: PropTypes.bool,
  mdOffset2: PropTypes.bool,
  mdOffset3: PropTypes.bool,
  mdOffset4: PropTypes.bool,
  mdOffset5: PropTypes.bool,
  mdOffset6: PropTypes.bool,
  mdOffset7: PropTypes.bool,
  mdOffset8: PropTypes.bool,
  mdOffset9: PropTypes.bool,
  mdOffset10: PropTypes.bool,
  mdOffset11: PropTypes.bool,
  mdOffset12: PropTypes.bool,
  mdAuto: PropTypes.bool,

  lg1: PropTypes.bool,
  lg2: PropTypes.bool,
  lg3: PropTypes.bool,
  lg4: PropTypes.bool,
  lg5: PropTypes.bool,
  lg6: PropTypes.bool,
  lg7: PropTypes.bool,
  lg8: PropTypes.bool,
  lg9: PropTypes.bool,
  lg10: PropTypes.bool,
  lg11: PropTypes.bool,
  lg12: PropTypes.bool,
  lgOffset1: PropTypes.bool,
  lgOffset2: PropTypes.bool,
  lgOffset3: PropTypes.bool,
  lgOffset4: PropTypes.bool,
  lgOffset5: PropTypes.bool,
  lgOffset6: PropTypes.bool,
  lgOffset7: PropTypes.bool,
  lgOffset8: PropTypes.bool,
  lgOffset9: PropTypes.bool,
  lgOffset10: PropTypes.bool,
  lgOffset11: PropTypes.bool,
  lgOffset12: PropTypes.bool,
  lgAuto: PropTypes.bool,

  xl1: PropTypes.bool,
  xl2: PropTypes.bool,
  xl3: PropTypes.bool,
  xl4: PropTypes.bool,
  xl5: PropTypes.bool,
  xl6: PropTypes.bool,
  xl7: PropTypes.bool,
  xl8: PropTypes.bool,
  xl9: PropTypes.bool,
  xl10: PropTypes.bool,
  xl11: PropTypes.bool,
  xl12: PropTypes.bool,
  xlOffset1: PropTypes.bool,
  xlOffset2: PropTypes.bool,
  xlOffset3: PropTypes.bool,
  xlOffset4: PropTypes.bool,
  xlOffset5: PropTypes.bool,
  xlOffset6: PropTypes.bool,
  xlOffset7: PropTypes.bool,
  xlOffset8: PropTypes.bool,
  xlOffset9: PropTypes.bool,
  xlOffset10: PropTypes.bool,
  xlOffset11: PropTypes.bool,
  xlOffset12: PropTypes.bool,
  xlAuto: PropTypes.bool,

  xxl1: PropTypes.bool,
  xxl2: PropTypes.bool,
  xxl3: PropTypes.bool,
  xxl4: PropTypes.bool,
  xxl5: PropTypes.bool,
  xxl6: PropTypes.bool,
  xxl7: PropTypes.bool,
  xxl8: PropTypes.bool,
  xxl9: PropTypes.bool,
  xxl10: PropTypes.bool,
  xxl11: PropTypes.bool,
  xxl12: PropTypes.bool,
  xxlOffset1: PropTypes.bool,
  xxlOffset2: PropTypes.bool,
  xxlOffset3: PropTypes.bool,
  xxlOffset4: PropTypes.bool,
  xxlOffset5: PropTypes.bool,
  xxlOffset6: PropTypes.bool,
  xxlOffset7: PropTypes.bool,
  xxlOffset8: PropTypes.bool,
  xxlOffset9: PropTypes.bool,
  xxlOffset10: PropTypes.bool,
  xxlOffset11: PropTypes.bool,
  xxlOffset12: PropTypes.bool,
  xxlAuto: PropTypes.bool,
};

//export default Grid;
