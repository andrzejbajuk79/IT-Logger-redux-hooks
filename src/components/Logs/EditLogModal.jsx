import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import styled from 'styled-components';
import {updateLog} from '../../actions/logActions';
import FormInput from '../../common/CustomInput';
import TechSelectOpt from '../Techs/TechSelectOpt';
const StyledModal = styled.div`
  width: 75%;
  height: 75%;
`;

const EditLogModal = ({updateLog, current}) => {
  const [message, setMsg] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
  useEffect(() => {
    if (current) {
      setMsg(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({html: 'Uzupelnij wiadomość i specyfkacje'});
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(updLog);
      M.toast({html: 'Log zaktualizowany'});
      setMsg('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    //trigger jest w AddBtn.js href='#add-log-modal'
    <StyledModal id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <FormInput
              type="text"
              name="email"
              value={message}
              handleChange={e => setMsg(e.target.value)}
              // onChange={e => setMsg(e.target.value)}
              label="Logg Message"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technicion
              </option>
              <TechSelectOpt />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  checked={attention}
                  value={attention}
                  className="filled-in"
                  onChange={e => setAttention(!attention)}
                />
                <span>Need attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close wafe-effect wafes-green btn-flat"
        >
          Enter
        </a>
      </div>
    </StyledModal>
  );
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  current: state.log.current,
});

export default connect(mapStateToProps, {updateLog})(EditLogModal);
