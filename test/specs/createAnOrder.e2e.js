const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {
    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await callATaxiButton.waitForExist({ timeout: 15000 });
        await callATaxiButton.waitForClickable({ timeout: 15000 });
        await callATaxiButton.click();
    })

    it('should choose supportive option', async () => {
       await browser.url(`/`)
       await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
       const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
       await callATaxiButton.waitForExist({ timeout: 15000 });
       await callATaxiButton.waitForClickable({ timeout: 15000 });
       await callATaxiButton.click();
       const optionSupportive = await $('//div[contains(@class, "tcard-title") and text()="Supportive"]/following-sibling::div');
       await optionSupportive.waitForClickable({ timeout: 10000});
       await optionSupportive.click();
    })

    it('should enter the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await callATaxiButton.waitForExist({ timeout: 15000 });
        await callATaxiButton.waitForClickable({ timeout: 15000 });
        await callATaxiButton.click();
        const optionSupportive = await $('//div[contains(@class, "tcard-title") and text()="Supportive"]/following-sibling::div');
        await optionSupportive.waitForClickable({ timeout: 10000});
        await optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should add credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await callATaxiButton.waitForExist({ timeout: 15000 });
        await callATaxiButton.waitForClickable({ timeout: 15000 });
        await callATaxiButton.click();
        const optionSupportive = await $('//div[contains(@class, "tcard-title") and text()="Supportive"]/following-sibling::div');
        await optionSupportive.waitForClickable({ timeout: 10000});
        await optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const paymentMethod = await $('//div[contains(@class, "pp-value-text") and text()="Cash"]/following-sibling::div')
        await paymentMethod.click();
        const addCardButton = await $('.pp-plus-container');
        await addCardButton.waitForClickable({ timeout: 5000 });
        await addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab'); 
        const submitButton = await $('//button[contains(text(), "Link")]'); 
        await submitButton.click();
        const closeButton = await $('.close-button.section-close'); 
        await closeButton.waitForDisplayed({ timeout: 5000 }); 
        await closeButton.click();
    })

    it('should write message to the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await callATaxiButton.waitForExist({ timeout: 15000 });
        await callATaxiButton.waitForClickable({ timeout: 15000 });
        await callATaxiButton.click();
        const optionSupportive = await $('//div[contains(@class, "tcard-title") and text()="Supportive"]/following-sibling::div');
        await optionSupportive.waitForClickable({ timeout: 10000});
        await optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const paymentMethod = await $('//div[contains(@class, "pp-value-text") and text()="Cash"]/following-sibling::div')
        await paymentMethod.click();
        const addCardButton = await $('.pp-plus-container');
        await addCardButton.waitForClickable({ timeout: 5000 });
        await addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab'); 
        const submitButton = await $('//button[contains(text(), "Link")]'); 
        await submitButton.click();
        const closeButton = await $('.close-button.section-close'); 
        await closeButton.waitForDisplayed({ timeout: 5000 }); 
        await closeButton.click();
        const messageField = await $('//div[contains(@class, "input-container") and text()="Message to the driver..."]/following-sibling::div');
        await messageField.click();
        await messageField.setValue("Help with small suitcase");
    })

    it('should add blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await callATaxiButton.waitForExist({ timeout: 15000 });
        await callATaxiButton.waitForClickable({ timeout: 15000 });
        await callATaxiButton.click();
        const optionSupportive = await $('//div[contains(@class, "tcard-title") and text()="Supportive"]/following-sibling::div');
        await optionSupportive.waitForClickable({ timeout: 10000});
        await optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const paymentMethod = await $('//div[contains(@class, "pp-value-text") and text()="Cash"]/following-sibling::div')
        await paymentMethod.click();
        const addCardButton = await $('.pp-plus-container');
        await addCardButton.waitForClickable({ timeout: 5000 });
        await addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab');  
        const submitButton = await $('//button[contains(text(), "Link")]'); 
        await submitButton.click();
        const closeButton = await $('.close-button.section-close'); 
        await closeButton.waitForDisplayed({ timeout: 5000 }); 
        await closeButton.click();
        const verifySelector = await $('.r-sw');
        const clickSelector = await verifySelector.$('.switch-input');
        await clickSelector.click();
        const isChecked = await page.$eval(clickSelector, input => input.checked);
        expect(isChecked).toBe(true);
    })

    it('should add 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await callATaxiButton.waitForClickable({ timeout: 15000 });
        await callATaxiButton.waitForExist({ timeout: 15000 });
        await callATaxiButton.click();
        const optionSupportive = await $('//div[contains(@class, "tcard-title") and text()="Supportive"]/following-sibling::div');
        await optionSupportive.waitForClickable({ timeout: 10000});
        await optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const paymentMethod = await $('//div[contains(@class, "pp-value-text") and text()="Cash"]/following-sibling::div')
        await paymentMethod.click();
        const addCardButton = await $('.pp-plus-container');
        await addCardButton.waitForClickable({ timeout: 5000 });
        await addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab');
        const submitButton = await $('//button[contains(text(), "Link")]'); 
        await submitButton.click();
        const closeButton = await $('.close-button.section-close'); 
        await closeButton.waitForDisplayed({ timeout: 5000 }); 
        await closeButton.click();
        const verifySelector = await $('.r-sw');
        const clickSelector = await verifySelector.$('.switch-input');
        await clickSelector.click();
        const isChecked = await page.$eval(clickSelector, input => input.checked);
        expect(isChecked).toBe(true);
        const iceCreamCounter = await $('//div[contains(@class, "r-counter-label") and text()="Ice cream"]/following-sibling::div');
        const iceCreamPlusButton = await iceCreamCounter.$('.counter-plus');
        await iceCreamPlusButton.waitForClickable({ timeout: 5000 });
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();   
        const iceCreamCounterValue = await iceCreamCounter.$('.counter-value');
        await expect(iceCreamCounterValue).toHaveText('2');
    })

    it('should evoke car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await callATaxiButton.waitForExist({ timeout: 15000 });
        await callATaxiButton.waitForClickable({ timeout: 15000 });
        await callATaxiButton.click();
        const optionSupportive = await $('//div[contains(@class, "tcard-title") and text()="Supportive"]/following-sibling::div');
        await optionSupportive.waitForClickable({ timeout: 10000});
        await optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const paymentMethod = await $('//div[contains(@class, "pp-value-text") and text()="Cash"]/following-sibling::div')
        await paymentMethod.click();
        const addCardButton = await $('.pp-plus-container');
        await addCardButton.waitForClickable({ timeout: 5000 });
        await addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab');
        const submitButton = await $('//button[contains(text(), "Link")]'); 
        await submitButton.click();
        const closeButton = await $('.close-button.section-close'); 
        await closeButton.waitForDisplayed({ timeout: 5000 }); 
        await closeButton.click();
        const verifySelector = await $('.r-sw');
        const clickSelector = await verifySelector.$('.switch-input');
        await clickSelector.click();
        const isChecked = await page.$eval(clickSelector, input => input.checked);
        expect(isChecked).toBe(true);
        const iceCreamCounter = await $('//div[contains(@class, "r-counter-label") and text()="Ice cream"]/following-sibling::div');
        const iceCreamPlusButton = await iceCreamCounter.$('.counter-plus');
        await iceCreamPlusButton.waitForClickable({ timeout: 5000 });
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();   
        const iceCreamCounterValue = await iceCreamCounter.$('.counter-value');
        await expect(iceCreamCounterValue).toHaveText('2');
        const carSearchButton = await $('.smart-button-main');
        await carSearchButton.waitForClickable({ timeout: 10000 });
        await carSearchButton.click();
    })

    it('should wait till driver info', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]');
        await callATaxiButton.waitForExist({ timeout: 15000 });
        await callATaxiButton.waitForClickable({ timeout: 15000 });
        await callATaxiButton.click();
        const optionSupportive = await $('//div[contains(@class, "tcard-title") and text()="Supportive"]/following-sibling::div');
        await optionSupportive.waitForClickable({ timeout: 10000});
        await optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const paymentMethod = await $('//div[contains(@class, "pp-value-text") and text()="Cash"]/following-sibling::div')
        await paymentMethod.click();
        const addCardButton = await $('.pp-plus-container');
        await addCardButton.waitForClickable({ timeout: 5000 });
        await addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab');
        const submitButton = await $('//button[contains(text(), "Link")]'); 
        await submitButton.click();
        const closeButton = await $('.close-button.section-close'); 
        await closeButton.waitForDisplayed({ timeout: 5000 }); 
        await closeButton.click();
        const verifySelector = await $('.r-sw');
        const clickSelector = await verifySelector.$('.switch-input');
        await clickSelector.click();
        const isChecked = await page.$eval(clickSelector, input => input.checked);
        expect(isChecked).toBe(true);
        const iceCreamCounter = await $('//div[contains(@class, "r-counter-label") and text()="Ice cream"]/following-sibling::div');
        const iceCreamPlusButton = await iceCreamCounter.$('.counter-plus');
        await iceCreamPlusButton.waitForClickable({ timeout: 5000 });
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();   
        const iceCreamCounterValue = await iceCreamCounter.$('.counter-value');
        await expect(iceCreamCounterValue).toHaveText('2');
        const carSearchButton = await $('.smart-button-main');
        await carSearchButton.waitForClickable({ timeout: 10000 });
        await carSearchButton.click();
        const driverInfo = await $('//div[contains(@class, "order-body")]/following-sibling::div')
        await driverInfo.waitForDisplayed({ timeout: 40000 });
    })
})