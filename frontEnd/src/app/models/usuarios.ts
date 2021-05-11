export class Usuarios {

    constructor(_id:string,usuario:string,email:string,password:string){
        this._id=_id;
        this.usuario=usuario;
        this.email=email;
        this.password=password;
    };
    _id:string;
    usuario:string;
    email:string;
    password:string;
}
