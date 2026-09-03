
let sitios = 
[
{ nombre:"Ferredip - Herramientas", 
  url: "https://ferredip.com.mx/", 
  img:"ferredip", 
  github:"https://github.com/Chucho-Kun/next-ferredip",
  text:"E-commerce platform synchronized with Truper’s databases and photos; features payment gateway and email confirmation"
},{ 
  nombre:"Dipemsa", 
  url: "https://www.dipemsa.com.mx/", 
  img:"dipemsa",
  github:'https://github.com/Chucho-Kun/next-dipemsa-web', 
  text:"ECommerce Platform of tools from different brands and categories, it features a Mercado Pago payment gateway"
},{ 
  nombre:"Omnibus de México", 
  url: "https://odm.com.mx/nuevowebsite/", 
  img:"odm",
  github:false, 
  text:"A website dedicated to selling bus tickets via a booking interface where users select their origin, destination, schedule, and number of passengers. It features banners and promotions in a carousel format, as well as a news section linked to the official blog's news feed."
},{ nombre:"Stories Behind The Songs", 
  url: "https://storiesbehindsongs.com", 
  img:"stories", 
  github:false,
  text:"This blog-style website lists and categorizes various songs—featuring stories and videos sourced via the YouTube by band, album, and view count. It includes a search function based on keywords and categories, and each article is automated with SEO optimization and rich cards for photos, articles, and videos. The blog is linked to YouTube channels in both English and Spanish to boost organic traffic. In line with recent Google search updates, plans are in place to include short-form vertical videos to appear in a dedicated section of the search results."
},{ 
  nombre:"CRM Vendedores", 
  url: "https://crm-graphql-client-nine.vercel.app/", 
  img:"crm" , 
  github:"https://github.com/Chucho-Kun/crm-graphql-client",
  text:"A CRM-type products, customers, and sales management platform built with GraphQL on the server and Next on the client, containing stadistical graphs of top sellers and top customers"
},{ 
  nombre:"UpTask", 
  url: "https://client-uptask-node-typescript.vercel.app", 
  img:"upTask" , 
  github:"https://github.com/Chucho-Kun/client-uptask-node-typescript-",
  text:"Client/Server - Task management CRM with email password recovery, collaborator or manager hierarchies, task attention status, and change history."
},{ 
  nombre:"DevTree", 
  url: "https://devtree-client-chuchokun.netlify.app/", 
  img:"devtree",
  github:"https://github.com/Chucho-Kun/devtree-typescript-client", 
  text:"A Fullstack platform built on MERN architecture that allows you to register and search for a custom URL, showing if it is previosly available. The user can show or hide their social networks, as well as upload a profile picture and description"
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
},{ 
  nombre:"Food Stack", 
  url: "https://food-stack-next.vercel.app/order/cafe", 
  img:"foodstack" , 
  github:"https://github.com/Chucho-Kun/food-stack-next",
  text:"Food kiosco style platform for real-time order management, featuring user, kitchen, and completed order views. Built on Next + React + Prisma [PostgreSQL]"
}];

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