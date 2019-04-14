import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-radio',
  templateUrl: './configuration-item-radio.component.html',
  styleUrls: ['./configuration-item-radio.component.css']
})
export class ConfigurationItemRadioComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
