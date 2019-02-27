#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const controller = require('../controllers/controller.customer');
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
} = controller;

// Customer Questions
const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Customer First Name'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Customer Last Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer Phone Number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer Email Address'
  }
];

program 
  .version('1.0.0')
  .description('Client Management System')

// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a customer')
  .action(() => {
    prompt(questions).then(answers => addCustomer(answers));
  });

// Find Command
program
  .command('find <name>')
  .alias('f')
  .description('Find a customer')
  .action(name => findCustomer(name));

// Update Command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a customer')
  .action(_id => {
    prompt(questions).then(answers => updateCustomer(_id, answers));
  });

// Remove Command
program
  .command('delete <_id>')
  .alias('d')
  .description('Remove a customer')
  .action(_id => removeCustomer(_id));

// List Command
program
  .command('list')
  .alias('l')
  .description('List all customers')
  .action(() => listCustomers());

program.parse(process.argv);
