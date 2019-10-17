FROM cypress/base:10.16.0
MAINTAINER vagonpidarasov@gmail.com
ADD . /var/app
WORKDIR /var/app
ENV PATH="/var/app/node_modules/.bin/:${PATH}"
RUN npm install
RUN npm run build
