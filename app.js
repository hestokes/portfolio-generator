const profileDataArgs = process.argv.slice(2);

//this..
const printProfileData = profileDataArr => {
   for(let i = 0; i < profileDataArr.length; i++) {
       console.log(profileDataArr[i]);
   }


console.log('------------');
//is the same as 

profileDataArr.forEach((profileItem) => console.log(profileItem));
   
};
printProfileData(profileDataArgs); 