import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumerosService } from '../../service/numeros.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {
  numeroForm: FormGroup;
  output: number = 0;
  fulname:string ='Jorge Francisco Miguel';

  constructor(private fb: FormBuilder, public numservice:NumerosService) { }
  
  ngOnInit(): void {
    this.numeroForm = this.fb.group({
      numero: ['', Validators.required],
    });
  }
  caluclar(){
    this.output = 0;
    let input = this.comprobarTexto(this.numeroForm.get('numero').value);
    
    const romanos:any = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
    let order = Object.keys(romanos);
    let arrayRomano:any = Array.from(input);

    arrayRomano.map( (valor, index) => {
      if( index  < arrayRomano.length -1 && order.indexOf(valor) > order.indexOf(arrayRomano[index+1])){
        this.output  = this.output - romanos[valor];
      } else {
        this.output  = this.output + romanos[valor];
      }
    });
   
  }

  esMayuscula(letra){
    return letra === letra.toUpperCase();
  }
  comprobarTexto(textoInput ){

    if(this.esMayuscula(textoInput)){
      textoInput = textoInput.toUpperCase(); 
    }else{
      textoInput = textoInput.toUpperCase();      
    }
  
    return textoInput;

  }

  enviarDatos(){
    if(this.numeroForm.get('numero').value != ''){
      let data = {
        'input': this.numeroForm.get('numero').value,
        'output': this.output,
        'name': this.fulname
      }
      
      this.numservice.sendCalculoResponse(data).subscribe(
        (data:any) => {
          console.log(data);
            Swal.fire('Listo!','Datos enviados!', 'success');
        
        },
        (error) => {
          console.log(error);
          Swal.fire('Error!','Error de comunicacion, intente de nuevo!', 'error');
          
        }
      );
    }else{
      Swal.fire('Error!','no hay datos para mandar!', 'warning');

    }
  }
}
