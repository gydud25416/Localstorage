document.addEventListener("DOMContentLoaded", function(){
    let page = document.querySelectorAll('.pro a');
    let resent_p = document.querySelector('.resent_products');
    let pro_tt= document.querySelector('.resent_products .tt');
    // 초기에 저장된 배열 불러오기
    let urlList = new Set(JSON.parse(localStorage.getItem('urlList')) || []); //중복 배열 제거
    let numList = new Set(JSON.parse(localStorage.getItem('numList')) || []);//중복 배열 제거
    let imgList = new Set(JSON.parse(localStorage.getItem('imgList')) || []);//중복 배열 제거
    
    page.forEach(function(e) {
        e.addEventListener('click', function(el) {
            let v_num = el.target.parentElement.dataset.num;
            /* 최근 본 상품 태그 추가 */
            let addP = document.createElement("a");
            let addImp = document.createElement("img");
            let p_url = el.target.parentElement.getAttribute("href"); // 선택한 url 불러오기
            let img_src=el.target.getAttribute("src")
            
 
            document.querySelector('.resent_products .tt').style.display="none";
 
            resent_p.append(addP); // a태그 추가
            addP.setAttribute("href", p_url); // 선택한 url 추가
            addP.append(addImp); //img 추가
            addImp.setAttribute("src", img_src)//선택한 이미지 추가
    
            urlList.add(p_url); // url 배열 추가
            numList.add(v_num);
            imgList.add(img_src)

    
            // 로컬 스토리지에 JSON 형식으로 저장
            localStorage.setItem("numList", JSON.stringify(Array.from(numList)));
            localStorage.setItem("urlList", JSON.stringify(Array.from(urlList)));
            localStorage.setItem("imgList", JSON.stringify(Array.from(imgList)))
            console.log(numList);
            console.log(urlList);
        });
    });
   
})