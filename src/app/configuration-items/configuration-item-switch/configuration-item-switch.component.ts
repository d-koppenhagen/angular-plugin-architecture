import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-switch',
  templateUrl: './configuration-item-switch.component.html',
  styleUrls: ['./configuration-item-switch.component.css']
})
export class ConfigurationItemSwitchComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
