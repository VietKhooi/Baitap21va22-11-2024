function danhsachtv(){
    const thanhvien=[
        {name: "Nguyen Viet khoi", sex: "Nam", birthplace: "HaNoi"},
        {name: "Nguyen Huu Huy", sex: "Nam", birthplace: "HaNoi"},
        {name: "Nguyen Van Loi", sex: "Nam", birthplace: "HaNam"},
        {name: "Nguyen Van Bang", sex: "Nam", birthplace: "Hanoi"},
        {name: "Giap Ngoc Duy Anh", sex: "Nam", birthplace: "HaNoi"},
        {name: "Nguyen Ngoc Phuoc", sex: "Nam", birthplace: "HaNam"},
        {name: "Truong Minh Son", sex: "Nam", birthplace: "HaNoi"},
    ];
    //Doi tuong de hien ra man hinh
    const danhSach = document.getElementById("thanhvien-list");

    thanhvien.forEach((tv) => {
        //Doi tuong hien ra trong const
        const div = document.createElement("div");
        // Dau "    `   " la de tao chuoi da dong
        div.innerHTML=`
            <table style = "width: 100%; border-spacing: 50px 5px;">
                <tr>
                    <td style= "font-weight: bold; width: 30%;">Ho ten:</td>
                    <td>${tv.name}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold;">Gioi tinh:</td>
                    <td>${tv.sex}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; color: red">Noi sinh:</td>
                    <td>${tv.birthplace}</td>
                </tr>
            </table>
        `;

        div.style.marginTop= "30px";
        div.style.padding= "10px";
        div.style.borderRadius= "50px";
        div.style.background= "#f5f5dc";
        div.style.width= "50%";
        div.style.textAlign= "center";
        

        danhSach.appendChild(div);
        
    });
}
danhsachtv();