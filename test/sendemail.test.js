'use strict';

const mock = require('egg-mock');

describe('test/sendemail.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/sendemail-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sendemail')
      .expect(200);
  });
});
