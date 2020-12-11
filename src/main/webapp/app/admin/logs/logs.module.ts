import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedicalTemplateSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [MedicalTemplateSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent],
})
export class LogsModule {}
