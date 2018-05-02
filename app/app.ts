import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import relativeAppTemplate from './templates/application';
import absoluteAppTemplate from 'app-with-generated-types/templates/application';

console.log('Look, I imported the template just because I could', relativeAppTemplate, absoluteAppTemplate);

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
