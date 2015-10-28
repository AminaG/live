var fs=require('fs');
var subdomain_proxy=require('node-subdomain-proxy');
var host='live.giftwizard.127.0.0.100.xip.io';
var express=require('express')

var app=express();

app.get('/status',function(req,res){
	res.end('LIVE')
})

app.use(subdomain_proxy.create({host:host}))


app.listen(80,'127.0.0.222')

// var https=require('https')

// https.createServer({
// 	key:fs.readFileSync(process.cwd()+'\\rg.gy.key','utf-8'),
// 	cert:fs.readFileSync(process.cwd()+'\\rg.gy.crt','utf-8'),
// },app).listen(443);
