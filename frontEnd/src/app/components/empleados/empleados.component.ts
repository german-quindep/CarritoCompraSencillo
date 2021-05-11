import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empleados } from 'src/app/models/empleados';
import { EmpleadoServiceService } from './../../services/empleado-service.service';

//PARA CREAR TOAST DE MATERIALIZE
declare var M:any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor( public serviceEmpleado:EmpleadoServiceService) { }
  vacio:boolean;
  ngOnInit(): void {
    this.getEmpleados();
  }
  //AGREGAR EMPLEADOS
  agregarEmpleado(empleadoForm:NgForm){
    //console.log(empleadoForm.value);
    if(empleadoForm.value._id){
      this.serviceEmpleado.actualizarEmpleado(empleadoForm.value)
      .subscribe(res=>{
        this.limpiarForm(empleadoForm);
        M.toast({html:'Empleado Actualizado'});
        this.getEmpleados();
      },
      (err)=>{
        console.log(err);
      })
    }else{
      this.serviceEmpleado.agregarEmpleados(empleadoForm.value)
      .subscribe(res=>{
        this.limpiarForm(empleadoForm);
        M.toast({html:'Empleado Guardado'});
        this.getEmpleados();
      },
      (err)=>{
        console.log(err);
      })
    }
  }
  //OBTENER TODOS LOS EMPLEADOS
  getEmpleados(){
    this.serviceEmpleado.getEmpleados()
    .subscribe(res=>{
      this.serviceEmpleado.empleado= res as Empleados[];
      if(this.serviceEmpleado.empleado.length>0){
         this.serviceEmpleado.empleado;
         this.vacio=false;
      }else{
         this.vacio=true;
      }
    },
    (err)=>{
      console.log(err);
    })
  }
  //EDITAR EMPLEADOS
  editarEmpleado(empleado:Empleados){
    //PARA QUE SE LLENE LOS DATOS AL MOMENTO DE SELECCIONAR UN EMPLEADO
    this.serviceEmpleado.seleccionEmpleado= empleado;
  }
  //ELIMINAR EMPLEADOS
  eliminarEmpleado(id:string){
    if(confirm('Deseas eliminar el empleado?')){
      this.serviceEmpleado.eliminarEmpleado(id)
      .subscribe(res=>{  
        M.toast({html:'Eliminado con exito'});  
        this.getEmpleados();        
      },
      (err)=>{
        console.log(err);
      })
    }
  }
  limpiarForm(form?: NgForm){
    if(form){
      form.reset();
      this.serviceEmpleado.seleccionEmpleado=new Empleados();
    }
  }

}
