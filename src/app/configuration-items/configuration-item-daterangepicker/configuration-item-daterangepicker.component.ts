import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-daterangepicker',
  templateUrl: './configuration-item-daterangepicker.component.html',
  styleUrls: ['./configuration-item-daterangepicker.component.css']
})
export class ConfigurationItemDaterangepickerComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
