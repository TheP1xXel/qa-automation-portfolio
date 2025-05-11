// Test #1
describe('Live88 check visible loot boxes open up', () => {
  it('Opens the page and checks the operation and visibility of elements', () => {
   // cy.visit('https://demo.live88.io/operator/live88demo/live88-lobby/fun');
    cy.visit('https://static.live88.io/game/ld-client/latest/index.html?config_id=65ae3b3ff098df4e79a999e7&session_id=33770457-1e00-4d93-a1e1-5973e42b4e73&lobby_url=&deposit_url=&device_platform=desktop&engine_base_url=wss://app.live88.io&sub_partner_id=otcasino&lang=en&ts=1746364478769');
    cy.wait(10000); // ждём загрузку
    cy.get('button[data-test-id="button-click-open-lootboxes"]').should('be.visible'); // проверка
    cy.wait(3000);// ждём загрузку
    cy.get('[data-test-id="button-click-open-lootboxes"]').click() // клик по кнопке
    cy.get('[data-test-id="generic_scrollable_container"]').should('be.visible'); // проверка на видимость контейнера
    
  });
});

// Test #2
describe('Live88 check visible open mini games', () => {
  it('Opens the page and checks the operation and visibility of elements', () => {
   // cy.visit('https://demo.live88.io/operator/live88demo/live88-lobby/fun');
    cy.visit('https://static.live88.io/game/ld-client/latest/index.html?config_id=65ae3b3ff098df4e79a999e7&session_id=33770457-1e00-4d93-a1e1-5973e42b4e73&lobby_url=&deposit_url=&device_platform=desktop&engine_base_url=wss://app.live88.io&sub_partner_id=otcasino&lang=en&ts=1746364478769');
    cy.wait(10000); // ждём загрузку
    cy.get('button[data-test-id="button-click-open-mini-games-modal"]').should('be.visible'); // проверка
    cy.wait(4000);// ждём загрузку
    cy.get('button[data-test-id="button-click-open-mini-games-modal"]').click() // клик по кнопке
    cy.get('iframe').should('be.visible'); // проверка на видимость iframe
  });
});
    // Test #3
describe('Live88 check visible open menu settings', () => {
  it('Opens the page and checks the operation and visibility of elements', () => {
   // cy.visit('https://demo.live88.io/operator/live88demo/live88-lobby/fun');
    cy.visit('https://static.live88.io/game/ld-client/latest/index.html?config_id=65ae3b3ff098df4e79a999e7&session_id=33770457-1e00-4d93-a1e1-5973e42b4e73&lobby_url=&deposit_url=&device_platform=desktop&engine_base_url=wss://app.live88.io&sub_partner_id=otcasino&lang=en&ts=1746364478769');
    cy.wait(10000); // ждём загрузку
    cy.get('button[data-test-id="button-click-open-menu-modal"]').should('be.visible'); // проверка
    cy.wait(5000);// ждём загрузку
    cy.get('button[data-test-id="button-click-open-menu-modal"]').click() // клик по кнопке
    cy.get('div[id="navigation"]').should('be.visible'); // проверка на видимость контейнера
    
    
  });
});