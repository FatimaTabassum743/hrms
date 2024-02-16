'use client'
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store/store';
import ProfessionalRev from '../review/ProfessionalRev';

function Form() {
  return (
    <Provider store={store}>
     <ProfessionalRev/>
    </Provider>
  );
}

export default Form;