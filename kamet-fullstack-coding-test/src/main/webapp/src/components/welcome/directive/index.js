import { load } from 'angular-es6';

const MODULE_NAME = 'my-app.welcome';

load.directives(require.context('./', true, /.*\.js$/), MODULE_NAME);

export default MODULE_NAME;
