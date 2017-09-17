var app=require("express")();
var http=require("http").Server(app);
var io=require("socket.io")(http);
var path=require("path");

app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname,"index.html"))
});

io.on("connection",function (socket) {
    socket.on("disconnect",function (err) {

    })

    socket.on("111",function (msg) {
        socket.emit("qqq",msg);
    })
})

app.set('port', process.env.PORT || 8888);

var server = http.listen(app.get('port'), function() {
    console.log('start at port:' + server.address().port);
});
