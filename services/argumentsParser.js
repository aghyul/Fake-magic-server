/**
 * Parse user input to action (the first non option word), options (word starts with two dashes) and arguments.
 *
 * @returns {{_arguments: Array}}
 */
const arguments = () => {
    /* get all user input arguments */
    const argv = process.argv;

    /* construct options */
    let options = {
        action: null,
        arguments: [],
        options: {}
    };

    /* build options */
    for (let i = 2; i < argv.length; i++) {
        /* options start with two dashes */
        if (argv[i].startsWith('--')) {
            /* get the separator index */
            const separator = argv[i].indexOf('=');

            /* get the value of option */
            let val = argv[i].slice(separator + 1);

            /* set value with key */
            options['options'][argv[i].slice(2, separator)] = val ? val : true;
        }

        /* set action if action is not set yet */
        else if (!options['action']) {
            options['action'] = argv[i];
        }

        /* set the rest to arguments */
        else {
            options['arguments'].push(argv[i]);
        }
    }

    return options;
};

module.exports = {
    arguments
};
