'use client'
import { Provider } from 'react-redux';
import ProfessionalInfo from './ProfessionalInfo';
import {store} from '../../../../redux/store/store';

function Form() {
  return (
    <Provider store={store}>
      <ProfessionalInfo/>
    </Provider>
  );
}

export default Form;