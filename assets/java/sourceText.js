const text=document.getElementById("text");
const prog="Since I can't show the source code exactly for the group project, #2 entitled 'Space Junkies', probably because it was a group project and so I don't have full control over the git repository for it, I'm just going to post what I do have. And the other projects here. Just the interesting bits. If you want the full source code, please pay a visit to my Github online. Since it is a public coding profile. You can view all of my repositories for projects I have EVER done there. Except the ones I keep private of course. Those are for professional purposes. So I'm afraid I won't be able to share the code from them. But feel free to check out the rest of it. {^_~}";
let idx=0;


setInterval(writeText,100);

function writeText(){
  text.innerText = prog.slice(0, idx);
  idx++;
 
}
 // if(idx > prog.length)
//    {
//      idx=0;
 //   }
//}