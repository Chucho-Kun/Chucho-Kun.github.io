
let sitios = 
[
{ 
  nombre:"Sales box design mockup", 
  url: "https://storiesbehindsongs.com/designerPortfolio/odm/odm.pdf", 
  img:"odm_" , 
  text:"Corporate PDF showing the user interface and subsequent development of the new sales panel for the website odm.com.mx, for both desktop and mobile devices."
},{ 
  nombre:"Labels brando products", 
  url: "https://mega.nz/folder/yqwiFRrD#SVEfOhsTCH_dm-xM7c9fAQ", 
  img:"arconte" , 
  text:"The Mexican company Arconte, which specializes in the creation of bottled sauces, requested a redesign of its labels to comply with the new national labeling regulations."
},{ nombre:"Advertising Banner Design", 
  url: "https://mega.nz/folder/euJ0zBwT#0WKliOO3PHq8O5j3sMIMgg", 
  img:"nascar" , 
  text:"Fire extinguisher company FireAde is advertising at one of the events organized by NASCAR with the following collection of advertising banners associating both brands."
},{ 
  nombre:"Landing Page ODM", 
  url: "https://odm.com.mx/boletos-de-autobus/ciudad-de-mexico/tampico/", 
  img:"landingODM" , 
  text:"One of more than 245 landing pages for the different travel destinations of the passenger transport company Omnibus de Mexico, all with SEO work to facilitate indexing in Google"
},{ 
  nombre:"Social Media Content", 
  url: "https://www.facebook.com/historiasdetrasdelascanciones", 
  img:"social" , 
  text:"Social media content in Facebook, Instagram, YouTube, X, Reddit, Quora, TikTok and Pinterest, as well as website and paid advertising campaigns on Facebook and YouTube."
},{ 
  nombre:"Landing Page OMEX", 
  url: "https://omexvip.com.mx/boletos-de-autobus/monterrey/mcallen/", 
  img:"landingOMEX" , 
  text:"OMEX VIP's landing page displays the sales form along with a real-time price calculator; travel recommendations are also shown below."
},{ 
  nombre:"Menu design for a themed restaurant", 
  url: "https://mega.nz/folder/iyw0DDDI#zBGmPUG2iXCzz3wr75O80g", 
  img:"kows" , 
  text:"The restaurant-bar, inspired by the popular social media brand *Cows*, requested themed menus based on its characters as well as the rest of the graphic identity to brand its premises."
},{ 
  nombre:"Color design for new units of the fire extinguisher company", 
  url: "https://mega.nz/folder/uvRQmRLJ#1o931fZ6jDXgbNCYRRPXnw", 
  img:"fireAde" , 
  text:"The fire extinguisher company requested a color scheme for its new units themed on its brand colors."
},{ 
  nombre:"Industrial and safety signage from the Win company", 
  url: "https://mega.nz/folder/Snw1TLzJ#VlvBCkzy5RA4gfMkDFsaOw", 
  img:"win" , 
  text:"The high-quality raw materials company requested two proposals for industrial and safety signage at its facilities."
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
                            <tbody>
                            <tr>
                                <td width="70%" style="height:60px">
                                  <a class="download" href="${url}" target="blank">GO TO URL</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                          <div class="description" style="font-family: Arial;color: black;font-size: 13px;padding: 6px;">${text}</div>
                          ${ github ? '<a href="'+github+'" target="_blank"><div class="github">Repository on GitHub</div></a>' : '' }
                    </td>
                </tr>
            </tbody></table>

        </td>
      </tr>                                              
    </tbody></table></a></div>`;

}

document.getElementById('cont').innerHTML = html;