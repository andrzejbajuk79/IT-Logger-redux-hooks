import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import styled from 'styled-components';
import FormInput from '../../common/CustomInput';
import {addTech} from '../../actions/techActions';

const StyledModal = styled.div`
  width: 75%;
  height: 85%;
`;

const AddTechModal = ({addTech}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({html: 'Uzupelnij Imie i nazwisko'});
    } else {
      addTech({firstName, lastName});
      M.toast({html: `${firstName} ${lastName} został dodany do bazy danych`});
      setFirstName('');
      setLastName('');
    }
  };
  return (
    //trigger jest w AddBtn.js href='#add-log-modal'
    <StyledModal id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Nowa Specyfikacja</h4>

        <div className="row">
          <div className="input-field">
            <FormInput
              type="text"
              name="firstname"
              value={firstName}
              handleChange={e => setFirstName(e.target.value)}
              label="First name"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <FormInput
              type="text"
              name="lastName"
              value={lastName}
              handleChange={e => setLastName(e.target.value)}
              label="Last name"
            />
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

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};
export default connect(null, {addTech})(AddTechModal);
