import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          amount: '30',
          category: 'Freelance',
          createAt: new Date('2021-06-06 09:05:00'),
        },
        {
          id: 2,
          title: 'Parcela da casa',
          type: 'withdraw',
          amount: '420',
          category: 'Casa',
          createAt: new Date('2021-06-01 08:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

