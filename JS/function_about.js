// about page
const close_eye = document.getElementById("close");
const open_eye = document.getElementById("open")
const abt = document.getElementById("abt")
const aboutus =document.getElementById("aboutus")

function about(){
    abt.style.display ="none";
    open_eye.style.display = "block";
    open_eye.classList.remove("fade");
}



function aboutclose(){
    open_eye.classList.toggle('fade');
    open_eye.classList.add("fade");
    
        open_eye.addEventListener("animationend", () => {
            open_eye.style.display = "none";
            
            open_eye.classList.remove("fadeout");
            
        }, { once: true });

    abt.style.display ="block";
}

// about ink plum page
    const valley = document.getElementById("valley");
    const snow = document.getElementById("snow");
    const scene = document.getElementById("scene");
    const plumblossom = document.getElementById("plumblossom");
    const thevalley = document.getElementById("thevalley");
    const thesnow = document.getElementById("thesnow");
    const thescene = document.getElementById("thescene");
    const theplumblossom = document.getElementById("theplumblossom");

    const title1 =document.getElementById("title1");
    const v_desc = document.getElementById("v_desc");

    const play1 = document.getElementById("play1");
    const vid_1 = document.getElementById("vid_1");

    valley.addEventListener('click', ()=>{
        thevalley.style.display = "block";
        thesnow.style.display = "none";
        thescene.style.display = "none";
        theplumblossom.style.display = "none";

        title1.innerHTML="The Valley";
        title1.style.marginLeft = "500px";

        v_desc.style.display = "block";
        v_desc.innerHTML="This is the Skullpanda The Valley figure by Pop Mart. It features a cute yet mysterious character with a dark aesthetic. The character has a small, round face with a slightly pouty expression and large, half-closed eyes. It wears a wide-brimmed, dark-colored hat that appears slightly tattered, giving it a worn look. The hat casts a shadow over the figure's face, adding to the enigmatic vibe. The character is dressed in a dark outfit with a high collar that partially covers its mouth, contributing to its secretive appearance. Its hands and feet are small and rounded, and it sits on a rocky surface, which enhances the overall moody and mysterious atmosphere of the figurine.";
        
        vid_1.style.display = "none";
    });

    snow.addEventListener('click', ()=>{
        thevalley.style.display = "none";
        thesnow.style.display = "block";
        thesnow.style.marginLeft = "4%";
        thesnow.style.marginTop = "-96%";
        thescene.style.display = "none";
        theplumblossom.style.display = "none";

        title1.innerHTML="The Snow";
        title1.style.marginLeft = "500px";

        v_desc.style.display = "block";
        v_desc.innerHTML="The Skullpanda The Snow figurine by Pop Mart features an ethereal character with a serene, wintry aesthetic. The figure has a pale, round face with calm, icy-blue eyes and white hair adorned with translucent ice crystal elements. It wears a white headpiece with dark purple spherical accents on the sides and holds a delicate white flower in one hand. The outfit is primarily white, complemented by translucent, icy blue wings and accents, enhancing the snow-themed design. Sitting in a relaxed position, the figure exudes a graceful and peaceful aura, capturing the essence of a winter wonderland.";

        vid_1.style.display = "none";
    });

    scene.addEventListener('click', ()=>{
        thevalley.style.display = "none";
        thesnow.style.display = "none";
        thescene.style.display = "block";
        thescene.style.marginLeft = "4%";
        thescene.style.marginTop = "-192%";
        theplumblossom.style.display = "none";

        title1.innerHTML="The Scene";
        title1.style.marginLeft = "500px";

        v_desc.style.display = "block";
        v_desc.innerHTML="The Skullpanda The Scene figurine by Pop Mart depicts a serene and meditative character with an elegant, tranquil aesthetic. The figure has a calm, closed-eye expression and dark hair styled in a traditional updo, adorned with a delicate white flower. It wears a maroon robe that flows gracefully around it as it sits atop a rock, enhancing its peaceful, contemplative aura. The character's outfit includes white ear coverings with maroon spherical accents on the sides, adding a touch of contrast. With a gentle posture and a focus on simplicity and grace, this figurine beautifully captures a moment of quiet reflection and inner peace.";

        vid_1.style.display = "none";
    });

    plumblossom.addEventListener('click', ()=>{
        thevalley.style.display = "none";
        thesnow.style.display = "none";
        thescene.style.display = "none";
        theplumblossom.style.display = "block";
        theplumblossom.style.marginLeft = "4%";
        theplumblossom.style.marginTop = "-288%"
        
        title1.innerHTML="The Plum Blossom";
        title1.style.marginLeft = "400px";

        
        v_desc.innerHTML="The Skullpanda Plum Blossom figurine is a delicate and whimsical depiction of a small character with a white skull head, adorned with a white headband featuring a plum blossom. The character, wearing a red and pink kimono, sits with its legs crossed on a rock, eyes closed, appearing in a peaceful meditative state. The figurine's intricate details, including the delicate floral embellishments and the subtle color gradient, create a captivating visual experience.";
        
        v_desc.style.display = "block";
        vid_1.style.display = "none";
    });

    

    play1.addEventListener('click', ()=>{
        thevalley.style.display = "none";
        thesnow.style.display = "none";
        thescene.style.display = "none";
        theplumblossom.style.display = "none";

        title1.innerHTML="Ink Plum Blossom";
        title1.style.marginLeft = "400px";

        v_desc.style.display = "none";

        vid_1.style.marginTop = "-384%"
        vid_1.style.display = "block";

    });

// about reality page

    const philosophy = document.getElementById("philosophy");
    const constraint = document.getElementById("constraint");
    const duality = document.getElementById("duality");
    const onlooker = document.getElementById("onlooker");
    const reality_1 = document.getElementById("reality_1");
    const reality_2 = document.getElementById("reality_2");
    const reality_3 = document.getElementById("reality_3");
    const reality_4 = document.getElementById("reality_4");

    const title2 =document.getElementById("title2");
    const r_desc = document.getElementById("r_desc");

    const play2 = document.getElementById("play2");
    const vid_2 = document.getElementById("vid_2");

    philosophy.addEventListener('click', ()=>{
        reality_1.style.display = "block";
        reality_2.style.display = "none";
        reality_3.style.display = "none";
        reality_4.style.display = "none";
        

        title2.innerHTML="The Philosophy";
        title2.style.marginLeft = "450px";

        r_desc.innerHTML="The Skullpanda Philosophy figurine is a captivating and whimsical portrayal of a young, angelic figure with a delicate face and large, expressive eyes. Wearing a white, helmet-like headpiece with prominent, circular eyes on the sides, the figure is adorned with a flowing, feathered robe. The figure holds a closed book in its hands, suggesting contemplation and a pursuit of knowledge, which aligns with the theme of philosophy. The overall aesthetic is both ethereal and playful, capturing the essence of Skullpanda's signature style.";
    
        r_desc.style.display = "block";
        vid_2.style.display = "none";
    });

    constraint.addEventListener('click', ()=>{
        reality_1.style.display = "none";
        reality_2.style.display = "block";
        reality_3.style.display = "none";
        reality_4.style.display = "none";
        reality_2.style.marginLeft = "4%";
        reality_2.style.marginTop = "-96%"

        title2.innerHTML="The Constraint";
        title2.style.marginLeft = "450px";

        r_desc.innerHTML="The Skullpanda Constraint figurine depicts a young, ethereal figure with closed eyes and a delicate, almost melancholic expression. The figure is enveloped in a circular, metallic cage, suggestive of being trapped or constrained. The cage is adorned with yarn balls and knitting needles, hinting at a creative process that has become constricting. The figure's soft, white features and gentle pose contrast with the harshness of the cage, creating a compelling narrative of struggle and confinement.";
        
        r_desc.style.display = "block";
        vid_2.style.display = "none";
    });

    duality.addEventListener('click', ()=>{
        reality_1.style.display = "none";
        reality_2.style.display = "none";
        reality_3.style.display = "block";
        reality_4.style.display = "none";
        reality_3.style.marginLeft = "4%";
        reality_3.style.marginTop = "-192%"

        title2.innerHTML="The Duality (Black)";
        title2.style.marginLeft = "400px";

        r_desc.innerHTML="The Skullpanda Duality (Black) figurine portrays a captivating figure with a playful and enigmatic air. Dressed in a dark, feathered ensemble, the figure's one eye is closed in a wink while the other, a striking blue, stares intently. The figure's lips are painted a vibrant crimson, adding a touch of boldness to the overall aesthetic. The black and red color scheme, combined with the figure's enigmatic expression, evokes a sense of duality and mystery, hinting at a hidden depth beneath the playful facade. The figure's pose, seated on a white, ethereal perch, adds a touch of elegance and sophistication, further enhancing the intricate and captivating nature of this design.";
        
        r_desc.style.display = "block";
        vid_2.style.display = "none";
    });

    onlooker.addEventListener('click', ()=>{
        reality_1.style.display = "none";
        reality_2.style.display = "none";
        reality_3.style.display = "none";
        reality_4.style.display = "block";
        reality_4.style.marginLeft = "4%";
        reality_4.style.marginTop = "-288%"

        title2.innerHTML="The OnLooker";
        title2.style.marginLeft = "450px";

        r_desc.innerHTML="The Skullpanda Onlooker figurine presents a captivating figure adorned in a flowing black robe, reminiscent of a raven's plumage. The figure's eyes are closed, suggesting contemplation or observation, while a swirling black sun symbol graces their forehead. The figure is positioned against a crescent moon, its ethereal glow casting a soft light upon the figure. A flock of ravens, seemingly frozen in flight, surround the figure, adding a sense of mystery and a touch of the macabre. The overall aesthetic is one of quiet observation, hinting at a deeper story unfolding within the figure's silent gaze.";
        
        r_desc.style.display = "block";
        vid_2.style.display = "none";
    });

    play2.addEventListener('click', ()=>{
        reality_1.style.display = "none";
        reality_2.style.display = "none";
        reality_3.style.display = "none";
        reality_4.style.display = "none";

        title2.innerHTML="Image of Reality";
        title2.style.marginLeft = "430px";

        r_desc.style.display = "none";

        vid_2.style.marginTop = "-384%"
        vid_2.style.display = "block";

    });

//about night page
    const lawexecutor = document.getElementById("lawexecutor");
    const princess = document.getElementById("princess");
    const heartseeker = document.getElementById("heartseeker");
    const guardian = document.getElementById("guardian");
    const night_1 = document.getElementById("night_1");
    const night_2 = document.getElementById("night_2");
    const night_3 = document.getElementById("night_3");
    const night_4 = document.getElementById("night_4");

    const title3 =document.getElementById("title3");
    const n_desc = document.getElementById("n_desc");

    const play3 = document.getElementById("play3");
    const vid_3 = document.getElementById("vid_3");

    lawexecutor.addEventListener('click', ()=>{
        night_1.style.display = "block";
        night_2.style.display = "none";
        night_3.style.display = "none";
        night_4.style.display = "none";
        

        title3.innerHTML="Law Executor";
        title3.style.marginLeft = "450px";

        n_desc.innerHTML="The Skullpanda Law Executor figurine features a young, stylized figure with a determined expression and a striking red and white color scheme. The figure is encased in a futuristic helmet with a transparent visor, suggesting a technologically advanced character. Her hair is styled in a traditional Japanese bun with two red and white chopsticks sticking out, adding a touch of cultural influence. The figure is adorned with a white and red outfit and sits with one leg outstretched, holding a futuristic weapon with a red and silver design. This figurine embodies the intersection of technology, tradition, and authority, creating a captivating representation of a powerful and disciplined figure.";
        
        n_desc.style.display = "block";
        vid_3.style.display = "none";
    });

    princess.addEventListener('click', ()=>{
        night_1.style.display = "none";
        night_2.style.display = "block";
        night_3.style.display = "none";
        night_4.style.display = "none";
        night_2.style.marginLeft = "4%";
        night_2.style.marginTop = "-96%"
        

        title3.innerHTML="The Princess";
        title3.style.marginLeft = "455px";

        n_desc.innerHTML="The Skullpanda The Princess figurine showcases a young, adorable figure with a whimsical and futuristic aesthetic. The figure's head is adorned with a pearl-studded headband, a delicate fan, and a white helmet with glowing orbs on each side. Her hair is styled in a two-toned pink and black bob, adding a touch of playfulness to the design. The figure is dressed in a pink and white outfit, accented with delicate pearl necklaces, and sits on a pair of circular platforms with intricate patterns. The overall aesthetic is a harmonious blend of futuristic elements, delicate details, and a playful charm, creating a captivating and charming representation of a modern-day princess.";
        
        n_desc.style.display = "block";
        vid_3.style.display = "none";
    });

    heartseeker.addEventListener('click', ()=>{
        night_1.style.display = "none";
        night_2.style.display = "none";
        night_3.style.display = "block";
        night_4.style.display = "none";
        night_3.style.marginLeft = "4%";
        night_3.style.marginTop = "-192%"
        

        title3.innerHTML="HeartSeeker";
        title3.style.marginLeft = "450px";

        n_desc.innerHTML="The Skullpanda Heart Seeker figurine is a captivating and whimsical piece of art that exudes charm with its pastel blue and purple hues. The character features an oversized head with intricate details, including curly blue hair styled in playful puffs, adorned with a delicate monocle attached by a chain. Its serene expression is highlighted by closed eyes and soft pink lips, giving it a dreamy and endearing look. The figurine is dressed in a futuristic outfit, complete with a headgear that wraps around its face, and stylish boots that match its color scheme. With its small, seated posture and meticulously crafted details, this Skullpanda Heart Seeker figurine is a delightful collectible that embodies a blend of fantasy and cuteness.";
        
        n_desc.style.display = "block";
        vid_3.style.display = "none";
    });

    guardian.addEventListener('click', ()=>{
        night_1.style.display = "none";
        night_2.style.display = "none";
        night_3.style.display = "none";
        night_4.style.display = "block";
        night_4.style.marginLeft = "4%";
        night_4.style.marginTop = "-288%"
        

        title3.innerHTML="Guardian of Night";
        title3.style.marginLeft = "400px";

        n_desc.innerHTML="The Skullpanda Guardian of Night figurine is an intriguing and visually striking piece that merges elements of mystery and protection. This character is characterized by its closed eyes and calm demeanor, emphasizing a sense of vigilant tranquility. Its distinctive hair is styled in intricate braids and topped with a high ponytail, further accentuated by small, red horn-like protrusions on its head. The figurine wears a dark, ornate mask covering the lower half of its face, complementing its red and black color scheme. It is dressed in a red scarf and armor-like outfit, complete with a sheathed sword on its back, suggesting readiness for battle. The figurine's seated posture and the small bell held in one hand add to its enigmatic and guardian-like presence, making it a captivating addition to any collection.";
        
        n_desc.style.display = "block";
        vid_3.style.display = "none";
    });

    play3.addEventListener('click', ()=>{
        night_1.style.display = "none";
        night_2.style.display = "none";
        night_3.style.display = "none";
        night_4.style.display = "none";

        title3.innerHTML="City of Night";
        title3.style.marginLeft = "455px";

        n_desc.style.display = "none";

        vid_3.style.marginTop = "-384%"
        vid_3.style.display = "block";

    });


    // top

    function scrolltop(){
        window.scrollTo(0,0);
    }