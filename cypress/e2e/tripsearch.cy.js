/// <reference types="cypress" />

import tripsearch from "../support/pages/tripsearch"
import { faker } from '@faker-js/faker';

describe('Ida e Volta', function () {

    const data = require ('../fixtures/data')

    const user = {
        // origin: faker.airline.airport().iataCode,
        // destination: faker.airline.airport().iataCode,
        origin: 'GRU',
        destination: 'ORY',
        calendarStartDate: '08/09/2023',
        calendarEndDate: '09/09/2023',
        cabinCategory: 'Economy'
    }

    beforeEach(function () {
        cy.visit('/')
    })

    it.only('Teste para validar se os campos estão vindo corretamente', function () {

        tripsearch.form(user)
        tripsearch.submit()
        cy.get('#wait-message', { timeout: 5000 }).should('be.visible')
        cy.get('#componentFlightGrid-departureFlightOptions-flightGrid',{ timeout: 30000 }).should("be.visible")
        cy.get('#lblResultNotFound').should("not.exist")
        cy.get('#componentFlightGrid-departureFlightOptions-flightGrid')
        
        cy.get("div[class='FlightWithConnectionLine componentFlight']") //passagens pela companhia - ida e volta - pontos
        cy.log(cy.get("div[class='labelValue row']")) //pontos tudo azul
        
    })

    it('Deve localizar passagem do tipo ida e volta - Faker', function () {

        tripsearch.form(user)
        tripsearch.submit()
        cy.get('#wait-message').should('be.visible')
        cy.get('#componentFlightGrid-departureFlightOptions-flightGrid',{ timeout: 30000 }).should("be.visible")
        
    })

    data.forEach((user, index) =>{
        it(`${index + 1} - Deve localizar passagem do tipo ida e volta - JSON`, function () {

            tripsearch.form(user)
            tripsearch.submit()
            cy.get('#wait-message').should('be.visible')
            cy.get('#componentFlightGrid-departureFlightOptions-flightGrid',{ timeout: 30000 }).should("be.visible")
            
        })
    })


   
})