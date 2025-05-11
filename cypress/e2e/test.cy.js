describe('Test tests for Booking', () => {
  it('Opens the page and checks the operation and visibility of elements', () => {
    cy.visit('https://www.booking.com/index.ru.html?aid=2311236;label=ru-ee-booking-desktop-qrl80QzKipx5fgy01fM5TAS652897959020:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-65526620:lp9221191:li:dec:dm;ws=&gad_source=1&gad_campaignid=19655507706&gbraid=0AAAAAD_Ls1Idd4y0UbTQh7wCtWc-wONHD&gclid=Cj0KCQjwlYHBBhD9ARIsALRu09oTFPxwRcK86ix-2MtO3JL0ebBVw20TSwzykaxnc4swjrmQ5zspgQ0aAnSOEALw_wcB');
    cy.wait(10000); // ждём загрузку
   cy.get('button[id="onetrust-accept-btn-handler"]')
   .should('be.visible'); // проверка
   cy.wait(3000);// ждём загрузку
   cy.get('button[id="onetrust-accept-btn-handler"]').click() // клик по кнопке 
  });
});