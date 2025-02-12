const fs = require('fs');
const path = require('path');
const ScanAutomation = require('../lib/helpers/scan_automation');

const settings = require('../config/settings.json');

(async () => {
    try {
        console.log('Starting DAST Scan Automation...');
        const scanAutomation = new ScanAutomation(settings);
        await scanAutomation.run();
        console.log('Scan completed successfully.');
    } catch (error) {
        console.error('Error running scan:', error);
    }
})();