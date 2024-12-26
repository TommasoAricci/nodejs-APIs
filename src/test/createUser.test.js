const sinon = require('sinon');
const { expect } = require('chai');
const User = require('../src/models/userModel');
const { createUser } = require('../src/controllers/userController');

describe('createUser', () => {
  afterEach(() => sinon.restore());

  it('should create a user and return status 200', async () => {
    const fakeUser = { _id: '123', name: 'John Doe' };
    sinon.stub(User, 'create').resolves(fakeUser);

    const req = { body: { name: 'John Doe' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await createUser(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(fakeUser)).to.be.true;
  });

  it('should return status 400 on error', async () => {
    sinon.stub(User, 'create').rejects(new Error('Error'));

    const req = { body: { name: 'John Doe' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    await createUser(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.called).to.be.true;
  });
});
