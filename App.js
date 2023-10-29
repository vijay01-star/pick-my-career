var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app=express()



 

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var add=req.body.address;
	var gender=req.body.gender;
	var phone =req.body.phone;
    var scheme =req.body.scheme;
    var country =req.body.country;
    var option =req.body.option;
    var ifsc =req.body.ifsc;
    var account =req.body.account;
    var bname =req.body.bname;
    var query = req.body.query






	var data = {
		"name": name,
		"email":email,
		"password":pass,
		"address":add,
		"gender":gender,
		"phone":phone,
        "scheme":scheme,
        "country":country,
        "option":option,
        "ifsc":ifsc,
        "account":account,
        "bname":bname,
        "query":query
	}
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	return res.redirect('signup_success.html');
})


app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('index.html');
}).listen(3000)


console.log("server listening at port 3000");



/*var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/scholarship'); // Use your own database name
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function(callback) {
    console.log("MongoDB connected successfully");
})

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Define a mongoose schema for the scholarship application data
app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var phoneNumber = req.body.phoneNumber;
    var gender = req.body.gender;
    var interests = req.body.interests;
    var country = req.body.country;
    var essay = req.body.essay;
    var scholarshipOption = req.body.scholarshipOption;
    var ifsc = req.body.ifsc;
    var account = req.body.account;
 // Use a different variable name to avoid conflict
    var bankName = req.body.bankName;
        
    var data = {
        "name": name,
        "email": email,
        "phoneNumber": phoneNumber,
        "gender": gender,
        "interests": interests,
        "country": country,
        "essay": essay,
        "scholarshipOption": scholarshipOption,
        "ifsc": ifsc,
        "account": account,
        // Updated variable name
        "bankName": bankName
    }
    
    db.collection('details').insertOne(data, function(err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
        
    return res.redirect('signup_success.html');
});
app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var phoneNumber = req.body.PhoneNumber; // Corrected field name
    var gender = req.body.gender;
    var interests = req.body.interests;
    var country = req.body.country;
    var essay = req.body.essay;
    var scholarshipOption = req.body.scholarshipOption;
    var ifsc = req.body.ifsc;
    var account = req.body.account;
    var bankName = req.body.bankName;

    var data = {
        "name": name,
        "email": email,
        "phoneNumber": phoneNumber,
        "gender": gender,
        "interests": interests,
        "country": country,
        "essay": essay,
        "scholarshipOption": scholarshipOption,
        "ifsc": ifsc,
        "account": account,
        "bankName": bankName
    }
    
    db.collection('details').insertOne(data, function(err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
        
    return res.redirect('signup_success.html');
});

app.get('/', function(req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('form.html');
}).listen(3000);

console.log("server listening at port 3000");*/
