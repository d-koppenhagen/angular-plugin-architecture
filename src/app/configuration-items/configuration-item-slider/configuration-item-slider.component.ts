import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-slider',
  templateUrl: './configuration-item-slider.component.html',
  styleUrls: ['./configuration-item-slider.component.css']
})
export class ConfigurationItemSliderComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
