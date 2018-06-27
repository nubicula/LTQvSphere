import { NgModule } from '@angular/core';

import { LtQvSphereSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LtQvSphereSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LtQvSphereSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LtQvSphereSharedCommonModule {}
