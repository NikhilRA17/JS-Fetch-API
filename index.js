const btnSearch = document.getElementById("btnSearch");
const footer  = document.getElementById("footer");
const list = document.getElementById("productList");

list.style.display = 'grid';
list.style.gridTemplateColumns = "repeat(4,2fr)"
list.style.marginBottom = "100px"


btnSearch.addEventListener("click",function(){

    footer.style.marginTop = '0px'
    
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {

                let arrayOfproduct = data;

                arrayOfproduct.forEach(function(ele){

                    const div = document.createElement("div");
                    const title = document.createElement("h6");
                    const image = document.createElement("img");

                    list.appendChild(div)

                    div.style.margin = "20px"
                    div.style.marginBottom = '50px'
                    div.style.marginTop = '100px'
                    div.appendChild(image);
                    div.appendChild(title);
                   
                    title.style.fontFamily = `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`;
                    title.style.fontStyle = "Cursive"
                    title.style.textAlign = "center"
                    title.textContent = ele.title
                    title.style.textAlign = 'center'
                   
                    image.setAttribute("src",ele.image);
                    image.style.height = "150px"
                    image.style.width = "50%"
                    image.style.display = "block"
                    image.style.margin = 'auto'
                    
                   
        
                    console.log(ele.image);
                })
            

        });
    
   
})