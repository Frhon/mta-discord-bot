
const Base = require(`${libdir}/packets/BasePacket`);

class AuthPacket extends Base
{
  constructor(success, error)
  {
    super("relay.auth");
    this.set("authenticated", !!success)

    if (error != undefined) {
      this.set("error", error);
    }
  }
}

module.exports = AuthPacket;
