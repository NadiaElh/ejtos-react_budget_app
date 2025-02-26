import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
//import ExpenseItem from './components/ExpenseItem';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                             // Budget component
                                <div className='col-sm'>
                                <Budget />
                                </div>
                        }        

                        {
                            //Remaining component
                                <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            //ExpenseTotal component
                                <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }

                        <h3 className='mt-3'>Allocation</h3>
                        {
                            /* Add ExpenseList component here */
                            <div className='row '>
                                <div className='col-sm'>
                                    <ExpenseList />
                                </div>
                            </div>   
                        }         

                        {
                            /* Add ExpenseItem component here */
                            
                        }        

                    <h3 className='mt-3'>Change allocation</h3>
                        {
                            /* Add AllocationForm component here under */
                            <div className='row mt-3'>
                            <div className='col-sm'>
                                <AllocationForm/>
                            </div>
                        </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
