// #region class definition
class perso{
    constructor(_id){
        this.id = _id;
    }
}
class perso_category{
    constructor(_id){
        this.id = _id;
    }
    name;
    group;
    description;
}
class perso_data extends perso_category{
    value;
}
class timeline{
    constructor(_id){
        this.id = _id;
    }
    perso_list;
}
// #endregion

// #region global variables
let timeline_list = [];
let perso_category_initial_list = [];
let perso_category_list = [];
// //#endregion