import { I18nService } from '../../abstractions/i18n.service';
import { PlatformUtilsService } from '../../abstractions/platformUtils.service';

export abstract class PlatformComponent {
    constructor(protected platformUtilsService: PlatformUtilsService,
        protected i18nService: I18nService) { }

    protected raiseError(errorName?: string) {

        if (errorName) {
            this.platformUtilsService.showToast('error', this.i18nService.t('errorOccurred'),
                this.i18nService.t(errorName));
        } else {
            this.platformUtilsService.showToast('error', null, this.i18nService.t('errorOccured'));
        }
    }

    protected raisePremiumRequired() {
        this.platformUtilsService.showToast('error', this.i18nService.t('premiumRequired'),
            this.i18nService.t('premiumRequiredDesc'));
    }
}
