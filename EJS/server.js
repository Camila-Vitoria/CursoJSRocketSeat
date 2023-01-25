const express= require('express');
const app= express();
app.set("view engine", "ejs");
app.get("/", function(req,res){
    const items=[
        {
            title: "D",
            message: "Doce"
        },
        {
            title: "E",
            message: "Estrogonofe"
        },
        {
            title: "M",
            message: "Maçã"
        },
        {
            title: "A",
            message: "Abacate"
        },
        {
            title: "I",
            message: "Inteligência"
        },
        {
            title: "S",
            message: "Sabedoria"
        }
    ]
const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JS"

    res.render("pages/index",{
        qualitys:items,
        subtitle: subtitle,
    });
})
app.get("/sobre", function(req,res){
    res.render("pages/about");
})
app.listen(8080);
console.log("Rodando rodaaannndoo");