module.exports = {
  boardmates: {
    output: {
      mode: 'tags-split',
      target: './src/api/__generated__/boardmates.ts',
      schemas: './src/api/__generated__/schemas',
      client: 'react-query',
    },
    input: {
      target: 'http://127.0.0.1:8000/openapi.json',
    },
  },
};
