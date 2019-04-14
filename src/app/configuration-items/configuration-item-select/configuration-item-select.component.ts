import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-select',
  templateUrl: './configuration-item-select.component.html',
  styleUrls: ['./configuration-item-select.component.css']
})
export class ConfigurationItemSelectComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
