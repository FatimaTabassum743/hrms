'use client'
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store/store';
import ProfessionalRev from './ProfessionalRev';

function Review() {
  return (
    <Provider store={store}>
     <ProfessionalRev/>
    </Provider>
  );
}

export default Review;