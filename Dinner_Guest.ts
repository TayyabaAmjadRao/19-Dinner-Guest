
let Guest_List :string[] = ['tayyaba','Zubair','bilal'];
 
let absent_Guest :string = 'zubair';
let new_Guest : string = 'Amjad';
Guest_List[0] = new_Guest;

console.log(`Mr . ${absent_Guest} is not coming to the party.`);
console.log('Good News! Wefinf big table So we are inviting 3 more guests,');

Guest_List.unshift('Jamil');
Guest_List.splice(2 , 0 , 'Tanzeel');
Guest_List.push('Adeel');

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr . ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party,\n\nThank You! \n\n')
}

console.log('\nSorry we are not arranging big tablr, Only two people will be invited.')

while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr . ${remove_Guest}, You are not invited for dinner,`);
}

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr . ' + Guest_List[i] + ',\n\n You are still invited .\n\nThank You!\n\n');
}

Guest_List.splice(0, 2);
console.log(Guest_List);

console.log('\n\n' + Guest_List.length);