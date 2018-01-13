export const prepareOperation = (operation) => {
    return Promise.resolve((request, response, next) => {
        const isValid = request.body.age && request.body.password;
        if (isValid) return next()
        return response.status(400).end();
    });
};