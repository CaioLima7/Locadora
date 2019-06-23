const proxy = [
  {
    context: '/api',
    target: 'http://localhost:52849/',
    pathRewrite: { '^/api': '' }
  }
];
