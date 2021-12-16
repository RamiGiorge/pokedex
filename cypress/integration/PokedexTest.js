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
        cy.get('[class*="gamepadContainer"] > h3').should('be.visible')
        cy.get('svg[class*="gamepad"]').should('be.visible')
    })

    it('Allows the user to search for a pokemon by name, id or type', () => {
        searchPokemon()
        cy.get(searchField).type(2).then(() => {
            cy.get(className('autocomplete')).should('be.visible').should('contain.text', pokemon)
        })
        cy.get(searchField).clear().type('grass').then(() => {
            cy.get(className('autocomplete')).should('be.visible').should('contain.text', pokemon).click().then(() => {
                cy.get(className('card')).should('be.visible').should('contain.text', 'grass')
            })
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
            cy.contains(pokemon.toUpperCase()).should('be.visible')
        })
    })

    it("Allows the user to veiw a pokemon's details page and then navigate back to homepage", () => {
        const detailInfo = ['INFO', 'Status', 'Types', 'Abilities', 'Height', 'Weight', 'hp', 'attack', 'speed', pokemon.toUpperCase()]
        searchPokemon()
        cy.get(className('PokemonCard_content')).click().then(() => {
            cy.get(className('PokemonDetails')).as('details').should('be.visible')
            detailInfo.map(detail => cy.get('@details').should('contain', detail))
        })
        cy.get(className('backBtn')).click().then(() => {
            cy.get(className('pokemonGrid')).should('be.visible')
        })
    })

    it("Allows the user to navigate through pokemons from the details page", () => {
        const title = "[class*='generalInfo'] > [class*='title']"
        searchPokemon()
        cy.get(className('PokemonCard_content')).click().then(() => {
            cy.get(className('PokemonDetails')).as('details').should('be.visible')
            cy.get(className('navigationIcon')).should('be.visible')
        })
        cy.get(title).should('contain.text', 2)
        cy.get(className('prev')).click().then(() => {
            cy.get(title).should('include.text', 1)
        })
        cy.get(className('prev')).click().then(() => {
            cy.get(title).should('include.text', 20)
        })
        cy.get(className('next')).click().then(() => {
            cy.get(title).should('include.text', 1)
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

    it('Should render the memory game page correctly', () => {
        const firstCardBack = '[class*="cardGrid"] > div:first-child img[class*="back"]'
        const firstCardFront = '[class*="cardGrid"] > div:first-child img[class*="front"]'
        cy.get('svg[class*="gamepad"]').should('be.visible').click().then(() => {
            cy.get('[class*="btnContainer"]').should('contain.text', 'New Game')
            cy.get('[class*="game"] > p').should('be.visible').should('contain.text', 'Attempts')
            cy.get(className('memoryCard')).should('be.visible')
            cy.get(firstCardFront).should('not.be.visible')
            cy.get(firstCardBack).should('be.visible')
        })
    })

})