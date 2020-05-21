import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import M from 'materialize-css/dist/js/materialize.min.js';
import TechItem from './TechItem';
import {getTechs} from '../../actions/techActions';

const TechListModal = ({getTechs, tech: {techs, loading}}) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div id="tech-list-modal" className="modal">
        <div className="modal-content">
          <h4>Lista Specyfikacji technicznych</h4>
          <ul className="collection">
            {!loading &&
              techs !== null &&
              techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
          </ul>
        </div>
      </div>
    </>
  );
};
TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tech: state.tech,
});
export default connect(mapStateToProps, {getTechs})(TechListModal);
