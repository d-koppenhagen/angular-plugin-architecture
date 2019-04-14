import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-timerangepicker',
  templateUrl: './configuration-item-timerangepicker.component.html',
  styleUrls: ['./configuration-item-timerangepicker.component.css']
})
export class ConfigurationItemTimerangepickerComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
