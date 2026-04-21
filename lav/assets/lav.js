window.LAV_CONFIG = {
  pricing: {
    accessUsd: 149,
    estimatedXrpRateUsd: 1.50
  }
};

window.LAV = {
  formatUsd(value) {
    return `$${Number(value).toFixed(2).replace(/\.00$/, '')}`;
  },

  formatXrp(value) {
    return `${Number(value).toFixed(2)} $XRP`;
  },

  estimateXrpFromUsd(usd, xrpRateUsd) {
    return Number(usd) / Number(xrpRateUsd);
  }
};
