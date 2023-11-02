let x = 0
function totalSpaces(s, y, t){
    for(i=0; i<=s; i++){
        if (y[i] === "C" && t[i] === "C"){
            x+=1
        }
    console.log(x)
    }
}
totalSpaces(5, "CC..C", ".CC..")

// look at array with N parking spaces
// loop thru and compare 1st and 2nd and write how many same ones

// The first line of input contains the integer . The second and third lines of input contain characters
// each. The second line of input records the information about yesterday's parking spaces, and the third line of input
// records the information about today's parking spaces. Each of these characters will either be C to indicate an
// occupied space or . to indicate it was an empty parking space.