const canvas=document.getElementById("myCanvas"); // trabajo con el canvas instanciado como canvas

canvas.width=200;

const ctx= canvas.getContext("2d"); // se elige el contexto 2d para tener las herramientas para dibujar en 2d
const road=new Road(canvas.width/2,canvas.width*0.9);
const car =new Car(road.getLaneCenter(1), 100, 30, 50,"KEYS",2); // x,y,width, height

const traffic=[
    new Car(road.getLaneCenter(0), -100, 30, 50,"DUMMY",1)

];
animate();



function animate(){
    for(let i=0;i<traffic.length;i++){
        traffic[i].update(road.borders,[]);
    }

    car.update(road.borders,traffic);
    


    canvas.height=window.innerHeight; // cambia el tamaño a la ventana automaticamente
   
    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);

   
    road.draw(ctx);
    for(let i=0;i<traffic.length;i++){
        traffic[i].draw(ctx, "green");

    }
    
    car.draw(ctx, "blue");
    
    ctx.restore(); 
    requestAnimationFrame(animate);
}
