import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import core from './modules/core'
import volunteersModule from './modules/volunteers';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(core);
app.loadModule(volunteersModule);

app.init();
