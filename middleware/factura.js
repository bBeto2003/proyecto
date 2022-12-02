const mysql = require('../db')

module.exports = {
    crear: (req, res) => {
         
        mysql.query(`INSERT INTO facturas (cliente,vendedor,fecha,total) values('${req.body.nombrecliente}',${req.body.nombre},'now()',${req.body.productos})`, (err, results, fields) => {
            if (err) {
                console.log(err)
            } else {
                mysql.query(`INSERT INTO masfacturas (id_producto,cantidad,costo) values ('${req.body.productos}', ${req.body.cantidad}, ${req.body.costo})`, (err, results, fields) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(results);
                    }
                })
            }
        })
    },


    eliminar: (req, res) => {
        //delete
        mysql.query('DELETE from masfacturas WHERE id_factura=?', req.body.id, (error, results, fields) => {
            if (error) {
                res.json(error);
            } else {
                mysql.query('DELETE from facturas WHERE cliente=?', req.body.name, (error, results, fields) => {
                    if (error) {
                        res.json(error);
                    } else {
                        res.json('Factura eliminada');
                    }
                })
            }
        });
    },


    listar: (req, res) => {
        //get
        mysql.query('SELECT * from masfacturas', req.body, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                console.log(results)
                mysql.query('SELECT * from facturas', req.body, (error, results, fields) => {
                    if (error) {
                        res.json(error)
                    } else {
                        res.json(results)
                    }
                });
            }
        });
    },


    buscar: (req, res) => {
        mysql.query('SELECT * from masfacturas WHERE id_factura=?', req.body.id, (error, results, fields) => {
            if (error) {
                res.json(error);
            } else {
                console.log(results)
                res.json(results);
            }
        });
    }
}