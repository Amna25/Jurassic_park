
const Park = function(name, ticket_price ){
    this.name = name
    this.ticket_price =ticket_price
    this.collection_of_dinosaurs = []
}

Park.prototype.numberOfDinosaur = function(){
    const number = this.collection_of_dinosaurs.length
    return number
}
Park.prototype.addDinosaur = function(dinosaur){
    const add = this.collection_of_dinosaurs.push(dinosaur)
    return add
}
     
Park.prototype.removeDinosaur = function(dinosaur){
    const remove = this.collection_of_dinosaurs.shift(dinosaur)
    return remove
}

// Park.prototype.findSpecialDinosaurus = function(dinosaur){
//     this.collection_of_dinosaurs.findIndexOf(dinosaur)
//     if(dinosaur === "T_rex"){
//         return "T_Rex"
//     }
// }
Park.prototype.findSpecies = function(){
    const species = dinosaur.species
    return species
}


module.exports = Park;