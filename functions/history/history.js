exports.handler = async (event) => {
  try {
    return { statusCode: 200, body: 'test history' };
  } catch (error) {
    return { statusCode: 400, body: 'This endpoint is meant for bot and telegram communication' };
  }
};
