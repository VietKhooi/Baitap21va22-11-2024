// Bai 1. Chuyen doi do C sang do F

function nhietdoFsangC(){     //Dinh nghia ham voi ten "nhietdoF", nhan phan tu dau vao la"C"
    
    let C = document.getElementById("nhapdoC").value;
         
    C=parseFloat(F);                //parseFloat dung de chuyen doi mot chuoi thanh mot so
    let F = (C * 9/5) + 32;       //Cong thuc de chuyen doi tu do C --> do F 
                                // F=(C * 9/5)+32
    document.getElementById("KQ").innerText = `${nhietdoC}doC = ${nhietdoF(2)}doF`;
    
}

console.log(nhietdoFsangC);



//Bai 2: Tao cac ham tinh dien tich

//Tinh dien tich HCN
function dientichHCN(Dai, Rong){

    document.getElementById("HCN");
    return (Dai*Rong);  //cong thuc dien tich HCN
}
var HCN=dientichHCN(30,10);
console.log(dientichHCN);

//Tinh dien tich TG
function dientichTG(chieudai, chieucao){
    document.getElementById("HTG");
    return (chieudai*chieucao)/2;       //cong thuc dien tich HTG
}
var HTG=dientichTG(20,5);
console.log(dientichTG);

//Tinh dien tich HV
function dientichHV(canh){
    document.getElementById("HV");
    return (canh*canh);     //cong thuc dien tich HV
}
var HV=dientichHV(68);
console.log(dientichHV);






