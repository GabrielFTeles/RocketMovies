const SessionsCreateService = require('../services/SessionsCreateService');
const SessionsRepository = require('../repositories/SessionsRepository');
class SessionsController {
  async create(request, response) {
    let { email, password } = request.body;

    const sessionsRepository = new SessionsRepository();
    const sessionsCreateService = new SessionsCreateService(sessionsRepository);

    const authObject = await sessionsCreateService.execute({ email, password });

    return response.json(authObject);
  }
}

module.exports = SessionsController;