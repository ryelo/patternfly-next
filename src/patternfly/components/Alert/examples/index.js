import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import SuccessAlertRaw from '!raw!./success-alert.hbs';
import WarningAlertRaw from '!raw!./warning-alert.hbs';
import DangerAlertRaw from '!raw!./danger-alert.hbs';
import InfoAlertRaw from '!raw!./info-alert.hbs';
import SuccessAlert from './success-alert.hbs';
import WarningAlert from './warning-alert.hbs';
import DangerAlert from './danger-alert.hbs';
import InfoAlert from './info-alert.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const successAlert = SuccessAlert();
  const warningAlert = WarningAlert();
  const dangerAlert = DangerAlert();
  const infoAlert = InfoAlert();

  return (
    <Documentation docs={Docs}>
      <Example heading="Success Alert" handlebars={SuccessAlertRaw}>
        {successAlert}
      </Example>
      <Example heading="Danger Alert" handlebars={DangerAlertRaw}>
        {dangerAlert}
      </Example>
      <Example heading="Warning Alert" handlebars={WarningAlertRaw}>
        {warningAlert}
      </Example>
      <Example heading="Info Alert" handlebars={InfoAlertRaw}>
        {infoAlert}
      </Example>
    </Documentation>
  );
};
