const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {
    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.callATaxiButton.waitForExist({ timeout: 15000 });
        await page.callATaxiButton.waitForClickable({ timeout: 15000 });
        await page.callATaxiButton.click();
        await expect(rideDuration).toBeExisting();
    })

    it('should choose supportive option', async () => {
       await browser.url(`/`)
       await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
       await page.callATaxiButton.waitForExist({ timeout: 15000 });
       await page.callATaxiButton.waitForClickable({ timeout: 15000 });
       await page.callATaxiButton.click();
       await page.optionSupportive.waitForClickable({ timeout: 10000});
       await page.optionSupportive.click();
       await expect(activeOption).toHaveText('Supportive');
    })

    it('should enter the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.callATaxiButton.waitForExist({ timeout: 15000 });
        await page.callATaxiButton.waitForClickable({ timeout: 15000 });
        await page.callATaxiButton.click();
        await page.optionSupportive.waitForClickable({ timeout: 10000});
        await page.optionSupportive.click();
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
        await page.callATaxiButton.waitForExist({ timeout: 15000 });
        await page.callATaxiButton.waitForClickable({ timeout: 15000 });
        await page.callATaxiButton.click();
        await page.optionSupportive.waitForClickable({ timeout: 10000});
        await page.optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await page.paymentMethod.click();
        await page.addCardButton.waitForClickable({ timeout: 5000 });
        await page.addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab'); 
        await page.submitButton.click();
        await page.closeButton.waitForDisplayed({ timeout: 5000 }); 
        await page.closeButton.click();
        await expect(cardPayment).toHaveText('Card');
    })

    it('should write message to the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.callATaxiButton.waitForExist({ timeout: 15000 });
        await page.callATaxiButton.waitForClickable({ timeout: 15000 });
        await page.callATaxiButton.click();
        await page.optionSupportive.waitForClickable({ timeout: 10000});
        await page.optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await page.paymentMethod.click();
        await page.addCardButton.waitForClickable({ timeout: 5000 });
        await page.addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab'); 
        await page.submitButton.click();
        await page.closeButton.waitForDisplayed({ timeout: 5000 }); 
        await page.closeButton.click();
        await page.messageField.click();
        await page.messageField.setValue("Help with small suitcase");
        await expect(messageField).toHaveText('Help with small suitcase');
    })

    it('should add blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.callATaxiButton.waitForExist({ timeout: 15000 });
        await page.callATaxiButton.waitForClickable({ timeout: 15000 });
        await page.callATaxiButton.click();
        await page.optionSupportive.waitForClickable({ timeout: 10000});
        await page.optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await page.paymentMethod.click();
        await page.addCardButton.waitForClickable({ timeout: 5000 });
        await page.addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab');  
        await page.submitButton.click();
        await page.closeButton.waitForDisplayed({ timeout: 5000 }); 
        await page.closeButton.click();
        await page.clickSelector.click();
        const isChecked = await page.$eval(clickSelector, input => input.checked);
        expect(isChecked).toBe(true);
    })

    it('should add 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.callATaxiButton.waitForClickable({ timeout: 15000 });
        await page.callATaxiButton.waitForExist({ timeout: 15000 });
        await page.callATaxiButton.click();
        await page.optionSupportive.waitForClickable({ timeout: 10000});
        await page.optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await page.paymentMethod.click();
        await page.addCardButton.waitForClickable({ timeout: 5000 });
        await page.addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab');
        await page.submitButton.click();
        await page.closeButton.waitForDisplayed({ timeout: 5000 }); 
        await page.closeButton.click();
        await page.clickSelector.click();
        const isChecked = await page.$eval(clickSelector, input => input.checked);
        expect(isChecked).toBe(true);
        await page.iceCreamPlusButton.waitForClickable({ timeout: 5000 });
        await page.iceCreamPlusButton.click();
        await page.iceCreamPlusButton.click();   
        await expect(page.iceCreamCounterValue).toHaveText('2');
    })

    it('should evoke car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.callATaxiButton.waitForExist({ timeout: 15000 });
        await page.callATaxiButton.waitForClickable({ timeout: 15000 });
        await page.callATaxiButton.click();
        await page.optionSupportive.waitForClickable({ timeout: 10000});
        await page.optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await page.paymentMethod.click();
        await page.addCardButton.waitForClickable({ timeout: 5000 });
        await page.addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab');
        await page.submitButton.click();
        await page.closeButton.waitForDisplayed({ timeout: 5000 }); 
        await page.closeButton.click();
        await page.clickSelector.click();
        const isChecked = await page.$eval(clickSelector, input => input.checked);
        expect(isChecked).toBe(true);
        await page.iceCreamPlusButton.waitForClickable({ timeout: 5000 });
        await page.iceCreamPlusButton.click();
        await page.iceCreamPlusButton.click();   
        await expect(page.iceCreamCounterValue).toHaveText('2');
        await page.carSearchButton.waitForClickable({ timeout: 10000 });
        await page.carSearchButton.click();
        await expect(carSearchModal).toBeExisting();
    })

    it('should wait till driver info', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.callATaxiButton.waitForExist({ timeout: 15000 });
        await page.callATaxiButton.waitForClickable({ timeout: 15000 });
        await page.callATaxiButton.click();
        await page.optionSupportive.waitForClickable({ timeout: 10000});
        await page.optionSupportive.click();
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await page.paymentMethod.click();
        await page.addCardButton.waitForClickable({ timeout: 5000 });
        await page.addCardButton.click();
        const cardNumberField = await $('#number');
        await cardNumberField.waitForDisplayed({ timeout: 5000 });
        await cardNumberField.setValue('4111 1111 1111 1111'); 
        const cardCodeField = await $('#code');
        await cardCodeField.waitForDisplayed({ timeout: 5000 });
        await cardCodeField.setValue(12); 
        await browser.keys('Tab');
        await page.submitButton.click();
        await page.closeButton.waitForDisplayed({ timeout: 5000 }); 
        await page.closeButton.click();
        await page.clickSelector.click();
        const isChecked = await page.$eval(clickSelector, input => input.checked);
        expect(isChecked).toBe(true);
        await page.iceCreamPlusButton.waitForClickable({ timeout: 5000 });
        await page.iceCreamPlusButton.click();
        await page.iceCreamPlusButton.click();   
        await expect(page.iceCreamCounterValue).toHaveText('2');
        await page.carSearchButton.waitForClickable({ timeout: 10000 });
        await page.carSearchButton.click();
        await page.driverInfo.waitForDisplayed({ timeout: 40000 });
        await expect(driverInfoButton).toBeExisting();
    })
})