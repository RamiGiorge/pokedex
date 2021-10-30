/// <reference types="cypress" />

describe('Unit and integration testing', () => {
    const searchField = '[class*="searchField"] > input'
    const pokemon = 'ivysaur'
    const className = (text) => {
        return `[class*=${text}]`
    }

    const searchPokemon = () => {
        cy.get(className('pokemonGrid')).should('be.visible')
        cy.get(searchField).should('be.visible').type(pokemon).then(() => {
            cy.get(className('autocomplete')).should('be.visible').should('contain.text', pokemon).click()
        })
        cy.get(className('searchBtn')).click().then(() => {
            cy.get(className('card')).should('be.visible').should('contain.text', pokemon.toUpperCase())
        })
    }

    beforeEach(() => {
        cy.visit("/")
    })

    it('Should render homepage correctly', () => {
        cy.get(className('title')).should('be.visible').should('contain', 'pokédex'.toUpperCase())
        cy.get(className('pokemonGrid')).should('be.visible')
        cy.get('form').should('be.visible')
        cy.get(searchField).should('be.visible')
        cy.get(className('searchBtn')).should('be.visible')
        cy.get(className('fetchMore')).should('be.visible')
    })

    it('Allows the user to search for a pokemon by name, id or type', () => {
        searchPokemon()
        cy.get(searchField).type(2).then(() => {
            cy.get(className('autocomplete')).should('be.visible').should('contain.text', pokemon)
        })
        cy.get(searchField).clear().type('grass').then(() => {
            cy.get(className('autocomplete')).should('be.visible').should('contain.text', pokemon).click()
        })
        cy.get(className('searchBtn')).click().then(() => {
            cy.get(className('card')).should('be.visible').should('contain.text', 'grass')
        })
    })

    it('Allows the user to catch and release pokemons and use the filter tab', () => {
        searchPokemon()
        cy.get(className('captureBtn')).should('be.visible').should('contain.text', 'Catch').click().then(() => {
            cy.get(className('captureBtn')).should('contain', 'Release')
            cy.get(className('PokemonCard_captured')).should('be.visible')
        })
        cy.get(className('tab')).contains('Caught').click().then(() => {
            cy.get(className('card')).should('be.visible').should('contain.text', pokemon.toUpperCase())
        })
        cy.get(className('tab')).contains('Uncaught').click().then(() => {
            cy.get(className('card')).should('not.exist')
        })
        cy.get(className('backBtn')).should('be.visible').click()
        cy.get(className('pokemonGrid')).should('be.visible').then(() => {
            cy.contains('BULBASAUR').should('exist')
        })
    })

    it("Allows the user to veiw a pokemon's details page and then navigate back to homepage", () => {
        searchPokemon()
        cy.get(className('PokemonCard_content')).click().then(() => {
            cy.get(className('PokemonDetails'))
                .should('be.visible')
                .should('contain', pokemon.toUpperCase())
                .should('contain', 'INFO')
                .should('contain', 'Status')
                .should('contain', 'Types')
                .should('contain', 'Abilities')
                .should('contain', 'Height')
                .should('contain', 'hp')
                .should('contain', 'attack')
                .should('contain', 'speed')
        })
        cy.get(className('backBtn')).click().then(() => {
            cy.get(className('pokemonGrid')).should('be.visible')
        })
    })

    it('Should render the correct pokemon status (caught/uncaught) on both homepage and details page', () => {
        searchPokemon()
        cy.get(className('PokemonCard_content')).click().then(() => {
            cy.get(className('PokemonDetails')).should('be.visible')
            cy.contains('Uncaught').should('be.visible')
        })
        cy.get(className('backBtn')).click().then(() => {
            cy.get(className('pokemonGrid')).should('be.visible')
        })
        searchPokemon()
        cy.get(className('captureBtn')).should('be.visible').should('contain.text', 'Catch').click()
        cy.get(className('PokemonCard_content')).click({ force: true }).then(() => {
            cy.get(className('PokemonDetails')).should('be.visible')
            cy.contains('Caught').should('be.visible')
        })
    })

})