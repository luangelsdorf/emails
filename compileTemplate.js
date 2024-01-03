const BootstrapEmail = require('bootstrap-email');

const template = new BootstrapEmail("C:\/Users\/luanf\/Desktop\/Projects\/Certivale\/emails\/figma-to-html\/index.html");

// const template = new BootstrapEmail([
//     '<absolute-path-to-first-template>.html',
//     '<absolute-path-to-second-template>.html',
// ]);
//
// const template = new BootstrapEmail('<div class="container">...</div>'); 

template.compileAndSave('C:\/Users\/luanf\/Desktop\/Projects\/Certivale\/emails\/out.html');