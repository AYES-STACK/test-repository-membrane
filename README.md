# test-repository-membrane
This is a repository meant to test github connection with Membrane
This line was added with Membrane connection

## User Event Script (src/ue_helloWorld.js)
This NetSuite User Event script runs on the **beforeSubmit** hook when a Sales Order is created. It uses N/record to read the ntity (customer) field from the new record and logs the customer ID via N/log.audit. Only CREATE events trigger the logging — other event types (EDIT, DELETE, SUBMIT) are ignored.

## Suitelet Script (src/sl_helloWorld.js)
This NetSuite Suitelet renders an HTML form using N/ui/serverWidget. It creates a server form titled "Hello World Suitelet" with an inline HTML field displaying <h1>Hello from Membrane!</h1>. Both GET and POST requests return the same form via context.response.writePage().