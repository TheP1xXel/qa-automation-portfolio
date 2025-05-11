//TEST 
describe('Olybet test task for training', () => {
  // Подавляем ошибку postMessage и 401, чтобы Cypress не падал
  before(() => {
    Cypress.on('uncaught:exception', (err) => {
      if (
        err.message.includes("Failed to execute 'postMessage'") ||
        err.message.includes("Request failed with status code 401") ||
        err.message.includes("401")
      ) {
        return false; // игнорируем ошибку
      }
    });
  });

  it('Visits the page and checks menu game a button', () => {
    cy.visit('https://www.olybet.ee/?lang=ru');

    // Дожидаемся появления кнопки принятия cookies
    cy.get('button[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]', { timeout: 20000 })
      .should('be.visible')
      .click();

    // Проверка, что баннер исчез
    cy.get('#onetrust-banner-sdk', { timeout: 10000 }).should('not.exist');

    // Проверка и клик по элементу
    cy.get('div[data-v-1cef3f8c][data-v-2440044b][class="h-full font-montserrat vertical-scroll"]', { timeout: 20000 })
  .should('be.visible')
  .wait(2000) // Ждем 2 секунды
  .click();
  });
});