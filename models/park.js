
const Park = function(name, ticket_price ){
    this.name = name
    this.ticket_price =ticket_price
    this.collection_of_dinosaurs = []
}
Park.prototype.addDinosaur = function(){
    this.collection_of_dinosaurs ++
}
Park.prototype.removeDinosaur = function(){
    this.collection_of_dinosaurs --

    
}


module.exports = Park;