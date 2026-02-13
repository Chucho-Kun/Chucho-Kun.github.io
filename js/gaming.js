
let sitios = 
[
{ nombre:"Zombies and Platforms", 
  url: "https://storiesbehindsongs.com/unityPortfolio/zombies/", 
  img:"zombies", 
  github:false,
  text:"A platform game where you can pick up an item to shoot zombies and make them explode. If you finish the game without picking up a single weapon, a different ending is unlocked. Adapted for PC, Android, and HTML5.<br><br>Controls:<br> Movement (Left, Right) or (A, D) Shoot (H) Jump (G)<br><br><br>"
},{ 
  nombre:"Survival Shooter", 
  url: "https://storiesbehindsongs.com/unityPortfolio/survival/", 
  img:"survivalshooter",
  github:false, 
  text:"3D game using assets from the Unity Store. You control a sleeping child with a pistol who must defend himself against three different types of zombies chasing him. The game features pause controls, audio adjustment, and sound effects.<br>Adapted for PC and HTML5<br><br>Controls:<br>Movement (A, D, W, S) Shoot (Left Mouse Button)<br><br>"
},{ 
  nombre:"Tanks in Multiplayer", 
  url: "https://storiesbehindsongs.com/unityPortfolio/tanks/", 
  img:"tanks",
  github:false, 
  text:"Local Multiplayer 3D Game: You control a tank that moves forward and backward, turns left or right, and fires a projectile at varying distances depending on how long you hold the fire button. The game features a round counting system to determine a winner.<br><br>Controls:<br>P1: Movement (W, S), Rotation (A, D), Fire (Space).<br>P2: Movement (Right, Left), Rotation (Up, Down), Fire (Enter)."
},{ 
  nombre:"Multiplayer Online", 
  url: "https://storiesbehindsongs.com/unityPortfolio/online/", 
  img:"online",
  github:false, 
  text:"Online 3D multiplayer game using the PhotonView plugin, which allows you to host the game on a free server. You are a robot that launches spheres. When you defeat another player, they will drop a cube. The player who collects the most cubes wins.<br>Adapted for PC and HTML5<br><br>Controls:<br>Movement (A, D, W, S) Shoot (Left Mouse Button)<br><br>"
},{ 
  nombre:"Pong Simulator", 
  url: "https://storiesbehindsongs.com/unityPortfolio/pong/", 
  img:"pong",
  github:false, 
  text:"El tradicional juego de Pong con multiplayer local y con un sistema de juego que anuncia al ganador despues de 10 puntos acumulados. Adaptado para PC y HTML5<br><br>Controles:<br>P1 movimiento arriba (Q), Abajo (A).<br>P2 movimiento arriba (Flecha arriba), Abajo (Flecha abajo).<br><br><br>"
},{ 
  nombre:"Ritual Dream | Global Game Jam", 
  url: "https://storiesbehindsongs.com/unityPortfolio/pong/", 
  img:"ritual",
  github:false, 
  text:"Game developed in 48 hours at the 2016 Global Game Jam at the Digital Culture Center, Mexico City. 2D platform game<br>with a 'Ritual' theme and a final boss.<br>Adapted for PC with GamePad controls.<br>Controls:<br><br>Keyboard: Movement (A, D), Jump (H), Shoot (G).<br></br>GamePad: Movement (Joystick), Jump (A), Shoot (X)."}];

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