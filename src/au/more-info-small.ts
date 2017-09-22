import * as jq from 'jquery';
import { ModalInjector } from './modal-injector';
import { Config } from './config';

(($: JQueryStatic) => {
    const template = `<a id="certegyezipay-tag-01" href="#${Config.infoModalId}">
            <p>Pay the easier way with</p> <img alt="certegyezipay" src="${Config.baseContentUrl}/content/images/logo-orange.svg" /> <span>More info</span>
        </a>`;

    const widget = new ModalInjector($);
    widget.injectBanner(template, Config.registerInterestUrl);
})(jq);
