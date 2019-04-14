import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CONFIGURATION_ITEM_COMPONENTS } from './configuration-items';
import { PluginLoaderService } from './services/plugin-loader/plugin-loader.service';
import { ClientPluginLoaderService } from './services/plugin-loader/client-plugin-loader.service';
import { PluginsConfigProvider } from './services/plugins-config.provider';
import { TransferStateService } from './services/transfer-state.service';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    ...CONFIGURATION_ITEM_COMPONENTS
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule
  ],
  providers: [
    { provide: PluginLoaderService, useClass: ClientPluginLoaderService },
    PluginsConfigProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: (provider: PluginsConfigProvider) => () =>
        provider
          .loadConfig()
          .toPromise()
          .then(config => (provider.config = config)),
      multi: true,
      deps: [PluginsConfigProvider]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(transferStateService: TransferStateService) {}
}
