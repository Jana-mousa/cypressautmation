//const { describe } = require("mocha");

const { describe } = require("mocha");

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
//<<<<<<< Updated upstream
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 20', () => {
  it.skip('check search at language , company , technology - Negative', () => {
    cy.get('.search-bar').type('Figma and EXALT Technologies Ltd and Qa ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
    
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
    
    cy.get('.search-bar').type('c++')
  })
})
describe('Test-Case-Search 23', () => {
  it('check search at DBA', () => {
   
    cy.get('.search-bar').type('DBA')
  })
})
describe('Test-Case-Search 24',()=>{
  it('check search at Language', () => {
    cy.get('.search-bar').type('Flask')

    })
})
describe('Test-Case-Search 25', () => {
  it('check search at Backend-Flask', () => {
    cy.get('.search-bar').type('c++=')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 26', () => {
  it('check search at Company name ', () => {
    cy.get('.search-bar').type('Bisan Systemss')
    cy.get('.company-name').should('contain','Bisan Systems')
   
  })
})
describe('Test-Case-Search 27',()=>{
  it('check seach at Company name and Language',()=>{
    cy.get('.search-bar').type('Bisan Systemss and DBA')
    cy.get('.company-name').should('contain','Bisan Systems')
  })
})
describe('Test-Case-Search 28', () => {
  it('check search at city', () => {
    cy.get('.search-bar').type('Rawabi')
  })
})
describe('Test-Case-Search 29', () => {
  it('check search at error in city name - Negative ', () => {
    cy.get('.search-bar').type('Rawabiaa')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})



describe('Test-Case-Search 30',()=>{
  it('check search at Frontend',()=>{
    cy.get('.search-bar').type('Frontend')
  })
})





describe('Test-Case-Search 31', () => {
  it('check search at company name', () => {
    cy.get('.search-bar').type('iVAS Communications Ltd')
  })
})
describe('Test-Case-Search 32', () => {
  it('check search at error in company name - Negative', () => {
    cy.get('.search-bar').type('addham inc23')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 33', () => {
  it('check search at language - Negative', () => {
    cy.get('.search-bar').type('mooblie')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 34', () => {
  it('check search at language , company , technology - Negative', () => {
    cy.get('.search-bar').type('angular and adham and flutter ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 35', () => {
  it('check search at error in company name with language - Negative', () => {
    cy.get('.search-bar').type('frontend ,al andlos software Development ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');

  })
})
describe('Test-Case-Search 36', () => {
  it('check search at error in company name with language - Negative', () => {
    cy.get('.search-bar').type('broginer Technologe, python ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');

  })
})
describe('Test-Case-Search 37', () => {
  it('check search at company name', () => {
    cy.get('.search-bar').type('ProGineer Technologies')
  })
})
describe('Test-Case-Search 38', () => {
  it('check search at error in city name with language - Negative ', () => {
    cy.get('.search-bar').type('nablose,C#')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 39', () => {
  it('check search at company name', () => {
    cy.get('.search-bar').type('Isra Software & Computer Co')
  })
})
describe('Test-Case-Search 40', () => {
  it('check search at language , company , technology - Negative', () => {
    cy.get('.search-bar').type('angular and Isra Software & Computer Co and frontend ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 41', () => {
  it('check search at language , company , technology - Negative', () => {
    cy.get('.search-bar').type('flutter and adham inc and java ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 42', () => {
  it('check search at company name with another company name - Negative', () => {
    cy.get('.search-bar').type('souktel and adham inc ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 43', () => {
  it('check search at city name,company name,technology  - Negative', () => {
    cy.get('.search-bar').type('ramallah and adham inc and frontend ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 44', () => {
  it('check search at company name,city name,language  - Negative', () => {
    cy.get('.search-bar').type('souktel and nablus and java ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 45', () => {
  it('check search at error in city name with technology - Negative', () => {
    cy.get('.search-bar').type('nablose and nodejs ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');

  })
})
describe('Test-Case-Search 56', () => {
  it('check search at language , company , city - Negative ', () => {
    cy.get('.search-bar').type('Bisan Systems and Rawabi and Backend')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Sarch 57',()=>{
  it('check search at languag ',()=>{
    cy.get('.search-bar').type('BDA')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Sarch 58',()=>{
  it('check search at languag ',()=>{
    cy.get('.search-bar').type('Bachend')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})