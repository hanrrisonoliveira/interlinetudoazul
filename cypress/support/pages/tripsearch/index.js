import { el } from './elements'

class TripSearch {

    form(user){
        cy.get(el.origin).clear().click().type(user.origin)
        cy.get(el.validateOriginDestination).contains(user.origin).click()
        cy.get(el.destination).clear().click().type(user.destination)
        cy.get(el.validateOriginDestination).contains(user.destination).click()
        cy.get(el.calendarStartDate).clear().type(user.calendarStartDate)
        cy.get(el.calendarEndDate).clear().type(user.calendarEndDate)
        cy.get(el.cabinCategory).click()//adicionar a validação para quando alterar a cabine
        cy.get('.SelectBox__selectLink').contains(user.cabinCategory).click() //encontrar outro jeito de buscar a cabine e validar
    }

    submit(){
        cy.get(el.btnSearchTickets).click()
    }
}

export default new TripSearch()