import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-datepicker',
  templateUrl: './configuration-item-datepicker.component.html',
  styleUrls: ['./configuration-item-datepicker.component.css']
})
export class ConfigurationItemDatepickerComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
