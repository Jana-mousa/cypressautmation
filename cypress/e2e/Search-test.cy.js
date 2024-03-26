beforeEach(() => {
  cy.visit('https://stacksinfo.web.app/');
});

describe('Test-Case-Search 1', () => {
  it('check search at Qa', () => {
    cy.get('.search-bar').type('Qa')
    cy.get('.actions-button').click();
  })
})

describe('Test-Case-Search 2', () => {
  it('check search at cypresse', () => {
    cy.get('.search-bar').type('cypress')
    cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 3', () => {
  it('check search at UIUx', () => {
    cy.get('.search-bar').type('UIUX')
    cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})


describe('Test-Case-Search 4', () => {
  it('check search at UIUX-figma', () => {
    cy.get('.search-bar').type('UIUx Figma')
    cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 5', () => {
  it('check search at Figma ', () => {
    cy.get('.search-bar').type('Figma')
    cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 6', () => {
  it('check search at Olivery-company ', () => {
  cy.get('.search-bar').type('Olivery')
  cy.get('.actions-button').click();
  })
})

describe('Test-Case-Search 7', () => {
  it('check search at Olivery and frontend ', () => {
    cy.get('.search-bar').type('Olivery and frontend')
    cy.get('.actions-button').click();
  })
})

describe('Test-Case-Search 8', () => {
  it('check search at ramallah', () => {
    cy.get('.search-bar').type('ramallah')
    cy.get('.actions-button').click();
  })
})

describe('Test-Case-Search 9', () => {
  it('check search at ramallah1- ', () => {
    cy.get('.search-bar').type('ramallah1-')
    cy.get('.actions-button').click();
  })
})

describe('Test-Case-Search 10', () => {
  it('check search at EXALT Technologies Ltd.-company', () => {
    cy.get('.search-bar').type('EXALT Technologies Ltd.')
    cy.get('.actions-button').click();
  })
})

describe('Test-Case-Search 11', () => {
  it('check search at EXALT Technologies Ltd.123 - company', () => {
    cy.get('.search-bar').type('EXALT Technologies Ltd.123')
    cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 12', () => {
  it('check search at EXALT Technologies Ltd. and c3++12', () => {
    cy.get('.search-bar').type('EXALT Technologies Ltd. and c3++12 ')
      cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');

  })
})

describe('Test-Case-Search 13', () => {
  it('check search at ypess', () => {
    cy.get('.search-bar').type('ypess ')
    cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 14', () => {
  it('check search at ypess and EXALT Technologies Ltd and Qa', () => {
    cy.get('.search-bar').type('ypess and EXALT Technologies Ltd and Qa ')
     cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 15', () => {
  it('check search at figma and Olivery and UIUX', () => {
    cy.get('.search-bar').type('figma and Olivery and UIUX ')
     cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 16', () => {
  it('check search at figma and Olivery and Qa', () => {
    cy.get('.search-bar').type('figma and Olivery and Qa ')
     cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 17', () => {
  it('check search at cypress and Olivery and UIUX', () => {
    cy.get('.search-bar').type('cypress and Olivery and UIUX ')
     cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 18', () => {
  it('check search at figma and EXALT Technologies Ltd and UIUX', () => {
    cy.get('.search-bar').type('figma and EXALT Technologies Ltd and UIUX ')
     cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 19', () => {
  it.skip('check search at Qa and EXALT Technologies Ltd and UIUX', () => {
    cy.get('.search-bar').type('Qa and EXALT Technologies Ltd and UIUX ')
     cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 20', () => {
  it.skip('check search at Figma and EXALT Technologies Ltd and Qa', () => {
    cy.get('.search-bar').type('Figma and EXALT Technologies Ltd and Qa ')
     cy.get('.actions-button').click();
    cy.get('.error-message').should('not.contain', 'No result available.');
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
describe('Test-Case-Search 46', () => {
  it('check search at language , company , city - Negative ', () => {
    cy.get('.search-bar').type('frontend and souktel and tulkarm')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})
describe('Test-Case-Search 47-negativ',()=>{
  it('check search at languge with another error language name ',()=>{
    cy.get('.search-bar').type('Fultter and C1#')
    cy.get('.slick-active > :nth-child(1) > .slider-element').should('contain','Backend');
  })
})
describe('Test-Case-Search 48', () => {
  it('check search at Mobile', () => {
    cy.get('.search-bar').type('Mobile')
  })
})


describe('Test-Case-Search 49', () => {
  it('check search at Angular', () => {
    cy.get('.search-bar').type('Anjolar')
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
describe('Test-Case-Search 59',()=>{
  it('check search at languag and company',()=>{
    cy.get('.search-bar').type(' IQVIAc and Frontend ')
    cy.get('.Not-found-container').should('not.contain', 'No result available.');
  })
})

describe('Test-Case-Search 60-negativ',()=>{
  it('check search at languge ',()=>{
    cy.get('.search-bar').type('Backend')
    cy.get('.slick-active > :nth-child(1) > .slider-element').should('contain','Backend');
  })
})
describe('Test-Case-Search 61', () => {
  it('check search at Reconess-company', () => {
    cy.get('.search-bar').type('Reconess')
    cy.get('.actions-button').click();
  })
})

describe('Test-Case-Search 62', () => {
  it('check search at SoukTel-company', () => {
    cy.get('.search-bar').type('SoukTel')
    cy.get('.actions-button').click();
  })
})

describe('Test-Case-Search 63', () => {
  it('check search at IQVIA-company', () => {
    cy.get('.search-bar').type('IQVIA')
    cy.get('.actions-button').click();
  })
})

describe('Test-Case-Search 64', () => {
  it('check search at Data Analytics', () => {
    cy.get('.search-bar').type('Data Analytics')
    cy.get('.actions-button').click();
  })
})

describe('Test-Case-Search 65', () => {
  it('check search at DevOps', () => {
    cy.get('.search-bar').type('DevOps')
    cy.get('.actions-button').click();
  })
})


