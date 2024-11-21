function danhsachtv(){      //function la mot tu khoa, theo sau la ten va ngoac don
    const thanhvien=[       //bien const dung khi biet gia tri cua bien do khong nen thay doi
        {name: "Nguyen Viet khoi", sex: "Nam", birthplace: "HaNoi"},
        {name: "Nguyen Huu Huy", sex: "Nam", birthplace: "HaNoi"},
        {name: "Nguyen Van Loi", sex: "Nam", birthplace: "HaNam"},
        {name: "Nguyen Van Bang", sex: "Nam", birthplace: "Hanoi"},
        {name: "Giap Ngoc Duy Anh", sex: "Nam", birthplace: "HaNoi"},
        {name: "Nguyen Ngoc Phuoc", sex: "Nam", birthplace: "HaNam"},
        {name: "Truong Minh Son", sex: "Nam", birthplace: "HaNoi"},
    ];
    //Doi tuong de hien ra man hinh, tu id thanhvien-list trong phan tu HTML
    const danhSach = document.getElementById("thanhvien-list");

    thanhvien.forEach((tv) => {     /* la kieu vong lap, tung thanh vien se duoc chay */
        //Doi tuong hien ra trong const, moi thanh vien se duoc tao boi mot div
        const div = document.createElement("div");
        // Dau "    ``   " la de tao chuoi da dong
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
        // nhep lenh cua css tao giao dien bang cho thong tin tung thanh vien
        div.style.marginTop= "30px";    //khoang cach cac div
        div.style.padding= "10px";      //khoang trong xung quanh noi dung cua phan tu
        div.style.borderRadius= "50px";    //tao duong cong cho table
        div.style.background= "#f5f5dc";    //tao mau cho table
        div.style.width= "50%";             //tao chieu rong cho table
        div.style.textAlign= "center";      //can chinh chieu cua van ban, center la can giua
        
        //them phan tu div vao danh sach
        danhSach.appendChild(div);
        
    });
}
danhsachtv();   //goi ham de chay danh sach ra man hinh
