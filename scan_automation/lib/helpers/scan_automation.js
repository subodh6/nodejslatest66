const InsightAppSec = require('./insightappsec');

class ScanAutomation {
    constructor(settings) {
        this.settings = settings;
        this.insightAppSec = new InsightAppSec(settings.apiKey);
    }

    async run() {
        console.log('Initializing scan...');
        const scanResponse = await this.insightAppSec.startScan(this.settings.scanConfigId);
        console.log('Scan initiated:', scanResponse);
    }
}

module.exports = ScanAutomation;