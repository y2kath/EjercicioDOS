function montobase()
{
    var mt = parseFloat(document.getElementById("mt").value);
    var venta1 = parseFloat(document.getElementById("venta1").value);
    var venta2 = parseFloat(document.getElementById("venta2").value);
    var venta3 = parseFloat(document.getElementById("venta3").value);
    var psj = (venta1 + venta2 + venta3)/10
    var final;

    final = mt + psj;
    document.getElementById("psj").innerHTML = "El 10% de las 3 ventas es de " + psj;
    document.getElementById("final").innerHTML = "y el monto total es de " + final;
}