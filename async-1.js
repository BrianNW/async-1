//listens on port 1337
http.createServer(function(req, res){
	
	//path to GET
	var p = path.join('.', req.url);
	
	//check whether path exists
	fs.stat(p, function(err, stats) {
		if(err) {
			res.writeHead(404);
			res.end(err.message);
			return;
			
		}
		
		//check whether path is file
		if (!stats.isFile()) {
			res.writeHead(403);
			res.end();
			return;
			
		}
		
		//try to read file
		fs.readFile(p, function(err, data){
			if(err) {
				res.writeHead(500);
				res.end(err.message);				
			}
			else {
				
				
			}
		}
		
	}
	
	
	
}