const dev = {
  context: 'http://localhost:8080'
};

const prod = {
  context: 'http://ec2-url:8081'
};


export let environment = dev;

if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_ENV === 'production') {
  environment = prod;
}