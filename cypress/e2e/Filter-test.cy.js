//const { describe } = require("mocha");

beforeEach(() => {
  cy.visit('https://stacksinfo.web.app/');
});

describe('Test-Case-Search 1', () => {
  it('check search at Qa', () => {
    cy.get('.search-bar').type('Qa')
  })
})

describe('Test-Case-Search 2', () => {
  it('check search at Language', () => {
    cy.get('.search-bar').type('cypress')
  })
})

describe('Test-Case-Search 3', () => {
  it('check search at UIUx', () => {
    cy.get('.search-bar').type('UIUX')
  })
})


describe('Test-Case-Search 4', () => {
  it('check search at UIUX-figma', () => {
    cy.get('.search-bar').type('UIUx Figma')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 5', () => {
  it('check search at Language ', () => {
    cy.get('.search-bar').type('Figma')
  })
})

describe('Test-Case-Search 6', () => {
  it('check search at Company name ', () => {
    cy.get('.search-bar').type('Olivery')
    cy.get('.company-name').should('contain','Olivery')
  })
})

describe('Test-Case-Search 7', () => {
  it('check search at Company name and technology ', () => {
    cy.get('.search-bar').type('Olivery and frontend')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 8', () => {
  it('check search at city', () => {
    cy.get('.search-bar').type('ramallah')
  })
})

describe('Test-Case-Search 9', () => {
  it('check search at error in city name - Negative ', () => {
    cy.get('.search-bar').type('ramallah1-')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 10', () => {
  it('check search at company name', () => {
    cy.get('.search-bar').type('EXALT Technologies Ltd.')
  })
})

describe('Test-Case-Search 11', () => {
  it('check search at error in company name - Negative', () => {
    cy.get('.search-bar').type('EXALT Technologies Ltd.123')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 12', () => {
  it('check search at error in company name with language - Negative', () => {
    cy.get('.search-bar').type('EXALT Technologies Ltd. and c3++12 ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');

  })
})

describe('Test-Case-Search 13', () => {
  it('check search at language - Negative', () => {
    cy.get('.search-bar').type('ypess ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 14', () => {
  it('check search at language , company , technology - Negative', () => {
    cy.get('.search-bar').type('ypess and EXALT Technologies Ltd and Qa ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 15', () => {
  it('check search at language , company , technology - Negative', () => {
    cy.get('.search-bar').type('figma and Olivery and UIUX ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 16', () => {
  it('check search at language , company , technology - Negative', () => {
    cy.get('.search-bar').type('figma and Olivery and Qa ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 17', () => {
  it('check search at language , company , technology - Negative', () => {
    cy.get('.search-bar').type('cypress and Olivery and UIUX ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 18', () => {
  it('check search at language , company , technology - Negative', () => {
    cy.get('.search-bar').type('figma and EXALT Technologies Ltd and UIUX ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 19', () => {
  it.skip('check search at language , company , technology - Negative', () => {
    cy.get('.search-bar').type('Qa and EXALT Technologies Ltd and UIUX ')
    //cy.get('.Not-found-container').should('not.contain', 'No result available.');
    cy.get('.Not-found-container > :nth-child(3)').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 21',()=>{
  it('check search at Backend',()=>{
    cy.get('.search-bar').type('Backend')
  })
})
describe('Test-Case-Search 22', () => {
  it('check search at Language', () => {
    cy.visit('https://stacksinfo.web.app/');
    cy.get('.search-bar').type('c++')
  })
})