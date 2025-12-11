const _nextra = require('nextra');
const createNextra = _nextra && (_nextra.default || _nextra);
// Pass an empty valid Nextra config to satisfy the schema validation.
const withNextra = typeof createNextra === 'function' ? createNextra({}) : undefined;

module.exports = (withNextra && typeof withNextra === 'function')
  ? withNextra({ images: { unoptimized: true } })
  : { images: { unoptimized: true } };
