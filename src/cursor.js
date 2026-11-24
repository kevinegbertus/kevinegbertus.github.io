export function installCursor(){
 const media=matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
 const dot=document.createElement('div'), ring=document.createElement('div');
 dot.className='pixel-pointer'; ring.className='pixel-ring'; dot.setAttribute('aria-hidden','true');ring.setAttribute('aria-hidden','true');document.body.append(dot,ring);
 let x=0,y=0,rx=0,ry=0,frame=0,visible=false;
 function hide(){visible=false;document.documentElement.classList.remove('custom-pointer');cancelAnimationFrame(frame);frame=0;}
 function animate(){rx+=(x-rx)*.24;ry+=(y-ry)*.24;ring.style.transform=`translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;frame=requestAnimationFrame(animate);}
 function move(e){if(!media.matches||e.pointerType!=='mouse'){hide();return;}x=e.clientX;y=e.clientY;dot.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;ring.classList.toggle('interactive',!!e.target.closest('a,button,.portrait'));if(!visible){visible=true;rx=x;ry=y;document.documentElement.classList.add('custom-pointer');animate();}}
 function click(e){if(!visible||e.pointerType!=='mouse')return;const pulse=document.createElement('div');pulse.className='pixel-pulse';pulse.style.left=e.clientX+'px';pulse.style.top=e.clientY+'px';document.body.append(pulse);pulse.addEventListener('animationend',()=>pulse.remove(),{once:true});setTimeout(()=>pulse.remove(),600);}
 window.addEventListener('pointermove',move);window.addEventListener('pointerdown',click);document.documentElement.addEventListener('pointerleave',hide);window.addEventListener('blur',hide);media.addEventListener('change',hide);
}
