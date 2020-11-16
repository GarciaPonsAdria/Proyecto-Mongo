/*
    Usaremos una nueva colección llamada "Seguros" dentro de mi base de datos "Adri".
    Los insertaremos mediante la función "insertMany".
    
    Estructura: {
        Cliente: Object {
            Nombre: String
            Ciudad: String
            Premium: Boolean
        }
        Info: Object {
            FechaInicio: Date
            FechaCese: Date
        }
        Precio: Object {
            TarifaAnual: Int            // Cliente
            Costes: Int                 // Costes de la empresa en pagos a ese cliente ese año
            DineroDebido: Int           // Cantidad de dinero que ese cliente debe.
        }
        Activo: Boolean                 // Si el contracto de seguro sigue activo
        Tipo: Array                 // Tipo de contrato, 1 si tiene ese tipo de contrato y 0 si no; [Hogar,Auto,Vida,Pension,Salud,Viaje]

        }

        }
*/
db.Seguros.insertMany([
    {Cliente: {Nombre: "Jorge Benitez Gonzalez", Ciudad: "Barcelona", Premium: true}, Info: {FechaInicio: new Date("2001,03,22"), FechaCese: new Date("2040,03,01") }, Precio: {TarifaAnual: 500, Costes: 150, DineroDebido: 200 }, Activo: true, Tipo: [1,0,1,0,1,0] },
    {Cliente: {Nombre: "Martín Garcia Bosque", Ciudad: "Barcelona", Premium: true}, Info: {FechaInicio: new Date("2000,02,23"), FechaCese: new Date("2018,02,01") }, Precio: {TarifaAnual: 1500, Costes: 255, DineroDebido: 400 }, Activo: false, Tipo: [0,1,1,1,0,0] }, 
    {Cliente: {Nombre: "Jorge Garcia Reina", Ciudad: "Madrid", Premium: false}, Info: { FechaInicio: new Date("1998,07,11"), FechaCese: new Date("2018,06,01") }, Precio: {TarifaAnual: 1500, Costes: 0, DineroDebido: 250 }, Activo: false  , Tipo: [1,0,0,0,1,1] },
    {Cliente: {Nombre: "Maria Rosal Guzman", Ciudad: "Sevilla", Premium: false}, Info: { FechaInicio: new Date("1994,04,21"), FechaCese: new Date("2014,11,01") }, Precio: {TarifaAnual: 1500, Costes: 0, DineroDebido: 150 }, Activo: true  , Tipo: [0,1,0,1,0,0] },
    {Cliente: {Nombre: "Pedro Jimenez Guerrero", Ciudad: "Madrid", Premium: true}, Info: { FechaInicio: new Date("1984,11,15"), FechaCese: new Date("2024,12,01") }, Precio: {TarifaAnual: 1500, Costes: 3991, DineroDebido: 0 }, Activo: true  , Tipo: [1,0,1,0,0,0] },
    {Cliente: {Nombre: "Jorge Pipert Montaña", Ciudad: "Barcelona", Premium: true}, Info: { FechaInicio: new Date("1963,02,12"), FechaCese: new Date("2004,09,01") }, Precio: {TarifaAnual: 3500, Costes: 0, DineroDebido: 0 }, Activo: true  ,Tipo: [0,1,1,1,0,1] },
    {Cliente: {Nombre: "Rafa Cuerdas Pons", Ciudad: "Tarragona", Premium: false}, Info: {FechaInicio: new Date("1974,01,05"), FechaCese: new Date("2006,06,01") }, Precio: {TarifaAnual: 3000, Costes: 2412, DineroDebido: 240 }, Activo: true , Tipo: [0,1,0,0,1,0] }, 
    {Cliente: {Nombre: "Antonio Piedra Rosco", Ciudad: "Madrid", Premium: true}, Info: {FechaInicio: new Date("1999,02,01"), FechaCese: new Date("2024,07,01") }, Precio: {TarifaAnual: 1000, Costes: 1000, DineroDebido: 2320 }, Activo: true , Tipo: [0,1,1,1,1,0] }, 
    {Cliente: {Nombre: "Pepe Reina Viyuela", Ciudad: "Sevilla", Premium: true}, Info: {FechaInicio: new Date("2004,01,21"), FechaCese: new Date("2046,04,01") }, Precio: {TarifaAnual: 1500, Costes: 0, DineroDebido: 1230 }, Activo: true , Tipo: [1,0,0,0,0,0]}, 
    {Cliente: {Nombre: "Jordi Mercedes Sanchez", Ciudad: "Lérida", Premium: true}, Info: {FechaInicio: new Date("2006,06,16"), FechaCese: new Date("2030,03,01") }, Precio: {TarifaAnual: 5000, Costes: 0, DineroDebido: 0 }, Activo: true  ,Tipo: [0,1,1,1,0,0]}, 
    {Cliente: {Nombre: "Josefina Lopez Reina", Ciudad: "Barcelona", Premium: false}, Info: {FechaInicio: new Date("2001,03,20"), FechaCese: new Date("2025,02,01") }, Precio: {TarifaAnual: 2500, Costes: 0, DineroDebido: 240 }, Activo: true  ,Tipo: [0,1,0,0,1,0]}, 
    {Cliente: {Nombre: "Miguel Esclavos Perez", Ciudad: "Jaen", Premium: false}, Info: {FechaInicio: new Date("2004,08,15"), FechaCese: new Date("2027,02,01") }, Precio: {TarifaAnual: 3250, Costes: 150, DineroDebido: 20 }, Activo: false ,Tipo: [0,0,0,1,0,1]}, 
    {Cliente: {Nombre: "Mohamed Lahyani", Ciudad: "Granada", Premium: true}, Info: {FechaInicio: new Date("1994,04,18"), FechaCese: new Date("2026,01,01") }, Precio: {TarifaAnual: 1500, Costes: 0, DineroDebido: 10 }, Activo: true  , Tipo: [0,1,1,0,0,0]},
    {Cliente: {Nombre: "Francisco Perez Montalvo", Ciudad: "Castellón", Premium: true}, Info: {FechaInicio: new Date("1996,10,14"), FechaCese: new Date("2027,07,01") }, Precio: {TarifaAnual: 5500, Costes: 159, DineroDebido: 310 }, Activo: true  , Tipo: [1,0,1,0,0,1]}, 
    {Cliente: {Nombre: "Carmen Flores Lopez", Ciudad: "Cádiz", Premium: false}, Info: {FechaInicio: new Date("1992,01,06"), FechaCese: new Date("2037,08,01") }, Precio: {TarifaAnual: 1020, Costes: 0, DineroDebido: 504 }, Activo: true  , Tipo: [1,1,0,0,0,1]}, 
    {Cliente: {Nombre: "Jorge Lopez Montalvo", Ciudad: "Albacete", Premium: false}, Info: {FechaInicio: new Date("2005,06,08"), FechaCese: new Date("2053,08,01") }, Precio: {TarifaAnual: 1580, Costes: 6421, DineroDebido: 302 }, Activo: true  , Tipo: [0,1,1,1,0,0]}, 
    {Cliente: {Nombre: "Pedro Garcia Toro", Ciudad: "Lérida", Premium: true}, Info: {FechaInicio: new Date("2012,07,25"), FechaCese: new Date("2043,10,01") }, Precio: {TarifaAnual: 2200, Costes: 213, DineroDebido: 2013 }, Activo: false , Tipo: [0,1,1,0,1,0]}, 
    {Cliente: {Nombre: "Miguel Reverte Asturias", Ciudad: "Badajoz", Premium: true}, Info: {FechaInicio: new Date("2014,08,31"), FechaCese: new Date("2020,10,01") }, Precio: {TarifaAnual: 3300, Costes: 535, DineroDebido: 103 }, Activo: true  , Tipo: [0,0,0,0,0,1]}, 
    {Cliente: {Nombre: "Adrian Sanchez Salmeron", Ciudad: "Sevilla", Premium: false}, Info: {FechaInicio: new Date("1994,09,30"), FechaCese: new Date("2041,05,01") }, Precio: {TarifaAnual: 4400, Costes: 0, DineroDebido: 432 }, Activo: true  , Tipo: [1,1,0,1,1,0]}, 
    {Cliente: {Nombre: "Carlos Fernandez Segovia", Ciudad: "Toledo", Premium: false}, Info: {FechaInicio: new Date("1984,11,04"), FechaCese: new Date("2030,04,01") }, Precio: {TarifaAnual: 720, Costes: 0, DineroDebido: 213 }, Activo: true  , Tipo: [0,0,1,0,0,1]}, 
    {Cliente: {Nombre: "Antonio Campos Umbral", Ciudad: "Malaga", Premium: true}, Info: {FechaInicio: new Date("1996,02,28"), FechaCese: new Date("2022,01,01") }, Precio: {TarifaAnual: 650, Costes: 0, DineroDebido: 232 }, Activo: false , Tipo: [0,1,1,0,0,1]}, 
    {Cliente: {Nombre: "Jose Hoyos Zamorano", Ciudad: "Cuenca", Premium: true}, Info: {FechaInicio: new Date("1992,12,06"), FechaCese: new Date("2022,11,01") }, Precio: {TarifaAnual: 6030, Costes: 242, DineroDebido: 12 }, Activo: true  , Tipo: [0,1,0,1,0,0]}, 
    {Cliente: {Nombre: "Pepe Navarro Ortega", Ciudad: "Barcelona", Premium: true}, Info: {FechaInicio: new Date("1976,12,15"), FechaCese: new Date("2022,12,01") }, Precio: {TarifaAnual: 1500, Costes: 0, DineroDebido: 0 }, Activo: true  , Tipo: [1,0,1,1,0,0]}, 
    {Cliente: {Nombre: "Alejandro Gordillo Perez", Ciudad: "Bilbao", Premium: true}, Info: {FechaInicio: new Date("1999,07,18"), FechaCese: new Date("2030,01,01") }, Precio: {TarifaAnual: 4500, Costes: 124, DineroDebido: 0 }, Activo: true  , Tipo: [0,1,0,0,0,1]}, 
    {Cliente: {Nombre: "Alejandro Sanchez Garcia", Ciudad: "Madrid", Premium: true}, Info: {FechaInicio: new Date("2005,11,13"), FechaCese: new Date("2022,11,01") }, Precio: {TarifaAnual: 1200, Costes: 284, DineroDebido: 0 }, Activo: false , Tipo: [0,1,0,0,1,0]}, 
    {Cliente: {Nombre: "Federico Gutierrez Hidalgo", Ciudad: "Valencia", Premium: false}, Info: {FechaInicio: new Date("2012,04,12"), FechaCese: new Date("2022,10,01") }, Precio: {TarifaAnual: 1000, Costes: 0, DineroDebido: 23 }, Activo: true  , Tipo: [0,0,1,0,1,0]}, 
    {Cliente: {Nombre: "Alejandro Lloret Marquez", Ciudad: "Salamanca", Premium: false}, Info: {FechaInicio: new Date("2005,04,16"), FechaCese: new Date("2022,01,01") }, Precio: {TarifaAnual: 1250, Costes: 0, DineroDebido: 0 }, Activo: true  , Tipo: [0,1,0,1,1,0]}, 
    {Cliente: {Nombre: "Sofia Rosa Cadiz", Ciudad: "Bilbao", Premium: true}, Info: {FechaInicio: new Date("2013,05,17"), FechaCese: new Date("2025,09,01") }, Precio: {TarifaAnual: 1350, Costes: 545, DineroDebido: 0 }, Activo: true  , Tipo: [0,1,1,0,0,1]}, 
    {Cliente: {Nombre: "Esperanza Jimenez Perez", Ciudad: "Sevilla", Premium: true}, Info: {FechaInicio: new Date("1993,05,19"), FechaCese: new Date("2038,01,01") }, Precio: {TarifaAnual: 1550, Costes: 0, DineroDebido: 534 }, Activo: true  , Tipo: [1,0,1,0,1,0]}, 
    {Cliente: {Nombre: "Carmen Guerrero Lopez", Ciudad: "Lérida", Premium: true}, Info: {FechaInicio: new Date("1985,09,20"), FechaCese: new Date("2033,01,01") }, Precio: {TarifaAnual: 1850, Costes: 0, DineroDebido: 0 }, Activo: true  , Tipo: [0,1,0,0,1,0]}, 
    {Cliente: {Nombre: "Jorge Guzman Sancho", Ciudad: "Girona", Premium: true}, Info: {FechaInicio: new Date("1983,09,22"), FechaCese: new Date("2030,08,01") }, Precio: {TarifaAnual: 2400, Costes: 1331, DineroDebido: 0 }, Activo: false , Tipo: [0,1,1,0,0,0]}, 
    {Cliente: {Nombre: "Pepe Herrera Qiyan", Ciudad: "Tarragona", Premium: false}, Info: {FechaInicio: new Date("1989,04,24"), FechaCese: new Date("2027,01,01") }, Precio: {TarifaAnual: 3100, Costes: 0, DineroDebido: 742 }, Activo: false , Tipo: [0,0,1,1,0,0]}, 
    {Cliente: {Nombre: "Sara Garcia Miranda", Ciudad: "Cádiz", Premium: true}, Info: {FechaInicio: new Date("1992,01,28"), FechaCese: new Date("2064,06,01") }, Precio: {TarifaAnual: 3800, Costes: 5325, DineroDebido: 0 }, Activo: true  , Tipo: [1,1,1,1,1,1]}, 
    {Cliente: {Nombre: "Jordi Garcia Nebraska", Ciudad: "Madrid", Premium: true}, Info: { FechaInicio: new Date("2008,03,06"), FechaCese: new Date("2046,07,01") }, Precio: {TarifaAnual: 3920, Costes: 0, DineroDebido: 0 }, Activo: true  , Tipo: [0,1,1,1,1,0]},
    {Cliente: {Nombre: "Jorge Perez Montalvo", Ciudad: "Sevilla", Premium: true}, Info: {FechaInicio: new Date("2017,06,01"), FechaCese: new Date("2055,04,01") }, Precio: {TarifaAnual: 1010, Costes: 4321, DineroDebido: 426 }, Activo: true , Tipo: [0,1,0,0,1,1]}, 
    {Cliente: {Nombre: "Adrian Garcia Pons", Ciudad: "Lugo", Premium: false}, Info: {FechaInicio: new Date("2015,05,09"), FechaCese: new Date("2045,03,01") }, Precio: {TarifaAnual: 1050, Costes: 0, DineroDebido: 0 }, Activo: false  , Tipo: [1,0,1,0,0,1]}, 
    {Cliente: {Nombre: "Miguel Reina Lugo", Ciudad: "Alicante", Premium: true}, Info: {FechaInicio: new Date("2013,10,31"), FechaCese: new Date("2025,02,01") }, Precio: {TarifaAnual: 3200, Costes: 0, DineroDebido: 0 }, Activo: true  , Tipo: [0,1,1,1,0,0] },
    {Cliente: {Nombre: "Hugo Evans Roddfield.", Ciudad: "Barcelona", Premium: true}, Info: {FechaInicio: new Date("2012,12,30"), FechaCese: new Date("2031,01,01") }, Precio: {TarifaAnual: 4250, Costes: 592, DineroDebido: 228 }, Activo: true  , Tipo: [0,1,0,1,0,1] }, 
    {Cliente: {Nombre: "Maria Lepe Frias", Ciudad: "Soria", Premium: false}, Info: {FechaInicio: new Date("2018,04,27"), FechaCese: new Date("2033,05,01") }, Precio: {TarifaAnual: 3750, Costes: 0, DineroDebido: 0 }, Activo: true  , Tipo: [1,0,1,0,0,0] }, 
    {Cliente: {Nombre: "Rosa Rodriguez Romero", Ciudad: "Barcelona", Premium: false}, Info: {FechaInicio: new Date("1994,09,25"), FechaCese: new Date("2035,02,01") }, Precio: {TarifaAnual: 2320, Costes: 860, DineroDebido: 0 }, Activo: true ,Tipo: [0,1,1,1,1,0] } 
])

/* Insertamos los documentos concretados arriba y comenzamos a realizar querys

    Atención: Los recursos utilizados en cada una de las siguientes Querys vendrán explicados en el documento pdf adjunto.

 */
// Encuentra todos los documentos los cuales estén activos, la ciudad del cliente no sea ni de Barcelona ni de Madrid, los costes sean mayores a la Tarifa anual y
// y que el Cliente sea premium o el Dinero Debido no sea igual a 0 o que la fecha de inicio del contrato sea igual o postearior al 1 de Enero de 2000.
db.Seguros.find({$and: [{Activo:true}, {"Cliente.Ciudad": {$nin: ["Barcelona","Madrid"]}},{$expr: {$gt: ["$Precio.Costes","$Precio.TarifaAnual"]} }, {$or: [{"Cliente.Premium":true}, {"Precio.DineroDebido": {$not: {$eq:0}}}]},{"Info.FechaInicio": {$gte: new Date("2000-01-01")}} ] })

// Encuentra todos los documentos cuyos tipos cumplan que el valor 1 no sea 1, el valor 3 no sea 0 y el valor 5 no sea 0, es decir, todos los clientes que no tengan
// seguro de Hogar pero si tengan seguro de Pension y Viaje.
db.Seguros.find({$nor: [{"Tipo.0": {$eq: 1}},{"Tipo.3":{$eq:0}},{"Tipo.5":{$eq:0}}]   })

// Encuentra todos los documentos cuya Tarifa Anual sea menor que 3000, sus Costes sean menores o iguales que 500, la ciudad del Cliente no sea Sevilla y el Dinero Debido sea 0 o 200. 
db.Seguros.find({$and: [{"Precio.TarifaAnual": {$lt: 3000}}, {"Precio.Costes": {$lte: 500}}, {"Cliente.Ciudad": {$ne: "Sevilla"}}, {"Precio.DineroDebido": {$in: [0, 200] } } ] } )

// Encuentra todos los clientes que se llamen Jorge (O empiecen por Jorge) y su ciudad acabe por la letra a.
db.Seguros.find({$and: [{"Cliente.Nombre": {$regex: "^Jorge"}}, {"Cliente.Ciudad": {$regex: "a$"}}] })

//Para la siguiente query deberemos introducir la siguiente función la cual crea una expresión de agregación tipo let la cual es igual a la resta de Precio.TarifaAnual menos Precio.Costes siempre que
//Precio Costes sea mayor a Precio Tarifa Anual.

let Perdidas = {
    $cond: {
        if: {$gt: ["$Precio.Costes","$Precio.TarifaAnual"]},
        then: {rest: ["$Precio.Costes","$Precio.TarifaAnual"] },
        else: 0 
    }
};

//Realizamos una Query para buscar todos los casos de Clientes en los cuales las perdidas han sido mayores a 100.
db.Seguros.find( { $expr: { $gt:[ Perdidas,  NumberDecimal("100") ] } });

// Nos devuelve todos los documentos para los que Precio.Costes no es divisor de 10.
db.Seguros.find ({ "Precio.Costes": {$not: {$mod: [10,0] }}     })

