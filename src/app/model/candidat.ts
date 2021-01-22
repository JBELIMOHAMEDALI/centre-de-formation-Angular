export class Candidat {

    candidat_id :string;
    nom:string;
    prenom:string;
    email:string;
    cin:string;
    photo:string;
    cv:string;
    mot_pass:string
    

    constructor(candidat_id:string,nom:string,prenom:string,email:string,cin:string,photo:string,cv:string,mot_pass:string)
    {
        this.candidat_id=candidat_id;
        this.nom=nom;
        this.prenom=prenom;
        this.email=email;
        this.cin=cin;
        this.photo=photo;
        this.cv=cv;
        this.mot_pass=mot_pass;

    }
    

}
