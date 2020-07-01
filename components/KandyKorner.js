
import React from "react"


import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import "./locations/Locations.css"


// import AnimalList from "./animals/AnimalList"
// import { AnimalProvider } from "./animals/AnimalProvider"
// import "./animals/Animal.css"

// import EmployeeList from "./employees/EmployeeList"
// import { EmployeeProvider } from "./employees/EmployeeProvider"
// import "./employees/Employee.css"

// import CustomerList from "./customers/CustomerList"
// import { CustomerProvider } from "./customers/CustomerProvider"
// import "./customers/Customer.css"





export default () => (
    <>
        <h2>KandyKorner</h2>
        <small>Where sweet things wait!</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    
{/* 

        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>
     
        <h2>Employees</h2>
        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider> 
       
        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>  
       */}



        </>

)



