import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-datetimepicker',
  templateUrl: './configuration-item-datetimepicker.component.html',
  styleUrls: ['./configuration-item-datetimepicker.component.css']
})
export class ConfigurationItemDatetimepickerComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
