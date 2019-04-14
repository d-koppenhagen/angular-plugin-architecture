import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-daterangetimepicker',
  templateUrl: './configuration-item-daterangetimepicker.component.html',
  styleUrls: ['./configuration-item-daterangetimepicker.component.css']
})
export class ConfigurationItemDaterangetimepickerComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
