const testmonials=document.querySelectorAll('.testmonial');
const paragraph=document.querySelector('.para');
const image=document.querySelector('.user-image');
const details=document.querySelector('.user-details');

const testimonialsContainer =[
    {
        name: 'Umashankari | Web-Developer',
        photo:'umaaa.jpg',
        text:'MCA graduate with a strong foundation in software and web development.Skilled in front-end technologies such as HTML, CSS, and JavaScript, with hands-on<br> experience in building  responsive and user-friendly websites. Eager to apply my technical skills and problem-solving abilities in a junior software development role to contribute effectively to a dynamic team',
    },
    {
        name: 'Sanjay | Java-Developer',
        photo:'sanjayy.jpg',
        text:'A Java developer is a software professional who uses Java to create, maintain, and improve software applications. They work on a variety of projects, including web and software development, Android development, big data, desktop and mobile computing, games, and numerical computing.',
    },
    {
        name: 'Roobala | Web-Developer',
        photo:'roobs.jpg',
        text:'I ve worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. she stresses on good, clean code and pays heed to the details.',
    },
    {
        name: 'kavi | Software-Developer',
        photo:'kavi.jpg',
        text:'Software developers create computer applications and systems that allow users to perform tasks and run devices or networks.',
    },
    {
        name: 'Anuja | Software-Developer',
        photo:'Anuja.jpeg',
        text:'Front-end developers are web developers who specialize in creating user interfaces for websites and applications.',
    },
    {
        name: 'Aishwarya | ContentWritter',
        photo:'aish.jpeg',
        text:'A content writer is a specialist who writes informative and engaging content to improve a brands visibility.',
    } ,
    {
        name: 'Karthika | ContentWritter',
        photo:'Karthika.jpeg',
        text:'A content writer is a specialist who writes informative and engaging content to improve a brands visibility.',
    },
    {
        name: 'Kali | Java Developer',
        photo:'Kali.jpg',
        text:'A Java developer is a software professional who uses Java to create, maintain, and improve software applications.',
    },
    {
        name: 'Hafil | Python Developer',
        photo:'hafil.jpg',
        text:'Python Developer responsibilities include writing and testing code, debugging programs and integrating applications with third-party web services.',
    },
    {
        name: 'Arun | Pyhton Developer',
        photo:'arun.jpg',
        text:'Python Developer responsibilities include writing and testing code, debugging programs and integrating applications with third-party web services..',
    },
    {
        name: 'Ranjith | Pyhton Developer',
        photo:'ran.jpg',
        text:'Python Developer responsibilities include writing and testing code, debugging programs and integrating applications with third-party web services.',
    },
    {
        name: 'Prasath | Python Devloper',
        photo:'Prasath.jpg',
        text:'Python Developer responsibilities include writing and testing code, debugging programs and integrating applications with third-party web services..',
    },
]
let idx=1;
function updateTestimonial(){
    const {name,photo,text} =testimonialsContainer[idx];
   
    image.src=photo;
    paragraph.innerHTML=text;
    details.innerHTML=name;
   idx++;
   if(idx>testimonialsContainer.length-1){
    idx = 0;
   }
}
setInterval(updateTestimonial, 2000)
