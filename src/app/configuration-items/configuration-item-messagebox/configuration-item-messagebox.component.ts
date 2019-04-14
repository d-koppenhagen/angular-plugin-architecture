import { Component, OnInit, Input } from '@angular/core';

import { PluginSettings } from '../../services/plugins-config.provider';

@Component({
  selector: 'app-configuration-item-messagebox',
  templateUrl: './configuration-item-messagebox.component.html',
  styleUrls: ['./configuration-item-messagebox.component.css']
})
export class ConfigurationItemMessageboxComponent implements OnInit {
  @Input() data: PluginSettings;

  constructor() { }

  ngOnInit() {
  }

}
