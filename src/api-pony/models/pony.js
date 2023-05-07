export class Pony {
    id;
    name;
    alias;
    url;
    sex;
    residence;
    occupation;
    kind;
    image;

    constructor( id, name, alias, url, sex, residence, occupation, kind, image ){
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.url = url;
        this.sex = sex;
        this.residence = residence;
        this.occupation = occupation;
        this.kind = kind;
        this.image = image;
    }
}
