import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import {deleteTech} from '../../actions/techActions';

const TechItem = ({tech: {id, firstName, lastName}, deleteTech}) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({html: `${firstName} ${lastName} został skasowany z bazy danych`});
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a onClick={onDelete} href="#!" className="secondary-content">
          <div className="material-icons red-text">delete</div>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, {deleteTech})(TechItem);
