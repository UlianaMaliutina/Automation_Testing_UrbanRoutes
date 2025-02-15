module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    // Buttons
    callATaxiButton: '//button[contains(text(), "Call a taxi")]',
    optionSupportive: '//div[contains(@class, "tcard-title") and text()="Supportive"]/following-sibling::div',
    paymentMethod: '//div[contains(@class, "pp-value-text") and text()="Cash"]/following-sibling::div',
    cardPayment: '//div[contains(@class, "pp-value")]/following-sibling::div',
    addCardButton: '.pp-plus-container',
    submitButton: '//button[contains(text(), "Link")]',
    closeButton: '.close-button.section-close',
    messageField: '//div[contains(@class, "input-container") and text()="Message to the driver..."]/following-sibling::div',
    verifySelector: '.r-sw',
    clickSelector: this.verifySelector.$('.switch-input'),
    iceCreamCounter: '//div[contains(@class, "r-counter-label") and text()="Ice cream"]/following-sibling::div',
    iceCreamPlusButton: iceCreamCounter.$('.counter-plus'),
    iceCreamCounterValue: iceCreamCounter.$('.counter-value'),
    carSearchButton: '.smart-button-main',
    carSearchModal: '//div[contains(@class, "order-body")]/following-sibling::div',
    driverInfoButton: '//div[contains(@class, "order-button") and text()="James"]/following-sibling::div',
    driverInfo: '//div[contains(@class, "order-body")]/following-sibling::div',
    rideDuration: '//div[contains(@class, "text" and text()="Taxi ~ $3"]/following-sibling::div',
    activeOption: '//div[contains(@class, "tcard active")]/following-sibling::div',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    // Modals
    phoneNumberModal: '.modal',
    // Functions
    fillAddresses: async function(from, to) {
        await browser.waitUntil(
            async () => await $(this.fromField).isDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Expected from field to be displayed after 10s'
            }
        );
        const fromField = await $(this.fromField);
        await fromField.waitForDisplayed({ timeout: 5000 });
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.waitForDisplayed({ timeout: 5000 });
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed({ timeout: 5000 });
        await callATaxiButton.waitForClickable({ timeout: 5000 });
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed({ timeout: 5000 });
        await phoneNumberButton.waitForClickable({ timeout: 5000 });
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed({ timeout: 5000 });
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        const nextButton = await $(this.nextButton);
        await nextButton.waitForClickable({ timeout: 5000 });
        await nextButton.click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        await codeField.waitForDisplayed({ timeout: 5000 });
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        const confirmButton = await $(this.confirmButton);
        await confirmButton.waitForClickable({ timeout: 5000 });
        await $(this.confirmButton).click()
    },
};