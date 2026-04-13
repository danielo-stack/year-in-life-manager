/* ============================================
   VALENCE — A YEAR IN THE LIFE OF A MANAGER
   v5 — Data-flow, CI reveal, systems toggle
   ============================================ */
(() => {
  'use strict';

  const C = { self:'#3B82F6', others:'#8B5CF6', talent:'#EC4899', ext:'#F59E0B', collab:'#10B981', nadia:'#EC4899' };
  const TEAM = [
    {name:'Jordan',title:'Senior Associate'},
    {name:'Priya',title:'Associate'},
    {name:'Alex',title:'Associate'},
    {name:'Sam',title:'Senior Analyst'},
    {name:'Tomás',title:'Analyst'},
    {name:'Kai',title:'Analyst'},
    {name:'Marcus',title:'Associate'},
    {name:'Lin',title:'Coordinator'},
  ];

  /* ── Floating quotes ── */
  const QUOTES = [
    'Giving feedback to Priya',
    'Jordan late on a deliverable',
    'Resolving conflict between Lin and Marcus',
    'Kai adjusting to new role',
    "Sam's development plan review",
    'Maya is a first-time manager',
    '1:1 with Alex about project visibility',
    'Onboarding Tomás after the reorg',
    'Career conversation with Jordan',
    'Priya and Alex competing for the same project',
    'Marcus underperforming — wrong role, not wrong person',
    'Lin expected a promotion that isn\'t coming',
    'Team morale check-in after layoffs',
    'Quarterly goal-setting prep',
    'Skip-level with Maya\'s VP',
    'Coaching Alex on cross-functional collaboration',
    'Preparing for calibration meeting',
    'Processing feedback from her own manager',
    'Writing mid-year reviews for 8 people',
    'Sam\'s parental leave — coverage planning',
    'Building trust with new team members',
    'Navigating the AI transformation mandate',
    'Defending Marcus\'s rating to leadership',
    'Priya wants more autonomy',
    'Jordan not speaking up in meetings',
    'Planning the team offsite',
    'Maya second-guessing a tough call',
    'Comp conversation with Lin',
  ];

  /* ── Moments data ── */
  const MOMENTS = [
    { month:1,name:'January',type:'pull',layers:['self','others'],
      title:"First day as manager",
      brief:'"How do I establish myself without alienating the team?"',
      refs:['Maya\'s profile','Org chart','Team history'],
      learns:['Maya\'s leadership style','Peer-to-manager dynamics'],
      behavior:'Have a direct, early conversation with Jordan instead of letting tension build',
      nadia:["Maya, I can see this is a big transition. You have 8 direct reports — several of whom were your peers until last week. Based on your profile, you tend toward consensus-building and relationship preservation. Those are real strengths, but in the first two weeks of a new leadership role, they can read as indecisiveness if you don't pair them with clarity.","There's one relationship I want to flag immediately: Jordan. They were also up for this role, and based on the team dynamics I'm seeing, that tension is already present even if no one's naming it. The longer it stays unspoken, the harder it becomes. I'd recommend a direct, one-on-one conversation within the next week — not to address the competition, but to signal that you see Jordan's value and want to invest in their growth.","I can help you prepare talking points for that conversation and build a 30-day leadership plan that establishes your credibility without alienating the people who used to be your peers."],
      buckets:{maya:'Peer-to-manager identity shift',team:'Jordan tension flagged from day one'},
    },
    { month:2,name:'February',type:'push',layers:['talent','self'],isTalent:true,
      title:"Goal setting due in 10 days",
      brief:'Nadia prompts Maya to start goal-setting with the hardest ones first.',
      refs:['Month 1 coaching context','Jordan\'s profile','Team goals'],
      learns:['Maya\'s avoidance pattern','Jordan relationship dynamics'],
      behavior:'Use goal-setting as a coaching vehicle — not just an HR exercise',
      nadia:["Maya, goal setting is due in 10 days and I want to flag something. Based on our conversation last month, you mentioned wanting to have a direct conversation with Jordan — but from what I can see, that hasn't happened yet. I'm noticing a pattern: when something feels uncomfortable, you tend to defer it. That's not a character flaw, it's a common instinct, but it's one we should work on.","Here's the good news: goal setting is actually a perfect vehicle for the Jordan conversation. Instead of a confrontation about the promotion, you can sit down together and set ambitious, specific goals that signal 'I see your potential and I'm investing in it.' That's the message Jordan needs to hear right now, and it comes through actions, not words.","I've drafted personalized goal frameworks for each of your 8 reports based on their role context and the org's Q1 priorities. I'd suggest starting with Jordan's — get the hardest one right first, and the rest will feel easier."],
      buckets:{talent:'Goal profiles for 8 direct reports',maya:'Confronting avoidance pattern'},
    },
    { month:2,name:'February',type:'pull',layers:['others'],
      title:"Feedback to Priya",
      brief:'"I have to give Priya feedback tomorrow. She\'s my friend."',
      refs:['Priya\'s profile','Maya\'s coaching history','Performance data'],
      learns:['Maya-Priya relationship','Feedback delivery patterns'],
      behavior:'Deliver specific, evidence-based feedback instead of vague reassurance',
      nadia:["I understand the instinct to protect this relationship — you and Priya have a genuine friendship, and that matters. But here's something I want you to sit with: vague feedback feels kind in the moment, but it's actually unkind. It leaves Priya guessing about what to change, which means she can't actually improve. The kindest thing you can do is be specific.","Looking at Priya's collaboration profile, she responds best when feedback is tied to concrete examples she can recall — not abstract observations. She also needs to feel heard before she can absorb a critique. So I'd recommend opening with genuine acknowledgment of what she's doing well, then anchoring your feedback in two or three specific, observable behaviors with clear examples.","I've drafted talking points for you that follow that structure. After the conversation, tell me how it went — I want to track how this lands so I can help you refine your approach for next time. This is a skill you're building, not a one-time event."],
      buckets:{team:'First feedback attempt — Maya-Priya dynamic tracked'},
    },
    { month:3,name:'March',type:'push',layers:['others','collab'],
      title:"Priya & Alex pattern detected",
      brief:'Nadia surfaces a dynamic Maya hasn\'t named yet.',
      refs:['1:1 transcripts','Project assignments','Collaboration signals'],
      learns:['Priya-Alex competition','Team social dynamics'],
      behavior:'Name team dynamics as patterns, not isolated incidents — address the system',
      nadia:["Maya, I want to surface something you may not have fully seen yet. Across your last three 1:1s and two project check-ins, you've mentioned Priya and Alex in the context of the same initiative — each time with a slightly different tension. Individually, each felt like a small thing. But taken together, there's a pattern forming: they're competing for visibility on the same workstream, and it's starting to affect how the rest of the team interacts with both of them.","This isn't about either person being difficult — it's a structural dynamic. They're both high performers who want recognition, and the current project setup is forcing them into a zero-sum frame. The fix is systemic, not individual.","Based on their collaboration profiles: Alex responds to direct, structured clarity — give him defined ownership and he'll thrive. Priya needs to feel heard and valued before she can let go of the competition. I'd recommend separate conversations this week, followed by a restructuring of how ownership is divided on the project. I'm tracking this as an ongoing collaboration pattern."],
      buckets:{team:'Priya-Alex dynamic tracked as ongoing pattern'},
      collabInsight:'Priya-Alex competition pattern identified',
    },
    { month:4,name:'April',type:'pull',layers:['self','ext'],
      title:'Boss says Maya is "too nice"',
      brief:'Contradictory signals: boss says too soft, team says not supportive enough.',
      refs:['Boss feedback','Engagement survey','Feb coaching context'],
      learns:['Maya\'s leadership identity','Perception gap across stakeholders'],
      behavior:'Connect feedback from multiple sources — the fix for both is the same: be clear',
      nadia:["Maya, I know this feels contradictory — your boss says you're too soft, and your team says you don't support their development. It feels like you can't win. But I actually think these are two sides of the same coin.","When you avoid giving direct feedback — which we've been working on since February — your team doesn't experience that as kindness. They experience it as a lack of investment. They're not getting the specificity they need to grow. Meanwhile, your boss sees the same pattern as a lack of leadership intensity. The fix for both audiences is actually the same: be clearer, more direct, and more frequent with your feedback.","Remember the Priya conversation last month? It went better than you expected. That's evidence that you can do this. The engagement survey debrief is actually an opportunity here — I'd recommend being transparent with your team about what you heard and what you're working on. Modeling that vulnerability is the most direct signal of development support you can give. I can help you prepare that conversation."],
      buckets:{maya:'Leadership identity inflection point',external:'Boss feedback + survey convergence'},
    },
    { month:5,name:'May',type:'push',layers:['talent','collab'],isTalent:true,
      title:"Talent review: high-potentials",
      brief:'Both Priya and Alex are candidates. How Maya positions them matters.',
      refs:['Dev plans','Priya-Alex dynamic','Performance data'],
      learns:['High-potential differentiation','Political dynamics in talent decisions'],
      behavior:'Differentiate high-potential from high-performer — advocate with nuance',
      nadia:["Maya, you'll be asked to identify high-potentials this week, and I want to help you think through this carefully. Both Priya and Alex are strong candidates, but how you position them in this review will send a signal — not just to leadership, but back to them and to the rest of your team.","I'm pulling in their development plans from March, their collaboration profiles, and the competition dynamic we've been tracking. Here's the distinction I'd encourage you to make: 'high performer' and 'high potential' are different things. Alex delivers consistently at a high level — that's performance. Priya is showing signs of growth beyond her current role — that's potential. Leadership needs to hear that distinction clearly, or they'll default to whoever had the most recent visible win.","My recommendation: advocate for both, but with different narratives. Position Alex's consistency as essential to team stability. Position Priya's trajectory as the development investment. This also helps de-escalate the competition between them — they stop being rivals for the same label."],
      buckets:{talent:'High-potential nominations prepared with context'},
      collabInsight:'Competition dynamics affecting talent decisions',
    },
    { month:6,name:'June',type:'push',layers:['ext','others'],isExternal:true,
      title:"AI mandate + Sam's leave announced",
      brief:'Two org disruptions land simultaneously.',
      refs:['HRIS data','Team workload','Priya-Alex dynamic','AI readiness assessment'],
      learns:['Coverage gaps','Team capacity under stress','Change readiness'],
      behavior:'Redistribute proactively rather than reactively — plan before the gap hits',
      nadia:["Maya, two things just landed at once and I want to help you get ahead of both before they compound. First: Sam has submitted parental leave starting in August. Sam is depended on more than anyone realizes — the coverage gap will be real, and your team is already stretched from the Priya-Alex situation.","I'd recommend mapping Sam's responsibilities this week and redistributing before the leave starts — not after. The key is doing it in a way that doesn't overload your highest performers or make Sam feel sidelined in the weeks before they go. I have a redistribution framework ready based on current workloads.","Second: the AI transformation mandate. I know this feels overwhelming on top of everything else, but here's my read — you don't need to be the AI expert. You need to create the conditions for your team to experiment. That actually connects directly to the 'development support' theme we've been working on since April. Frame it as a learning opportunity, not a compliance exercise, and your team will respond."],
      buckets:{external:'AI mandate + parental leave landed',team:'Coverage redistribution planned'},
    },
    { month:7,name:'July',type:'pull',layers:['others','talent'],isTalent:true,
      title:"Maya worried about Jordan",
      brief:'"Jordan seems checked out lately. I\'m worried I\'m losing them."',
      refs:['Jordan\'s collaboration profile','Feb goal context','Survey data','Maya\'s 1:1 notes'],
      learns:['Jordan development gap','Career conversation patterns'],
      behavior:'Have a genuine career conversation — not a retention pitch',
      nadia:["Maya, I hear your concern about Jordan. Let me help you think through what might be happening based on what you've shared with me.","You set ambitious goals with Jordan back in February and it felt like a real win. But from what you've told me in your 1:1 recaps, the development conversation didn't continue after that. The engagement survey in April — where your team said 'my manager doesn't support my development' — Jordan may be experiencing exactly that disconnect. The goals were a promise, and the follow-through is what Jordan is measuring you by.","Based on Jordan's collaboration profile, they value recognition and challenge. A direct career conversation — not about what they're doing wrong, but about what they want next — could be exactly what's needed. The mid-year review is a natural opening. I've prepared a conversation framework that builds on the goals you set together. This is also a moment where your growth in directness will matter — Jordan will know if you're being authentic."],
      buckets:{team:'Jordan — career conversation needed',talent:'Mid-year reviews grounded in full context'},
      collabInsight:'Jordan development gap identified from Maya\'s observations',
    },
    { month:8,name:'August',type:'push',layers:['self','others','talent','ext','collab'],isConvergence:true,
      title:"Everything converges",
      brief:'Reorg lands. Tomás and Kai arrive. Sam is on leave. Jordan unresolved. AI mandate live.',
      refs:['All prior context','Tomás & Kai profiles','Reorg data','AI adoption status','Team dynamics map'],
      learns:['Full team dynamics shift','Change absorption capacity','Maya\'s leadership growth'],
      behavior:'Lead through converging pressures with the clarity you\'ve built all year',
      nadia:["Maya, I know this is a lot landing at once. A department just dissolved, Tomás and Kai are joining your team — people who didn't choose this move — and at the same time Sam is on leave, the Jordan situation is still unfolding, the Priya-Alex dynamic is simmering, and the AI mandate is live. Let me help you think through this as one connected picture, not five separate fires.","First, the new arrivals. Tomás is highly collaborative but takes time to build trust in new environments — pushing him too fast will backfire. Kai is more independent and direct, which is actually an asset right now. I'd recommend different onboarding approaches for each: pair Tomás with Priya's workstream and Kai with Alex's. This isn't random — based on the collaboration dynamics I've been tracking since March, introducing new team members into those workstreams could naturally break the competitive pattern between Priya and Alex. New people shift social structures in ways that reset entrenched dynamics.","Second — and this is important — Tomás and Kai come from a team that was further along on AI adoption. That's not a problem, it's an asset. Position them as resources, not refugees, and you solve two challenges at once: their integration and your AI mandate progress.","The first team meeting with everyone matters. Tomás and Kai will be watching for signals about whether they're welcome. Your existing team will be watching for how you frame the change. I've drafted an agenda that acknowledges the disruption honestly while pointing forward.","One more thing, Maya. I want you to hear this: look at what you've navigated this year. The engagement survey, the talent review, the feedback conversations you were afraid of in January. You're a fundamentally different leader than the one who asked me 'how do I establish myself without alienating the team' seven months ago. You've got this."],
      buckets:{maya:'Growth arc validated',team:'Team expanded — dynamics shifting',external:'Reorg absorbed',talent:'Onboarding plans activated'},
      collabInsight:'New pairings could resolve Priya-Alex dynamic',
    },
    { month:9,name:'September',type:'push',layers:['talent','self'],isTalent:true,
      title:"360 feedback — Maya's own",
      brief:'Maya receives her own feedback for the first time.',
      refs:['360 results','April engagement survey','Growth trajectory','Boss feedback history'],
      learns:['Maya\'s external perception','Growth evidence','Remaining blind spots'],
      behavior:'Process feedback constructively — celebrate growth, identify what\'s next',
      nadia:["Maya, your 360 results are in. I want to help you process these thoughtfully, because the instinct with feedback — especially the first time — is to fixate on what's negative. Let's start with what's real.","In April, your engagement survey said your team didn't feel supported in their development. Five months later, your 360 shows a significant shift: your team now rates you as one of the strongest development-focused managers in your peer group. That's not a coincidence — that's the work you've done. The Priya feedback conversation, the Jordan career check-in, the way you onboarded Tomás and Kai — each of those moments built this result.","There are growth areas too. Your cross-functional partners still see you as sometimes hesitant to push back in senior meetings — that connects back to the 'too nice' feedback from your boss in April. The external perception is lagging behind the internal growth. My recommendation: pick one visible moment in the next quarter to demonstrate directness in a cross-functional setting. Not performatively, but authentically. You have the skill now — it's about deploying it in a wider context."],
      buckets:{talent:'360 results processed',maya:'Growth since April quantified'},
    },
    { month:10,name:'October',type:'push',layers:['ext','self'],isExternal:true,
      title:"Layoffs in adjacent team",
      brief:'Morale drops across the org. Maya\'s team is watching her.',
      refs:['Reorg experience from August','Trust baseline','Team sentiment signals','Org communications'],
      learns:['How Maya leads through uncertainty','Team resilience under pressure'],
      behavior:'Lead through uncertainty by being present and transparent — lean on the trust you\'ve built',
      nadia:["Maya, the layoffs in the adjacent team are going to ripple into your team's morale, even though your team isn't directly affected. People will be wondering if they're next, and they'll be watching how you respond.","You've actually been through something similar already — the August reorg. The trust you built during that transition is your foundation now. My recommendation: don't wait for your team to come to you with anxiety. Get in front of it. Schedule brief 1:1 check-ins this week with anyone who seems unsettled. Be honest about what you know and what you don't.","Your leadership instinct has changed since January. Back then, you would have avoided this conversation or tried to smooth it over. Now you have the credibility and the directness to acknowledge uncertainty without creating panic. That's real growth, and this moment will test it."],
      buckets:{external:'Layoff uncertainty navigated',maya:'Resilience strengthened'},
    },
    { month:11,name:'November',type:'pull',layers:['others'],
      title:"Managing Marcus out",
      brief:'The hardest conversation of Maya\'s year.',
      refs:['All feedback history since March','Performance documentation','HR policy','Marcus profile','Maya\'s coaching trajectory'],
      learns:['How Maya handles the most difficult management moment','Evidence-based decision-making'],
      behavior:'Have the hardest conversation of your career — grounded in evidence, delivered with compassion',
      nadia:["Maya, this is the conversation you've been building toward all year, even if you didn't know it. Managing someone out is the hardest thing a people leader does, and I want you to feel prepared — not just procedurally, but emotionally.","Let's look at what we have. Since March, there's a clear, documented pattern: Marcus has received specific feedback in three separate conversations, with concrete expectations set each time. The improvement has been minimal. This isn't a surprise to Marcus — he's been told what needed to change, he's been given time and support, and the gap remains. The documentation is thorough and defensible.","Here's what I want you to hold onto going into this conversation: this isn't about Marcus being a bad person. It's about a mismatch between the role and his strengths. The kindest thing you can do is be direct about that. I've drafted a conversation framework that leads with respect for his contributions, is specific about why this isn't working, and offers a clear path forward. You're ready for this in a way you absolutely were not in January — and that's because of every hard conversation you've had between then and now."],
      buckets:{team:'Performance exit handled with full evidence'},
    },
    { month:12,name:'December',type:'push',layers:['talent','others'],isTalent:true,
      title:"Year-end reviews",
      brief:'Promotions, comp conversations, disappointments. Nadia carries the full year.',
      refs:['Full year of coaching context','Every interaction across all 8 reports','All talent milestones','Goal trajectories','Collaboration intelligence map'],
      learns:['Complete talent picture for each person','Year-long growth arcs','Team-level patterns'],
      behavior:'Write reviews from a full year of evidence — give every person the review they deserve',
      nadia:["Maya, this is the moment where everything comes together. Year-end reviews for 8 people, including promotions that will happen and some that won't, comp conversations that may disappoint, and the Marcus exit that's still fresh.","Here's what's different for you this December versus any other manager doing this work: you're not starting from scratch, and you're not relying on what you can remember from the last two months. I have the full context for every person on your team — every coaching conversation, every piece of feedback given and received, every goal set and tracked, every dynamic observed.","For Jordan: the retention story is a success. The career conversation in July, the sustained investment since — document that arc. For Priya and Alex: the competition that could have derailed them became a growth opportunity when you restructured ownership and brought in Tomás and Kai. That's a leadership story worth telling. For Marcus: the exit was handled with integrity, and the documentation supports it. For the new arrivals: their integration during a reorg is already a data point on your leadership.","Every review I'm helping you draft is anchored in behavioral evidence, not impressions. That's what your team deserves, and it's what makes these conversations defensible, fair, and genuinely developmental."],
      buckets:{talent:'Year-end reviews from full context',team:'Every report fully understood'},
      collabInsight:'Full collaboration map complete',
    },
  ];

  /* ═══════════════ ORG NETWORK MAP ═══════════════ */
  const DEPTS=[
    {name:'Engineering',color:'#3B82F6',size:2800,x:.5,y:.35},
    {name:'Product',color:'#8B5CF6',size:800,x:.25,y:.22},
    {name:'Marketing',color:'#EC4899',size:1200,x:.75,y:.20},
    {name:'Sales',color:'#F59E0B',size:2100,x:.82,y:.55},
    {name:'Finance',color:'#10B981',size:600,x:.18,y:.58},
    {name:'HR',color:'#F472B6',size:400,x:.32,y:.78},
    {name:'Operations',color:'#06B6D4',size:900,x:.68,y:.78},
    {name:'Legal',color:'#A78BFA',size:200,x:.12,y:.38},
  ];
  const DEPT_LINKS=[[0,1],[0,2],[0,3],[0,4],[1,2],[1,6],[2,3],[3,4],[3,6],[4,5],[5,0],[5,7],[6,5],[6,0],[7,4],[7,5]];

  // Team connections (peer-to-peer network, not just hub-spoke)
  const TEAM_LINKS=[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],// Maya to all
    [1,2],[1,3],[2,3],[2,5],[3,4],[4,7],[5,6],[6,7],[7,8],[8,1],[3,6],[4,5],[1,8],[2,7]]; // peer connections

  class OrgMap {
    constructor(cv){
      this.cv=cv;this.ctx=cv.getContext('2d');
      this.mode='off'; // off, org, zoom, team
      this.dots=[];this.speed=1;this.zoomT=0;this.zoomActive=false;
      this.resize();window.addEventListener('resize',()=>this.resize());
    }
    resize(){
      const d=devicePixelRatio||1,w=this.cv.offsetWidth,h=this.cv.offsetHeight;
      this.cv.width=w*d;this.cv.height=h*d;
      this.ctx.setTransform(d,0,0,d,0,0);this.w=w;this.h=h;
      this.depts=DEPTS.map(d=>({...d,px:d.x*w,py:d.y*h,r:Math.sqrt(d.size)/2.5+10}));
      const cx=w/2,cy=h/2,tr=Math.min(w,h)*.32;
      this.maya={x:cx,y:cy};
      this.teamAll=[{x:cx,y:cy,name:'Maya',title:'Manager',isCenter:true}];
      TEAM.forEach((t,i)=>{const a=(i*45-90)*Math.PI/180;this.teamAll.push({x:cx+Math.cos(a)*tr,y:cy+Math.sin(a)*tr,name:t.name,title:t.title})});
    }
    spawnDot(){
      if(this.dots.length>400)return;
      if(this.mode==='org'){
        const li=DEPT_LINKS[Math.random()*DEPT_LINKS.length|0];
        const a=this.depts[li[0]],b=this.depts[li[1]];
        // Dots travel close to the line (small offset)
        const dx=b.px-a.px,dy=b.py-a.py,len=Math.sqrt(dx*dx+dy*dy);
        const nx=-dy/len*(.5+Math.random()*6),ny=dx/len*(.5+Math.random()*6);
        const mx=(a.px+b.px)/2+nx,my=(a.py+b.py)/2+ny;
        this.dots.push({fx:a.px,fy:a.py,tx:b.px,ty:b.py,cpx:mx,cpy:my,p:0,s:.004+Math.random()*.006,col:a.color,sz:2+Math.random()*2});
      }else if(this.mode==='team'){
        const li=TEAM_LINKS[Math.random()*TEAM_LINKS.length|0];
        const a=this.teamAll[li[0]],b=this.teamAll[li[1]];
        const dx=b.x-a.x,dy=b.y-a.y,len=Math.sqrt(dx*dx+dy*dy)||1;
        const nx=-dy/len*(1+Math.random()*5),ny=dx/len*(1+Math.random()*5);
        const mx=(a.x+b.x)/2+nx,my=(a.y+b.y)/2+ny;
        this.dots.push({fx:a.x,fy:a.y,tx:b.x,ty:b.y,cpx:mx,cpy:my,p:0,s:.004+Math.random()*.006,col:['#06B6D4','#3B82F6','#8B5CF6','#EC4899','#10B981'][Math.random()*5|0],sz:2+Math.random()*1.5});
      }
    }
    drawOrg(){
      const ctx=this.ctx;
      DEPT_LINKS.forEach(([a,b])=>{
        const da=this.depts[a],db=this.depts[b];
        ctx.beginPath();ctx.moveTo(da.px,da.py);ctx.lineTo(db.px,db.py);
        ctx.strokeStyle='rgba(255,255,255,.07)';ctx.lineWidth=1;ctx.stroke();
      });
      this.depts.forEach((d,i)=>{
        const isOps=i===6;
        ctx.beginPath();ctx.arc(d.px,d.py,d.r+10,0,Math.PI*2);
        const g=ctx.createRadialGradient(d.px,d.py,d.r*.3,d.px,d.py,d.r+10);
        g.addColorStop(0,d.color+'30');g.addColorStop(1,d.color+'00');
        ctx.fillStyle=g;ctx.fill();
        ctx.beginPath();ctx.arc(d.px,d.py,d.r,0,Math.PI*2);
        ctx.fillStyle=d.color+(isOps&&this.mode==='zoom'?'40':'18');ctx.fill();
        ctx.strokeStyle=d.color+(isOps&&this.mode==='zoom'?'80':'45');ctx.lineWidth=isOps&&this.mode==='zoom'?2.5:1.5;ctx.stroke();
        ctx.fillStyle='rgba(255,255,255,.75)';ctx.font='600 11px "DM Sans"';ctx.textAlign='center';
        ctx.fillText(d.name,d.px,d.py+4);
        ctx.fillStyle='rgba(255,255,255,.3)';ctx.font='9px "Space Mono"';
        ctx.fillText(d.size.toLocaleString(),d.px,d.py+16);
      });
    }
    drawTeam(){
      const ctx=this.ctx;
      // Peer connection lines
      TEAM_LINKS.forEach(([a,b])=>{
        if(a>=this.teamAll.length||b>=this.teamAll.length)return;
        const na=this.teamAll[a],nb=this.teamAll[b];
        ctx.beginPath();ctx.moveTo(na.x,na.y);ctx.lineTo(nb.x,nb.y);
        ctx.strokeStyle=a===0?'rgba(6,182,212,.1)':'rgba(255,255,255,.04)';
        ctx.lineWidth=a===0?1.2:0.8;ctx.stroke();
      });
      // Team nodes
      this.teamAll.forEach(n=>{
        const r=n.isCenter?20:9;
        ctx.beginPath();ctx.arc(n.x,n.y,r,0,Math.PI*2);
        if(n.isCenter){
          ctx.fillStyle='rgba(6,182,212,.4)';ctx.shadowColor='rgba(6,182,212,.35)';ctx.shadowBlur=20;ctx.fill();ctx.shadowBlur=0;
        }else{
          ctx.fillStyle='rgba(255,255,255,.06)';ctx.fill();
          ctx.strokeStyle='rgba(255,255,255,.1)';ctx.lineWidth=1;ctx.stroke();
        }
        ctx.fillStyle=n.isCenter?'rgba(255,255,255,.9)':'rgba(255,255,255,.6)';
        ctx.font=n.isCenter?'500 14px "Playfair Display"':'600 10px "DM Sans"';
        ctx.textAlign='center';
        ctx.fillText(n.name,n.x,n.y-r-6);
        ctx.fillStyle='rgba(255,255,255,.28)';ctx.font='9px "DM Sans"';
        ctx.fillText(n.title,n.x,n.y-r+5);
      });
    }
    tick(){
      const ctx=this.ctx;ctx.clearRect(0,0,this.w,this.h);
      if(this.mode==='off'){requestAnimationFrame(()=>this.tick());return}

      // Zoom animation: draw fading org + expanding team
      if(this.mode==='zoom'){
        this.zoomT=Math.min(this.zoomT+.008,1);
        ctx.globalAlpha=1-this.zoomT*.7;
        this.drawOrg();
        ctx.globalAlpha=1;
        if(this.zoomT>.3){
          ctx.globalAlpha=Math.min(1,(this.zoomT-.3)/.4);
          this.drawTeam();
          ctx.globalAlpha=1;
        }
        // Spawn org dots while fading, team dots while appearing
        if(this.zoomT<.6)for(let i=0;i<2;i++){this.mode='org';this.spawnDot();this.mode='zoom'}
        if(this.zoomT>.3)for(let i=0;i<2;i++){this.mode='team';this.spawnDot();this.mode='zoom'}
        if(this.zoomT>=1){this.mode='team';this.dots=this.dots.filter(d=>!d._org)}
      }else{
        for(let i=0;i<3;i++)this.spawnDot();
        if(this.mode==='org')this.drawOrg();
        else if(this.mode==='team')this.drawTeam();
      }

      // Animate dots
      for(let i=this.dots.length-1;i>=0;i--){
        const d=this.dots[i];d.p+=d.s*this.speed;
        if(d.p>=1){this.dots.splice(i,1);continue}
        const t=d.p;
        const x=(1-t)*(1-t)*d.fx+2*(1-t)*t*d.cpx+t*t*d.tx;
        const y=(1-t)*(1-t)*d.fy+2*(1-t)*t*d.cpy+t*t*d.ty;
        let op=1;if(t<.1)op=t*10;else if(t>.85)op=(1-t)/.15;
        ctx.globalAlpha=op*.6;ctx.beginPath();ctx.arc(x,y,d.sz,0,Math.PI*2);
        ctx.fillStyle=d.col;ctx.shadowColor=d.col;ctx.shadowBlur=3;ctx.fill();
        ctx.shadowBlur=0;ctx.globalAlpha=1;
      }
      requestAnimationFrame(()=>this.tick());
    }
    setMode(m){
      if(m==='zoom'){this.zoomT=0;this.zoomActive=true}
      this.mode=m;
      if(m!=='zoom')this.dots=[];
    }
  }

  /* ═══════════════ OPENING SCROLL ═══════════════ */
  function initOpening(orgMap){
    const tmRing=document.getElementById('tmRing');
    const beginOv=document.getElementById('beginOverlay');
    const beginCta=document.getElementById('beginCta');
    const slides=document.querySelectorAll('.op-slide');

    if(beginCta)beginCta.addEventListener('click',()=>document.getElementById('tlSection').scrollIntoView({behavior:'smooth'}));

    const phases={
      question(){tmRing.classList.add('big');tmRing.classList.remove('hidden');orgMap.setMode('off');beginOv.classList.remove('vis')},
      org(){tmRing.classList.add('hidden');orgMap.setMode('org');orgMap.speed=1;beginOv.classList.remove('vis')},
      zoom(){tmRing.classList.add('hidden');orgMap.setMode('zoom');orgMap.speed=1;beginOv.classList.remove('vis')},
      problem(){tmRing.classList.add('hidden');orgMap.setMode('team');orgMap.speed=.5;beginOv.classList.remove('vis')},
      nadia(){tmRing.classList.add('hidden');orgMap.speed=.15;beginOv.classList.add('vis')},
      begin(){tmRing.classList.add('hidden');beginOv.classList.add('vis')},
    };

    // Current active phase
    let activePhase='';

    // Observe each slide
    const slideObs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        const card=e.target.querySelector('.op-card');
        if(e.isIntersecting){
          if(card)card.classList.add('vis');
          const phase=e.target.dataset.phase;
          if(phase&&phases[phase]&&phase!==activePhase){
            activePhase=phase;
            phases[phase]();
          }
        }else{
          if(card)card.classList.remove('vis');
        }
      });
    },{threshold:.4});
    slides.forEach(s=>slideObs.observe(s));

    // Begin click is handled by beginCta above

    // Hide opening elements when timeline is in view
    const tlSec=document.getElementById('tlSection');
    let hidden=false;
    if(tlSec){
      new IntersectionObserver(e=>{
        if(e[0].isIntersecting&&!hidden){
          hidden=true;orgMap.setMode('off');tmRing.classList.add('hidden');
          const grad=document.getElementById('opGradient');if(grad)grad.style.opacity='0';
        }else if(!e[0].isIntersecting&&hidden){
          const oRect=document.getElementById('opening').getBoundingClientRect();
          if(oRect.bottom>innerHeight*.5){hidden=false;tmRing.classList.remove('hidden');
            const grad=document.getElementById('opGradient');if(grad)grad.style.opacity='1'}
        }
      },{threshold:.01}).observe(tlSec);
    }
  }

  /* ═══════════════ HELPERS ═══════════════ */
  function tagColor(text){
    const t=text.toLowerCase();
    if(t.includes('maya')||t.includes('leadership')||t.includes('growth')||t.includes('confidence')||t.includes('identity')||t.includes('resilience')||t.includes('perception')||t.includes('avoidance'))return C.self;
    if(t.includes('team')||t.includes('jordan')||t.includes('priya')||t.includes('alex')||t.includes('sam')||t.includes('marcus')||t.includes('tomás')||t.includes('kai')||t.includes('lin')||t.includes('report')||t.includes('feedback')||t.includes('flight')||t.includes('dynamic')||t.includes('exit')||t.includes('engagement'))return C.others;
    if(t.includes('talent')||t.includes('goal')||t.includes('review')||t.includes('360')||t.includes('survey')||t.includes('calibr')||t.includes('high-potential'))return C.talent;
    if(t.includes('reorg')||t.includes('external')||t.includes('boss')||t.includes('mandate')||t.includes('ai ')||t.includes('layoff')||t.includes('hris')||t.includes('coverage')||t.includes('market'))return C.ext;
    if(t.includes('collab')||t.includes('pattern')||t.includes('social'))return C.collab;
    return 'rgba(255,255,255,.15)';
  }

  /* ═══════════════ TIMELINE BUILDER ═══════════════ */
  function buildTimeline(){
    const months=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    const tlM=document.getElementById('tlMonths');
    months.forEach((m,i)=>{
      const d=document.createElement('div');d.className='tl-dot';d.dataset.month=i+1;
      d.innerHTML=`<div class="tl-dot-lbl">${m}</div>`;tlM.appendChild(d);
    });

    const col=document.getElementById('momentsCol');
    MOMENTS.forEach((m,idx)=>{
      const el=document.createElement('div');
      let cls='moment';
      if(m.isTalent)cls+=' talent';if(m.isExternal)cls+=' external';if(m.isConvergence)cls+=' convergence';
      el.className=cls;el.dataset.month=m.month;el.dataset.idx=idx;

      const pips=m.layers.map(l=>`<div class="m-pip" style="background:${C[l]||'#888'}"></div>`).join('');

      // Build expand content
      let expandHTML='';

      // Data flow: referencing + learning
      if(m.refs||m.learns){
        expandHTML+='<div class="data-flow">';
        if(m.refs){
          expandHTML+='<div class="df-group"><div class="df-label">Nadia is referencing</div>';
          m.refs.forEach(p=>{expandHTML+=`<div class="df-tag" style="border-color:${tagColor(p)}">${p}</div>`});
          expandHTML+='</div>';
        }
        expandHTML+='<div class="df-arrow">→</div>';
        if(m.learns){
          expandHTML+='<div class="df-group"><div class="df-label">Nadia is learning</div>';
          m.learns.forEach(p=>{expandHTML+=`<div class="df-tag" style="border-color:${tagColor(p)}">${p}</div>`});
          expandHTML+='</div>';
        }
        expandHTML+='</div>';
      }

      // Behavior change
      if(m.behavior){
        expandHTML+=`<div class="m-behavior"><span class="m-beh-label">Behavior change Nadia is enabling</span><span class="m-beh-text">${m.behavior}</span></div>`;
      }

      // Nadia response
      if(m.nadia){
        expandHTML+='<div class="n-resp"><span class="n-icon">✦</span><div>';
        (Array.isArray(m.nadia)?m.nadia:[m.nadia]).forEach(p=>{expandHTML+=`<p>${p}</p>`});
        expandHTML+='</div></div>';
      }

      // (convergence is now handled through the Nadia response itself)

      el.innerHTML=`
        <div class="m-month">${m.name}</div>
        <div class="m-card">
          <div class="m-head">
            <div class="m-type ${m.type}"><span class="t-icon"></span>${m.type==='push'?'NADIA INITIATES':'MAYA ASKS'}</div>
            <div class="m-pips">${pips}</div>
          </div>
          <div class="m-title">${m.title}</div>
          <div class="m-brief">${m.brief}</div>
          <div class="m-expand">${expandHTML}</div>
          <div class="m-hint">CLICK TO EXPAND</div>
        </div>`;

      el.querySelector('.m-card').addEventListener('click',()=>{
        el.classList.toggle('expanded');
        el.querySelector('.m-hint').textContent=el.classList.contains('expanded')?'CLICK TO CLOSE':'CLICK TO EXPAND';
      });

      col.appendChild(el);
    });
  }

  /* ═══════════════ KNOWLEDGE FILLER ═══════════════ */
  const added=new Set();
  const bucketMap={self:'maya',others:'team',maya:'maya',team:'team',talent:'talent',external:'external',ext:'external'};
  // Color per bucket — consistent: maya=blue, team=purple, talent=pink, external=amber
  const bucketColor={maya:C.self,team:C.others,talent:C.talent,external:C.ext};
  // Data point counts — grows to hundreds to show scale
  const dpCounts={maya:0,team:0,talent:0,external:0};
  // How many "background" data points accumulate per month (simulated)
  const dpPerMonth={maya:85,team:160,talent:22,external:35};
  const dpMax={maya:1280,team:2400,talent:340,external:480};

  // Keywords to italicize
  const KEYWORDS=['leadership','consensus','empathy','confrontation','competitive','collaborative','assertive','engagement','communication','trust','accountability','delegation','resilience','feedback','avoidance','structure','autonomy','psychological safety','sentiment','burnout'];

  function italicize(text){
    let result=text;
    KEYWORDS.forEach(kw=>{
      const re=new RegExp(`\\b(${kw})\\b`,'gi');
      result=result.replace(re,'<em>$1</em>');
    });
    return result;
  }

  const EXTRA_KNOWLEDGE={
    maya:[
      'Defaults to <em>consensus</em> over decisiveness','Communication style: <em>collaborative</em>, avoids <em>confrontation</em>',
      'Strongest in <em>empathy</em> and relationship-building','Weakest in upward communication',
      'Preferred meeting style: 1:1 over group','Energy drops in late-afternoon meetings',
      'Responds well to specific, evidence-based <em>feedback</em>','Calendar: 62% of time in meetings',
      'HRIS: promoted from IC 6 months ago','Development goal: executive presence',
      'LMS: completed "New Manager Foundations"','<em>Delegation</em> score improving since Q2',
    ],
    team:[
      'Jordan: <em>competitive</em>, values recognition','Priya: <em>collaborative</em>, needs to feel heard',
      'Alex: <em>assertive</em>, responds to <em>structure</em>','Sam: steady, coverage-critical',
      'Marcus: declining <em>engagement</em>','Lin: reliable, promotion-expectant',
      'Team meeting energy highest on Tuesdays','1:1 cadence: weekly for all 8',
      'Tomás: slow <em>trust</em>-builder, ex-Operations','Kai: independent, direct, AI-experienced',
      'Slack <em>sentiment</em>: positive trend since Aug','Calendar: 3 members skip optional meetings',
      'Cross-team friction with Product on timelines','Jordan-Priya collaboration improved Q3',
    ],
    talent:['Goal profiles filed for all 8','Mid-year reviews grounded in evidence','360 pilot completed','Engagement survey themes tracked','IDP progress: 6 of 8 on track','Calibration prep materials drafted','Promotion readiness assessed for 3 reports'],
    external:['AI readiness: medium','Reorg: 2 new arrivals absorbed','Hiring pressure in engineering','Budget freeze Q4','Adjacent team layoffs: morale impact','Policy change: remote work updated','Org restructure timeline Q1 next year'],
  };

  function addKnowledge(bucket,label){
    const key=`${bucket}-${label}`;
    if(added.has(key))return;added.add(key);
    const color=bucketColor[bucket]||'rgba(255,255,255,.1)';
    const items=document.getElementById('kb'+bucket.charAt(0).toUpperCase()+bucket.slice(1));
    if(!items)return;
    const it=document.createElement('div');it.className='kb-item';
    it.style.borderLeftColor=color;
    it.innerHTML=italicize(label);
    items.appendChild(it);
  }

  function animateCount(el,from,to,duration){
    const start=performance.now();
    function tick(now){
      const p=Math.min((now-start)/duration,1);
      const eased=1-(1-p)*(1-p);
      el.textContent=Math.round(from+eased*(to-from));
      if(p<1)requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function popElement(el){
    el.classList.add('pop');
    setTimeout(()=>el.classList.remove('pop'),300);
  }

  let prevTotal=0;
  function updateProgress(month){
    let newTotal=0;
    ['maya','team','talent','external'].forEach(bk=>{
      const monthScale=Math.min(month/12,1);
      const target=Math.round(dpPerMonth[bk]*month*(1+monthScale*.5));
      const prev=dpCounts[bk];
      dpCounts[bk]=Math.min(target,dpMax[bk]);
      newTotal+=dpCounts[bk];
      const pct=Math.min(100,(dpCounts[bk]/dpMax[bk])*100);
      // Update bar
      const bar=document.getElementById('prog'+bk.charAt(0).toUpperCase()+bk.slice(1));
      if(bar)bar.style.width=pct+'%';
      // Animate count number
      const countEl=document.getElementById('count'+bk.charAt(0).toUpperCase()+bk.slice(1));
      if(countEl&&dpCounts[bk]!==prev){
        animateCount(countEl,prev,dpCounts[bk],600);
        popElement(countEl);
      }
    });
    // Total counter
    const totalEl=document.getElementById('totalDP');
    if(totalEl&&newTotal!==prevTotal){
      animateCount(totalEl,prevTotal,newTotal,800);
      popElement(totalEl);
      prevTotal=newTotal;
    }
  }

  /* ═══════════════ COACHING JOURNEY ═══════════════ */
  const CJ_THEMES=[
    {month:1,type:'pull',theme:'Establishing authority',blind:null,change:null},
    {month:2,type:'push',theme:'Goal-setting as coaching vehicle',blind:'Avoidance pattern identified',change:null},
    {month:2,type:'pull',theme:'Delivering difficult feedback',blind:null,change:'Attempted first direct feedback'},
    {month:3,type:'push',theme:'Team dynamics pattern recognition',blind:'Priya-Alex competition surfaced',change:null},
    {month:4,type:'pull',theme:'Processing contradictory feedback',blind:'Too-nice perception gap',change:'Vulnerability as leadership tool'},
    {month:5,type:'push',theme:'Talent advocacy with nuance',blind:null,change:'Distinguished high-potential from high-performer'},
    {month:6,type:'push',theme:'Leading through disruption',blind:'Imposter syndrome acknowledged',change:'Proactive coverage planning'},
    {month:7,type:'pull',theme:'Career conversations (not avoidance)',blind:'Development gap with Jordan',change:'Direct career conversation initiated'},
    {month:8,type:'push',theme:'Convergence leadership',blind:'Using new arrivals to reset dynamics',change:'Expectations set from day one'},
    {month:9,type:'push',theme:'Processing 360 feedback',blind:'Cross-functional perception lag',change:'Growth since April visible in data'},
    {month:10,type:'push',theme:'Leading through uncertainty',blind:null,change:'Leaned on trust instead of smoothing over'},
    {month:11,type:'pull',theme:'Managing someone out',blind:null,change:'Evidence-based exit with compassion'},
    {month:12,type:'push',theme:'Year-end synthesis',blind:null,change:'Reviews from evidence, not memory'},
  ];
  let cjBlinds=0,cjChanges=0;

  function updateCoachingJourney(month){
    const themesEl=document.getElementById('cjThemes');
    const meter=document.getElementById('cjMeterFill');
    const blindsEl=document.getElementById('cjBlinds');
    const changesEl=document.getElementById('cjChanges');
    if(!themesEl)return;

    // Add themes up to this month
    CJ_THEMES.filter(t=>t.month<=month).forEach(t=>{
      const id='cj-'+t.month+'-'+t.type+'-'+t.theme.slice(0,10);
      if(document.getElementById(id))return;
      const el=document.createElement('div');
      el.className='cj-theme';el.id=id;
      el.style.borderLeftColor=t.type==='push'?C.nadia:C.self;
      el.innerHTML=`<span class="cj-type ${t.type}-type">${t.type==='push'?'Nadia initiates':'Maya asks'}</span>${t.theme}`;
      themesEl.appendChild(el);
      if(t.blind){cjBlinds++;const prev=parseInt(blindsEl.textContent);animateCount(blindsEl,prev,cjBlinds,400);popElement(blindsEl)}
      if(t.change){cjChanges++;const prev=parseInt(changesEl.textContent);animateCount(changesEl,prev,cjChanges,400);popElement(changesEl)}
    });

    // Update reactive→proactive meter (early months more reactive, later more proactive)
    const pushCount=CJ_THEMES.filter(t=>t.month<=month&&t.type==='push').length;
    const total=CJ_THEMES.filter(t=>t.month<=month).length;
    const proactivePct=total?Math.round((pushCount/total)*100):10;
    if(meter)meter.style.width=proactivePct+'%';
  }

  function fillBuckets(idx){
    const m=MOMENTS[idx];if(!m||!m.buckets)return;
    Object.entries(m.buckets).forEach(([key,label])=>{
      const bk=bucketMap[key]||key;
      addKnowledge(bk,label);
    });
    // Background knowledge at milestones
    if(m.month>=2){EXTRA_KNOWLEDGE.maya.slice(0,3).forEach(k=>addKnowledge('maya',k))}
    if(m.month>=3){EXTRA_KNOWLEDGE.team.slice(0,4).forEach(k=>addKnowledge('team',k))}
    if(m.month>=5){EXTRA_KNOWLEDGE.maya.slice(3,7).forEach(k=>addKnowledge('maya',k));EXTRA_KNOWLEDGE.team.slice(4,8).forEach(k=>addKnowledge('team',k))}
    if(m.month>=7){EXTRA_KNOWLEDGE.maya.slice(7).forEach(k=>addKnowledge('maya',k));EXTRA_KNOWLEDGE.team.slice(8).forEach(k=>addKnowledge('team',k));EXTRA_KNOWLEDGE.talent.slice(0,4).forEach(k=>addKnowledge('talent',k))}
    if(m.month>=8){EXTRA_KNOWLEDGE.talent.forEach(k=>addKnowledge('talent',k));EXTRA_KNOWLEDGE.external.slice(0,4).forEach(k=>addKnowledge('external',k))}
    if(m.month>=10){EXTRA_KNOWLEDGE.external.forEach(k=>addKnowledge('external',k));EXTRA_KNOWLEDGE.team.forEach(k=>addKnowledge('team',k))}
    // Update progress bars
    updateProgress(m.month);
    // Reveal integrations
    document.querySelectorAll('.integ-hidden').forEach(el=>{
      if(+el.dataset.integMonth<=m.month)el.classList.add('integ-vis');
    });
  }

  function initShowMore(){
    document.querySelectorAll('.kb-more').forEach(btn=>{
      const name=btn.dataset.kbToggle;
      const items=document.getElementById('kb'+name);
      if(!items)return;
      btn.addEventListener('click',()=>{
        const isCollapsed=items.classList.toggle('collapsed');
        btn.textContent=isCollapsed?'+ Show more':'− Show less';
      });
    });
  }

  /* ═══════════════ SCROLL WIRING ═══════════════ */
  function initScroll(){
    const revObs=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('in-view')})},{threshold:.15,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('[data-reveal]').forEach(el=>revObs.observe(el));

    // Scroll-driven sequential reveal — moments appear one at a time as you scroll.
    // Nothing fires from IntersectionObserver on individual moments (that caused the skip).
    const allMoments=[...document.querySelectorAll('.moment')];
    let nextToReveal=0;
    let revealQueued=false;

    function revealNext(){
      if(nextToReveal>=allMoments.length)return;
      const el=allMoments[nextToReveal];
      el.classList.add('vis');
      const idx=+el.dataset.idx, month=+el.dataset.month;
      updateTL(month); fillBuckets(idx);
      const m=MOMENTS[idx];if(m&&m.collabInsight)addCI(m.collabInsight);
      nextToReveal++;
    }

    // Use a scroll listener on the timeline section.
    // Reveal the next moment when user scrolls far enough that it SHOULD be visible.
    const tlSectionEl=document.getElementById('tlSection');
    let started=false;

    function checkReveal(){
      if(!started)return;
      // Reveal any moment whose top is above 80% of the viewport
      const threshold=window.innerHeight*0.82;
      while(nextToReveal<allMoments.length){
        const rect=allMoments[nextToReveal].getBoundingClientRect();
        if(rect.top<threshold){
          revealNext();
        }else{
          break;
        }
      }
    }

    // Start revealing only when the timeline section enters the viewport
    if(tlSectionEl){
      new IntersectionObserver(e=>{
        if(e[0].isIntersecting&&!started){
          started=true;
          // Always begin with January (moment 0) even if further moments are in viewport
          // Reveal just moment 0 first, then let scroll handle the rest
          revealNext();
          // After a beat, check if scroll position warrants more
          setTimeout(checkReveal,400);
        }
      },{threshold:.01}).observe(tlSectionEl);
    }

    window.addEventListener('scroll',()=>{
      if(started&&!revealQueued){
        revealQueued=true;
        requestAnimationFrame(()=>{checkReveal();revealQueued=false});
      }
    },{passive:true});

    let tick=false;
    window.addEventListener('scroll',()=>{if(!tick){requestAnimationFrame(()=>{
      const p=Math.min(100,(scrollY/(document.documentElement.scrollHeight-innerHeight))*100);
      document.getElementById('scrollBar').style.width=p+'%';tick=false;
    });tick=true}},{passive:true});
  }

  function updateTL(month){
    document.getElementById('tlProgress').style.width=((month-.5)/12*100)+'%';
    document.querySelectorAll('.tl-dot').forEach(d=>d.classList.toggle('active',+d.dataset.month<=month));
  }

  /* ═══════════════ NADIA ECOSYSTEM (CI section) ═══════════════ */
  let ciInsights=new Set();
  function addCI(text){ciInsights.add(text)}

  /* ═══════════════ SCENARIO PLAYER ═══════════════ */
  const SCENARIOS=[
    // ── MAYA → NADIA (Pull) ──
    { name:'Framing feedback',
      direction:'pull', // Maya asks Nadia
      prompt:'"How do I best frame this feedback to Priya? She missed the last two deadlines but I don\'t want to damage our relationship."',
      sources:[
        {name:"Priya's collaboration profile",color:C.others,bucket:'team'},
        {name:"Priya's communication preferences",color:C.others,bucket:'team'},
        {name:"What Maya shared about Priya",color:C.others,bucket:'team'},
        {name:"Team workload since reorg",color:C.ext,bucket:'ext'},
        {name:"Q3 capacity constraints",color:C.ext,bucket:'ext'},
        {name:"Priya's last performance review",color:C.talent,bucket:'talent'},
        {name:"February feedback conversation",color:C.talent,bucket:'talent'},
        {name:"Maya's feedback skill growth",color:C.self,bucket:'maya'},
        {name:"Maya's conflict-avoidance pattern",color:C.self,bucket:'maya'},
        {name:"Cross-team project dependencies",color:C.collab,bucket:'collab'},
      ],
      response:'<span class="sc-ref sc-ref-team">Priya processes feedback best with specific examples</span> — she needs to feel heard before she can absorb critique. Open with genuine appreciation, then anchor in observable behaviors.<br><br><span class="sc-ref sc-ref-ext">The team is running above capacity since the reorg</span> — name that context and the feedback feels fair. <span class="sc-ref sc-ref-talent">In her last review, you noted she "overcommits."</span> Frame this around prioritization, not performance.<br><br><span class="sc-ref sc-ref-maya">Since February, you\'ve gotten much better at being direct.</span> Trust that growth. <strong>What do you think Priya would say is the reason? Start from curiosity.</strong>'
    },
    { name:'Calibration prep',
      direction:'pull',
      prompt:'"I have to present my team\'s ratings at calibration next week. How do I make the case for Alex\'s promotion when he doesn\'t have a lot of visibility with senior leadership?"',
      sources:[
        {name:"Alex's collaboration profile",color:C.others,bucket:'team'},
        {name:"Alex's project contributions",color:C.others,bucket:'team'},
        {name:"What Maya shared about Alex",color:C.others,bucket:'team'},
        {name:"Alex's development plan",color:C.talent,bucket:'talent'},
        {name:"Last performance review",color:C.talent,bucket:'talent'},
        {name:"Calibration criteria",color:C.talent,bucket:'talent'},
        {name:"Org promotion cycle norms",color:C.ext,bucket:'ext'},
        {name:"Peer comparison context",color:C.ext,bucket:'ext'},
        {name:"Maya's advocacy patterns",color:C.self,bucket:'maya'},
        {name:"Maya's exec communication style",color:C.self,bucket:'maya'},
        {name:"Alex-Priya dynamic resolution",color:C.collab,bucket:'collab'},
      ],
      response:'<span class="sc-ref sc-ref-team">Alex\'s collaboration profile shows he\'s direct and structured</span> — he won\'t advocate for himself. That\'s your job in this room.<br><br><span class="sc-ref sc-ref-talent">His development plan shows consistent growth</span> and <span class="sc-ref sc-ref-talent">two quarters of sustained high performance</span>. But <span class="sc-ref sc-ref-ext">your org weights visibility in promotions</span> — tell the story of impact, not just outcomes.<br><br><span class="sc-ref sc-ref-collab">Powerful angle: when the Priya-Alex dynamic resolved, Alex shifted from competing for credit to owning delivery.</span> That\'s senior-level behavior. <span class="sc-ref sc-ref-maya">I\'ve noticed you undersell your team in exec settings</span> — be his champion here.<br><br><strong>If you had 90 seconds, what\'s the single story you\'d tell?</strong>'
    },
    // ── NADIA → MAYA (Push — proactive, shown as email) ──
    { name:'Reorg onboarding',
      direction:'push', // Nadia reaches out to Maya
      nadiaSubject:'Preparing for Tomás and Kai — some thoughts',
      nadiaPreview:'I noticed you added them to your weekly sync. Given everything your team is navigating, I wanted to share some context that might help...',
      sources:[
        {name:"Tomás collaboration profile",color:C.others,bucket:'team'},
        {name:"Kai collaboration profile",color:C.others,bucket:'team'},
        {name:"Tomás communication preferences",color:C.others,bucket:'team'},
        {name:"Kai's previous team context",color:C.others,bucket:'team'},
        {name:"Reorg announcement context",color:C.ext,bucket:'ext'},
        {name:"AI mandate progress",color:C.ext,bucket:'ext'},
        {name:"Team culture differences",color:C.ext,bucket:'ext'},
        {name:"Priya-Alex dynamic history",color:C.collab,bucket:'collab'},
        {name:"Team social structure",color:C.collab,bucket:'collab'},
        {name:"Sam's coverage gap",color:C.collab,bucket:'collab'},
        {name:"Maya's January onboarding reflection",color:C.self,bucket:'maya'},
        {name:"Maya's directness growth",color:C.self,bucket:'maya'},
        {name:"Mid-year review context",color:C.talent,bucket:'talent'},
      ],
      response:'<span class="sc-ref sc-ref-team">Tomás builds trust slowly</span> — he needs consistency. <span class="sc-ref sc-ref-team">Kai is independent and direct</span> — she\'ll read the room instantly. Very different onboarding approaches needed.<br><br><span class="sc-ref sc-ref-collab">The Priya-Alex dynamic could be resolved here</span> — pairing Tomás with Priya and Kai with Alex shifts the social structure enough to break entrenched patterns.<br><br><span class="sc-ref sc-ref-ext">They didn\'t choose this move</span>, but <span class="sc-ref sc-ref-ext">their team was ahead on AI</span> — position them as bringing capabilities. <span class="sc-ref sc-ref-maya">In January you wished you\'d set clearer expectations.</span> This time, you get to do it right.<br><br><strong>What would it mean to walk into that meeting as the leader you\'ve become?</strong>'
    },
    { name:'Goal setting nudge',
      direction:'push',
      nadiaSubject:'Goal setting is due in 10 days',
      nadiaPreview:'I know this might feel like just another HR deadline, but based on what you\'ve shared, there\'s an opportunity here...',
      sources:[
        {name:"Jordan's collaboration profile",color:C.others,bucket:'team'},
        {name:"What Maya shared about Jordan",color:C.others,bucket:'team'},
        {name:"Team role descriptions",color:C.others,bucket:'team'},
        {name:"Last year's goal outcomes",color:C.talent,bucket:'talent'},
        {name:"Org Q1 priorities",color:C.talent,bucket:'talent'},
        {name:"Goal-setting best practices",color:C.talent,bucket:'talent'},
        {name:"Maya's avoidance pattern",color:C.self,bucket:'maya'},
        {name:"Maya's January coaching",color:C.self,bucket:'maya'},
        {name:"Company strategy update",color:C.ext,bucket:'ext'},
        {name:"Department OKRs",color:C.ext,bucket:'ext'},
        {name:"Team collaboration patterns",color:C.collab,bucket:'collab'},
      ],
      response:'<span class="sc-ref sc-ref-team">You mentioned wanting to talk directly with Jordan</span> but it hasn\'t happened yet. <span class="sc-ref sc-ref-maya">When something feels uncomfortable, you tend to defer it</span> — let\'s use this deadline as the vehicle instead.<br><br><span class="sc-ref sc-ref-talent">Goal setting is a natural opening</span> — set ambitious goals together and it signals "I\'m investing in you." <span class="sc-ref sc-ref-team">That\'s the message Jordan needs</span> right now.<br><br><span class="sc-ref sc-ref-talent">I\'ve drafted personalized frameworks</span> aligned with <span class="sc-ref sc-ref-ext">the org\'s Q1 priorities</span>. Start with Jordan\'s — hardest first, rest will follow.<br><br><strong>What feels most difficult about this conversation? Let\'s name it.</strong>'
    },
  ];

  let ecoFlowActive=true;
  let setEcoFlow=null;

  function initScenarioPlayer(){
    const bitsContainer=document.getElementById('scBits');
    const tabs=document.querySelectorAll('.sc-tab:not(.sc-tab-close)');
    const closeBtn=document.getElementById('scClose');
    const nadiaOrb=document.querySelector('.eco-nadia-orb');
    const ecoSection=document.querySelector('.nadia-eco');
    if(!bitsContainer)return;

    const bitPos={team:{x:28,y:62},ext:{x:10,y:16},talent:{x:10,y:40},maya:{x:78,y:52},collab:{x:34,y:76}};
    let animTimers=[];

    function clearScenario(e){
      if(e)e.preventDefault();
      animTimers.forEach(t=>clearTimeout(t));animTimers=[];
      bitsContainer.innerHTML='';
      if(nadiaOrb){nadiaOrb.classList.remove('thinking');nadiaOrb.classList.remove('glowing')}
      tabs.forEach(t=>t.classList.remove('active'));
      closeBtn.style.display='none';
      if(setEcoFlow)setEcoFlow(true);
    }

    function spawnParticles(color,fromX,fromY,count){
      for(let i=0;i<count;i++){
        animTimers.push(setTimeout(()=>{
          const p=document.createElement('div');
          p.className='sc-particle';
          p.style.background=color;
          p.style.boxShadow='0 0 8px '+color;
          p.style.width=(4+Math.random()*4)+'px';
          p.style.height=p.style.width;
          const jx=(Math.random()-.5)*8,jy=(Math.random()-.5)*8;
          p.style.left=(fromX+jx)+'%';
          p.style.top=(fromY+jy)+'%';
          bitsContainer.appendChild(p);
          requestAnimationFrame(()=>{p.classList.add('fly');p.style.left='50%';p.style.top='35%'});
          setTimeout(()=>p.remove(),1200);
        },i*120));
      }
    }

    function spawnSparkles(){
      for(let i=0;i<20;i++){
        animTimers.push(setTimeout(()=>{
          const s=document.createElement('div');
          s.className='sc-sparkle';
          const angle=Math.random()*Math.PI*2;
          const dist=30+Math.random()*40;
          s.style.left='calc(50% + '+(Math.cos(angle)*dist)+'px)';
          s.style.top='calc(35% + '+(Math.sin(angle)*dist)+'px)';
          bitsContainer.appendChild(s);
          setTimeout(()=>s.remove(),800);
        },i*50));
      }
    }

    function runScenario(idx){
      clearScenario();
      const sc=SCENARIOS[idx];
      tabs.forEach(t=>t.classList.toggle('active',+t.dataset.sc===idx));
      closeBtn.style.display='';
      if(setEcoFlow)setEcoFlow(false);

      // Phase 1: Prompt — speech bubble (pull) or email card (push)
      if(sc.direction==='pull'){
        const promptEl=document.createElement('div');
        promptEl.className='sc-prompt';
        promptEl.textContent=sc.prompt;
        bitsContainer.appendChild(promptEl);
        animTimers.push(setTimeout(()=>promptEl.classList.add('vis'),200));
      }else{
        const emailEl=document.createElement('div');
        emailEl.className='sc-email';
        emailEl.innerHTML=`<div class="sc-email-from">Nadia</div><div class="sc-email-subj">${sc.nadiaSubject}</div><div class="sc-email-preview">${sc.nadiaPreview}</div>`;
        bitsContainer.appendChild(emailEl);
        animTimers.push(setTimeout(()=>emailEl.classList.add('vis'),200));
      }

      // Phase 2: Sources appear then fly to center
      const allBits=[];
      const bucketCounts={};
      const sourceStart=1000;
      sc.sources.forEach((s,i)=>{
        const bk=s.bucket;
        if(!bucketCounts[bk])bucketCounts[bk]=0;
        const pos=bitPos[bk]||bitPos.team;
        const offset=bucketCounts[bk]*22;
        bucketCounts[bk]++;
        const delay=sourceStart+i*250;

        animTimers.push(setTimeout(()=>{
          spawnParticles(s.color,pos.x,pos.y+offset/5,3+Math.floor(Math.random()*3));
          const bit=document.createElement('div');
          bit.className='sc-bit';
          bit.style.left=pos.x+'%';
          bit.style.top='calc('+pos.y+'% + '+offset+'px)';
          bit.style.borderColor=s.color;
          bit.style.background=s.color+'12';
          bit.textContent=s.name;
          bitsContainer.appendChild(bit);
          setTimeout(()=>bit.classList.add('vis'),30);
          allBits.push(bit);
        },delay));
      });

      // Phase 3: ALL bits fly to Nadia center + convergence burst
      const allDone=sourceStart+sc.sources.length*250+500;
      animTimers.push(setTimeout(()=>{
        // Fly all info bits to center
        allBits.forEach((bit,i)=>{
          setTimeout(()=>{
            bit.style.transition='all .7s cubic-bezier(.4,0,.2,1)';
            bit.style.left='48%';
            bit.style.top='33%';
            bit.style.opacity='0';
            bit.style.transform='scale(.4)';
            setTimeout(()=>bit.remove(),800);
          },i*60);
        });
        // Extra particle burst from each bucket
        Object.keys(bitPos).forEach(bk=>{
          const p=bitPos[bk];
          const col=bk==='ext'?C.ext:bk==='talent'?C.talent:bk==='maya'?C.self:bk==='collab'?C.collab:C.others;
          spawnParticles(col,p.x,p.y,6);
        });
        if(nadiaOrb)nadiaOrb.classList.add('thinking');
      },allDone));

      // Phase 3b: Sparkles + glow
      animTimers.push(setTimeout(()=>{
        spawnSparkles();
        if(nadiaOrb){nadiaOrb.classList.remove('thinking');nadiaOrb.classList.add('glowing')}
      },allDone+1400));

      // Phase 4: Response appears with working close button
      animTimers.push(setTimeout(()=>{
        if(nadiaOrb)nadiaOrb.classList.remove('glowing');
        const resp=document.createElement('div');
        resp.className='sc-nadia-response';
        resp.innerHTML='<button class="sc-x-btn" title="Close">✕</button><span class="n-icon">✦</span><div class="sc-resp-text">'+sc.response+'</div>';
        bitsContainer.appendChild(resp);
        resp.querySelector('.sc-x-btn').addEventListener('click',()=>clearScenario());
        requestAnimationFrame(()=>resp.classList.add('vis'));
      },allDone+2200));
    }

    tabs.forEach(t=>t.addEventListener('click',()=>runScenario(+t.dataset.sc)));
    closeBtn.addEventListener('click',clearScenario);
  }

  function initEcosystem(){
    const cv=document.getElementById('ecoCanvas');if(!cv)return;
    const ctx=cv.getContext('2d');const dpr=devicePixelRatio||1;
    function resize(){const r=cv.parentElement.getBoundingClientRect();cv.width=r.width*dpr;cv.height=r.height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);cv._w=r.width;cv._h=r.height}
    resize();window.addEventListener('resize',resize);

    // Animated particles flowing between elements → Nadia
    const flowParticles=[];
    let active=false;
    let flowPaused=false;

    // Expose pause control for scenario player
    setEcoFlow=function(on){
      flowPaused=!on;
      if(!on) flowParticles.length=0; // clear existing particles when paused
    };

    // Positions matching CSS layout
    const sources=[
      {x:.14,y:.12,color:C.ext},     // External Forces (top-left)
      {x:.14,y:.38,color:C.talent},  // Talent Calendar
    ];
    const nadiaPos={x:.50,y:.38};  // Nadia center
    const teamPos={x:.50,y:.80};   // Team below Nadia
    const mayaPos={x:.90,y:.42};   // Maya right
    const orgIPos={x:.50,y:.08};   // Org Intelligence above Nadia

    function spawnFlow(){
      if(flowParticles.length>60||!active)return;
      const r=Math.random();
      let from,to,color;
      if(r<.25){
        // Sources → Nadia (ext/talent)
        const s=sources[Math.random()*sources.length|0];
        from={x:s.x,y:s.y};to=nadiaPos;color=s.color;
      }else if(r<.45){
        // Team → Nadia (green CI)
        from=teamPos;to=nadiaPos;color=C.collab;
      }else if(r<.60){
        // Team → Maya (green CI)
        from=teamPos;to=mayaPos;color=C.collab;
      }else if(r<.70){
        // Maya → Team (green CI back)
        from=mayaPos;to=teamPos;color=C.collab;
      }else if(r<.75){
        // Nadia → Maya (pink coaching)
        from=nadiaPos;to=mayaPos;color=C.nadia;
      }else if(r<.82){
        // Nadia → Org Intelligence (purple, feeds up)
        from=nadiaPos;to=orgIPos;color=C.others;
      }else if(r<.89){
        // Nadia → Talent Moments (pink, feeds back)
        from=nadiaPos;to={x:sources[1].x,y:sources[1].y};color=C.talent;
      }else{
        // Maya → Nadia (blue asks)
        from=mayaPos;to=nadiaPos;color=C.self;
      }
      const mx=(from.x+to.x)/2,my=(from.y+to.y)/2;
      const sp=.012+Math.random()*.02,ca=Math.random()*Math.PI*2;
      flowParticles.push({from,to,cp:{x:mx+Math.cos(ca)*.05,y:my+Math.sin(ca)*.05},p:0,s:sp,color,sz:1.5+Math.random()*1.5});
    }

    function draw(){
      const w=cv._w||900,h=cv._h||500;
      ctx.clearRect(0,0,w,h);
      if(!active){requestAnimationFrame(draw);return}

      // Spawn
      if(!flowPaused&&Math.random()>.6)spawnFlow();

      // Draw flow particles
      for(let i=flowParticles.length-1;i>=0;i--){
        const p=flowParticles[i];p.p+=p.s;
        if(p.p>=1){flowParticles.splice(i,1);continue}
        const t=p.p;
        const x=((1-t)*(1-t)*p.from.x+2*(1-t)*t*p.cp.x+t*t*p.to.x)*w;
        const y=((1-t)*(1-t)*p.from.y+2*(1-t)*t*p.cp.y+t*t*p.to.y)*h;
        let op=1;
        if(t<.1)op=t*10;else if(t>.85)op=(1-t)/.15;
        ctx.globalAlpha=op*.5;
        ctx.beginPath();ctx.arc(x,y,p.sz,0,Math.PI*2);
        ctx.fillStyle=p.color;ctx.shadowColor=p.color;ctx.shadowBlur=4;ctx.fill();
        ctx.shadowBlur=0;
      }

      // Faint lines: sources → Nadia
      ctx.globalAlpha=.05;ctx.lineWidth=1;ctx.strokeStyle='#fff';
      sources.forEach(s=>{ctx.beginPath();ctx.moveTo(s.x*w,s.y*h);ctx.lineTo(nadiaPos.x*w,nadiaPos.y*h);ctx.stroke()});
      // Green CI: team ↔ Nadia, team ↔ Maya
      ctx.strokeStyle=C.collab;ctx.globalAlpha=.1;ctx.lineWidth=1.5;
      ctx.beginPath();ctx.moveTo(teamPos.x*w,teamPos.y*h);ctx.lineTo(nadiaPos.x*w,nadiaPos.y*h);ctx.stroke();
      ctx.beginPath();ctx.moveTo(teamPos.x*w,teamPos.y*h);ctx.lineTo(mayaPos.x*w,mayaPos.y*h);ctx.stroke();
      // Nadia → Org Intelligence
      ctx.strokeStyle=C.others;ctx.globalAlpha=.1;ctx.lineWidth=1.5;
      ctx.beginPath();ctx.moveTo(nadiaPos.x*w,nadiaPos.y*h);ctx.lineTo(orgIPos.x*w,orgIPos.y*h);ctx.stroke();
      // Nadia ↔ Talent Moments (bidirectional)
      ctx.strokeStyle=C.talent;ctx.globalAlpha=.08;ctx.lineWidth=1;
      ctx.beginPath();ctx.moveTo(nadiaPos.x*w,nadiaPos.y*h);ctx.lineTo(sources[1].x*w,sources[1].y*h);ctx.stroke();
      // Nadia → Maya strong
      ctx.globalAlpha=.15;ctx.strokeStyle=C.nadia;ctx.lineWidth=2;
      ctx.beginPath();ctx.moveTo(nadiaPos.x*w,nadiaPos.y*h);ctx.lineTo(mayaPos.x*w,mayaPos.y*h);ctx.stroke();

      ctx.globalAlpha=1;
      requestAnimationFrame(draw);
    }
    draw();

    // Trigger on scroll
    const section=document.getElementById('ciSection');
    const els=['ecoExt','ecoTalent','ecoOrgI','ecoNadia','ecoTeam','ecoMaya'];
    new IntersectionObserver(e=>{
      if(e[0].isIntersecting&&!active){
        active=true;
        els.forEach((id,i)=>{
          const el=document.getElementById(id);
          if(el)setTimeout(()=>el.classList.add('vis'),200+i*200);
        });
      }
    },{threshold:.15}).observe(section);
  }

  /* ═══════════════ (systems diagram removed) ═══════════════ */
  function initSystems_REMOVED(){
    const container=document.getElementById('sysNodes');
    const cv=document.getElementById('sysCanvas');
    const nadiaEl=document.getElementById('sysNadia');
    if(!cv||!container)return;
    const ctx=cv.getContext('2d');const dpr=devicePixelRatio||1;
    function resize(){const r=cv.parentElement.getBoundingClientRect();cv.width=r.width*dpr;cv.height=r.height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);cv._w=r.width;cv._h=r.height}
    resize();window.addEventListener('resize',resize);

    // Maya at center, others around her
    const nodes=[
      {id:'self',label:"Maya",color:C.self,x:50,y:50},
      {id:'others',label:"Maya's Team",color:C.others,x:20,y:30},
      {id:'talent',label:'Talent Calendar',color:C.talent,x:80,y:25},
      {id:'ext',label:'External Forces',color:C.ext,x:82,y:72},
      {id:'collab',label:'Collab Intelligence',color:C.collab,x:22,y:75},
    ];
    nodes.forEach(nd=>{
      const el=document.createElement('div');el.className='sys-node';el.dataset.id=nd.id;
      el.style.left=nd.x+'%';el.style.top=nd.y+'%';
      const size=nd.id==='self'?56:48;
      el.innerHTML=`<div class="sys-node-circle" style="background:${nd.color};box-shadow:0 0 16px ${nd.color}44;width:${size}px;height:${size}px"></div><div class="sys-node-name">${nd.label}</div>`;
      container.appendChild(el);
    });

    // Position Nadia near Maya (slightly right)
    nadiaEl.style.left='60%';nadiaEl.style.top='50%';

    let mode='before';

    function drawConnections(){
      const w=cv._w,h=cv._h;ctx.clearRect(0,0,w,h);
      const pos={};nodes.forEach(n=>{pos[n.id]={x:n.x/100*w,y:n.y/100*h}});

      if(mode==='before'){
        // Disconnected: faint dotted lines between some, missing lines for others
        ctx.setLineDash([4,6]);ctx.lineWidth=1;
        // Some weak connections
        ctx.globalAlpha=.15;
        ctx.strokeStyle='#666';
        ctx.beginPath();ctx.moveTo(pos.self.x,pos.self.y);ctx.lineTo(pos.others.x,pos.others.y);ctx.stroke();
        ctx.beginPath();ctx.moveTo(pos.self.x,pos.self.y);ctx.lineTo(pos.talent.x,pos.talent.y);ctx.stroke();
        ctx.globalAlpha=.08;
        ctx.beginPath();ctx.moveTo(pos.others.x,pos.others.y);ctx.lineTo(pos.talent.x,pos.talent.y);ctx.stroke();
        // External pressing on everything
        ctx.globalAlpha=.1;ctx.strokeStyle=C.ext;
        ['self','others','talent'].forEach(k=>{ctx.beginPath();ctx.moveTo(pos.ext.x,pos.ext.y);ctx.lineTo(pos[k].x,pos[k].y);ctx.stroke()});
        // Collab totally disconnected
        ctx.globalAlpha=.05;ctx.strokeStyle='#444';
        ctx.beginPath();ctx.moveTo(pos.collab.x,pos.collab.y);ctx.lineTo(pos.self.x,pos.self.y);ctx.stroke();
        // X mark on collab→talent
        const mx=(pos.collab.x+pos.talent.x)/2,my=(pos.collab.y+pos.talent.y)/2;
        ctx.setLineDash([]);ctx.globalAlpha=.4;ctx.strokeStyle='#EF4444';ctx.lineWidth=2;
        ctx.beginPath();ctx.moveTo(mx-6,my-6);ctx.lineTo(mx+6,my+6);ctx.stroke();
        ctx.beginPath();ctx.moveTo(mx+6,my-6);ctx.lineTo(mx-6,my+6);ctx.stroke();
        ctx.setLineDash([]);ctx.globalAlpha=1;
      } else {
        // Everything connected through Nadia
        const nx=60/100*w,ny=50/100*h;
        ctx.setLineDash([]);ctx.lineWidth=2;ctx.strokeStyle=C.nadia;ctx.shadowColor=C.nadia;ctx.shadowBlur=6;ctx.globalAlpha=.55;
        nodes.forEach(n=>{
          if(n.id==='self')return; // Maya IS at center, Nadia is next to her
          ctx.beginPath();ctx.moveTo(pos[n.id].x,pos[n.id].y);ctx.lineTo(nx,ny);ctx.stroke();
        });
        // Strong Maya ↔ Nadia connection
        ctx.globalAlpha=.8;ctx.lineWidth=3;
        ctx.beginPath();ctx.moveTo(pos.self.x,pos.self.y);ctx.lineTo(nx,ny);ctx.stroke();
        ctx.shadowBlur=0;ctx.globalAlpha=1;
      }
    }

    const toggleBtns=document.querySelectorAll('.sys-btn');
    const stateBefore=document.getElementById('sysStateBefore');
    const stateAfter=document.getElementById('sysStateAfter');

    function setMode(m){
      mode=m;
      toggleBtns.forEach(b=>b.classList.toggle('active',b.dataset.mode===m));
      nadiaEl.classList.toggle('vis',m==='after');
      stateBefore.classList.toggle('hidden',m!=='before');
      stateAfter.classList.toggle('hidden',m!=='after');
      drawConnections();
      if(m==='after') stateAfter.querySelectorAll('[data-reveal]').forEach((el,i)=>setTimeout(()=>el.classList.add('in-view'),200+i*300));
    }

    toggleBtns.forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));

    const diag=document.getElementById('sysDiagram');
    new IntersectionObserver(e=>{if(e[0].isIntersecting){
      container.querySelectorAll('.sys-node').forEach((n,i)=>setTimeout(()=>n.classList.add('vis'),i*150));
      drawConnections();
    }},{threshold:.15}).observe(diag);
    window.addEventListener('resize',drawConnections);
  }

  /* ═══════════════ SENTIMENT CHART ═══════════════ */
  function initSentimentChart(){
    const cv=document.getElementById('sentimentChart');if(!cv)return;
    const ctx=cv.getContext('2d');const dpr=devicePixelRatio||1;
    const rect=cv.parentElement.getBoundingClientRect();
    cv.width=rect.width*dpr;cv.height=rect.height*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const w=rect.width,h=rect.height;
    const data=[4.2,3.8,2.1,1.2,-0.8,-0.4,1.8,3.5,2.7,3.0,3.4,3.2];
    const min=-2,max=5,range=max-min;
    const pad={l:30,r:10,t:10,b:24};
    const pw=w-pad.l-pad.r,ph=h-pad.t-pad.b;

    // Grid
    ctx.strokeStyle='#e5e7eb';ctx.lineWidth=.5;
    for(let v=0;v<=range;v+=2){
      const y=pad.t+ph-(v/range)*ph;
      ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(w-pad.r,y);ctx.stroke();
      ctx.fillStyle='#9ca3af';ctx.font='9px "Space Mono"';ctx.textAlign='right';
      ctx.fillText((min+v).toFixed(0),pad.l-4,y+3);
    }

    // Area fill
    const pts=data.map((v,i)=>({x:pad.l+(i/(data.length-1))*pw,y:pad.t+ph-((v-min)/range)*ph}));
    ctx.beginPath();ctx.moveTo(pts[0].x,h-pad.b);
    pts.forEach(p=>ctx.lineTo(p.x,p.y));
    ctx.lineTo(pts[pts.length-1].x,h-pad.b);ctx.closePath();
    const grad=ctx.createLinearGradient(0,pad.t,0,h-pad.b);
    grad.addColorStop(0,'rgba(16,185,129,.15)');grad.addColorStop(1,'rgba(16,185,129,.01)');
    ctx.fillStyle=grad;ctx.fill();

    // Line
    ctx.beginPath();pts.forEach((p,i)=>{if(i===0)ctx.moveTo(p.x,p.y);else ctx.lineTo(p.x,p.y)});
    ctx.strokeStyle='#10B981';ctx.lineWidth=2;ctx.stroke();

    // Dots
    pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,3,0,Math.PI*2);ctx.fillStyle='#10B981';ctx.fill()});

    // Month labels
    const months=['Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];
    ctx.fillStyle='#9ca3af';ctx.font='8px "Space Mono"';ctx.textAlign='center';
    months.forEach((m,i)=>{ctx.fillText(m,pad.l+(i/(months.length-1))*pw,h-4)});

    // Annotations
    const annotations=[{i:4,text:'Reorg'},{i:6,text:'Coaching spike'},{i:8,text:'360 pilot'}];
    ctx.fillStyle='#6b7280';ctx.font='8px "DM Sans"';
    annotations.forEach(a=>{
      const p=pts[a.i];
      ctx.fillText(a.text,p.x,p.y-10);
    });
  }

  /* ═══════════════ STAT COUNTERS ═══════════════ */
  function initStats(){
    const obs=new IntersectionObserver(e=>{e.forEach(en=>{if(!en.isIntersecting)return;
      const el=en.target,target=+el.dataset.count,dur=1000,start=performance.now();
      function t(now){const p=Math.min((now-start)/dur,1);el.textContent=Math.round((1-(1-p)*(1-p))*target);if(p<1)requestAnimationFrame(t)}
      requestAnimationFrame(t);obs.unobserve(el);
    })},{threshold:.5});
    document.querySelectorAll('.c-num[data-count]').forEach(el=>obs.observe(el));
  }

  /* ═══════════════ INIT ═══════════════ */
  function init(){
    const orgMap=new OrgMap(document.getElementById('orgCanvas'));orgMap.tick();
    initOpening(orgMap);buildTimeline();initScroll();initShowMore();
    initEcosystem();initScenarioPlayer();initSentimentChart();initStats();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
