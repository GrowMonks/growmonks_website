console.log("url", window.location.search);
const queryString = window.location.search;
const myURLParams = new URLSearchParams(queryString);
const projectIdParam = myURLParams.get("projectId");
console.log(projectIdParam);

// console.log(projectDetails);

// projectDetails is coming form the project-data.js file
// project-data.js file is linked to the portfolio-details.html file
// & therefore we are able to access the variable from that js file in this js file
var myproject = projectDetails.find(
  (project) => project.projectId === projectIdParam
);

console.log(myproject);

document.getElementById("projectInformation").innerHTML = 
`
<div class="col-lg-8">
<div class="portfolio-details-slider swiper">
  <div class="swiper-wrapper align-items-center">
    <div class="swiper-slide">
      <img src=${myproject.projectImg1} alt="" />
    </div>

    <div class="swiper-slide">
      <img src=${myproject.projectImg2}  alt="" />
    </div>

    <div class="swiper-slide">
      <img src=${myproject.projectImg3}  alt="" />
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>
</div>

<div class="col-lg-4">
<div class="portfolio-info">
  <h3>${myproject.projectName}</h3>
  
  <ul>
    <li><strong>Category:</strong>  ${myproject.projectCategory}</li>
    <li id="client_name"><strong>Client</strong>:    ${myproject.projectClient}
    </li>
    <li><strong>Project date</strong>:    ${myproject.projectDate}
    </li>
    
  </ul>
</div>
<div class="portfolio-description">
   <h2> 
   ${myproject.projectHeading1}
   
   </h2>
  <p>
   ${myproject.projectDescription}
  </p>
</div>
</div>


`;



// <li>
//       <strong>Project URL</strong>:
//       <a href="#">www.example.com</a>
//     </li>