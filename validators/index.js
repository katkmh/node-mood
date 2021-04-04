exports.createPostValidator = (req,res,next) => {
    // title
    req.check('title','Write a title').notEmpty();
    req.check('title', 'Title must be between 4 to 140 characters')
        .isLength({
            min: 4,
            max: 140
        });
    
    // body
    req.check('body','Write a body').notEmpty();
    req.check('body', 'Body must be between 4 to 140 characters')
        .isLength({
            min: 4,
            max: 2000
        });

    // check for errors
    const errors = req.validationErrors();

    // show first error as they happen
    if (errors) {
        const firstError = errors[0].msg;
        return res.status(400).json({error: firstError});
    }

    // proceed to next middleware
    next();
}