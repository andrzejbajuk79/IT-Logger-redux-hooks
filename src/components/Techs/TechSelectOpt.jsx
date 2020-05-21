import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTechs} from '../../actions/techActions';

const TechSelectOpt = ({getTechs, tech: {techs, loading}}) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {!loading &&
        techs !== null &&
        techs.map((t, index) => (
          <option value={`${t.firstName} ${t.lastName}`} key={t.id}>
            {t.firstName} {t.lastName}
          </option>
        ))}
    </>
  );
};

TechSelectOpt.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  tech: state.tech,
});
export default connect(mapStateToProps, {getTechs})(TechSelectOpt);
