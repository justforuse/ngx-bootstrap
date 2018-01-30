import { BaseComponent } from './base.component';

export class AlertsPo extends BaseComponent {
  pageUrl = '/alerts';
  pageTitle = 'Alerts';
  ghLinkToComponent = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/alert';
  linkClass = '.alert-link';
  buttonToggler = 'Toggle dismissible';
  buttonReset = 'Reset';
  buttonChangeText = 'Change text';
  buttonAddMore = 'Add more';
  exampleTitlesArr = [
    'Basic',
    'Link color',
    'Additional content',
    'Dismissing',
    'Dynamic html',
    'Dynamic content',
    'Dismiss on timeout',
    'Global styling',
    'Component level styling',
    'Configuring defaults'
  ];
  exampleDemosArr = [
    'demo-alert-basic',
    'demo-alert-link',
    'demo-alert-content',
    'demo-alert-dismiss',
    'demo-alert-dynamic-html',
    'demo-alert-content-html',
    'demo-alert-timeout',
    'demo-alert-styling-global',
    'demo-alert-styling-local',
    'demo-alert-config'
  ];
}
