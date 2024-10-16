import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE_FIELD from '@salesforce/schema/Account.Type';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Lightningrecordeditformdemo extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fields={
        nameField: ACCOUNT_NAME_FIELD,
        typeField: ACCOUNT_TYPE_FIELD,
        phoneField: ACCOUNT_PHONE_FIELD,
        industryField: INDUSTRY_FIELD
    }
    successHandler(event) {
        console.log(event.detail);
        const toastEvent = new ShowToastEvent( {
            title: 'New Account Created',
            message:  'Account Created '+event.detail.fields.Name.value,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
        //reset input data 
        const inputs = this.template.querySelectorAll('lightning-input-field');
        if(inputs){
            Array.from(inputs).forEach(input => {
                input.reset();
            });
        
        }
          
    }
    resetHandler(event){
    const inputs = this.template.querySelectorAll('lightning-input-field');
    if(inputs){
        Array.from(inputs).forEach(input => {
            input.reset();
        });
    
    }
}
}