export class Formation {
    formation_id :string;
    titre:string;
    description:string;
    ch_horaire:string;
    difficulte:string;
    program:string;

    constructor(formation_id :string,titre:string, description:string,ch_horaire:string,
        difficulte:string,program:string){
        this.formation_id=formation_id;
        this.titre=titre;
        this.description=description;
        this.ch_horaire=ch_horaire;
        this.difficulte=difficulte;
        this.program=program;
        
}
}
