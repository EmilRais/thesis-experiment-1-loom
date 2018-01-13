export const prepareOperation = (operation) => {
    return Promise.resolve((request, response, next) => {
        const isValid = request.locals.board.password === JSON.parse(request.get("Authorization")).password
            && request.params.id === JSON.parse(request.get("Authorization"))._id;
        if (isValid) return next()
        return response.status(400).end();
    });
};