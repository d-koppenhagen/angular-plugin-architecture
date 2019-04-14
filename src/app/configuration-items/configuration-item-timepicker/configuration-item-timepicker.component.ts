import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-timepicker',
  templateUrl: './configuration-item-timepicker.component.html',
  styleUrls: ['./configuration-item-timepicker.component.css']
})
export class ConfigurationItemTimepickerComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
