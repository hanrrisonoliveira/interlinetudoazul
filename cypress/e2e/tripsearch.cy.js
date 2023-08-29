/// <reference types="cypress" />

import tripsearch from "../support/pages/tripsearch"
import { faker } from '@faker-js/faker';

describe('Ida e Volta', function () {

    
    


    const user = {
        origin: faker.airline.airport().iataCode,
        destination: faker.airline.airport().iataCode,
        calendarStartDate: '10/10/2023',
        calendarEndDate: '20/10/2023',
        cabinCategory: 'Economy'
    }

    beforeEach(function () {
        cy.visit('/')
    })


    it('Deve localizar passagem do tipo ida e volta', function () {

        tripsearch.form(user)
        tripsearch.submit()
        
    })
})