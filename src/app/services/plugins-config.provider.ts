import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { preserveServerState } from './transfer-state.service';
import { isPlatformBrowser } from '@angular/common';

export interface PluginsConfig {
  [key: string]: {
    name: string;
    description?: string;
    path: string;
    deps: string[];
    settings?: PluginSettings[];
  };
}

export interface PluginSettings {
  label: string;
  description?: string;
  type: PluginSettingType;
  value?: PluginValueType;
}

export type PluginSettingType
  = 'input'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'slider'
  | 'messagebox'
  | 'datepicker'
  | 'datetimepicker'
  | 'daterangepicker'
  | 'daterangetimepicker'
  | 'timepicker'
  | 'timerangepicker'
  | 'url';

export type PluginValueType
  = number
  | string
  | Date
  | boolean
  | PluginSelectConfig
  | PluginRadioConfig
  | PluginCheckboxValues
  | PluginSwitchesValues
  | PluginSliderConfig
  | RangePickerConfig;

export interface PluginSelectConfig {
  multi: boolean;
  data: {
    dataValue: any;
    displayValue?: string;
  };
}

export interface PluginRadioConfig {
  inline: boolean;
  data: [{
    dataValue: any;
    displayValue?: string;
  }];
}

export interface PluginCheckboxValues {
  inline: boolean;
  data: [{
    dataValue: boolean;
    displayValue?: string;
  }];
}

export interface PluginSwitchesValues {
  inline: boolean;
  data: [{
    dataValue: boolean;
    displayValue?: string;
  }];
}

export interface PluginSliderConfig {
  min: number;
  max: number;
  default: number;
  steps: number;
}

export interface RangePickerConfig {
  start: Date;
  end: Date;
}

@Injectable()
export class PluginsConfigProvider {
  config: PluginsConfig;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: {},
    @Inject('APP_BASE_URL') @Optional() private readonly baseUrl: string
  ) {
    if (isPlatformBrowser(platformId)) {
      this.baseUrl = document.location.origin;
    }
  }

  @preserveServerState('PLUGIN_CONFIGS')
  loadConfig() {
    return this.http.get<PluginsConfig>(
      `${this.baseUrl}/assets/plugins-config.json`
    );
  }
}
