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
      isKeyMoment:true,keyNum:1,
      keyTitle:'Maya\'s Profile & Team',keySub:'Nadia already knows how Maya leads.',
      keyContext:'Maya was just promoted from IC to manager. Before she even opens Nadia, a rich profile has been built from coaching conversations, HRIS data, and collaboration patterns — for her and every person on her team.',
      title:"First day as manager",
      brief:'See Maya\'s collaboration profile, her traits, and how Nadia understands each of her 8 direct reports.',
      refs:['Maya\'s profile','Org chart','Team history'],
      learns:['Maya\'s leadership style','Peer-to-manager dynamics'],
      behavior:'Have a direct, early conversation with Jordan instead of letting tension build',
      nadia:["Maya, I can see this is a big transition. You have 8 direct reports — several of whom were your peers until last week. Based on your profile, you tend toward consensus-building and relationship preservation. Those are real strengths, but in the first two weeks of a new leadership role, they can read as indecisiveness if you don't pair them with clarity.","There's one relationship I want to flag immediately: Jordan. They were also up for this role, and based on the team dynamics I'm seeing, that tension is already present even if no one's naming it. The longer it stays unspoken, the harder it becomes. I'd recommend a direct, one-on-one conversation within the next week — not to address the competition, but to signal that you see Jordan's value and want to invest in their growth.","I can help you prepare talking points for that conversation and build a 30-day leadership plan that establishes your credibility without alienating the people who used to be your peers."],
      buckets:{maya:'Peer-to-manager identity shift',team:'Jordan tension flagged from day one'},
    },
    { month:1,name:'January',type:'push',layers:['self'],
      isKeyMoment:true,keyNum:2,
      keyTitle:'The Journey',keySub:'Nadia builds Maya a personalized development path.',
      keyContext:'Before Maya has even settled into her first week, Nadia sends a Teams message with a link to a curated journey — built around Maya\'s specific transition from IC to manager, her collaboration profile, and the team dynamics she\'s inheriting.',
      title:"Nadia sends Maya her first journey",
      brief:'A Teams message from Nadia links to a personalized coaching journey designed for Maya\'s transition into management — with milestones, resources, and coaching prompts tailored to her situation.',
      refs:['Maya\'s profile','Company onboarding framework','Team context'],
      learns:['Maya\'s development priorities','New manager transition patterns'],
      behavior:'Follow a structured yet personalized development path from day one',
      nadia:["Maya, I\'ve put together a coaching journey for your first 90 days as a manager. It\'s built around three things: what I know about your strengths and growth areas, your company\'s expectations for new managers, and the specific dynamics of the team you\'re inheriting. This isn\'t generic — it\'s yours."],
      buckets:{maya:'Personalized journey activated'},
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
      isKeyMoment:true,keyNum:3,
      keyTitle:'The Redirect',keySub:'What you\'re about to do won\'t help her.',
      keyContext:'Priya missed a client deadline. Maya spent 40 minutes writing a feedback message. She thinks it\'s good — but it\'s wrapped in so much softening language that the actual feedback is invisible.',
      title:"Feedback to Priya",
      brief:'Maya brings her draft to Nadia. Nadia pushes back — drawing on Priya\'s collaboration profile, Maya\'s three-month pattern of softening feedback, and the org\'s own stated value of "Honest Directness."',
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
      isKeyMoment:true,keyNum:4,
      keyTitle:'The Convergence',keySub:'She saw it before Maya did.',
      keyContext:'A department is dissolved. Kai is being absorbed onto Maya\'s team — someone who didn\'t choose to be here. Meanwhile: Sam is on leave, Jordan\'s situation is still developing, the Priya-Alex dynamic is fragile, and the AI mandate is live.',
      title:"Everything converges",
      brief:'Maya adds Kai to her calendar. Nadia sees a routine change and immediately understands its full significance — because she\'s been carrying the context of Maya\'s entire year across every layer.',
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
      title:"Difficult conversation with Marcus",
      brief:'Maya needs to have a direct conversation about role fit and next steps.',
      refs:['Feedback history','Marcus profile','Maya\'s coaching trajectory'],
      learns:['How Maya navigates difficult conversations','Growth in directness'],
      behavior:'Have a direct, compassionate conversation about role alignment',
      nadia:["Maya, I know this conversation feels heavy. Let me help you think through it. Based on what you've shared, there's a clear pattern: Marcus has received specific feedback in three separate conversations, with concrete expectations set each time. Progress has been limited. This isn't a surprise to either of you.","The coaching opportunity here is about role alignment — helping Marcus see where his strengths are strongest and where this particular role may not be the right fit. That's a different conversation than a performance critique. Lead with respect for his contributions, be specific about the gap, and be open about what the options look like.","You're ready for this in a way you weren't in January. Every hard conversation you've had this year has built the skill you need right now."],
      buckets:{team:'Difficult conversation navigated with directness'},
    },
    { month:12,name:'December',type:'push',layers:['talent','others'],isTalent:true,
      isKeyMoment:true,keyNum:5,
      keyTitle:'Performance Management',keySub:'You don\'t have to remember everything. I did.',
      keyContext:'It\'s December. Performance review season. Maya has 8 reviews due in two weeks. She hasn\'t kept a running notes doc — but Nadia has been building the evidence all year.',
      title:"Year-end reviews",
      brief:'Nadia has already drafted 75% of each review from a full year of coaching context. She asks Maya for the last 25% — the judgment calls only a manager can make. Reviews push directly to the HRIS.',
      refs:['Full year of coaching context','Every interaction across all 8 reports','All talent milestones','Goal trajectories','Collaboration intelligence map'],
      learns:['Complete talent picture for each person','Year-long growth arcs','Team-level patterns'],
      behavior:'Write reviews from a full year of evidence — give every person the review they deserve',
      nadia:["Maya, this is the moment where everything comes together. Year-end reviews for 8 people — promotions, comp conversations, and developmental feedback all due in the same window.","Here's what's different for you this December: you're not starting from scratch, and you're not relying on what you can remember from the last two months. I have the full context for every person on your team — every coaching conversation, every piece of feedback given and received, every goal set and tracked, every dynamic observed.","For Jordan: the career conversation in July and the sustained investment since — document that arc. For Priya and Alex: the competition that could have derailed them became a growth opportunity when you restructured ownership. For Marcus: the role-fit conversation was handled with directness and care. For the new arrivals: their integration during a reorg is already a data point on your leadership.","Every review I'm helping you draft is anchored in behavioral evidence, not impressions. That's what your team deserves, and it's what makes these conversations fair and genuinely developmental."],
      buckets:{talent:'Year-end reviews from full context',team:'Every report fully understood'},
      collabInsight:'Full collaboration map complete',
    },
    // ── Filler conversations (headline-only, show volume) ──
    {month:1,name:'January',title:'1:1 prep with Jordan',brief:'Nadia helps Maya prepare talking points for her first 1:1.',buckets:{team:'Jordan 1:1 context'}},
    {month:1,name:'January',title:'Welcome message drafting',brief:'Maya asks Nadia to help craft her first team-wide message.',buckets:{maya:'Communication style captured'}},
    {month:1,name:'January',title:'Calendar review',brief:'Nadia flags that Maya has no 1:1s scheduled in week one.',buckets:{maya:'Calendar patterns noted'}},
    {month:2,name:'February',title:'Slack tone check',brief:'Maya asks Nadia to review a Slack message before sending.',buckets:{maya:'Written communication coaching'}},
    {month:2,name:'February',title:'Skip-level prep',brief:'Maya prepares for her first skip-level with the VP.',buckets:{maya:'Upward communication practice'}},
    {month:2,name:'February',title:'Team meeting facilitation',brief:'Nadia coaches Maya on running a more inclusive team meeting.',buckets:{team:'Meeting dynamics observed'}},
    {month:3,name:'March',title:'Delegation coaching',brief:'Maya is doing too much herself — Nadia helps her delegate.',buckets:{maya:'Delegation patterns identified'}},
    {month:3,name:'March',title:'Cross-functional friction',brief:'Tension with the Product team on project timelines.',buckets:{team:'Cross-team dynamics tracked'}},
    {month:3,name:'March',title:'Lin career conversation',brief:'Lin asks about promotion timeline. Maya prepares with Nadia.',buckets:{team:'Lin expectations captured'}},
    {month:3,name:'March',title:'Email coaching: stakeholder update',brief:'Nadia helps Maya rewrite a project update for leadership.',buckets:{maya:'Executive writing improved'}},
    {month:4,name:'April',title:'Sam workload discussion',brief:'Sam seems stretched. Maya thinks through redistribution.',buckets:{team:'Sam capacity flagged'}},
    {month:4,name:'April',title:'Conflict between Alex and Priya',brief:'A project handoff goes sideways. Nadia helps Maya mediate.',buckets:{team:'Alex-Priya dynamic deepening'}},
    {month:4,name:'April',title:'Weekly reflection',brief:'Maya reflects on what went well and what she\'d change.',buckets:{maya:'Self-awareness building'}},
    {month:5,name:'May',title:'Jordan project ownership',brief:'Jordan takes the lead on Q2 initiative. Maya sets expectations.',buckets:{team:'Jordan development investment'}},
    {month:5,name:'May',title:'Feedback from a peer',brief:'A cross-functional partner gives Maya feedback. She processes it.',buckets:{maya:'External feedback integrated'}},
    {month:5,name:'May',title:'Team morale check-in',brief:'Nadia prompts Maya to pulse-check the team after a tough sprint.',buckets:{team:'Team sentiment captured'}},
    {month:6,name:'June',title:'AI mandate kickoff',brief:'Maya figures out how to introduce the AI initiative to her team.',buckets:{external:'AI mandate response planned'}},
    {month:6,name:'June',title:'Sam leave planning',brief:'Sam\'s parental leave coverage needs detailed planning.',buckets:{team:'Coverage plan created'}},
    {month:6,name:'June',title:'1:1 with Marcus',brief:'Marcus seems disengaged. Maya explores what\'s going on.',buckets:{team:'Marcus engagement noted'}},
    {month:6,name:'June',title:'Quarterly retro facilitation',brief:'Nadia helps Maya design a team retrospective format.',buckets:{team:'Team reflection facilitated'}},
    {month:7,name:'July',title:'Jordan career check-in',brief:'Maya has the career conversation she\'d been postponing.',buckets:{team:'Jordan career investment'}},
    {month:7,name:'July',title:'Priya stakeholder presentation',brief:'Priya presents to leadership. Maya coaches her prep.',buckets:{team:'Priya visibility growing'}},
    {month:7,name:'July',title:'Mid-year self-reflection',brief:'Nadia prompts Maya to reflect on her own growth arc.',buckets:{maya:'Growth trajectory visible'}},
    {month:8,name:'August',title:'Kai onboarding plan',brief:'Nadia helps Maya create a tailored plan for Kai\'s first week.',buckets:{team:'Kai integration started'}},
    {month:8,name:'August',title:'Tomás introduction',brief:'Maya thinks through how to frame Tomás\'s arrival to the team.',buckets:{team:'Tomás integration started'}},
    {month:8,name:'August',title:'Team meeting: new members',brief:'The first all-hands with Tomás and Kai. Maya prepares framing.',buckets:{team:'Team composition shift managed'}},
    {month:9,name:'September',title:'360 feedback processing',brief:'Maya works through her own 360 results with Nadia.',buckets:{maya:'360 insights integrated'}},
    {month:9,name:'September',title:'Alex ownership expansion',brief:'Alex takes on more scope. Maya sets clear expectations.',buckets:{team:'Alex development accelerating'}},
    {month:9,name:'September',title:'Cross-team collaboration',brief:'Maya bridges a gap between her team and Design.',buckets:{team:'Cross-functional trust building'}},
    {month:10,name:'October',title:'Team anxiety after layoffs',brief:'Adjacent team had layoffs. Maya\'s team is unsettled.',buckets:{external:'Organizational uncertainty managed'}},
    {month:10,name:'October',title:'Lin recognition moment',brief:'Lin delivers great work. Maya writes a thoughtful recognition.',buckets:{team:'Lin valued and recognized'}},
    {month:10,name:'October',title:'Difficult email from leadership',brief:'Maya processes a vague directive and decides how to act.',buckets:{maya:'Ambiguity navigation'}},
    {month:11,name:'November',title:'Marcus role-fit conversation prep',brief:'Maya prepares for the most direct conversation of her year.',buckets:{team:'Role alignment discussion prepared'}},
    {month:11,name:'November',title:'Comp conversation coaching',brief:'Nadia helps Maya prepare for compensation discussions.',buckets:{talent:'Comp conversations prepared'}},
    {month:11,name:'November',title:'Holiday planning and coverage',brief:'Maya plans team coverage for the holidays.',buckets:{team:'Holiday coverage organized'}},
    {month:11,name:'November',title:'Priya promotion readiness',brief:'Maya assesses whether Priya is ready for more scope.',buckets:{team:'Priya trajectory assessed'}},
    {month:12,name:'December',title:'Review prep: Jordan',brief:'Nadia surfaces the full year of context for Jordan\'s review.',buckets:{talent:'Jordan review context ready'}},
    {month:12,name:'December',title:'Review prep: Alex & Priya',brief:'The competition arc becomes a development story.',buckets:{talent:'Team dynamic documented'}},
    {month:12,name:'December',title:'Year-end team celebration',brief:'Maya plans a meaningful end-of-year acknowledgment.',buckets:{team:'Team recognition moment'}},
    {month:12,name:'December',title:'Maya\'s own reflection',brief:'Nadia prompts Maya to reflect on her transformation this year.',buckets:{maya:'Full year growth arc captured'}},
  ];
  // Sort all moments chronologically
  MOMENTS.sort((a,b)=>a.month-b.month);

  /* ═══════════════ ORG NETWORK MAP ═══════════════ */
  const DEPTS=[
    {name:'Engineering',color:'#3B82F6',x:.42,y:.32,r:38},
    {name:'Product',color:'#8B5CF6',x:.22,y:.18,r:28},
    {name:'Marketing',color:'#EC4899',x:.72,y:.15,r:30},
    {name:'Sales',color:'#F59E0B',x:.85,y:.45,r:36},
    {name:'Finance',color:'#10B981',x:.12,y:.52,r:24},
    {name:'HR',color:'#F472B6',x:.28,y:.72,r:22},
    {name:'Operations',color:'#06B6D4',x:.62,y:.75,r:30},
    {name:'Legal',color:'#A78BFA',x:.08,y:.32,r:18},
    {name:'Customer Success',color:'#F97316',x:.88,y:.72,r:26},
    {name:'Data Science',color:'#14B8A6',x:.55,y:.12,r:22},
    {name:'Design',color:'#E879F9',x:.38,y:.52,r:20},
    {name:'IT',color:'#64748B',x:.15,y:.85,r:18},
  ];
  const DEPT_LINKS=[[0,1],[0,2],[0,3],[0,10],[1,2],[1,9],[1,10],[2,3],[2,8],[3,4],[3,8],[4,5],[4,7],[5,0],[5,6],[5,11],[6,0],[6,3],[6,8],[7,4],[7,11],[8,3],[9,0],[9,10],[10,1],[11,5],[11,7],[0,6],[2,9],[4,11],[6,11],[1,3]];

  // Team — organic positions, not a circle
  const TEAM_POS=[
    {name:'Maya',title:'Manager',x:.50,y:.46,isCenter:true},
    {name:'Jordan',title:'Senior Associate',x:.28,y:.22},
    {name:'Priya',title:'Associate',x:.72,y:.20},
    {name:'Alex',title:'Associate',x:.82,y:.48},
    {name:'Sam',title:'Senior Analyst',x:.70,y:.72},
    {name:'Tomás',title:'Analyst',x:.38,y:.78},
    {name:'Kai',title:'Analyst',x:.15,y:.58},
    {name:'Marcus',title:'Associate',x:.22,y:.40},
    {name:'Lin',title:'Coordinator',x:.55,y:.18},
  ];
  const TEAM_LINKS=[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],
    [1,2],[1,7],[1,8],[2,3],[2,8],[3,4],[4,5],[5,6],[6,7],[7,1],[3,8],[4,6],[5,7],[2,4],[1,6],[8,3]];

  // Interaction bubbles
  const INTERACTIONS=[
    '1:1 with Tomás','Slack: Alex → Sam','Email: Marcus → Maya','Feedback to Priya',
    'Team standup','1:1 with Jordan','Slack: Kai → Priya','Email: Lin → Alex',
    '1:1 with Sam','Goal review: Priya','Slack: Maya → team','Skip-level prep',
    'Feedback from Jordan','1:1 with Kai','Project update: Alex','Calendar: team offsite',
    'Slack: Tomás → Marcus','Email: Maya → Lin','Perf notes: Marcus','1:1 with Lin',
  ];

  class OrgMap {
    constructor(cv){
      this.cv=cv;this.ctx=cv.getContext('2d');
      this.mode='off';this.dots=[];this.speed=1;this.zoomT=0;
      this.bubbles=[];this.bubbleTimer=0;
      this.resize();window.addEventListener('resize',()=>this.resize());
    }
    resize(){
      const d=devicePixelRatio||1,w=this.cv.offsetWidth,h=this.cv.offsetHeight;
      this.cv.width=w*d;this.cv.height=h*d;
      this.ctx.setTransform(d,0,0,d,0,0);this.w=w;this.h=h;
      this.deptsR=DEPTS.map(d=>({...d,px:d.x*w,py:d.y*h}));
      this.teamR=TEAM_POS.map(t=>({...t,px:t.x*w,py:t.y*h}));
    }
    spawnDot(forMode){
      const m=forMode||this.mode;
      if(this.dots.length>500)return;
      if(m==='org'){
        const li=DEPT_LINKS[Math.random()*DEPT_LINKS.length|0];
        const a=this.deptsR[li[0]],b=this.deptsR[li[1]];
        const dx=b.px-a.px,dy=b.py-a.py,len=Math.sqrt(dx*dx+dy*dy)||1;
        const off=(.5+Math.random()*4)*(Math.random()>.5?1:-1);
        const mx=(a.px+b.px)/2+(-dy/len)*off,my=(a.py+b.py)/2+(dx/len)*off;
        this.dots.push({fx:a.px,fy:a.py,tx:b.px,ty:b.py,cpx:mx,cpy:my,p:0,s:.003+Math.random()*.005,col:a.color,sz:2.5+Math.random()*2,_m:m});
      }else if(m==='team'){
        const li=TEAM_LINKS[Math.random()*TEAM_LINKS.length|0];
        const a=this.teamR[li[0]],b=this.teamR[li[1]];
        const dx=b.px-a.px,dy=b.py-a.py,len=Math.sqrt(dx*dx+dy*dy)||1;
        const off=(1+Math.random()*4)*(Math.random()>.5?1:-1);
        const mx=(a.px+b.px)/2+(-dy/len)*off,my=(a.py+b.py)/2+(dx/len)*off;
        this.dots.push({fx:a.px,fy:a.py,tx:b.px,ty:b.py,cpx:mx,cpy:my,p:0,s:.004+Math.random()*.005,col:['#06B6D4','#3B82F6','#8B5CF6','#EC4899','#10B981'][Math.random()*5|0],sz:2+Math.random()*2,_m:m});
      }
    }
    spawnBubble(){
      if(this.bubbles.length>5||(this.mode!=='team'&&this.mode!=='zoom'))return;
      const txt=INTERACTIONS[Math.random()*INTERACTIONS.length|0];
      const n=this.teamR[1+Math.floor(Math.random()*(this.teamR.length-1))];
      // Position outside the network — push further from center
      const dx=n.px-this.w/2,dy=n.py-this.h/2;
      const len=Math.sqrt(dx*dx+dy*dy)||1;
      const pushOut=35+Math.random()*20;
      this.bubbles.push({txt,x:n.px+(dx/len)*pushOut,y:n.py+(dy/len)*pushOut-10,life:0,maxLife:200});
    }
    drawOrg(alpha){
      const ctx=this.ctx;
      ctx.globalAlpha=alpha;
      DEPT_LINKS.forEach(([a,b])=>{
        const da=this.deptsR[a],db=this.deptsR[b];
        ctx.beginPath();ctx.moveTo(da.px,da.py);ctx.lineTo(db.px,db.py);
        ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=.8;ctx.stroke();
      });
      this.deptsR.forEach((d,i)=>{
        const isOps=d.name==='Operations';
        const highlight=isOps&&this.mode==='zoom';
        // Glow
        ctx.beginPath();ctx.arc(d.px,d.py,d.r+12,0,Math.PI*2);
        const g=ctx.createRadialGradient(d.px,d.py,d.r*.2,d.px,d.py,d.r+12);
        g.addColorStop(0,d.color+(highlight?'40':'22'));g.addColorStop(1,d.color+'00');
        ctx.fillStyle=g;ctx.fill();
        // Circle
        ctx.beginPath();ctx.arc(d.px,d.py,d.r,0,Math.PI*2);
        ctx.fillStyle=d.color+(highlight?'35':'15');ctx.fill();
        ctx.strokeStyle=d.color+(highlight?'90':'40');ctx.lineWidth=highlight?2.5:1.2;ctx.stroke();
        // Label
        ctx.fillStyle='rgba(255,255,255,'+(highlight?'.9':'.65')+')';
        ctx.font=(highlight?'700':'600')+' '+(d.r>25?'11':'9')+'px "DM Sans"';ctx.textAlign='center';
        ctx.fillText(d.name,d.px,d.py+3);
      });
      ctx.globalAlpha=1;
    }
    drawTeam(alpha){
      const ctx=this.ctx;
      ctx.globalAlpha=alpha;
      TEAM_LINKS.forEach(([a,b])=>{
        const na=this.teamR[a],nb=this.teamR[b];
        ctx.beginPath();ctx.moveTo(na.px,na.py);ctx.lineTo(nb.px,nb.py);
        ctx.strokeStyle=a===0?'rgba(6,182,212,.12)':'rgba(255,255,255,.04)';
        ctx.lineWidth=a===0?1.2:.7;ctx.stroke();
      });
      this.teamR.forEach(n=>{
        const r=n.isCenter?28:11;
        ctx.beginPath();ctx.arc(n.px,n.py,r,0,Math.PI*2);
        if(n.isCenter){
          ctx.fillStyle='rgba(6,182,212,.35)';ctx.shadowColor='rgba(6,182,212,.3)';ctx.shadowBlur=24;ctx.fill();ctx.shadowBlur=0;
        }else{
          ctx.fillStyle='rgba(255,255,255,.05)';ctx.fill();
          ctx.strokeStyle='rgba(255,255,255,.1)';ctx.lineWidth=1;ctx.stroke();
        }
        ctx.fillStyle=n.isCenter?'rgba(255,255,255,.92)':'rgba(255,255,255,.65)';
        ctx.font=n.isCenter?'500 16px "Playfair Display"':'600 12px "DM Sans"';
        ctx.textAlign='center';
        ctx.fillText(n.name,n.px,n.py-r-8);
        ctx.fillStyle='rgba(255,255,255,.3)';ctx.font=(n.isCenter?'10':'10')+'px "DM Sans"';
        ctx.fillText(n.title,n.px,n.py-r+3);
      });
      // Interaction bubbles — positioned outside the network, solid bg
      ctx.font='500 10px "DM Sans"';
      this.bubbles.forEach(b=>{
        b.life++;
        let bop=1;
        if(b.life<25)bop=b.life/25;
        else if(b.life>b.maxLife-40)bop=Math.max(0,(b.maxLife-b.life)/40);
        ctx.globalAlpha=bop*.75*alpha;
        const bw=ctx.measureText(b.txt).width+20;
        const bx=b.x-bw/2,by=b.y-10;
        // Solid dark background
        ctx.fillStyle='rgba(8,8,26,.85)';
        ctx.beginPath();ctx.roundRect(bx,by,bw,22,5);ctx.fill();
        ctx.strokeStyle='rgba(6,182,212,.3)';ctx.lineWidth=.8;ctx.stroke();
        ctx.fillStyle='rgba(6,182,212,.8)';ctx.textAlign='center';
        ctx.fillText(b.txt,b.x,b.y+5);
        b.y-=.12;
      });
      this.bubbles=this.bubbles.filter(b=>b.life<b.maxLife);
      ctx.globalAlpha=1;
    }
    drawDots(ctx){
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
    }
    tick(){
      const ctx=this.ctx;ctx.clearRect(0,0,this.w,this.h);
      if(this.mode==='off'){requestAnimationFrame(()=>this.tick());return}

      if(this.mode==='zoom'){
        this.zoomT=Math.min(this.zoomT+.005,1);
        const zt=this.zoomT;
        // Eased zoom
        const ez=zt*zt*(3-2*zt); // smoothstep

        // Find Operations dept for zoom target
        const ops=this.deptsR.find(d=>d.name==='Operations');
        const targetX=ops?ops.px:this.w*.62;
        const targetY=ops?ops.py:this.h*.75;

        // Zoom scale: 1 → 8 (zooming into the ops bubble)
        const scale=1+ez*7;
        // Non-ops elements fade out
        const othersAlpha=Math.max(0,1-ez*2.5);
        // Ops bubble fades at the end as team takes over
        const opsAlpha=ez<.6?1:Math.max(0,1-(ez-.6)/.3);
        // Team fades in
        const teamAlpha=Math.max(0,Math.min(1,(ez-.4)/.4));

        ctx.save();
        // Translate so ops center stays in view, then scale
        ctx.translate(this.w/2,this.h/2);
        ctx.scale(scale,scale);
        ctx.translate(-targetX,-targetY);

        // Draw org (non-ops fading, ops staying)
        DEPT_LINKS.forEach(([a,b])=>{
          const da=this.deptsR[a],db=this.deptsR[b];
          const isOpsLink=da.name==='Operations'||db.name==='Operations';
          ctx.globalAlpha=(isOpsLink?opsAlpha:othersAlpha)*.06;
          ctx.beginPath();ctx.moveTo(da.px,da.py);ctx.lineTo(db.px,db.py);
          ctx.strokeStyle='#fff';ctx.lineWidth=.8/scale;ctx.stroke();
        });
        this.deptsR.forEach(d=>{
          const isOps=d.name==='Operations';
          const a=isOps?opsAlpha:othersAlpha;
          if(a<.01)return;
          ctx.globalAlpha=a;
          ctx.beginPath();ctx.arc(d.px,d.py,d.r+12,0,Math.PI*2);
          const g=ctx.createRadialGradient(d.px,d.py,d.r*.2,d.px,d.py,d.r+12);
          g.addColorStop(0,d.color+'22');g.addColorStop(1,d.color+'00');
          ctx.fillStyle=g;ctx.fill();
          ctx.beginPath();ctx.arc(d.px,d.py,d.r,0,Math.PI*2);
          ctx.fillStyle=d.color+(isOps?'25':'15');ctx.fill();
          ctx.strokeStyle=d.color+(isOps?'70':'40');ctx.lineWidth=(isOps?2:1.2)/scale;ctx.stroke();
          if(12/scale>4){ctx.fillStyle='rgba(255,255,255,.65)';ctx.font='600 '+(d.r>25?11:9)/scale+'px "DM Sans"';ctx.textAlign='center';ctx.fillText(d.name,d.px,d.py+3)}
        });

        // Draw org dots (scaled down so they look right)
        this.dots.filter(d=>d._m==='org').forEach(d=>{
          const t=d.p;
          const x=(1-t)*(1-t)*d.fx+2*(1-t)*t*d.cpx+t*t*d.tx;
          const y=(1-t)*(1-t)*d.fy+2*(1-t)*t*d.cpy+t*t*d.ty;
          let op=1;if(t<.1)op=t*10;else if(t>.85)op=(1-t)/.15;
          ctx.globalAlpha=op*.4*othersAlpha;ctx.beginPath();ctx.arc(x,y,d.sz/scale,0,Math.PI*2);
          ctx.fillStyle=d.col;ctx.fill();
        });

        ctx.restore();

        // Draw team on top (in screen space, not zoomed)
        if(teamAlpha>0){
          this.drawTeam(teamAlpha);
        }

        // Update dots
        for(let i=this.dots.length-1;i>=0;i--){
          const d=this.dots[i];d.p+=d.s*this.speed;
          if(d.p>=1)this.dots.splice(i,1);
        }
        // Spawn
        if(zt<.5)for(let i=0;i<2;i++)this.spawnDot('org');
        if(zt>.3)for(let i=0;i<2;i++)this.spawnDot('team');
        if(zt>=1){this.mode='team';this.dots=this.dots.filter(d=>d._m==='team')}
      }else{
        for(let i=0;i<3;i++)this.spawnDot();
        if(this.mode==='org'){this.drawOrg(1);this.drawDots(ctx)}
        else if(this.mode==='team'){
          this.drawTeam(1);this.drawDots(ctx);
          this.bubbleTimer++;
          if(this.bubbleTimer%50===0)this.spawnBubble();
        }
      }

      // Draw team dots (when not zooming — zoom handles its own)
      if(this.mode!=='zoom'){
        // dots already drawn above
      }
      requestAnimationFrame(()=>this.tick());
    }
    setMode(m){
      if(m==='zoom'){this.zoomT=0}
      this.mode=m;
      if(m!=='zoom')this.dots=[];
      this.bubbles=[];this.bubbleTimer=0;
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

    // Hide opening elements when anything past opening is in view
    const tlSec=document.getElementById('tlSection');
    let hidden=false;
    function hideOpening(){
      if(hidden)return;hidden=true;
      orgMap.setMode('off');tmRing.classList.add('hidden');
      const grad=document.getElementById('opGradient');if(grad)grad.style.opacity='0';
    }
    function showOpening(){
      if(!hidden)return;
      const oRect=document.getElementById('opening').getBoundingClientRect();
      if(oRect.bottom>innerHeight*.5){
        hidden=false;tmRing.classList.remove('hidden');
        const grad=document.getElementById('opGradient');if(grad)grad.style.opacity='1';
      }
    }
    // Watch both meet section and timeline — hide when either enters
    [tlSec].filter(Boolean).forEach(el=>{
      new IntersectionObserver(e=>{
        if(e[0].isIntersecting)hideOpening();
        else showOpening();
      },{threshold:.01}).observe(el);
    });
  }

  /* ═══════════════ HELPERS ═══════════════ */
  function tagColor(text){
    const t=text.toLowerCase();
    if(t.includes('maya')||t.includes('leadership')||t.includes('growth')||t.includes('confidence')||t.includes('identity')||t.includes('resilience')||t.includes('perception')||t.includes('avoidance'))return C.self;
    if(t.includes('team')||t.includes('jordan')||t.includes('priya')||t.includes('alex')||t.includes('sam')||t.includes('marcus')||t.includes('tomás')||t.includes('kai')||t.includes('lin')||t.includes('report')||t.includes('feedback')||t.includes('dynamic')||t.includes('engagement'))return C.others;
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
      if(m.isKeyMoment)cls+=' key-moment';
      el.className=cls;el.dataset.month=m.month;el.dataset.idx=idx;

      const pips=(m.layers||[]).map(l=>`<div class="m-pip" style="background:${C[l]||'#888'}"></div>`).join('');

      if(m.isKeyMoment){
        // ── KEY MOMENT: large card with product viz placeholder ──
        el.innerHTML=`
          <div class="m-month">${m.name}</div>
          <div class="m-card km-card">
            <div class="km-header">
              <span class="km-num">Moment ${m.keyNum}</span>
              <div class="m-pips">${pips}</div>
            </div>
            <div class="km-title">${m.keyTitle}</div>
            <div class="km-sub">${m.keySub}</div>
            ${m.keyContext?`<div class="km-context">${m.keyContext}</div>`:''}
            <div class="km-brief">${m.brief}</div>
            <button class="km-btn" data-km="${m.keyNum}">See it in product →</button>
          </div>`;

        el.querySelector('.km-btn').addEventListener('click',(e)=>{
          e.stopPropagation();
          openProductViz(m.keyNum,m.keyTitle);
        });
      }else{
        // ── REGULAR MOMENT: headline only, no expand ──
        el.innerHTML=`
          <div class="m-month">${m.name}</div>
          <div class="m-card m-card-mini">
            <div class="m-head">
              <div class="m-pips">${pips}</div>
            </div>
            <div class="m-title">${m.title}</div>
            <div class="m-brief">${m.brief}</div>
          </div>`;
      }

      col.appendChild(el);
    });
  }

  // Product visualization placeholder modal
  function openProductViz(num,title){
    // Remove existing modal
    const old=document.getElementById('productVizModal');if(old)old.remove();

    const modal=document.createElement('div');
    modal.id='productVizModal';modal.className='pv-modal';
    const surfaces={1:'Collaboration Profile & Team',2:'Teams Message → Journeys',3:'In-chat Coaching Conversation',4:'My Work — Insights Tab',5:'Performance Reviews → HRIS'};
    const images={};
    const embedUrl={1:'https://nadia-demo-rosy.vercel.app/?moment=1',2:'https://nadia-demo-rosy.vercel.app/?moment=2',3:'https://nadia-demo-rosy.vercel.app/?moment=3',4:'https://nadia-demo-rosy.vercel.app/?moment=4',5:'https://nadia-demo-rosy.vercel.app/?moment=5'};
    const hasEmbed=embedUrl[num];
    const hasImage=!hasEmbed&&images[num];
    if(hasEmbed){
      // Full-screen immersive iframe
      modal.innerHTML=`
        <div class="pv-fullscreen">
          <button class="pv-fs-close">✕ Close</button>
          <iframe src="${embedUrl[num]}" class="pv-fs-iframe" frameborder="0" allow="autoplay"></iframe>
        </div>`;
      document.body.appendChild(modal);
      requestAnimationFrame(()=>modal.classList.add('vis'));
      modal.querySelector('.pv-fs-close').addEventListener('click',()=>{modal.classList.remove('vis');setTimeout(()=>modal.remove(),300)});
      return;
    }
    modal.innerHTML=`
      <div class="pv-backdrop"></div>
      <div class="pv-content ${hasImage?'pv-has-img':''}">
        <button class="pv-close">✕</button>
        <div class="pv-header">
          <span class="pv-num">Moment ${num}</span>
          <h2 class="pv-title">${title}</h2>
          <p class="pv-surface">${surfaces[num]||''}</p>
        </div>
        ${
        hasImage?
          `<div class="pv-img-wrap"><img src="${images[num]}" alt="${title}" class="pv-img"></div>`:
          `<div class="pv-placeholder"><div class="pv-placeholder-inner"><p class="pv-ph-text">Product visualization</p><p class="pv-ph-sub">Design in progress — this will show the actual product experience for this moment.</p></div></div>`
        }
      </div>`;

    document.body.appendChild(modal);
    requestAnimationFrame(()=>modal.classList.add('vis'));

    modal.querySelector('.pv-close').addEventListener('click',()=>{modal.classList.remove('vis');setTimeout(()=>modal.remove(),300)});
    modal.querySelector('.pv-backdrop').addEventListener('click',()=>{modal.classList.remove('vis');setTimeout(()=>modal.remove(),300)});
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
    {month:11,type:'pull',theme:'Difficult conversation on role fit',blind:null,change:'Direct, compassionate conversation'},
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

    // Floating next-moment arrow
    const arrow=document.getElementById('tlNextArrow');
    if(arrow){
      // Show arrow when timeline is in view
      new IntersectionObserver(e=>{arrow.classList.toggle('vis',e[0].isIntersecting)},{threshold:.01}).observe(tlSectionEl);
      arrow.addEventListener('click',()=>{
        // Find the next moment card that's below the current viewport
        const viewBottom=scrollY+innerHeight*.4;
        for(const m of allMoments){
          const rect=m.getBoundingClientRect();
          if(rect.top+scrollY>viewBottom+50){
            m.scrollIntoView({behavior:'smooth',block:'center'});
            break;
          }
        }
      });
    }
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
  /* ═══════════════ MEET MAYA TOGGLE ═══════════════ */
  function initMeetToggle(){
    const btns=document.querySelectorAll('.mt-btn');
    const profile=document.getElementById('meetProfile');
    const team=document.getElementById('meetTeam');
    if(!btns.length||!profile||!team)return;
    btns.forEach(b=>b.addEventListener('click',()=>{
      btns.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      const v=b.dataset.view;
      profile.classList.toggle('hidden',v!=='profile');
      team.classList.toggle('hidden',v!=='team');
    }));
  }

  /* ═══════════════ EVOLUTION CANVAS ═══════════════ */
  function initEvolution(){
    const cv=document.getElementById('evoCanvas');
    const slides=document.querySelectorAll('.evo-slide');
    if(!cv||!slides.length)return;
    const ctx=cv.getContext('2d');const dpr=devicePixelRatio||1;
    function resize(){const r=cv.parentElement.getBoundingClientRect();cv.width=r.width*dpr;cv.height=r.height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);cv._w=r.width;cv._h=r.height}
    resize();window.addEventListener('resize',resize);

    // Nodes — cards with items inside
    const NODES=[
      {id:'nadia',label:'Nadia',x:.48,y:.46,r:38,color:C.nadia,phase:'intro',isNadia:true},
      {id:'maya',label:'Maya',x:.82,y:.16,color:C.self,phase:'v1',isCard:true,cw:155,ch:72,items:['New Manager','Collaborative style','Building directness','Goal: exec presence']},
      {id:'talent',label:'Talent Moments',items:['Performance Reviews','Goal Setting','360 Feedback','Calibrations','Engagement Surveys'],x:.10,y:.12,color:C.talent,phase:'v1',isCard:true,cw:155,ch:95},
      {id:'org',label:'Org Context',items:['HRIS Data','Calendar Data','LMS Courses','Org Strategy','Market Signals'],x:.10,y:.62,color:C.ext,phase:'v1',isCard:true,cw:145,ch:95},
      {id:'collab',label:'Collab Intelligence',items:['Jordan','Priya','Alex','Sam','Tomás','Kai','Marcus','Lin'],x:.78,y:.62,color:C.collab,phase:'v2',isCard:true,cw:165,ch:105,isTeam:true},
      // orgi phase now shows the full org map instead of a card node
    ];
    const LINKS=[
      {a:'nadia',b:'maya',phase:'v1'},{a:'nadia',b:'talent',phase:'v1'},{a:'nadia',b:'org',phase:'v1'},
      {a:'nadia',b:'collab',phase:'v2'},{a:'maya',b:'collab',phase:'v2'},
    ];
    const phaseOrder=['intro','v1','v2','orgi'];
    let currentPhase='intro';
    const dots=[];
    let zoomOutT=0; // for orgi reverse-zoom animation

    function phaseIdx(p){return phaseOrder.indexOf(p)}
    function isVisible(p){return phaseIdx(p)<=phaseIdx(currentPhase)}

    function nodeCenter(n,w,h){
      const px=n.x*w,py=n.y*h;
      if(n.isCard)return{x:px,y:py+(n.ch||80)/2};
      return{x:px,y:py};
    }
    function spawnDot(){
      if(dots.length>250)return;
      const visLinks=LINKS.filter(l=>isVisible(l.phase));
      if(!visLinks.length)return;
      const link=visLinks[Math.random()*visLinks.length|0];
      const a=NODES.find(n=>n.id===link.a),b=NODES.find(n=>n.id===link.b);
      if(!a||!b)return;
      const w=cv._w||500,h=cv._h||500;
      const ac=nodeCenter(a,w,h),bc=nodeCenter(b,w,h);
      const dx=bc.x-ac.x,dy=bc.y-ac.y,len=Math.sqrt(dx*dx+dy*dy)||1;
      const off=(1+Math.random()*5)*(Math.random()>.5?1:-1);
      dots.push({fx:ac.x,fy:ac.y,tx:bc.x,ty:bc.y,cpx:(ac.x+bc.x)/2+(-dy/len)*off,cpy:(ac.y+bc.y)/2+(dx/len)*off,
        p:0,s:.003+Math.random()*.005,col:a.isNadia?b.color:a.color,sz:2.5+Math.random()*2});
    }

    function drawNode(ctx,n,w,h,alpha){
      const px=n.x*w,py=n.y*h;
      ctx.globalAlpha=alpha;
      if(n.isNadia){
        const g=ctx.createRadialGradient(px,py,n.r*.2,px,py,n.r+16);
        g.addColorStop(0,n.color+'40');g.addColorStop(1,n.color+'00');
        ctx.beginPath();ctx.arc(px,py,n.r+16,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
        ctx.beginPath();ctx.arc(px,py,n.r,0,Math.PI*2);
        ctx.fillStyle=n.color+'45';ctx.fill();
        ctx.shadowColor=n.color;ctx.shadowBlur=24;ctx.fill();ctx.shadowBlur=0;
        ctx.strokeStyle=n.color+'70';ctx.lineWidth=2;ctx.stroke();
        ctx.fillStyle='rgba(255,255,255,.92)';ctx.font='600 15px "Playfair Display"';ctx.textAlign='center';
        ctx.fillText(n.label,px,py+5);
      }else if(n.isCard){
        const cw=n.cw,ch=n.ch,cx=px-cw/2,cy=py;
        ctx.beginPath();ctx.roundRect(cx,cy,cw,ch,8);
        ctx.fillStyle=n.color+'0a';ctx.fill();
        ctx.strokeStyle=n.color+'35';ctx.lineWidth=1.2;ctx.stroke();
        ctx.fillStyle=n.color;ctx.font='700 13px "DM Sans"';ctx.textAlign='left';
        ctx.fillText(n.label,cx+12,cy+18);
        if(n.isTeam){
          ctx.font='600 9px "DM Sans"';
          n.items.forEach((item,i)=>{
            const row=Math.floor(i/4),col=i%4;
            const ix=cx+18+col*38,iy=cy+36+row*26;
            ctx.beginPath();ctx.arc(ix,iy,6,0,Math.PI*2);
            ctx.fillStyle=n.color+'30';ctx.fill();ctx.strokeStyle=n.color+'50';ctx.lineWidth=.8;ctx.stroke();
            ctx.fillStyle='rgba(255,255,255,.6)';ctx.textAlign='center';ctx.fillText(item,ix,iy+16);
          });
        }else{
          ctx.font='400 10px "DM Sans"';ctx.fillStyle='rgba(255,255,255,.55)';
          n.items.forEach((item,i)=>{ctx.textAlign='left';ctx.fillText('· '+item,cx+12,cy+34+i*14)});
        }
      }
      ctx.globalAlpha=1;
    }

    // Reuse DEPTS/DEPT_LINKS from opening org map for zoom-out
    function drawOrgMap(ctx,w,h,alpha){
      ctx.globalAlpha=alpha;
      DEPT_LINKS.forEach(([a,b])=>{
        const da=DEPTS[a],db=DEPTS[b];
        ctx.beginPath();ctx.moveTo(da.x*w,da.y*h);ctx.lineTo(db.x*w,db.y*h);
        ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=.8;ctx.stroke();
      });
      DEPTS.forEach(d=>{
        const px=d.x*w,py=d.y*h;
        ctx.beginPath();ctx.arc(px,py,d.r+10,0,Math.PI*2);
        const g=ctx.createRadialGradient(px,py,d.r*.2,px,py,d.r+10);
        g.addColorStop(0,d.color+'22');g.addColorStop(1,d.color+'00');
        ctx.fillStyle=g;ctx.fill();
        ctx.beginPath();ctx.arc(px,py,d.r,0,Math.PI*2);
        ctx.fillStyle=d.color+'15';ctx.fill();
        ctx.strokeStyle=d.color+'40';ctx.lineWidth=1.2;ctx.stroke();
        ctx.fillStyle='rgba(255,255,255,.65)';ctx.font='600 '+(d.r>25?'11':'9')+'px "DM Sans"';ctx.textAlign='center';
        ctx.fillText(d.name,px,py+3);
      });
      ctx.globalAlpha=1;
    }

    // Org-level dots for zoom-out
    const orgDots=[];
    function spawnOrgDot(w,h){
      if(orgDots.length>200)return;
      const li=DEPT_LINKS[Math.random()*DEPT_LINKS.length|0];
      const a=DEPTS[li[0]],b=DEPTS[li[1]];
      const ax=a.x*w,ay=a.y*h,bx=b.x*w,by=b.y*h;
      const dx=bx-ax,dy=by-ay,len=Math.sqrt(dx*dx+dy*dy)||1;
      const off=(.5+Math.random()*4)*(Math.random()>.5?1:-1);
      orgDots.push({fx:ax,fy:ay,tx:bx,ty:by,cpx:(ax+bx)/2+(-dy/len)*off,cpy:(ay+by)/2+(dx/len)*off,p:0,s:.003+Math.random()*.005,col:a.color,sz:2.5+Math.random()*2});
    }

    function draw(){
      const w=cv._w||500,h=cv._h||500;
      ctx.clearRect(0,0,w,h);

      // Handle orgi phase: zoom out from cards to full org map
      if(currentPhase==='orgi'){
        zoomOutT=Math.min(zoomOutT+.006,1);
        const ez=zoomOutT*zoomOutT*(3-2*zoomOutT); // smoothstep
        const cardAlpha=Math.max(0,1-ez*2);
        const orgAlpha=Math.max(0,Math.min(1,(ez-.2)/.5));

        // Draw fading cards
        if(cardAlpha>0){
          ctx.globalAlpha=cardAlpha;
          LINKS.filter(l=>isVisible(l.phase)&&l.phase!=='orgi').forEach(l=>{
            const a=NODES.find(n=>n.id===l.a),b=NODES.find(n=>n.id===l.b);
            const ac=nodeCenter(a,w,h),bc=nodeCenter(b,w,h);
            ctx.beginPath();ctx.moveTo(ac.x,ac.y);ctx.lineTo(bc.x,bc.y);
            ctx.strokeStyle='rgba(255,255,255,.07)';ctx.lineWidth=1;ctx.stroke();
          });
          NODES.filter(n=>isVisible(n.phase)&&n.phase!=='orgi').forEach(n=>{
            drawNode(ctx,n,w,h,cardAlpha);
          });
          ctx.globalAlpha=1;
        }

        // Draw appearing org map
        if(orgAlpha>0){
          drawOrgMap(ctx,w,h,orgAlpha);
          for(let i=0;i<2;i++)spawnOrgDot(w,h);
          for(let i=orgDots.length-1;i>=0;i--){
            const d=orgDots[i];d.p+=d.s;
            if(d.p>=1){orgDots.splice(i,1);continue}
            const t=d.p;
            const x=(1-t)*(1-t)*d.fx+2*(1-t)*t*d.cpx+t*t*d.tx;
            const y=(1-t)*(1-t)*d.fy+2*(1-t)*t*d.cpy+t*t*d.ty;
            let op=1;if(t<.1)op=t*10;else if(t>.85)op=(1-t)/.15;
            ctx.globalAlpha=op*.6*orgAlpha;ctx.beginPath();ctx.arc(x,y,d.sz,0,Math.PI*2);
            ctx.fillStyle=d.col;ctx.shadowColor=d.col;ctx.shadowBlur=3;ctx.fill();ctx.shadowBlur=0;ctx.globalAlpha=1;
          }
        }

        // Still draw card dots while fading
        if(cardAlpha>0){
          for(let i=dots.length-1;i>=0;i--){
            const d=dots[i];d.p+=d.s;if(d.p>=1){dots.splice(i,1);continue}
            const t=d.p;const x=(1-t)*(1-t)*d.fx+2*(1-t)*t*d.cpx+t*t*d.tx;const y=(1-t)*(1-t)*d.fy+2*(1-t)*t*d.cpy+t*t*d.ty;
            let op=1;if(t<.1)op=t*10;else if(t>.85)op=(1-t)/.15;
            ctx.globalAlpha=op*.4*cardAlpha;ctx.beginPath();ctx.arc(x,y,d.sz,0,Math.PI*2);ctx.fillStyle=d.col;ctx.fill();ctx.globalAlpha=1;
          }
        }

        requestAnimationFrame(draw);return;
      }

      // Reset zoom if not orgi
      zoomOutT=0;orgDots.length=0;

      // Normal drawing: visible links
      LINKS.filter(l=>isVisible(l.phase)).forEach(l=>{
        const a=NODES.find(n=>n.id===l.a),b=NODES.find(n=>n.id===l.b);
        const ac=nodeCenter(a,w,h),bc=nodeCenter(b,w,h);
        ctx.beginPath();ctx.moveTo(ac.x,ac.y);ctx.lineTo(bc.x,bc.y);
        ctx.strokeStyle='rgba(255,255,255,.07)';ctx.lineWidth=1;ctx.stroke();
      });

      // Draw visible nodes
      NODES.filter(n=>isVisible(n.phase)).forEach(n=>drawNode(ctx,n,w,h,1));

      // Spawn + draw dots
      for(let i=0;i<2;i++)spawnDot();
      for(let i=dots.length-1;i>=0;i--){
        const d=dots[i];d.p+=d.s;
        if(d.p>=1){dots.splice(i,1);continue}
        const t=d.p;
        const x=(1-t)*(1-t)*d.fx+2*(1-t)*t*d.cpx+t*t*d.tx;
        const y=(1-t)*(1-t)*d.fy+2*(1-t)*t*d.cpy+t*t*d.ty;
        let op=1;if(t<.1)op=t*10;else if(t>.85)op=(1-t)/.15;
        ctx.globalAlpha=op*.6;ctx.beginPath();ctx.arc(x,y,d.sz,0,Math.PI*2);
        ctx.fillStyle=d.col;ctx.shadowColor=d.col;ctx.shadowBlur=3;ctx.fill();
        ctx.shadowBlur=0;ctx.globalAlpha=1;
      }
      requestAnimationFrame(draw);
    }
    draw();

    // Scroll observer
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        const card=e.target.querySelector('.op-card');
        if(e.isIntersecting){
          if(card)card.classList.add('vis');
          const phase=e.target.dataset.evo;
          if(phase&&phaseIdx(phase)>=phaseIdx(currentPhase)){currentPhase=phase;dots.length=0}
        }else{
          if(card)card.classList.remove('vis');
          // Handle scrolling back
          const phase=e.target.dataset.evo;
          if(phase&&!e.isIntersecting&&e.boundingClientRect.top>0){
            const prev=phaseOrder[Math.max(0,phaseIdx(phase)-1)];
            if(phaseIdx(prev)<phaseIdx(currentPhase)){currentPhase=prev;dots.length=0}
          }
        }
      });
    },{threshold:.4});
    slides.forEach(s=>obs.observe(s));
  }

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

  /* ═══════════════ SKILL SCATTER PLOT ═══════════════ */
  function initSkillScatter(){
    const cv=document.getElementById('skillScatter');if(!cv)return;
    const ctx=cv.getContext('2d');const dpr=devicePixelRatio||1;
    const rect=cv.parentElement.getBoundingClientRect();
    cv.width=rect.width*dpr;cv.height=rect.height*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const w=rect.width,h=rect.height;
    const pad={l:40,r:16,t:16,b:32};
    const pw=w-pad.l-pad.r,ph=h-pad.t-pad.b;

    // Skills: {name, developing%, needing%, color}
    const skills=[
      {name:'Data Analysis',dev:12,need:34,col:'#EF4444'},
      {name:'Financial',dev:14,need:31,col:'#EF4444'},
      {name:'Change Mgmt',dev:16,need:25,col:'#EF4444'},
      {name:'Leadership',dev:26,need:22,col:'#F59E0B'},
      {name:'Strategic',dev:34,need:27,col:'#F59E0B'},
      {name:'Project Mgmt',dev:24,need:18,col:'#6B7280'},
      {name:'Cross-functional',dev:27,need:11,col:'#10B981'},
      {name:'Digital Literacy',dev:30,need:10,col:'#10B981'},
      {name:'Problem Solving',dev:33,need:8,col:'#10B981'},
      {name:'Communication',dev:36,need:12,col:'#10B981'},
    ];

    // Axes
    ctx.strokeStyle='rgba(255,255,255,.08)';ctx.lineWidth=.5;
    ctx.beginPath();ctx.moveTo(pad.l,pad.t);ctx.lineTo(pad.l,h-pad.b);ctx.lineTo(w-pad.r,h-pad.b);ctx.stroke();
    // Quadrant lines
    ctx.setLineDash([3,3]);ctx.strokeStyle='rgba(255,255,255,.06)';
    const midX=pad.l+pw*.55,midY=pad.t+ph*.5;
    ctx.beginPath();ctx.moveTo(midX,pad.t);ctx.lineTo(midX,h-pad.b);ctx.stroke();
    ctx.beginPath();ctx.moveTo(pad.l,midY);ctx.lineTo(w-pad.r,midY);ctx.stroke();
    ctx.setLineDash([]);
    // Quadrant labels
    ctx.fillStyle='rgba(255,255,255,.08)';ctx.font='8px "DM Sans"';
    ctx.fillText('High need, Under-served',pad.l+8,pad.t+14);
    ctx.textAlign='right';ctx.fillText('Investing + High need',w-pad.r-4,pad.t+14);ctx.textAlign='left';
    // Axis labels
    ctx.fillStyle='rgba(255,255,255,.25)';ctx.font='9px "DM Sans"';ctx.textAlign='center';
    ctx.fillText('% Actively Developing →',pad.l+pw/2,h-4);
    ctx.save();ctx.translate(10,pad.t+ph/2);ctx.rotate(-Math.PI/2);ctx.fillText('% Needing Support →',0,0);ctx.restore();

    // Plot dots
    skills.forEach(s=>{
      const x=pad.l+(s.dev/42)*pw;
      const y=h-pad.b-((s.need/42)*ph);
      ctx.beginPath();ctx.arc(x,y,6,0,Math.PI*2);
      ctx.fillStyle=s.col;ctx.shadowColor=s.col;ctx.shadowBlur=6;ctx.fill();ctx.shadowBlur=0;
      ctx.fillStyle='rgba(255,255,255,.55)';ctx.font='9px "DM Sans"';ctx.textAlign='center';
      ctx.fillText(s.name,x,y-10);
    });
  }

  /* ═══════════════ COLLABORATION THEMES CHART ═══════════════ */
  function initCollabThemes(){
    const cv=document.getElementById('collabThemes');if(!cv)return;
    const ctx=cv.getContext('2d');const dpr=devicePixelRatio||1;
    const rect=cv.parentElement.getBoundingClientRect();
    cv.width=rect.width*dpr;cv.height=rect.height*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const w=rect.width,h=rect.height;

    // Network visualization of collaboration themes
    const themes=[
      {name:'Feedback culture',x:.3,y:.25,r:24,col:'#EC4899'},
      {name:'Cross-team trust',x:.7,y:.2,r:20,col:'#3B82F6'},
      {name:'Decision speed',x:.5,y:.5,r:28,col:'#8B5CF6'},
      {name:'Meeting efficiency',x:.2,y:.65,r:18,col:'#F59E0B'},
      {name:'Knowledge sharing',x:.75,y:.65,r:22,col:'#10B981'},
      {name:'Conflict resolution',x:.45,y:.8,r:16,col:'#EF4444'},
    ];
    const links=[[0,2],[1,2],[2,3],[2,4],[3,5],[4,5],[0,1],[1,4]];

    // Draw links
    links.forEach(([a,b])=>{
      const ta=themes[a],tb=themes[b];
      ctx.beginPath();ctx.moveTo(ta.x*w,ta.y*h);ctx.lineTo(tb.x*w,tb.y*h);
      ctx.strokeStyle='rgba(255,255,255,.06)';ctx.lineWidth=1;ctx.stroke();
    });

    // Draw theme nodes
    themes.forEach(t=>{
      const px=t.x*w,py=t.y*h;
      ctx.beginPath();ctx.arc(px,py,t.r,0,Math.PI*2);
      const g=ctx.createRadialGradient(px,py,t.r*.2,px,py,t.r);
      g.addColorStop(0,t.col+'30');g.addColorStop(1,t.col+'08');
      ctx.fillStyle=g;ctx.fill();
      ctx.strokeStyle=t.col+'40';ctx.lineWidth=1;ctx.stroke();
      ctx.fillStyle='rgba(255,255,255,.7)';ctx.font='600 9px "DM Sans"';ctx.textAlign='center';
      ctx.fillText(t.name,px,py+3);
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
    initMeetToggle();
    const orgMap=new OrgMap(document.getElementById('orgCanvas'));orgMap.tick();
    initOpening(orgMap);buildTimeline();initScroll();initShowMore();
    initEvolution();initSentimentChart();initSkillScatter();initCollabThemes();initStats();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
