import { LightningElement } from 'lwc';
import leadObject from '@salesforce/schema/lead';
import FIRST_NAME_FIELD from '@salesforce/schema/lead.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/lead.LastName';
import COMPANY_FIELD from '@salesforce/schema/lead.company';
import PHONE_FIELD from '@salesforce/schema/lead.phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Lightningrecordformdemo extends LightningElement {
    objectApiName = leadObject;
    fields = [FIRST_NAME_FIELD, LAST_NAME_FIELD, COMPANY_FIELD,PHONE_FIELD];
    successHandler(event) {
        console.log(event.detail);
        const toastEvent = new ShowToastEvent( {
            title: 'New Lead Created',
            message:  'Lead Created '+event.detail.fields.FirstName.value+' '+event.detail.fields.LastName.value,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}