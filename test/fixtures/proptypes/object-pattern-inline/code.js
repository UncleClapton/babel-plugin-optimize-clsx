import PropTypes from 'prop-types';
import clsx from 'clsx';

function foo({ position: p }) {
  const x = clsx(p === 'top' && classes.x, p === 'bottom' && classes.y);
}

foo.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']).isRequired,
};
