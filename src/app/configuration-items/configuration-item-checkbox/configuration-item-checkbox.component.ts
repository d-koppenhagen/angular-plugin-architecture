import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-checkbox',
  templateUrl: './configuration-item-checkbox.component.html',
  styleUrls: ['./configuration-item-checkbox.component.css']
})
export class ConfigurationItemCheckboxComponent implements OnInit {
  @Input() data: PluginSettings;
  
  constructor() { }

  ngOnInit() {
  }

}
