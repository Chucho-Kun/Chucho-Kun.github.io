
let sitios = 
[
{ nombre:"Mailing Pinturas Berel", 
  url: "https://storiesbehindsongs.com/mailing/pinturas-berel", 
  img:"mail-berel", 
  github:false,
  text:"Online store for products related to paints and tools. The mailing is sent when a purchase is made on the website paying by card and includes the user's address, which is sent to the Conekta payment gateway."
},{ 
  nombre:"Mailing Gamero App", 
  url: "https://storiesbehindsongs.com/mailing/gamero/", 
  img:"mail-gamero",
  github:false, 
  text:"Mailing sent to the customer once they complete their purchase for a digital code for a video game directly on the Nintendo eShop (when you could still redeem codes for digital games)"
},{ 
  nombre:"Mailing Aeromexico", 
  url: "https://storiesbehindsongs.com/mailing/aeromexico/", 
  img:"mail-aeromexico",
  github:false, 
  text:"Mailing sent to the customer once they subscribe to the Aeromexico loyalty program, design tested in litmus"
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