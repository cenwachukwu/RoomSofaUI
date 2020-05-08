module.exports = {
  // to put the token in the header as Authorization: 'Bearer ' + token, Accept: 'application/json'
  buildHeaders: async (token) => {
    try {
      await token;
      if (!token) {
        return { Accept: 'application/json' };
      } else {
        return { Authorization: 'Bearer ' + token, Accept: 'application/json' };
      }
    } catch (error) {
      console.log(error);
      res.status(400).end();
    }
  },
  buildPacket: async (method, url, headers, data) => {
    try {
      const packet = {};
      if (data === undefined) {
        packet = { method: method, url: url, headers: headers };
      } else {
        packet = {
          method: method,
          url: url,
          headers: headers,
          data: data,
        };
        console.log('common.buildPacket', packet);
        return packet;
      }
    } catch (error) {
      console.log(error);
      res.status(400).end();
    }
  },
  isAxiosError: async (error) => {
    try {
      let t1 = error.hasOwnProperty('response');
      //console.log('t1', t1);
      let t2 = error.response.hasOwnProperty('data');
      //console.log('t2', t2);
      let t3 = error.response.data.hasOwnProperty('message');
      //console.log('t3', t3);
      return t1 && t2 && t3;
    } catch (err) {
      console.log('isAxiosError error param', error);
      return true;
    }
  },
  show: async (obj) => {
    console.log(JSON.stringify(obj, null, 4));
  },
};
