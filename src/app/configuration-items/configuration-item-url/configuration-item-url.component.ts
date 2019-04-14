import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-url',
  templateUrl: './configuration-item-url.component.html',
  styleUrls: ['./configuration-item-url.component.css']
})
export class ConfigurationItemUrlComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
