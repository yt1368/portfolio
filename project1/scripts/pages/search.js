import { products } from "../../data/products-list.js";
import { presentNav } from"../elements/navigation.js";
import { generateProductList } from"../elements/menu-product-list.js";
import { searchResult, phoneSearchResult } from"../elements/menu-product-list.js";

presentNav();                                           //產生導覽列
searchResult();                                         
phoneSearchResult();    

let params= new URLSearchParams(location.search);        
let userSearch = params.get("input");                   //透過get()取得網址中input值(使用者搜尋的內容)，並儲存在userSearch變數中

//產生符合"使用者搜尋內容"的新陣列
function searchProduct(userSearch)                                
{                                                       
    return products.filter((item)=>                     //回傳此新陣列給searchProduct()函式
    {
        if(item.name.includes(userSearch)||item.introduction.includes(userSearch))      
        {
            return item;
        }
    })
}

let searchResultProduct = searchProduct(userSearch);
if (searchResultProduct.length === 0)                  //若商品列中，沒有使用者輸入的內容，那麼就跳出提示訊息，並返回menu頁面
{
    alert("很抱歉，查無此商品。請重新搜尋，謝謝!")
    location.href= "menu.html";
} 
else{
    generateProductList(searchResultProduct);           //將searchResultProduct傳入generateProductList()，來生成符合"使用者搜尋內容"的商品列
}       


                           