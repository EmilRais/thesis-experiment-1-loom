export const prepareOperation = (operation) => {
    return Promise.resolve((request, response, next) => {
        const isValid = !request.body._id
            && typeof request.body.name === "string"
            && typeof request.body.age === "number"
            && typeof request.body.password === "string"
            && response.locales.board.length === 0
        if (isValid) return next()
        return response.status(400).end();
    });
};