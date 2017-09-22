﻿import * as jq from 'jquery';
import { ModalInjector } from './modal-injector';
import {Config } from './config';


(($: JQueryStatic) => {
        let template =
            `<a id="certegyezipay-banner-01" href="#${Config.signupModalId}">
            <div class="logo">
                <img alt="certegyezipay" src="${Config.baseContentUrl}/content/images/logo-orange.svg" />
            </div>
            <div class="text">
                <h3>Pay the easier way.</h3>
                <p>Choose Oxipay at the checkout and pay for your purchase in 4 easy no interest payments</p>
            </div>
            <div class="button">
                <p class="info">More info</p>
            </div>
        </a>`;

        const widget = new ModalInjector($);
        widget.injectBanner(template, Config.registerInterestUrl);
})(jq);
