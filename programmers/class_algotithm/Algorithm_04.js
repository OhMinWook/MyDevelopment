// 점수에 따른 등급
// 입력되는 score에 따라 알맞은 등급을 적어야 한다.
function grade(score) {
    if( score > 100 || score < 0) {
        return "잘못된 점수입니다."
    }
    else if(score >= 90) {
        return "A"
    }
    else if(score >= 80) {
        return "B"
    }
    else if(score >= 70) {
        return "C"
    }
    else if(score >= 60) {
        return "D"
    }
    else if(score <= 59){
        return "F"
    }
}

// 마이 페이지

const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]

let sum = 0;
let count = 0;

for(let i = i; i < myShopping.length; i++) {
    if(myShopping[i].category === "의류") {
        sum += myShopping[i].price;
        count += 1;
    }
    
   if(count >= 0 && count <= 2) {
       return "Bronze";
   } 
   else if(count >= 3 && count <= 4) {
       return "Sliver";
   }
   else if(count >= 5) {
       return "Gold";
   }
}