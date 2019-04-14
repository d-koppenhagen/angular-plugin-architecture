import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PluginsConfigProvider, PluginsConfig } from '../services/plugins-config.provider';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  public config$: Observable<PluginsConfig>;

  constructor(private pluginCfg: PluginsConfigProvider) { }

  ngOnInit() {
    this.config$ = this.pluginCfg.loadConfig();
  }

}
