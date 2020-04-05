import { Router } from '@angular/router';

import { PasswordHintRequest } from '../../models/request/passwordHintRequest';

import { ApiService } from '../../abstractions/api.service';
import { I18nService } from '../../abstractions/i18n.service';
import { PlatformUtilsService } from '../../abstractions/platformUtils.service';
import { PlatformComponent } from './platform.component';

export class HintComponent extends PlatformComponent {
    email: string = '';
    formPromise: Promise<any>;

    protected successRoute = 'login';
    protected onSuccessfulSubmit: () => void;

    constructor(protected router: Router, protected i18nService: I18nService,
        protected apiService: ApiService, protected platformUtilsService: PlatformUtilsService) {
        super(platformUtilsService, i18nService);
    }

    async submit() {
        if (this.email == null || this.email === '') {
            this.raiseError('emailRequired');
            return;
        }
        if (this.email.indexOf('@') === -1) {
            this.raiseError('invalidEmail');
            return;
        }

        try {
            this.formPromise = this.apiService.postPasswordHint(new PasswordHintRequest(this.email));
            await this.formPromise;
            this.platformUtilsService.eventTrack('Requested Hint');
            this.platformUtilsService.showToast('success', null, this.i18nService.t('masterPassSent'));
            if (this.onSuccessfulSubmit != null) {
                this.onSuccessfulSubmit();
            } else if (this.router != null) {
                this.router.navigate([this.successRoute]);
            }
        } catch { }
    }
}
