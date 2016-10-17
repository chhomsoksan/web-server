var middleware = {
	requireAuthentication : function(req,res,next){
		console.log('Private Hit');
		next();
	},
	logger : function(req,res,next){
		console.log('Request: '+new Date().toString()+req.method+' '+req.originalUrl);
		next();
	}
}


module.exports = middleware;