/**
 * A sample api responses.
 *
 * @type {{appName: {app: string}}}
 */
module.exports = {
    /* get all posts */
    index: (request, response) => {
        response.send({
            data: [
                {
                    title: 'post 1',
                    content: 'This is the first post.'
                },
                {
                    title: 'post 2',
                    content: 'This is the second post.'
                }
            ]
        });
    },

    /* create a post */
    create: (request, response) => {
        // TODO: Add request validator
        response.send({
            'data': request.body
        });
    }
};
