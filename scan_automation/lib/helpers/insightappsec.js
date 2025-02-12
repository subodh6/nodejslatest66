const axios = require('axios');

class InsightAppSec {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://us.api.insight.rapid7.com/ias/v1';
    }

    async startScan(scanConfigId) {
        try {
            const response = await axios.post(`${this.baseUrl}/scans`, { scan_config_id: scanConfigId }, {
                headers: { 'X-Api-Key': this.apiKey }
            });
            return response.data;
        } catch (error) {
            console.error('Error starting scan:', error);
        }
    }
}

module.exports = InsightAppSec;