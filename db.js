var express = require('express');
var mysql = require('mysql');
var app = express();

var conn = mysql.createConnection({
    host: 'localhost',
    user: '157a',
    password: 'CS157Apass',
    database: 'drinks'
});

conn.connect(function(error)
{
    if(!!error){
        console.log('Error');
    }
    else{
        console.log('connected');
    }

});

app.get('/', function(req, resp)
{
    conn.query("SELECT * FROM drinks",function(error, rows, fields){
        if(!!error)
        {
            console.log("Error query");
        }
        else
        {
            console.log('Successful query');
            resp.send(rows);
            //resp.send( rows.length);
            //for(var i = 0; i< rows.length;i++)
            //{
            //   resp.send(rows[i] + "\n");
            //}
            
        }
    });

});
app.listen(1337);