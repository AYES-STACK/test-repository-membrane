/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/ui/serverWidget'], (serverWidget) => {
    const onRequest = (context) => {
        const form = serverWidget.createForm({
            title: 'Hello World Suitelet'
        });

        form.addField({
            id: 'custpage_message',
            type: serverWidget.FieldType.INLINEHTML,
            label: 'Message'
        }).defaultValue = '<h1>Hello from Membrane!</h1>';

        context.response.writePage(form);
    };

    return { onRequest };
});