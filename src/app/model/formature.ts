export class Formature {
    formateur_id :string;
    nom:string;
    prenom:string;
    email:string;
    tel:string;
    cin:string;
    mot_pass:string;
    tarif_horaire:string;
    photo:string;
    cv:string;
    id_Sestion?: string; 


    constructor(formateur_id :string,nom:string, prenom:string,email:string,
        tel:string,cin:string,mot_pass:string, tarif_horaire:string, photo:string,cv:string,id_Sestion?: string ){
        this.formateur_id=formateur_id;
        this.nom=nom;
        this.prenom=prenom;
        this.email=email;
        this.tel=tel;
        this.cin=cin;
        this.mot_pass=mot_pass;
        this.tarif_horaire=tarif_horaire;
        this.photo=photo;
        this.cv=cv;
        this.id_Sestion=id_Sestion;
    }
}
