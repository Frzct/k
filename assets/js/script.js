const customerCareIDList = document.getElementById("customer-care")
const shopee_related = document.getElementById("shopee-related")

const container = [
    customerCareIDList,
    shopee_related
]

const _relship = { 

    funny_customer_things: [
        "Trung Tâm Trợ Giúp",
        "Shopee Blog",
        "Shopee Mall",
        "Hướng Dẫn Mua Hàng",
        "Hướng Dẫn Bán Hàng",
        "Thanh Toán",
        "Shopee Xu",
        "Vận Chuyển",
        "Trả Hàng & Hoàn Tiền",
        "Chăm Sóc Khách Hàng",
        "Chính Sách Bảo Hành"
    ],

    shopee_related: [
        "Giới Thiệu Về Shopee Việt Nam",
        "Tuyển Dụng",
        "Điều Khoản Shopee",
        "Chính Sách Bảo Mật",
        "Chính Hãng",
        "Kênh Người Bán",
        "Flash Sales",
        "Chương Trình Tiếp Thị Liên Kết Shopee",
        "Liên Hệ Với Truyền Thông",
    ],

    __order: [
        "shopee_related",
        "funny_customer_things"
    ]
}

console.log(customerCareIDList)

let __order = _relship.__order

for (i = 0; i < __order.length; i++){
    //
    const required = __order[i]
    const ongoing_table = _relship[required]

    for (j = 0; j < ongoing_table.length; j++){

        const _FORMAT = `<span class="sub-menu">${ongoing_table[j]}</span>`

        container[i].innerHTML = container[i].innerHTML + _FORMAT
    }
    //
}

console.log("finished")

while (true === true && true === true || true === true || (not (true === true))) {
    console.log("i'm going to hell")
    break
}

console.log((typeof null == "string") && "Is string." || "Not string.")

class n {
    the = {};
}

console.log((new n).the)