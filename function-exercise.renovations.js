const LABOUR_RATE = 5.00;  //cost per sq ft for installation
const TAX_RATE = 0.15;      //tax rate for all labour and materials

const LAMINATE_COST = 2.50;   //avg cost per sq ft for hardwood laminate
const CARPET_COST = 4.00;    //avg cost per sq ft for carpet
const HARDWOOD_COST = 7.00;      //avg cost per sq ft for hardwood flooring
const CERAMIC_COST = 1.25;   //avg cost per sq ft for ceramic tiles
const VINYL_COST = 2.00;     //avg cost per sq ft for vinyl flooring

var total_cost = 0;         //total estimated cost for the entire project
var total_materials = 0;    //total estimated cost for the materials
var total_labour = 0;       //total estimated cost for the project labour
var total_rooms = 0;

function calculate_room(width, length, floor_type, with_installation){
    var _room_area = 0;         //total floor area to cover
    var _material_rate = 0;     //cost per square foot based on the type of material requested
    var _material_cost = 0;     //total cost of materials to cover that area
    var _labour_cost = 0;       //total cost of labour to install the flooring
    var _sub_total = 0;         //total of labour and materials
    var _taxes = 0;             //amount of taxes on the _sub_total
    var _room_total = 0;        //total cost for the current room (sub total plus taxes)
    total_rooms++;              //add to the number of rooms being renovated
    /*****************************************
    INSTRUCTIONS
    1. calculate the area of the room by multiplying the width and length
    2. determine the cost per square foot for materials based on the floor type using (if else if ... else) or (switch case)
    3. calculate the material cost for the room area
    4. calculate the labour cost for the room area
    5. sum the material and labour cost to get the sub total
    6. calculate the _taxes based on the TAX_RATE and the _sub_total
    7. sum the _taxes and _sub_total to get the _room_total
    *****************************************/
    
    
    
    return {"materials": _material_cost,
            "covering": floor_type,
            "labour": _labour_cost, 
            "sub_total": _sub_total,
            "taxes": _taxes,
            "room_total": _room_total
           };
}

//use 'laminate', 'carpet', 'hardwood', 'ceramic', or 'vinyl' as the floor_type values

console.log("\n\nRENOVATION CALCULATIONS\n");
//First Room
room = calculate_room(15.5, 12.8, 'laminate', false);
console.log("\n\t\tRoom ----------", total_rooms, 
            "\n\tUSING:\t\t", room.covering, 
            "\n\tMATERIALS:\t", room.materials.toFixed(2), 
            "\n\tLABOUR:\t\t",    room.labour.toFixed(1), 
            "\n\tSUBTOTAL:\t",  room.sub_total.toFixed(1),
            "\n\tTAXES:\t\t",     room.taxes.toFixed(2), 
            "\n\tTOTAL:\t\t",     room.room_total.toFixed(2));
//add first room results to the totals
total_materials += room.materials;
total_labour += room.labour;
total_cost += room.room_total;
//Second Room
room = calculate_room(22.0, 10.2, 'hardwood', true);
console.log("\n\t\tRoom ----------", total_rooms,  
            "\n\tUSING:\t\t", room.covering, 
            "\n\tMATERIALS:\t", room.materials.toFixed(2), 
            "\n\tLABOUR:\t\t",    room.labour.toFixed(1), 
            "\n\tSUBTOTAL:\t",  room.sub_total.toFixed(1),
            "\n\tTAXES:\t\t",     room.taxes.toFixed(2), 
            "\n\tTOTAL:\t\t",     room.room_total.toFixed(2));
//ADD second room results to the totals...

//ADD a third call to the calculate_room function with different parameters and output the results
//ADD to the totals after each call to calculate_room.
//ADD a final console.log() statement to display the total_materials, total_labour, and total_cost for the whole project

console.log("\n\tTOTAL PROJECT COST");
