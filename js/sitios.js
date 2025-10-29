
let sitios = 
[
{ nombre:"Stories Behind The Songs", 
  url: "https://storiesbehindsongs.com", 
  img:"stories", 
  github:false,
  text:"Blog-type website that shows stories behind songs from different bands sorted by album, band and number of views, it has a search engine by keywords and categories, each blog article is automated with SEO optimization and enriched cards"
},{ 
  nombre:"YouTube Video Blog", 
  url: "https://youtubevideo.blog", 
  img:"youtube",
  github:false, 
  text:"Website that converts YouTube videos into blog posts (it connects to the YouTube API to select a video that is less than 15 minutes long and then extracts the video and converts it into text using AI to publish it as a blog post, includes a tutorial on how to use it)"
},{ 
  nombre:"Omnibus de México", 
  url: "https://odm.com.mx/nuevowebsite/", 
  img:"odm",
  github:false, 
  text:"Website dedicated to selling bus tickets by selecting origin, destination, schedule, and passengers. It displays banners and promotions in carousel form. It also displays a news section from the official blog connected to the news feed."
},{ 
  nombre:"DevJobs", 
  url: "https://devjobs-docker-chuchokun.mnz.dom.my.id/", 
  img:"devjobs",
  github:"https://github.com/Chucho-Kun/devjobs-docker", 
  text:"Job posting platform for recruiters and employees, contains a search engine for terms, categories and salaries. Laravel + MySQL + Livewire + Docker + Tailwindcss - (Full-Stack Job Posting)"
},{ 
  nombre:"UpTast", 
  url: "https://client-uptask-node-typescript.vercel.app/auth/login", 
  img:"upTask" , 
  github:"https://github.com/Chucho-Kun/client-uptask-node-typescript-",
  text:"Client/Server - Task management CRM with email password recovery, collaborator or manager hierarchies, task attention status, and change history."
},{ 
  nombre:"Food Stack", 
  url: "https://food-stack-next.vercel.app/order/cafe", 
  img:"foodstack" , 
  github:"https://github.com/Chucho-Kun/food-stack-next",
  text:"Food kiosco style platform for real-time order management, featuring user, kitchen, and completed order views. Built on Next + React + Prisma [PostgreSQL]"
},{ 
  nombre:"Waifu Battle VS", 
  url: "https://waifu-battle-vs.netlify.app/", 
  img:"waifu" , 
  github:"https://github.com/Chucho-Kun/waifu-battle-vs",
  text:"A web-based video game where you can choose and compete against waifu cards from different anime, unlocking them after beating them in a rock-paper-scissors-style game, but with numbers. The site features a welcome cover and two sections for choosing your character (by anime or by waifu list)."
},{ 
  nombre:"Recipe Finder", 
  url: "https://recipe-finder-react-typescript.netlify.app/", 
  img:"recipe" , 
  github:"https://github.com/Chucho-Kun/recipe-finder-react",
  text:"A recipe search engine that queries the www.thecocktaildb.com API to filter recipes based on different ingredients, as well as request a recipe using nvidia/llama-3.3-nemotron-super49b-v1:free AI Model API. The platform allows save recipes in a My Favorites section"
}
];

let html = '';

for (var i = 0; i < sitios.length; i++) {
	let nom = sitios[i].nombre;
	let url = sitios[i].url;
	let img = sitios[i].img;
	let text = sitios[i].text;
  let github = sitios[i].github;

	html += `<div id="cont" class="resultado valido" idnt="208" style="cursor:pointer;">
	<a href="${url}" target="_blank">
	<table class="res" width="100%" border="0">
                                              <tbody><tr>
                                                <td width="10%">
                                                 
                                                        <img width="100%" loading="lazy" data-orig-src="img/${img}.jpg?2" class="miniatura" alt="${nom}" src="img/${img}.jpg?2" style="border-radius: 10px 10px 0px 0px;position: relative;max-width:400px;"> 
                                                    
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="left">

                                                    <table border="0" width="100%" style="position:relative;height:170px;">
                                                        <tbody><tr>
                                                            
                                                            <td valign="top" style="text-align:center;">
                                                                        <div class="notranslate titulo" title="${nom}">${nom}</div>

                                                                <table border="0" style="width: 100%;">
                                                                    <tbody><tr>
                                                                        <td width="70%">
                                                                            <div class="notranslate desc" style="font-style: italic;padding: 6px;color:#133E6C;">${url}</div>
                                                                        </td>
                                                                        
                                                                    </tr>
                                                                    </tbody>
                                                                </table>

                                                                  <div class="description" title="45 important singers of the time gathered to contribute to the fight against hunger in Africa" style="font-family: Arial;color: black;font-size: 13px;padding: 6px;">${text}</div>
                                                                  ${ github ? '<a href="'+github+'" target="_blank"><div class="github">Repository on GitHub</div></a>' : '' }
                                                            </td>
                                                        </tr>
                                                    </tbody></table>

                                                </td>
                                              </tr>                                              
                                            </tbody></table></a></div>`;

}

document.getElementById('cont').innerHTML = html;