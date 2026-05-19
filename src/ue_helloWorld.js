/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log'], (record, log) => {
    const beforeSubmit = (context) => {
        if (context.type !== context.UserEventType.CREATE) return;

        const so = context.newRecord;
        const entity = so.getValue({ fieldId: 'entity' });

        log.audit({
            title: 'Sales Order Created',
            details: Customer ID: \
        });
    };

    return { beforeSubmit };
});