import { AlertsPo } from '../support/alerts.po';

describe('Alerts page test suite', () => {
  const alerts = new AlertsPo();
  const alertsDemos = alerts.exampleDemosArr;
  const alertsTitles = alerts.exampleTitlesArr;

  beforeEach(() => alerts.navigateTo());

  it('alerts page loads and displays it\'s content', () => {
    cy.get('.content')
      .should('be.visible');
  });

  it('content header contains title and link to accordion component at github', () => {
    cy.get('.content-header').children('h1').as('title')
      .should('be.visible')
      .and('to.contain', alerts.pageTitle);

    cy.get('@title').children('a')
      .should('be.enabled')
      .and('have.attr', 'href', alerts.ghLinkToComponent);
  });

  it('usage code example is displayed at demo top section', () => {
    cy.get('demo-top-section').as('demoTop').children('h2')
      .should('be.visible')
      .and('to.contain', alerts.titleDefaultExample);

    cy.get('@demoTop').children('.prettyprint')
      .should('be.visible')
      .and('not.to.be.empty');
  });

  it('basic alert example displays success, info, warning and danger types of alerts', () => {
    const alertTypes = [
      'alert-success',
      'alert-info',
      'alert-warning',
      'alert-danger'
    ];

    cy.get(alertsDemos[0]).find('div').as('alertsBasic').each(($alert, i) => {
      expect($alert).to.have.class(alertTypes[i]);
      cy.get('@alertsBasic').eq(i)
        .should('be.visible');
    });
  });

  it('link in alerts can be provided by class alert-link', () => {
    cy.get(alertsDemos[1]).find('div').as('alertsLink').each(() => {
      cy.get('@alertsLink').find(alerts.linkClass)
        .should('have.attr', 'href', '#');
    });
  });

  it('alert with additional content contains html elements', () => {
    cy.get(alertsDemos[2]).find('div')
      .should('to.have.descendants', 'h4')
      .and('to.have.descendants', 'p');
  });
  // skiped because it's unfinished yet
  it.skip('alerts in dismissing example can be closed, reset to default and change its\' dismissible option', () => {
    cy.get(alertsDemos[3]).find('div').as('dismissAlert').each(($alert, i) => {
      cy.get('@dismissAlert').eq(i)
        .should('be.visible');

      cy.get('@dismissAlert').eq(i).find('.close').click();

      cy.get('@dismissAlert').eq(i)
        .should('not.to.be.exist');
    });
  });
});
