'use client'
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';
import ProfessionalRev from '../../components/employees/addemp/review/ProfessionalRev.jsx';

function page() {
  return (
    <Provider store={store}>

     <ProfessionalRev/>
    </Provider>
  );
}

export default page;