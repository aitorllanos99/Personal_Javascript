// 1st Query Launcher

function launchQuery1() {
    $.ajaxSetup({
        headers: {
            // Add authorization header in all ajax requests
            // bmVvNGo6cGFzc3dvcmQ= is "password" base64 encoded
            "Authorization": "Basic bmVvNGo6cGFzc3dvcmQ="
        }
    });

    $.ajax({
        type: "POST",
        url: "http://localhost:7474/db/data/transaction/commit ",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({"statements": [{"statement": "MATCH (c:Camello)-[:TRABAJA_PARA]->(:Cartel {nombre: \"Cártel de Pontón\"}) RETURN c.nombre AS Nombre, c.apellidos AS Apellido"}]}),
        success: function (data, textStatus, jqXHR) {
            var dataTable = "<table><th>Nombre</th><th>Apellido</th>";
            var results = data.results;
            var nombre = results[0].data.map(function (value) {
                return {
                    nombre: value.row[0],
                    apellido: value.row[1]
                }
            })
            for (i = 0; i < nombre.length; i++)
                dataTable += "<tr><td>" + results[0].data[i].row[0] + "</td><td>" + results[0].data[i].row[1] + "</td></tr>";
            dataTable += "</table>";
            let div = $("#query1");
            div.empty();
            div.append(dataTable);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

//2nd Query Launcher

function launchQuery2() {
    $.ajaxSetup({
        headers: {
            // Add authorization header in all ajax requests
            // bmVvNGo6cGFzc3dvcmQ= is "password" base64 encoded
            "Authorization": "Basic bmVvNGo6cGFzc3dvcmQ="
        }
    });

    $.ajax({
        type: "POST",
        url: "http://localhost:7474/db/data/transaction/commit ",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({"statements": [{"statement": "MATCH (p:Policia) WHERE NOT (p:Policia)-[:TRABAJA_PARA]->(:Cartel) RETURN p.nombre AS Nombre, p.apellidos AS Apellido"}]}),
        success: function (data, textStatus, jqXHR) {
            var dataTable = "<table><th>Nombre</th><th>Apellido</th>";
            var results = data.results;
            var nombre = results[0].data.map(function (value) {
                return {
                    nombre: value.row[0],
                    apellido: value.row[1]
                }
            })
            for (i = 0; i < nombre.length; i++)
                dataTable += "<tr><td>" + results[0].data[i].row[0] + "</td><td>" + results[0].data[i].row[1] + "</td></tr>";

            dataTable += "</table>";
            let div = $("#query2");
            div.empty();
            div.append(dataTable);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

//3rd Query Launcher

function launchQuery3() {
    $.ajaxSetup({
        headers: {
            // Add authorization header in all ajax requests
            // bmVvNGo6cGFzc3dvcmQ= is "password" base64 encoded
            "Authorization": "Basic bmVvNGo6cGFzc3dvcmQ="
        }
    });

    $.ajax({
        type: "POST",
        url: "http://localhost:7474/db/data/transaction/commit ",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({"statements": [{"statement": "MATCH (c:Camello)-[:TRABAJA_PARA]->(:Cartel {nombre: \"Cártel Vidal\"}) RETURN avg(c.experiencia) AS Promedio"}]}),
        success: function (data, textStatus, jqXHR) {
            var dataTable = "<table><th>Promedio Experiencia</th>";
            var results = data.results;

            var nombre = results[0].data.map(function (value) {
                return {
                    promedio: value.row[0]
                }
            })
            for (i = 0; i < nombre.length; i++)
                dataTable += "<tr><td>" + results[0].data[i].row[0] + " </td></tr>";
            dataTable += "</table>";
            let div = $("#query3");
            div.empty();
            div.append(dataTable);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}


//4th Query Launcher

function launchQuery4() {
    $.ajaxSetup({
        headers: {
            // Add authorization header in all ajax requests
            // bmVvNGo6cGFzc3dvcmQ= is "password" base64 encoded
            "Authorization": "Basic bmVvNGo6cGFzc3dvcmQ="
        }
    });

    $.ajax({
        type: "POST",
        url: "http://localhost:7474/db/data/transaction/commit ",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({"statements": [{"statement": "MATCH (p:Policia)-[:TRABAJA_PARA]->(:Cartel) WITH p.nombre AS policia, COUNT(*) AS numCartelesObedece WITH MAX(numCartelesObedece) AS maximoDeCartelesObedecidos MATCH (p:Policia)-[:TRABAJA_PARA]->(:Cartel) WITH p.nombre AS n, p.apellidos AS a, COUNT(*) AS numCartelesObedece, maximoDeCartelesObedecidos WHERE numCartelesObedece >= maximoDeCartelesObedecidos RETURN n AS Nombre, a AS Apellido\n"}]}),
        success: function (data, textStatus, jqXHR) {
            var dataTable = "<table><th>Nombre</th><th>Apellido</th>";
            var results = data.results;
            var nombre = results[0].data.map(function (value) {
                return {
                    nombre: value.row[0],
                    apellido: value.row[1]
                }
            })
            for (i = 0; i < nombre.length; i++)
                dataTable += "<tr><td>" + results[0].data[i].row[0] + "</td><td>" + results[0].data[i].row[1] + "</td></tr>";

            dataTable += "</table>";
            let div = $("#query4");
            div.empty();
            div.append(dataTable);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}


//5th Query Launcher

function launchQuery5() {
    $.ajaxSetup({
        headers: {
            // Add authorization header in all ajax requests
            // bmVvNGo6cGFzc3dvcmQ= is "password" base64 encoded
            "Authorization": "Basic bmVvNGo6cGFzc3dvcmQ="
        }
    });

    $.ajax({
        type: "POST",
        url: "http://localhost:7474/db/data/transaction/commit ",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({"statements": [{"statement": "MATCH (c:Comprador)-[:COMPRA]->(ca:Camello) WITH ca.nombre AS camello, COUNT(*) AS compradores WITH MAX(compradores) AS maxCompradores MATCH (c:Comprador)-[:COMPRA]->(ca:Camello) WITH ca.nombre AS n, ca.apellidos AS a, COUNT(*) AS compradores, maxCompradores WHERE compradores >= maxCompradores MATCH (ca:Camello)-[:TRABAJA_PARA]->(c:Cartel) WHERE ca.nombre = n and ca.apellidos=a RETURN DISTINCT c.nombre AS carteles\n"}]}),
        success: function (data, textStatus, jqXHR) {
            var dataTable = "<table><th>Carteles</th>";
            var results = data.results;
            var nombre = results[0].data.map(function (value) {
                return {
                    tipoDroga: value.row[0]
                }
            })
            for (i = 0; i < nombre.length; i++)
                dataTable += "<tr><td>" + results[0].data[i].row[0] + " </td></tr>";
            dataTable += "</table>";
            let div = $("#query5");
            div.empty();
            div.append(dataTable);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

//6th Query Launcher

function launchQuery6() {
    $.ajaxSetup({
        headers: {
            // Add authorization header in all ajax requests
            // bmVvNGo6cGFzc3dvcmQ= is "password" base64 encoded
            "Authorization": "Basic bmVvNGo6cGFzc3dvcmQ="
        }
    });

    $.ajax({
        type: "POST",
        url: "http://localhost:7474/db/data/transaction/commit ",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({"statements": [{"statement": "MATCH (ca1:Cartel)-[:ALIADO]->(ca2:Cartel)-[:DISTRIBUYE]->(d:Droga) RETURN ca1.nombre AS Nombre_Cartel ,ca2.nombre AS Aliado_Cartel, COLLECT(DISTINCT d.nombre) AS Drogas_Ditribuidas\n"}]}),
        success: function (data, textStatus, jqXHR) {
            var dataTable = "<table><th>Nombre Cartel</th><th>Cartel Aliado</th><th>Drogas Distribuidas</th>";
            var results = data.results;
            var nombre = results[0].data.map(function (value) {
                return {
                    distribucion: value.row[0]
                }
            });
            for (i = 0; i < nombre.length; i++) {
                dataTable += "<tr><td>" + results[0].data[i].row[0] + "</td><td>" + results[0].data[i].row[1] + "</td><td>" + results[0].data[i].row[2] + "</td></tr>";
            }

            dataTable += "</table>";
            let div = $("#query6");
            div.empty();
            div.append(dataTable);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

//7th Query Launcher

function launchQuery7() {
    $.ajaxSetup({
        headers: {
            // Add authorization header in all ajax requests
            // bmVvNGo6cGFzc3dvcmQ= is "password" base64 encoded
            "Authorization": "Basic bmVvNGo6cGFzc3dvcmQ="
        }
    });

    $.ajax({
        type: "POST",
        url: "http://localhost:7474/db/data/transaction/commit ",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({"statements": [{"statement": "MATCH (co:Comprador)-[:COMPRA]->(ca:Camello) WITH ca.nombre AS nombre_camello, ca.apellidos AS ape_camello, COUNT(co) AS ventas WITH MIN(ventas) as minimo MATCH (co:Comprador)-[:COMPRA]->(ca:Camello) WITH ca.nombre AS nombre_camello, ca.apellidos AS ape_camello, COUNT(co) AS ventas, minimo WHERE ventas <= minimo  RETURN nombre_camello AS NOMBRE_CAMELLO ,ape_camello AS APELLIDO_CAMELLO, ventas AS VENTAS\n"}]}),
        success: function (data, textStatus, jqXHR) {
            var dataTable = "<table><th>Nombre</th><th>Apellido</th><th>Ventas</th>";
            var results = data.results;
            var nombre = results[0].data.map(function (value) {
                return {
                    relacion: value.row[0]
                }
            });
            for (i = 0; i < nombre.length; i++) {
                dataTable += "<tr><td>" + results[0].data[i].row[0] + "</td><td>" + results[0].data[i].row[1] + "</td><td>" + results[0].data[i].row[2] + "</td></tr>";
            }

            dataTable += "</table>";
            let div = $("#query7");
            div.empty();
            div.append(dataTable);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

//8th Query Launcher

function launchQuery8() {
    $.ajaxSetup({
        headers: {
            // Add authorization header in all ajax requests
            // bmVvNGo6cGFzc3dvcmQ= is "password" base64 encoded
            "Authorization": "Basic bmVvNGo6cGFzc3dvcmQ="
        }
    });

    $.ajax({
        type: "POST",
        url: "http://localhost:7474/db/data/transaction/commit ",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({"statements": [{"statement": "MATCH (j:Jefe)-[:DIRIGE]->(c:Cartel)-[r]->(c2:Cartel)<-[:DIRIGE]-(j2:Jefe) WITH j.nombre as j1, j2.nombre as j2, TYPE(r) as relacion, r.motivo as m CREATE g=(p1:Persona {nombre: j1})-[:RELACION {tipo: relacion, motivo: m}]->(p2:Persona {nombre: j2}) RETURN g"}]}),
        success: function (data, textStatus, jqXHR) {
            var dataTable = "<table><th>Jefe 1</th><th>Motivo</th><th>Tipo</th><th>Jefe 2</th>";
            var results = data.results;
            var nombre = results[0].data.map(function (value) {
                return {
                    relacion: value.row[0]
                }
            });
            for (i = 0; i < nombre.length; i++) {
                dataTable += "<tr><td>" + results[0].data[i].row[0] + "</td><td>" + results[0].data[i].row[1] + "</td><td>" + results[0].data[i].row[2] + "</td></tr>";
            }

            dataTable += "</table>";
            let div = $("#query8");
            div.empty();
            div.append(dataTable);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

//9th Query Launcher

function launchQuery9() {
    $.ajaxSetup({
        headers: {
            // Add authorization header in all ajax requests
            // bmVvNGo6cGFzc3dvcmQ= is "password" base64 encoded
            "Authorization": "Basic bmVvNGo6cGFzc3dvcmQ="
        }
    });

    $.ajax({
        type: "POST",
        url: "http://localhost:7474/db/data/transaction/commit ",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify({"statements": [{"statement": "MATCH (c:Camello)-[:TRABAJA_PARA]->(ca:Cartel) WITH ca.nombre AS c, COUNT(c) AS num_camellos WITH MAX(num_camellos) AS max_camellos MATCH (c:Camello)-[:TRABAJA_PARA]->(ca:Cartel) WITH ca.nombre AS nc, COUNT(*) AS camellos, max_camellos WHERE camellos >= max_camellos MATCH (co:Comprador)-[c:COMPRA]->(ca:Camello)-[:TRABAJA_PARA]->(cartel:Cartel) WITH cartel.nombre AS c1, c.droga AS droga, nc WHERE c1 = nc  RETURN c1 AS CARTEL, droga AS DROGA, COUNT(droga) AS VENTAS\n"}]}),
        success: function (data, textStatus, jqXHR) {
            var dataTable = "<table><th>Cartel</th><th>Droga</th><th>Ventas</th>";
            var results = data.results;
            var nombre = results[0].data.map(function (value) {
                return {
                    relacion: value.row[0]
                }
            });
            for (i = 0; i < nombre.length; i++) {
                dataTable += "<tr><td>" + results[0].data[i].row[0] + "</td><td>" + results[0].data[i].row[1] + "</td><td>" + results[0].data[i].row[2] + "</td></tr>";
            }

            dataTable += "</table>";
            let div = $("#query9");
            div.empty();
            div.append(dataTable);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}


