import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-input',
  templateUrl: './configuration-item-input.component.html',
  styleUrls: ['./configuration-item-input.component.css']
})
export class ConfigurationItemInputComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
