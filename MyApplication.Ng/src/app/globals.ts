import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class Globals {

    private step1Form: FormGroup;
    private step2Form: FormGroup;
    private step3Form: FormGroup;
    private imgs: any[];


    constructor() {
        this.imgs = [];
    }

    getStep1Form() {
        return this.step1Form;
    }

    setStep1Form(form: FormGroup) {
        this.step1Form = form;
    }

    getStep2Form() {
        return this.step2Form;
    }

    setStep2Form(form: FormGroup) {
        this.step2Form = form;
    }

    getStep3Form() {
        return this.step3Form;
    }

    setStep3Form(form: FormGroup) {
        this.step3Form = form;
    }

    getImages() {
        return this.imgs;
    }

    setImgs(items: any) {
        this.imgs = items;
    }
}
