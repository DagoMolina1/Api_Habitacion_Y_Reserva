import { response } from "express";

import { ServicioReserva } from "../Services/ServicioHabitacion.js";
let servicioReserva = new ServicioReserva()
import { ServicioHabitacion } from "../Services/ServicioHabitacion.js";
let servicioHabitacion = new ServicioHabitacion()

export class ControladorReserva{
    constructor(){

    }

    async consultarReservas(req, res){
        let objetoServicioReserva = new ServicioReserva()
        try {
            res.status(200).json({
                "mensaje" :"exito en la consulta",
                "datos":await objetoServicioReserva.consultarReservas(),
            })
        } catch (error) {
            res.status(400).json({
                "mensaje" :"error en la consulta" + error,
                "datos":null
            })
        }
    }

    async consultarReservaPorId(req, res){
        let id = req.params.idReserva
        //console.log('El id de la reserva es: ' + id)
        let objetoServicioReserva = new ServicioReserva()
        try {
            res.status(200).json({
                "mensaje" :"exito en la consulta por id" + id,
                "datos":await objetoServicioReserva.consultarReservaPorId(id)
            })
        } catch (error) {
            res.status(400).json({
                "mensaje" :"error en la consulta" + error,
                "datos":null
            })
        }
    }

    async agregarReserva(req, res){
        let datosReserva = req.body
        //console.log(datosReserva)
        let objetoServicioReserva = new ServicioReserva()

        try {
            await objetoServicioReserva.agregarReservaEnBD(datosReserva)
            res.status(200).json({
                "mensaje" :"exito en la consulta",
                "datos":datosReserva,
            })
        } catch (error) {
            res.status(400).json({
                "mensaje" :"error en la consulta" + error,
                "datos":null
            })
        }
    }

    async editarReserva(req, res){
        let id = req.params.idReserva
        let datosReserva = req.body
        let objetoServicioReserva = new ServicioReserva()
        try {
            await objetoServicioReserva.editarReserva(id, datosReserva)
            res.status(200).json({
                "mensaje" :"exito en la consulta" + id,
                "datos":datosReserva,
            })
        } catch (error) {
            res.status(400).json({
                "mensaje" :"error en la consulta" + error,
                "datos":null
            })
        }
    }

    /*anularReserva(req, res){
        try {
            res.status(200).json({
                "mensaje" :"exito en la consulta",
                "datos":"AQUI VAN LOS DATOS DE HABITACIONES"
            })
        } catch (error) {
            res.status(400).json({
                "mensaje" :"error en la consulta" + error,
                "datos":null
            })
        }
    }*/
}