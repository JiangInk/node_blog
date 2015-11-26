/**
 * Created by jiangbo on 15/11/26.
 */

exports.checkNotLogin = function(req, res, next){
    console.log("session.user>>", req.session.user);
    if(req.session.user){
        return res.render('feedback', {
            user: req.session.user,
            errinfo: "当前处于已登录状态，需注销后方能操作 ^_^"
        });
    }
    next();
};

exports.checkIsLogin = function(req, res, next){
    console.log("session.user>>", req.session.user);
    if(!req.session.user){
        return res.render('feedback', {
            user: null,
            errinfo: "当前用户尚未登录，需登录后方能操作 ^_^"
        });
    }
    next();
};
