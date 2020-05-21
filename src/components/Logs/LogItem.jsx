import React from 'react';
import {connect} from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import {deleteLog, setCurrent} from '../../actions/logActions';

const LogItem = ({log, deleteLog, setCurrent}) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({html: 'Log skasowany'});
  };
  return (
    <li className="collection-item">
      <div>
        <a
          onClick={() => setCurrent(log)}
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID # {log.id}</span> Ostatnio edytowne
          przez :<span className="black-text">{log.tech}</span> on{' '}
          <Moment format="MMMM Do YYYY,h:mm:ss a">{log.date}</Moment>
        </span>
        <a onClick={onDelete} href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, {deleteLog, setCurrent})(LogItem);
