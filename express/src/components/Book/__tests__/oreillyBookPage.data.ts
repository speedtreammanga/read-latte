export const mockedHtmlPage = `<!DOCTYPE html>
<!--[if lt IE 10]><html class="no-js ie8 oldie" lang="en" prefix="og: http://ogp.me/ns/# og:book: http://ogp.me/ns/book# og:video: http://ogp.me/ns/video#"

  
    itemscope itemtype="http://schema.org/Book http://schema.org/CollectionPage" data-offline-url="/"
data-url="/library/view/docker-in-action/9781617294761/"
data-reading-url="/library/view/docker-in-action/9781617294761/kindle_split_000.html"
data-archive="9781617294761"
data-publishers="Manning Publications"

  
    data-book-overview="true"
  



data-federated-auth-enabled="true"

data-env="production"
data-debug="0" ><![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en" prefix="og: http://ogp.me/ns/# og:book: http://ogp.me/ns/book# og:video: http://ogp.me/ns/video#"

  
    itemscope itemtype="http://schema.org/Book http://schema.org/CollectionPage" data-offline-url="/"
data-url="/library/view/docker-in-action/9781617294761/"
data-reading-url="/library/view/docker-in-action/9781617294761/kindle_split_000.html"
data-archive="9781617294761"
data-publishers="Manning Publications"

  
    data-book-overview="true"
  



data-federated-auth-enabled="true"

data-env="production"
data-debug="0" ><!--<![endif]-->
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Docker in Action, Second Edition [Book]</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="/library/view/static/CACHE/css/output.1f6bd5e7da80.css" type="text/css">
    <link href='//fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css' />
    <link rel="stylesheet" type="text/css" href="https://cdn.oreillystatic.com/assets/css/2018_font_face.css" />
    

    <meta property="og:title" content="Docker in Action, Second Edition" />
    <meta itemprop="name" content="Docker in Action, Second Edition" />
    
    <meta property="og:url" itemprop="url" content="https://www.oreilly.com/library/view/docker-in-action/9781617294761/" />
    <meta property="og:site_name" content="O’Reilly Online Learning" />
    <meta property="og:image" itemprop="thumbnailUrl" content="https://www.oreilly.com/library/cover/9781617294761/" />
    
    <meta property="og:image:secure_url" itemprop="thumbnailUrl" content="https://learning.oreilly.com/library/cover/9781617294761/360h/">
    <meta property="og:description" itemprop="description" name="description" content="Docker in Action, Second Edition teaches you to create, deploy, and manage applications hosted in Docker containers running on Linux. Fully updated, with four new chapters and revised best practices …  - Selection from Docker in Action, Second Edition [Book]">
    
    <meta itemprop="inLanguage" content="en" />
    
    <meta itemprop="publisher" content="Manning Publications" />
    
    <meta property="og:type" content="article" />
    <meta property="og:book:isbn" itemprop="isbn" content="9781617294761" />
    
    <meta property="og:book:author" itemprop="author" content="Jeffrey Nickoloff" />
    <meta property="og:book:author" itemprop="author" content="Stephen Kuenzli" />
    
    
    
    
    <meta property="og:image:width" content="400">
    <meta property="og:image:height" content="400">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@OReillyMedia">

<!-- Start Visual Website Optimizer Asynchronous Code -->
<script type='text/javascript'>
var _vwo_code=(function(){
var account_id=291788,
settings_tolerance=2000,
library_tolerance=2500,
use_existing_jquery=false,
/* DO NOT EDIT BELOW THIS LINE */
f=false,d=document;return{use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);var a=d.createElement('style'),b='body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&r='+Math.random());return settings_timer;}};}());_vwo_settings_timer=_vwo_code.init();
</script>
<!-- End Visual Website Optimizer Asynchronous Code -->

    <link class="t-canonical-link" rel="canonical" href="https://www.oreilly.com/library/view/docker-in-action/9781617294761/" />

    <link rel="shortcut icon" href="//www.oreilly.com/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="apple-touch-icon" href="/library/view/static/images/apple-touch-icon.png" />
    

</head>
<body class="js-preview-content  ">


<div class="skipToMain" id="skipToMain"><a href="#maincontent"><span class="skipToMain-text">Skip to main content</span></a></div>
<header role="banner" class="global">
  <div class="global-nav">
    <div class="content">
      <nav role="navigation" aria-label="site sections">
        <a href="https://www.oreilly.com" class="logo" title="home page" aria-current="page"><img src="https://cdn.oreillystatic.com/images/sitewide-headers/oreilly_logo_mark_red.svg" onerror="this.src='https://cdn.oreillystatic.com/images/sitewide-headers/oreilly_logo_mark_red_@2x.png'; this.onerror=null;" alt="O'Reilly home"></a>

        <button id="mobileNavButton" class="mobileNavButton mobileNavButton--collapse mobileNavButton--3dx" type="button" aria-expanded="false" aria-controls="menuList">
          <span class="mobileNavButton-box">
            <span class="mobileNavButton-inner"></span>
          </span>
        </button>


        <ul id="menuList" class="menuList mobileHidden ">
          <li class="menuList-itemsP1">
            <ul>
              
  <li class="menuList-item menuList-signIn"><a class="t-sign-in" href="https://learning.oreilly.com/accounts/login/?next=/library/view/docker-in-action/9781617294761/">Sign In</a></li>


              <li class="menuList-item menuList-tryNow"><a class="menuList-cta" href="https://learning.oreilly.com/p/register/">Try Now</a></li>
            </ul>
          </li>
          <li class="menuList-itemsP2">
            <ul>
              <li class="menuList-item"><a href="https://www.oreilly.com/online-learning/teams.html">Teams</a></li>
              <li class="menuList-item"><a href="https://www.oreilly.com/online-learning/individuals.html">Individuals</a></li>
              <li class="menuList-item menuList-itemWithSub"><a href="https://www.oreilly.com/online-learning/features.html">Features</a>
                <ul class="menuList-subList">
                  <li class="menuList-subItem"><a href="https://www.oreilly.com/online-learning/feature-certification.html">Certifications</a></li>
                  <li class="menuList-subItem"><a href="https://www.oreilly.com/online-learning/intro-interactive-learning.html">Interactive learning</a></li>
                  <li class="menuList-subItem"><a href="https://www.oreilly.com/online-learning/live-events.html">Live events</a></li>
                  <li class="menuList-subItem"><a href="https://www.oreilly.com/online-learning/feature-answers.html">Answers</a></li>
                </ul>
              </li>
              <li class="menuList-item" id="nav-forMarketers"><a href="https://www.oreilly.com/content-marketing-solutions.html">Content sponsorship</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>


  <div class="global-search">
    <div id="globalSearchContent" class="content">
      <form id="js-search-form" class="t-navigation-form" action="https://learning.oreilly.com/search/">
        
        <script type="application/ld+json">
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "url": "https://learning.oreilly.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://learning.oreilly.com/search/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
        </script>
        <input data-search-text-focus= "See everything available through O’Reilly online learning and start a free trial. Explore now." data-search-text-idle = "See everything available through O’Reilly online learning and start a free trial. Explore now." id="search" type="search" name="query" placeholder="See everything available through O’Reilly online learning and start a free trial. Explore now." autocomplete="off" required />
        <input type="submit" value="Search" class="search-submit" />
      </form>
    </div>
  </div>
</header>

    
    


</header>


<section id="trial-overlay">
  <div class="trial-overlay-content">
    <p>Get <em>Docker in Action, Second Edition</em> now with O’Reilly <span class="nowrap">online learning.</span></p>

    <p>O’Reilly members experience live online training, plus books, videos, and digital content from <span class="nowrap">200+ publishers.</span></p>

    <div class="controls">
      <a href="https://learning.oreilly.com/p/register/" class="button-primary" data-ga-label="Bottom CTA">Start your free trial</a>
    </div>
    <a class="modal-dismiss" aria-label="modal dismiss"></a>
  </div>
</section>

<main role="main" id="maincontent">
  <div role="document" class="document">
  	


<section id="sbo-reader" class="sbo-reader-title">
  <div class="title-info">
    <div class="content">
      <figure class="t-cover">
        <img class="t-cover-img" src="https://learning.oreilly.com/library/cover/9781617294761/250w/" alt="Docker in Action, Second Edition"/>
      </figure>

      <div class="metadata">
        <h1 class="t-title">Docker in Action, Second Edition</h1>
        

        <div class="t-authors">by <span class="author-name">Jeffrey Nickoloff</span>, <span class="author-name">Stephen Kuenzli</span></div>
        <div class="t-release-date">Released November 2019</div>
        <div class="t-publisher">Publisher(s): Manning Publications</div>
        <div class="t-isbn">ISBN: 9781617294761</div>

        <div id="titlePromo">
          <p class="t-promo">Explore a preview version of <em>Docker in Action, Second Edition</em> <span class="nowrap">right now.</span></p>

          <p class="t-promo">O’Reilly members get unlimited access to live online training experiences, plus books, videos, and digital content from <span class="nowrap">200+ publishers.</span></p>
        </div>

        <div class="controls">
        
          <a href="https://learning.oreilly.com/p/register/" id="startTrial" class="button-primary">Start your free trial</a>
        
        </div>

        <div id="next-edition">
        
        </div>
      </div>
    </div>
  </div>

  <div class="title-description t-description sbo-reader-content">
    <div class="content">
      <h2 class="t-description-heading">Book description</h2>
      <span><p><i>Docker in Action, Second Edition</i> teaches you to create, deploy, and manage applications hosted in Docker containers running on Linux. Fully updated, with four new chapters and revised best practices and examples, this second edition begins with a clear explanation of the Docker model. Then, you go hands-on with packaging applications, testing, installing, running programs securely, and deploying them across a cluster of hosts. With examples showing how Docker benefits the whole dev lifecycle, you’ll discover techniques for everything from dev-and-test machines to full-scale cloud deployments.</p></span>

      <div id="showMoreDescription" class="showMore hidden"><button class="more"><span class="screen-reader-text">Show and hide more</span></button></div>

      

      <div id="toc-start"></div>
    </div>
  </div>

  <div id="title-tabs" class="title-tabs"><button id="title-tab-toc" class="title-tab title-tab-active" data-target="toc">Table of contents</button><button id="title-tab-pi" class="title-tab" data-target="product-information">Product information</button></div>

  <div class="title-toc" id="toc">
    <div class="content">
      <h2>Table of contents</h2>

      <ol class="detail-toc">
          

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_001.html" class="t-chapter js-chapter">Copyright</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_003.html" class="t-chapter js-chapter">Brief Table of Contents</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_004.html" class="t-chapter js-chapter">Table of Contents</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_005.html" class="t-chapter js-chapter">Praise for the first edition</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_006.html" class="t-chapter js-chapter">Foreword</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_007.html" class="t-chapter js-chapter">Preface</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_008.html" class="t-chapter js-chapter">Acknowledgments</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_009.html" class="t-chapter js-chapter">About this book</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_010.html" class="t-chapter js-chapter">About the authors</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_011.html" class="t-chapter js-chapter">About the cover illustration</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_012.html" class="t-chapter js-chapter">Chapter 1. Welcome to Docker</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_013.html" class="t-chapter js-chapter">Part 1. Process isolation and environment-independent computing</a>
      
    
    
      <ol>
        

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_014.html" class="t-chapter js-chapter">Chapter 2. Running software in containers</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_014.html#ch02lev1sec1" class="t-chapter js-chapter">2.1. Controlling containers: Building a website monitor</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_014.html#ch02lev1sec2" class="t-chapter js-chapter">2.2. Solved problems and the PID namespace</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_014.html#ch02lev1sec3" class="t-chapter js-chapter">2.3. Eliminating metaconflicts: Building a website farm</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_014.html#ch02lev1sec4" class="t-chapter js-chapter">2.4. Building environment-agnostic systems</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_014.html#ch02lev1sec5" class="t-chapter js-chapter">2.5. Building durable containers</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_014.html#ch02lev1sec6" class="t-chapter js-chapter">2.6. Cleaning up</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_014.html#ch02lev1sec7" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_015.html" class="t-chapter js-chapter">Chapter 3. Software installation simplified</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_015.html#ch03lev1sec1" class="t-chapter js-chapter">3.1. Identifying software</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_015.html#ch03lev1sec2" class="t-chapter js-chapter">3.2. Finding and installing software</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_015.html#ch03lev1sec3" class="t-chapter js-chapter">3.3. Installation files and isolation</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_015.html#ch03lev1sec4" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_016.html" class="t-chapter js-chapter">Chapter 4. Working with storage and volumes</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_016.html#ch04lev1sec1" class="t-chapter js-chapter">4.1. File trees and mount points</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_016.html#ch04lev1sec2" class="t-chapter js-chapter">4.2. Bind mounts</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_016.html#ch04lev1sec3" class="t-chapter js-chapter">4.3. In-memory storage</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_016.html#ch04lev1sec4" class="t-chapter js-chapter">4.4. Docker volumes</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_016.html#ch04lev1sec5" class="t-chapter js-chapter">4.5. Shared mount points and sharing files</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_016.html#ch04lev1sec6" class="t-chapter js-chapter">4.6. Cleaning up volumes</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_016.html#ch04lev1sec7" class="t-chapter js-chapter">4.7. Advanced storage with volume plugins</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_016.html#ch04lev1sec8" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_017.html" class="t-chapter js-chapter">Chapter 5. Single-host networking</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_017.html#ch05lev1sec1" class="t-chapter js-chapter">5.1. Networking background (for beginners)</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_017.html#ch05lev1sec2" class="t-chapter js-chapter">5.2. Docker container networking</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_017.html#ch05lev1sec3" class="t-chapter js-chapter">5.3. Special container networks: host and none</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_017.html#ch05lev1sec4" class="t-chapter js-chapter">5.4. Handling inbound traffic with NodePort publishing</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_017.html#ch05lev1sec5" class="t-chapter js-chapter">5.5. Container networking caveats and customizations</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_017.html#ch05lev1sec6" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_018.html" class="t-chapter js-chapter">Chapter 6. Limiting risk with resource controls</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_018.html#ch06lev1sec1" class="t-chapter js-chapter">6.1. Setting resource allowances</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_018.html#ch06lev1sec2" class="t-chapter js-chapter">6.2. Sharing memory</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_018.html#ch06lev1sec3" class="t-chapter js-chapter">6.3. Understanding users</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_018.html#ch06lev1sec4" class="t-chapter js-chapter">6.4. Adjusting OS feature access with capabilities</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_018.html#ch06lev1sec5" class="t-chapter js-chapter">6.5. Running a container with full privileges</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_018.html#ch06lev1sec6" class="t-chapter js-chapter">6.6. Strengthening containers with enhanced tools</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_018.html#ch06lev1sec7" class="t-chapter js-chapter">6.7. Building use-case-appropriate containers</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_018.html#ch06lev1sec8" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_019.html" class="t-chapter js-chapter">Part 2. Packaging software for distribution</a>
      
    
    
      <ol>
        

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_020.html" class="t-chapter js-chapter">Chapter 7. Packaging software in images</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_020.html#ch07lev1sec1" class="t-chapter js-chapter">7.1. Building Docker images from a container</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_020.html#ch07lev1sec2" class="t-chapter js-chapter">7.2. Going deep on Docker images and layers</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_020.html#ch07lev1sec3" class="t-chapter js-chapter">7.3. Exporting and importing flat filesystems</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_020.html#ch07lev1sec4" class="t-chapter js-chapter">7.4. Versioning best practices</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_020.html#ch07lev1sec5" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_021.html" class="t-chapter js-chapter">Chapter 8. Building images automatically with Dockerfiles</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_021.html#ch08lev1sec1" class="t-chapter js-chapter">8.1. Packaging Git with a Dockerfile</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_021.html#ch08lev1sec2" class="t-chapter js-chapter">8.2. A Dockerfile primer</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_021.html#ch08lev1sec3" class="t-chapter js-chapter">8.3. Injecting downstream build-time behavior</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_021.html#ch08lev1sec4" class="t-chapter js-chapter">8.4. Creating maintainable Dockerfiles</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_021.html#ch08lev1sec5" class="t-chapter js-chapter">8.5. Using startup scripts and multiprocess containers</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_021.html#ch08lev1sec6" class="t-chapter js-chapter">8.6. Building hardened application images</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_021.html#ch08lev1sec7" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_022.html" class="t-chapter js-chapter">Chapter 9. Public and private software distribution</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_022.html#ch09lev1sec1" class="t-chapter js-chapter">9.1. Choosing a distribution method</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_022.html#ch09lev1sec2" class="t-chapter js-chapter">9.2. Publishing with hosted registries</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_022.html#ch09lev1sec3" class="t-chapter js-chapter">9.3. Introducing private registries</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_022.html#ch09lev1sec4" class="t-chapter js-chapter">9.4. Manual image publishing and distribution</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_022.html#ch09lev1sec5" class="t-chapter js-chapter">9.5. Image source-distribution workflows</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_022.html#ch09lev1sec6" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_023.html" class="t-chapter js-chapter">Chapter 10. Image pipelines</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_023.html#ch10lev1sec1" class="t-chapter js-chapter">10.1. Goals of an image build pipeline</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_023.html#ch10lev1sec2" class="t-chapter js-chapter">10.2. Patterns for building images</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_023.html#ch10lev1sec3" class="t-chapter js-chapter">10.3. Record metadata at image build time</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_023.html#ch10lev1sec4" class="t-chapter js-chapter">10.4. Testing images in a build pipeline</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_023.html#ch10lev1sec5" class="t-chapter js-chapter">10.5. Patterns for tagging images</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_023.html#ch10lev1sec6" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_024.html" class="t-chapter js-chapter">Part 3. Higher-level abstractions and orchestration</a>
      
    
    
      <ol>
        

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_025.html" class="t-chapter js-chapter">Chapter 11. Services with Docker and Compose</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_025.html#ch11lev1sec1" class="t-chapter js-chapter">11.1. A service “Hello World!”</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_025.html#ch11lev1sec2" class="t-chapter js-chapter">11.2. Declarative service environments with Compose V3</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_025.html#ch11lev1sec3" class="t-chapter js-chapter">11.3. Stateful services and preserving data</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_025.html#ch11lev1sec4" class="t-chapter js-chapter">11.4. Load balancing, service discovery, and networks with Compose</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_025.html#ch11lev1sec5" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_026.html" class="t-chapter js-chapter">Chapter 12. First-class configuration abstractions</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_026.html#ch12lev1sec1" class="t-chapter js-chapter">12.1. Configuration distribution and management</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_026.html#ch12lev1sec2" class="t-chapter js-chapter">12.2. Separating application and configuration</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_026.html#ch12lev1sec3" class="t-chapter js-chapter">12.3. Secrets—A special kind of configuration</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_026.html#ch12lev1sec4" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-2 t-toc-level-2">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_027.html" class="t-chapter js-chapter">Chapter 13. Orchestrating services on a cluster of Docker hosts with Swarm</a>
      
    
    
      <ol>
        

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_027.html#ch13lev1sec1" class="t-chapter js-chapter">13.1. Clustering with Docker Swarm</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_027.html#ch13lev1sec2" class="t-chapter js-chapter">13.2. Deploying an application to a Swarm cluster</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_027.html#ch13lev1sec3" class="t-chapter js-chapter">13.3. Communicating with services running on a Swarm cluster</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_027.html#ch13lev1sec4" class="t-chapter js-chapter">13.4. Placing service tasks on the cluster</a>
      
    
    
  </li>

  <li class="toc-level-3 t-toc-level-3">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_027.html#ch13lev1sec5" class="t-chapter js-chapter">Summary</a>
      
    
    
  </li>


      </ol>
    
  </li>


      </ol>
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_028.html" class="t-chapter js-chapter">Docker running three containers on a Linux system</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_029.html" class="t-chapter js-chapter">Index</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_030.html" class="t-chapter js-chapter">List of Figures</a>
      
    
    
  </li>

  <li class="toc-level-1 t-toc-level-1">
    
      <a href="https://learning.oreilly.com/library/view/docker-in-action/9781617294761/kindle_split_031.html" class="t-chapter js-chapter">List of Tables</a>
      
    
    
  </li>


      </ol>

      <div id="showMoreTOC" class="showMore hidden"><button class="more"><span class="screen-reader-text">Show and hide more</span></button></div>
    </div>
  </div>

  <div id="product-information" class="title-product-information">
    <div class="content">
      <h2>Product information</h2>

      <ul class="detail-product-information">
        <li><span class="name">Title:</span> <span class="value">Docker in Action, Second Edition</span></li>
        <li><span class="name">Author(s):</span> <span class="value authors">Jeffrey Nickoloff, Stephen Kuenzli</span></li>
        <li><span class="name">Release date:</span> <span class="value">November 2019</span></li>
        <li><span class="name">Publisher(s):</span> <span class="value t-publishers">Manning Publications</span></li>
        <li><span class="name">ISBN:</span> <span class="value t-isbn">9781617294761</span></li>
      </ul>
    </div>
  </div>


  
  <div class="title-recommendations" id="recommendations">
    <div class="content">
      <h2 class="t-recommendations-heading">You might also like</h2>

      <div class="recommendations">
      
        <a id="recommendation1" class="recommendations-item" href="https://learning.oreilly.com/library/view/head-first-design/9781492077992/" data-id="9781492077992">
          <figure class="recommendations-cover" style="background-image:url(https://learning.oreilly.com/library/cover/9781492077992//300h)"></figure>
          <p class="recommendations-format recommendations-format-book">book</p>
          <h3 class="recommendations-title">Head First Design Patterns, 2nd Edition</h3>
          <p class="recommendations-authors">
            by
            
              Eric Freeman,
            
              Elisabeth Robson
            
          </p>
          <p class="recommendations-description">You know you don’t want to reinvent the wheel, so you look to design patterns—the lessons …</p>
        </a>
      
        <a id="recommendation2" class="recommendations-item" href="https://learning.oreilly.com/library/view/fundamentals-of-software/9781492043447/" data-id="9781492043447">
          <figure class="recommendations-cover" style="background-image:url(https://learning.oreilly.com/library/cover/9781492043447//300h)"></figure>
          <p class="recommendations-format recommendations-format-book">book</p>
          <h3 class="recommendations-title">Fundamentals of Software Architecture</h3>
          <p class="recommendations-authors">
            by
            
              Mark Richards,
            
              Neal Ford
            
          </p>
          <p class="recommendations-description">Salary surveys worldwide regularly place software architect in the top 10 best jobs, yet no real …</p>
        </a>
      
        <a id="recommendation3" class="recommendations-item" href="https://learning.oreilly.com/library/view/software-engineering-at/9781492082781/" data-id="9781492082781">
          <figure class="recommendations-cover" style="background-image:url(https://learning.oreilly.com/library/cover/9781492082781//300h)"></figure>
          <p class="recommendations-format recommendations-format-book">book</p>
          <h3 class="recommendations-title">Software Engineering at Google</h3>
          <p class="recommendations-authors">
            by
            
              Titus Winters,
            
              Tom Manshreck,
            
              Hyrum Wright
            
          </p>
          <p class="recommendations-description">Today, software engineers need to know not only how to program effectively but also how to …</p>
        </a>
      
        <a id="recommendation4" class="recommendations-item" href="https://learning.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" data-id="9781491903063">
          <figure class="recommendations-cover" style="background-image:url(https://learning.oreilly.com/library/cover/9781491903063//300h)"></figure>
          <p class="recommendations-format recommendations-format-book">book</p>
          <h3 class="recommendations-title">Designing Data-Intensive Applications</h3>
          <p class="recommendations-authors">
            by
            
              Martin Kleppmann
            
          </p>
          <p class="recommendations-description">Data is at the center of many challenges in system design today. Difficult issues need to …</p>
        </a>
      
      </div>
    </div>
  </div>
  

</section>


  </div>
</main>


  <footer id="footer" class="footer">
  <div class="content">
    <div class="footer-main" aria-label="company info">
      <div class="footer-mainLeft">
        <div class="footer-mainLeftOne">
          <div class="footer-approach">
            <h2 class="footer-header"><a href="https://www.oreilly.com/about/">About O’Reilly</a></h2>
            <ul class="footer-links">
              <li><a href="https://www.oreilly.com/work-with-us.html">Teach/write/train</a></li>
              <li><a href="https://www.oreilly.com/careers/">Careers</a></li>
              <li><a href="https://www.oreilly.com/partner/signup.csp">Community partners</a></li>
              <li><a href="https://www.oreilly.com/affiliates/">Affiliate program</a></li>
              <li><a href="https://www.oreilly.com/online-learning/rfp.html">Submit an RFP</a></li>
              <li><a href="https://www.oreilly.com/diversity/">Diversity</a></li>
              <li><a href="https://www.oreilly.com/content-marketing-solutions.html" id="footerSponsorshipLink">O’Reilly for marketers</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-mainLeftTwo">
          <div class="footer-contact">
            <h2 class="footer-header"><a href="https://www.oreilly.com/online-learning/support/">Support</a></h2>

            <ul class="footer-links">
              <li><a href="https://www.oreilly.com/about/contact.html">Contact us</a></li>
              <li><a href="https://www.oreilly.com/emails/newsletters/">Newsletters</a></li>
              <li><a href="https://www.oreilly.com/privacy.html">Privacy policy</a></li>
            </ul>
          
            <a href="https://twitter.com/oreillymedia" target="_blank"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve"><style type="text/css">.st0{fill:#ee0000;}.st1{fill:#FFFFFF;}</style><g id="Red"><circle class="st0" cx="200" cy="200" r="200"/></g><g id="Logo__x2014__FIXED"><path class="st1" d="M163.4,305.5c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25 c-8.6,3.8-17.9,6.4-27.7,7.6c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2 c-26.6,0-48.2,21.6-48.2,48.2c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2 c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7 c-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7 C110.8,297.5,136.2,305.5,163.4,305.5"/></g></svg></a>
            <a href="https://www.facebook.com/OReilly/" target="_blank"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.25 32.25"><defs><style>.cls-1{fill:#E00;fill-rule:evenodd;}</style></defs><title>facebook-logo</title><path class="cls-1" d="M16.13,0A16.13,16.13,0,1,0,32.25,16.12,16.13,16.13,0,0,0,16.13,0Zm5.12,9.54H19.57a1.52,1.52,0,0,0-1.51,1.51v1.14h3.19v3.42H18.06V26.12H13.57V15.61H10.69V12.19h2.88v-2a4,4,0,0,1,4-4h3.65Z"/></svg></a>
            <a href="https://www.linkedin.com/company/oreilly-media" target="_blank"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.25 32.25"><defs><style>.cls-1{fill:#E00;fill-rule:evenodd;}</style></defs><title>linkedin-logo</title><path class="cls-1" d="M17.43,13.53v0l0,0ZM16.12,0A16.13,16.13,0,1,0,32.25,16.12,16.12,16.12,0,0,0,16.12,0ZM11.77,22.92H8.12v-11h3.65ZM9.94,10.44h0a1.89,1.89,0,0,1-2-1.89A1.91,1.91,0,0,1,10,6.65a1.9,1.9,0,1,1,0,3.79Zm15,12.48H21.28V17.05c0-1.48-.53-2.49-1.85-2.49a2,2,0,0,0-1.88,1.34,2.63,2.63,0,0,0-.12.89v6.13H13.79s.05-10,0-11h3.64V13.5a3.63,3.63,0,0,1,3.29-1.82c2.4,0,4.21,1.57,4.21,4.95Z"/></svg></a>
            <a href="https://www.youtube.com/user/OreillyMedia" target="_blank"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.25 32.25"><defs><style>.cls-1{fill:#E00;fill-rule:evenodd;}</style></defs><title>youtube-logo</title><path class="cls-1" d="M18.35,18.68a.89.89,0,0,0-.86.63V16.94h-1v7.59h1v-.59a.92.92,0,0,0,.89.74c.52,0,.86-.36,1-1.07a8.56,8.56,0,0,0,.14-1.9,10.47,10.47,0,0,0-.12-1.93C19.21,19.05,18.87,18.68,18.35,18.68Zm.09,4.14c-.05.52-.2.77-.45.77s-.43-.21-.49-.63a7.22,7.22,0,0,1,0-1c0-.72,0-1.14,0-1.26.07-.58.23-.88.51-.88s.4.27.46.79c0,.09,0,.47,0,1.13S18.46,22.71,18.44,22.82ZM8.61,18.19H9.86v6.34H11V18.19H12.2V16.94H8.61Zm7.71-6.12c.27,0,.43-.22.49-.66,0-.09,0-.45,0-1.07V9.78c0-.58,0-.93,0-1-.07-.43-.23-.65-.48-.65s-.41.19-.48.57a8.79,8.79,0,0,0,0,1v.53c0,.71,0,1.09,0,1.16C15.88,11.82,16.05,12.07,16.32,12.07Zm-1.74,10.4a2.92,2.92,0,0,1-.06.71c-.07.25-.2.37-.4.37s-.32-.11-.38-.34a2.63,2.63,0,0,1-.05-.66V18.83h-1v4.48c0,.91.33,1.37,1,1.37A1,1,0,0,0,14.6,24v.57h1v-5.7h-1Zm7.1-3.79a1.35,1.35,0,0,0-1.22.59,2.48,2.48,0,0,0-.3,1.07c0,.23,0,.61,0,1.16s0,1.13,0,1.37a2.93,2.93,0,0,0,.35,1.27,1.25,1.25,0,0,0,1.14.54,1.36,1.36,0,0,0,1.13-.45,2.29,2.29,0,0,0,.37-1.43s0-.07,0-.11v-.12h-1c0,.75-.17,1.12-.51,1.12s-.38-.18-.45-.56a4.68,4.68,0,0,1-.06-.9c0-.18,0-.31,0-.37h2v-.43a4.86,4.86,0,0,0-.3-2.11A1.28,1.28,0,0,0,21.68,18.68ZM22.15,21h-1c0-.05,0-.11,0-.16v-.08a1.64,1.64,0,0,1,.11-.8.39.39,0,0,1,.38-.23.42.42,0,0,1,.43.33,2.32,2.32,0,0,1,.07.7Zm-6-21A16.13,16.13,0,1,0,32.25,16.12,16.12,16.12,0,0,0,16.12,0Zm2.51,7.2h1V11a2.52,2.52,0,0,0,.06.66c.06.23.18.34.38.34s.34-.12.41-.37a3.76,3.76,0,0,0,.05-.71V7.2h1v5.74h-1v-.57a1,1,0,0,1-.93.72c-.66,0-1-.46-1-1.38ZM15,8a1.29,1.29,0,0,1,1.33-.92A1.3,1.3,0,0,1,17.65,8a6.77,6.77,0,0,1,.23,2.1,6.77,6.77,0,0,1-.23,2.1,1.3,1.3,0,0,1-1.32.92A1.29,1.29,0,0,1,15,12.17a6.77,6.77,0,0,1-.23-2.1A6.86,6.86,0,0,1,15,8ZM11.45,5.3l.89,2.87.88-2.87H14.4L12.88,9.7v3.24h-1.1V9.7L10.24,5.3ZM24.93,23.91a3,3,0,0,1-3,3h-12a3,3,0,0,1-3-3V18.05a3,3,0,0,1,3-3h12a3,3,0,0,1,3,3Z"/></svg></a>
          </div>
        </div>
      </div>

      <div class="footer-download" id="download-info">
        <h2 class="footer-header">Download the O’Reilly App</h2>
        <p>Take O’Reilly online learning with you and learn anywhere, anytime on your phone <span class="nowrap">and tablet.</span></p>

        <div class="footer-downloadLinks">
          <a href="https://itunes.apple.com/us/app/safari-to-go/id881697395"><img src="https://cdn.oreillystatic.com/oreilly/images/app-store-logo.png" alt="Apple app store" /></a>
          <a href="https://play.google.com/store/apps/details?id=com.safariflow.queue"><img src="https://cdn.oreillystatic.com/oreilly/images/google-play-logo.png"  alt="Google play store" /></a>
        </div>
      </div>

      <div class="footer-download" id="tv-info">
        <h2 class="footer-header">Watch on your big screen</h2>
        <p>View all O’Reilly videos, Superstream events, and Meet the Expert sessions on your <span class="nowrap">home TV.</span></p>

        <div class="footer-downloadLinks">
          <a href="https://channelstore.roku.com/details/c8a2d0096693eb9455f6ac165003ee06/oreilly"><img src="https://cdn.oreillystatic.com/oreilly/images/roku-tv-logo.png" alt="Roku Payers and TVs" /></a>
          <a href="https://www.amazon.com/OReilly-Media-Inc/dp/B087YYHL5C/ref=sr_1_2?dchild=1&keywords=oreilly&qid=1604964116&s=mobile-apps&sr=1-2"><img src="https://cdn.oreillystatic.com/oreilly/images/amazon-appstore-logo.png"  alt="Amazon appstore" /></a>
        </div>
      </div>

      <div class="footer-donotsell" id="donotsell-info">
        <h2 class="footer-header">Do not sell my personal information</h2>

        <p style="line-height: 1.5em;">Exercise your consumer rights by contacting us at <a href="mailto:donotsell@oreilly.com?subject=Do Not Sell My Personal Information Request" style="text-decoration:underline;">donotsell@oreilly.com</a>.</p>
      </div>
    </div>

    <div class="footer-subfooter">

      <a href="https://www.oreilly.com" title="home page" aria-current="page">
        <img 
        class="footer-subfooterLogo" 
        id="footer-subfooterLogo"
        src="https://cdn.oreillystatic.com/images/sitewide-headers/oreilly_logo_mark_red.svg" 
        onerror="this.src='https://cdn.oreillystatic.com/images/sitewide-headers/oreilly_logo_mark_red_@2x.png'; this.onerror=null;" 
        alt="O'Reilly home">
      </a>

      <p>&copy; 2021, O’Reilly Media, Inc. All trademarks and registered trademarks appearing on oreilly.com are the property of their respective owners.</p>
      
      

      <p><a href="https://www.oreilly.com/terms/">Terms of service</a> • <a href="https://www.oreilly.com/privacy.html">Privacy policy</a> • <a href="https://www.oreilly.com/about/editorial_independence.html">Editorial independence</a></p>
    </div>

  </div>
</footer>




<script>
  var g = {
    
  };
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'product.title': "Docker in Action, Second Edition",
    'product.type': "book",
    'product.identifier': "9781617294761",
    'content.identifier': "9781617294761",
    'content.publisher': "Manning Publications",
    'content.free': "no",
    
    'content.subdirectory': "none",
    'content.subTopic': "none",
    'content.parentTopic': "none",
    'content.formatType': "book",
    'content.author': "Jeffrey Nickoloff, Stephen Kuenzli",
    'content.releaseDate': "2019-11-15",
    'content.title': "Docker in Action, Second Edition",
  });
</script>

<script>
  // Datadog RUM integration to measure performance and Core Web Vitals
  // https://docs.datadoghq.com/real_user_monitoring/browser/#overview
  // https://web.dev/vitals/
  (function(h,o,u,n,d) {
    h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
    d=o.createElement(u);d.async=1;d.src=n
    n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
  })(window,document,'script','https://www.datadoghq-browser-agent.com/datadog-rum.js','DD_RUM')
  DD_RUM.onReady(function() {
    DD_RUM.init({
      clientToken: 'pub1221d36d3b6dfda5f3c3b7ed22e3b6af',
      applicationId: '291bce39-f950-4fc6-a610-10abfead0661',
      site: 'datadoghq.com',
      service:'anybird',
      env:'production',
      // Specify a version number to identify the deployed version of your application in Datadog 
      // version: '1.0.0',
      sampleRate: 10,
      trackInteractions: true,
    })
  })
</script>






<script src="/library/view/static/CACHE/js/output.3fa4edd6d217.js"></script>


<noscript> 
  <iframe src="//www.googletagmanager.com/ns.html?id=GTM-5P4V6Z"
          height="0" width="0"
          style="display:none;visibility:hidden">
  </iframe>
</noscript>


<script async defer src="/library/view/pageview.js"></script>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

<script>
  jQuery(document).ready(function($) {
    //Toggle isActive and mobileHidden classes for mobileNavButton
    $('nav #mobileNavButton').on('click', function() {
      var expanded = $(this).attr('aria-expanded') === 'true' || false;
      $(this).attr('aria-expanded', !expanded);
      $(this).toggleClass("isActive");
      $(this).next().toggleClass("mobileHidden");
    });

    //Toggle isFocused class for keyboard navigation of submenus
    $('nav #menuList .menuList-subItem a').each(function(navItem) {
      $(this).on('focus', function() {
        $(this).parent().parent().toggleClass('isFocused');
      });
      $(this).on('blur', function() {
        $(this).parent().parent().toggleClass('isFocused');
      });
    });

    //Toggle mobileHidden class accordian elements
    $('.mobileAccordian').each(function() {
      var $btn = $(this).find('button');
      var $target =  $(this).next();
      $btn.on('click', function() {
        var expanded = $btn.attr('aria-expanded') === 'true' || false;

        $btn.attr('aria-expanded', !expanded);
        $target.toggleClass("mobileHidden");
      });
    });


    //Hide title page's long description behind disclosure button
    var titleDescriptionExtra = $('.title-description p:first-of-type').nextAll(':nth-child(3)').nextAll();
    titleDescriptionExtra.wrapAll('<div id="titleDescriptionExtra" />');
    if (titleDescriptionExtra.length > 0) {
      $('#titleDescriptionExtra').toggle();
      $('#showMoreDescription').removeClass('hidden');
      $('#showMoreDescription button').on('click', function() {
        $(this).toggleClass('more');
        $('#titleDescriptionExtra').slideToggle();
      });
    }

    //Hide title page's long TOC behind disclosure button
    var titleTOCShort = $('.sbo-reader-title .detail-toc').find('li').slice(0,4);
    var titleTOCExtra = $('.sbo-reader-title .detail-toc').find('li').not(titleTOCShort);
    if (titleTOCExtra.length > 0) {
      titleTOCExtra.toggle();
      $('#showMoreTOC').removeClass('hidden');
      $('#showMoreTOC button').on('click', function() {
        $(this).toggleClass('more');
        titleTOCExtra.toggle();
      });
    }

    //Hide product information on page load
    $('#product-information').toggle();
    $('#title-tabs button').on('click', function() {
      var $thisTab = $(this);
      if (!$thisTab.hasClass('title-tab-active')) {
        var lastTabTarget = $('#title-tabs .title-tab-active').removeClass('title-tab-active').attr('data-target');
        $('#' + lastTabTarget).toggle();

        $thisTab.addClass('title-tab-active');
        var $tabTarget = $(this).attr('data-target');
        $('#' + $tabTarget).toggle();
      }
    });


    //Trigger GA events for related products
    $('#recommendations .recommendations-item').each(function(i) {
      $(this).on('click', function(e) {
        var cardTitle = $(this).find('.recommendations-title').text().toLowerCase();
        var productType = $(this).find('.recommendations-format').text().toLowerCase();
        var contentID = $(this).attr('data-id');
        var eventLbl = String(i);

        dataLayer.push({
          'product.title': undefined,
          'content.formatType': undefined,
          'product.identifier': undefined,
          'content.title': undefined,
          'content.author': undefined,
          'content.publisher': undefined,
          'content.releaseDate': undefined,
          'content.free': undefined,
          'content.subdirectory': undefined,
          'content.parentTopic': undefined,
          'content.subTopic': undefined,
          'event': 'eventTracker',
          'eventCat': 'recommended titles',
          'eventAct': 'card click',
          'eventLbl': eventLbl,
          'eventVal': 0, 
          'nonInteraction': 0,
          'cardTitle': cardTitle,
          'product.type': productType,
          'content.identifier': contentID,
          'eventCallback': function() {
            dataLayer.push({'cardTitle': undefined});
          },
          'eventTimeout' : 2000
        });
      });
    });

  });

</script>



<!-- MARC Intercept Support -->

<script src="https://service.seamlessaccess.org/thiss.js"></script>

<script src="/library/view/static/CACHE/js/output.6d708731fc9e.js"></script>


</body>
</html>`