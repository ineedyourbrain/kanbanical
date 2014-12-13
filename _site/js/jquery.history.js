



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>Jekyll-AJAX/jquery.history.js at master · joelhans/Jekyll-AJAX</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="joelhans/Jekyll-AJAX" name="twitter:title" /><meta content="Jekyll-AJAX - This basic Jekyll site enables dynamic content loading via AJAX with all the necessary HTML5 History support." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/1153921?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/1153921?v=3&amp;s=400" property="og:image" /><meta content="joelhans/Jekyll-AJAX" property="og:title" /><meta content="https://github.com/joelhans/Jekyll-AJAX" property="og:url" /><meta content="Jekyll-AJAX - This basic Jekyll site enables dynamic content loading via AJAX with all the necessary HTML5 History support." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="473EAA52:67D1:D167BC4:546202C0" name="octolytics-dimension-request_id" /><meta content="1004870" name="octolytics-actor-id" /><meta content="carbondesign" name="octolytics-actor-login" /><meta content="fe113d0b2c839adcc3c2088cac5e97db4193bf60c13e8a352ec5ca77c93baf89" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="B2D6EIBFTLEby+7RKCVSRiXQCq+fEQwvfkrJMntCZAFuVUyCfOcGfxMGQmvHe06wxBJe/Lkrl/9OK2ji86SRqg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-94520383be830bbbe79cdce9fb3f76d4037ec1ca67d72952e14a36b8c2362b55.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-9464c22b2a91bc6a645005fea4347a43672ae879419c4d60808c39bcf2b68748.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="e955c7b0cd21a51d92e14c023ca0eb10">

      
  <meta name="description" content="Jekyll-AJAX - This basic Jekyll site enables dynamic content loading via AJAX with all the necessary HTML5 History support.">
  <meta name="go-import" content="github.com/joelhans/Jekyll-AJAX git https://github.com/joelhans/Jekyll-AJAX.git">

  <meta content="1153921" name="octolytics-dimension-user_id" /><meta content="joelhans" name="octolytics-dimension-user_login" /><meta content="4087221" name="octolytics-dimension-repository_id" /><meta content="joelhans/Jekyll-AJAX" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4087221" name="octolytics-dimension-repository_network_root_id" /><meta content="joelhans/Jekyll-AJAX" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/joelhans/Jekyll-AJAX/commits/master.atom" rel="alternate" title="Recent Commits to Jekyll-AJAX:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/joelhans/Jekyll-AJAX/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/joelhans/Jekyll-AJAX/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/carbondesign" data-ga-click="Header, go to profile, text:username">
      <img alt="Leigh" class="avatar" data-user="1004870" height="20" src="https://avatars1.githubusercontent.com/u/1004870?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">carbondesign</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="joelhans/Jekyll-AJAX">This repository</span>
    </li>
      <li>
        <a href="/joelhans/Jekyll-AJAX/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="QUF96eDIj21MxgmtN1qOs+LO/c8In2NyNwzXuV4eKXMlDJj+wJ0ZfqTbNXbloUemx93Sfkg9ibrvwo59a8X/Fg==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="QhCQhsWbjF5xRRUswQYC1ZtQ1vEaC8jrxkXY0Q13lReoiHbj9Zml/JPbr0isgf77rz1R87i7oMak3X3w5SNfZQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="4087221" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/joelhans/Jekyll-AJAX/watchers">
        2
      </a>
      <a href="/joelhans/Jekyll-AJAX/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/joelhans/Jekyll-AJAX/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vi4p8ppjJ2qOhQWJ/ZatsOJYCdT8X/IPSbLS6U16rwZ/nv7Rzt8sMoKrseLL4GlYh8qcmfT7E/+ELfrcP7wrCw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar joelhans/Jekyll-AJAX">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/joelhans/Jekyll-AJAX/stargazers">
          55
        </a>
</form>
    <form accept-charset="UTF-8" action="/joelhans/Jekyll-AJAX/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="mdxS7n6TH1XZ4zsP9p+p7dziRC+EFOXV9T2+C0yhi9205GmWo7oN7tVB7BD8v+SU12C6tHZEp3uT3KgUyxm0dQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star joelhans/Jekyll-AJAX">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/joelhans/Jekyll-AJAX/stargazers">
          55
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/joelhans/Jekyll-AJAX/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of joelhans/Jekyll-AJAX to your account" aria-label="Fork your own copy of joelhans/Jekyll-AJAX to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/joelhans/Jekyll-AJAX/network" class="social-count">13</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/joelhans" class="url fn" itemprop="url" rel="author"><span itemprop="title">joelhans</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/joelhans/Jekyll-AJAX" class="js-current-repository js-repo-home-link" data-pjax-container-selector="#js-repo-pjax-container">Jekyll-AJAX</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders" role="navigation" data-issue-count-url="/joelhans/Jekyll-AJAX/issues/counts" data-pjax-container-selector="#js-repo-pjax-container">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/joelhans/Jekyll-AJAX" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /joelhans/Jekyll-AJAX">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/joelhans/Jekyll-AJAX/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /joelhans/Jekyll-AJAX/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/joelhans/Jekyll-AJAX/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /joelhans/Jekyll-AJAX/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/joelhans/Jekyll-AJAX/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /joelhans/Jekyll-AJAX/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/joelhans/Jekyll-AJAX/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /joelhans/Jekyll-AJAX/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/joelhans/Jekyll-AJAX/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /joelhans/Jekyll-AJAX/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/joelhans/Jekyll-AJAX.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/joelhans/Jekyll-AJAX.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:joelhans/Jekyll-AJAX.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:joelhans/Jekyll-AJAX.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/joelhans/Jekyll-AJAX" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/joelhans/Jekyll-AJAX" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/joelhans/Jekyll-AJAX" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save joelhans/Jekyll-AJAX to your computer and use it in GitHub Desktop." aria-label="Save joelhans/Jekyll-AJAX to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/joelhans/Jekyll-AJAX/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of joelhans/Jekyll-AJAX as a zip file"
                   title="Download the contents of joelhans/Jekyll-AJAX as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/joelhans/Jekyll-AJAX/blob/5b593f82c5db09eeb112a2ca19ed3fe873e15731/public/js/jquery.history.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:ee926aa1e071525d109ceb87acdca872 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/joelhans/Jekyll-AJAX/blob/master/public/js/jquery.history.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/joelhans/Jekyll-AJAX/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="public/js/jquery.history.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/joelhans/Jekyll-AJAX" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Jekyll-AJAX</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/joelhans/Jekyll-AJAX/tree/master/public" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">public</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/joelhans/Jekyll-AJAX/tree/master/public/js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">jquery.history.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Joel Hans" class="avatar" data-user="1153921" height="24" src="https://avatars1.githubusercontent.com/u/1153921?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/joelhans" rel="author">joelhans</a></span>
        <time datetime="2012-04-20T14:33:04Z" is="relative-time">Apr 20, 2012</time>
        <div class="commit-title">
            <a href="/joelhans/Jekyll-AJAX/commit/9f0cb401d64d20cd011ff111a37c2ef5d25ddf4e" class="message" data-pjax="true" title="Initial commit.">Initial commit.</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Joel Hans" data-user="1153921" height="24" src="https://avatars1.githubusercontent.com/u/1153921?v=3&amp;s=48" width="24" />
            <a href="/joelhans">joelhans</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>1 lines (1 sloc)</span>
          <span class="meta-divider"></span>
        <span>21.571 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/joelhans/Jekyll-AJAX/raw/master/public/js/jquery.history.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/joelhans/Jekyll-AJAX/blame/master/public/js/jquery.history.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/joelhans/Jekyll-AJAX/commits/master/public/js/jquery.history.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/joelhans/Jekyll-AJAX?branch=master&amp;filepath=public%2Fjs%2Fjquery.history.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/joelhans/Jekyll-AJAX/edit/master/public/js/jquery.history.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/joelhans/Jekyll-AJAX/delete/master/public/js/jquery.history.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line">window.JSON||(window.JSON={}),function(){function f(a){return a&lt;10?&quot;0&quot;+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?&#39;&quot;&#39;+a.replace(escapable,function(a){var b=meta[a];return typeof b==&quot;string&quot;?b:&quot;\\u&quot;+(&quot;0000&quot;+a.charCodeAt(0).toString(16)).slice(-4)})+&#39;&quot;&#39;:&#39;&quot;&#39;+a+&#39;&quot;&#39;}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&amp;&amp;typeof i==&quot;object&quot;&amp;&amp;typeof i.toJSON==&quot;function&quot;&amp;&amp;(i=i.toJSON(a)),typeof rep==&quot;function&quot;&amp;&amp;(i=rep.call(b,a,i));switch(typeof i){case&quot;string&quot;:return quote(i);case&quot;number&quot;:return isFinite(i)?String(i):&quot;null&quot;;case&quot;boolean&quot;:case&quot;null&quot;:return String(i);case&quot;object&quot;:if(!i)return&quot;null&quot;;gap+=indent,h=[];if(Object.prototype.toString.apply(i)===&quot;[object Array]&quot;){f=i.length;for(c=0;c&lt;f;c+=1)h[c]=str(c,i)||&quot;null&quot;;return e=h.length===0?&quot;[]&quot;:gap?&quot;[\n&quot;+gap+h.join(&quot;,\n&quot;+gap)+&quot;\n&quot;+g+&quot;]&quot;:&quot;[&quot;+h.join(&quot;,&quot;)+&quot;]&quot;,gap=g,e}if(rep&amp;&amp;typeof rep==&quot;object&quot;){f=rep.length;for(c=0;c&lt;f;c+=1)d=rep[c],typeof d==&quot;string&quot;&amp;&amp;(e=str(d,i),e&amp;&amp;h.push(quote(d)+(gap?&quot;: &quot;:&quot;:&quot;)+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&amp;&amp;(e=str(d,i),e&amp;&amp;h.push(quote(d)+(gap?&quot;: &quot;:&quot;:&quot;)+e));return e=h.length===0?&quot;{}&quot;:gap?&quot;{\n&quot;+gap+h.join(&quot;,\n&quot;+gap)+&quot;\n&quot;+g+&quot;}&quot;:&quot;{&quot;+h.join(&quot;,&quot;)+&quot;}&quot;,gap=g,e}}&quot;use strict&quot;,typeof Date.prototype.toJSON!=&quot;function&quot;&amp;&amp;(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+&quot;-&quot;+f(this.getUTCMonth()+1)+&quot;-&quot;+f(this.getUTCDate())+&quot;T&quot;+f(this.getUTCHours())+&quot;:&quot;+f(this.getUTCMinutes())+&quot;:&quot;+f(this.getUTCSeconds())+&quot;Z&quot;:null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\&quot;\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={&quot;\b&quot;:&quot;\\b&quot;,&quot;\t&quot;:&quot;\\t&quot;,&quot;\n&quot;:&quot;\\n&quot;,&quot;\f&quot;:&quot;\\f&quot;,&quot;\r&quot;:&quot;\\r&quot;,&#39;&quot;&#39;:&#39;\\&quot;&#39;,&quot;\\&quot;:&quot;\\\\&quot;},rep;typeof JSON.stringify!=&quot;function&quot;&amp;&amp;(JSON.stringify=function(a,b,c){var d;gap=&quot;&quot;,indent=&quot;&quot;;if(typeof c==&quot;number&quot;)for(d=0;d&lt;c;d+=1)indent+=&quot; &quot;;else typeof c==&quot;string&quot;&amp;&amp;(indent=c);rep=b;if(!b||typeof b==&quot;function&quot;||typeof b==&quot;object&quot;&amp;&amp;typeof b.length==&quot;number&quot;)return str(&quot;&quot;,{&quot;&quot;:a});throw new Error(&quot;JSON.stringify&quot;)}),typeof JSON.parse!=&quot;function&quot;&amp;&amp;(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&amp;&amp;typeof e==&quot;object&quot;)for(c in e)Object.hasOwnProperty.call(e,c)&amp;&amp;(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&amp;&amp;(text=text.replace(cx,function(a){return&quot;\\u&quot;+(&quot;0000&quot;+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g,&quot;@&quot;).replace(/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,&quot;]&quot;).replace(/(?:^|:|,)(?:\s*\[)+/g,&quot;&quot;)))return j=eval(&quot;(&quot;+text+&quot;)&quot;),typeof reviver==&quot;function&quot;?walk({&quot;&quot;:j},&quot;&quot;):j;throw new SyntaxError(&quot;JSON.parse&quot;)})}(),function(a,b){&quot;use strict&quot;;var c=a.History=a.History||{},d=a.jQuery;if(typeof c.Adapter!=&quot;undefined&quot;)throw new Error(&quot;History.js Adapter has already been loaded...&quot;);c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&amp;&amp;c.originalEvent&amp;&amp;c.originalEvent[a]||d&amp;&amp;d[a]||b;return e},onDomLoad:function(a){d(a)}},typeof c.init!=&quot;undefined&quot;&amp;&amp;c.init()}(window),function(a,b){&quot;use strict&quot;;var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if(typeof g.initHtml4!=&quot;undefined&quot;)throw new Error(&quot;History.js HTML4 Support has already been loaded...&quot;);g.initHtml4=function(){if(typeof g.initHtml4.initialized!=&quot;undefined&quot;)return!1;g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var b=g.getHashByIndex(),c;return c=a===b,c},g.saveHash=function(a){return g.isLastHash(a)?!1:(g.savedHashes.push(a),!0)},g.getHashByIndex=function(a){var b=null;return typeof a==&quot;undefined&quot;?b=g.savedHashes[g.savedHashes.length-1]:a&lt;0?b=g.savedHashes[g.savedHashes.length+a]:b=g.savedHashes[a],b},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var d=g.getHashByState(a),e;return e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e,!0},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};return g.discardedHashes[a]=d,!0},g.discardedState=function(a){var b=g.getHashByState(a),c;return c=g.discardedStates[b]||!1,c},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);return g.discardedState(a)&amp;&amp;delete g.discardedStates[b],!0},g.emulated.hashChange&amp;&amp;(g.hashChangeInit=function(){g.checkerFunction=null;var b=&quot;&quot;,d,e,h,i;return g.isInternetExplorer()?(d=&quot;historyjs-iframe&quot;,e=c.createElement(&quot;iframe&quot;),e.setAttribute(&quot;id&quot;,d),e.style.display=&quot;none&quot;,c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h=&quot;&quot;,i=!1,g.checkerFunction=function(){if(i)return!1;i=!0;var c=g.getHash()||&quot;&quot;,d=g.unescapeHash(e.contentWindow.document.location.hash)||&quot;&quot;;return c!==b?(b=c,d!==c&amp;&amp;(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,&quot;hashchange&quot;)):d!==h&amp;&amp;(h=d,g.setHash(d,!1)),i=!1,!0}):g.checkerFunction=function(){var c=g.getHash();return c!==b&amp;&amp;(b=c,g.Adapter.trigger(a,&quot;hashchange&quot;)),!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval)),!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&amp;&amp;(g.onHashChange=function(b){var d=b&amp;&amp;b.newURL||c.location.href,e=g.getHashByUrl(d),f=null,h=null,i=null,j;return g.isLastHash(e)?(g.busy(!1),!1):(g.doubleCheckComplete(),g.saveHash(e),e&amp;&amp;g.isTraditionalAnchor(e)?(g.Adapter.trigger(a,&quot;anchorchange&quot;),g.busy(!1),!1):(f=g.extractState(g.getFullUrl(e||c.location.href,!1),!0),g.isLastSavedState(f)?(g.busy(!1),!1):(h=g.getHashByState(f),j=g.discardedState(f),j?(g.getHashByIndex(-2)===g.getHashByState(j.forwardState)?g.back(!1):g.forward(!1),!1):(g.pushState(f.data,f.title,f.url,!1),!0))))},g.Adapter.bind(a,&quot;hashchange&quot;,g.onHashChange),g.pushState=function(b,d,e,f){if(g.getHashByUrl(e))throw new Error(&quot;History.js does not support states with fragement-identifiers (hashes/anchors).&quot;);if(f!==!1&amp;&amp;g.busy())return g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:f}),!1;g.busy(!0);var h=g.createStateObject(b,d,e),i=g.getHashByState(h),j=g.getState(!1),k=g.getHashByState(j),l=g.getHash();return g.storeState(h),g.expectedStateId=h.id,g.recycleState(h),g.setTitle(h),i===k?(g.busy(!1),!1):i!==l&amp;&amp;i!==g.getShortUrl(c.location.href)?(g.setHash(i,!1),!1):(g.saveState(h),g.Adapter.trigger(a,&quot;statechange&quot;),g.busy(!1),!0)},g.replaceState=function(a,b,c,d){if(g.getHashByUrl(c))throw new Error(&quot;History.js does not support states with fragement-identifiers (hashes/anchors).&quot;);if(d!==!1&amp;&amp;g.busy())return g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:d}),!1;g.busy(!0);var e=g.createStateObject(a,b,c),f=g.getState(!1),h=g.getStateByIndex(-2);return g.discardState(f,e,h),g.pushState(e.data,e.title,e.url,!1),!0}),g.emulated.pushState&amp;&amp;g.getHash()&amp;&amp;!g.emulated.hashChange&amp;&amp;g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,&quot;hashchange&quot;)})},typeof g.init!=&quot;undefined&quot;&amp;&amp;g.init()}(window),function(a,b){&quot;use strict&quot;;var c=a.console||b,d=a.document,e=a.navigator,f=a.sessionStorage||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode;if(typeof m.init!=&quot;undefined&quot;)throw new Error(&quot;History.js Core has already been loaded...&quot;);m.init=function(){return typeof m.Adapter==&quot;undefined&quot;?!1:(typeof m.initCore!=&quot;undefined&quot;&amp;&amp;m.initCore(),typeof m.initHtml4!=&quot;undefined&quot;&amp;&amp;m.initHtml4(),!0)},m.initCore=function(){if(typeof m.initCore.initialized!=&quot;undefined&quot;)return!1;m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if(typeof b!=&quot;undefined&quot;&amp;&amp;b!==null){for(a=0;a&lt;b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&amp;&amp;m.log.apply(m,arguments)},m.log=function(){var a=typeof c!=&quot;undefined&quot;&amp;&amp;typeof c.log!=&quot;undefined&quot;&amp;&amp;typeof c.log.apply!=&quot;undefined&quot;,b=d.getElementById(&quot;log&quot;),e,f,g,h,i;a?(h=Array.prototype.slice.call(arguments),e=h.shift(),typeof c.debug!=&quot;undefined&quot;?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e=&quot;\n&quot;+arguments[0]+&quot;\n&quot;;for(f=1,g=arguments.length;f&lt;g;++f){i=arguments[f];if(typeof i==&quot;object&quot;&amp;&amp;typeof k!=&quot;undefined&quot;)try{i=k.stringify(i)}catch(j){}e+=&quot;\n&quot;+i+&quot;\n&quot;}return b?(b.value+=e+&quot;\n-----\n&quot;,b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached=typeof m.getInternetExplorerMajorVersion.cached!=&quot;undefined&quot;?m.getInternetExplorerMajorVersion.cached:function(){var a=3,b=d.createElement(&quot;div&quot;),c=b.getElementsByTagName(&quot;i&quot;);while((b.innerHTML=&quot;&lt;!--[if gt IE &quot;+ ++a+&quot;]&gt;&lt;i&gt;&lt;/i&gt;&lt;![endif]--&gt;&quot;)&amp;&amp;c[0]);return a&gt;4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached=typeof m.isInternetExplorer.cached!=&quot;undefined&quot;?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated={pushState:!Boolean(a.history&amp;&amp;a.history.pushState&amp;&amp;a.history.replaceState&amp;&amp;!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&amp;&amp;!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!(&quot;onhashchange&quot;in a||&quot;onhashchange&quot;in d)||m.isInternetExplorer()&amp;&amp;m.getInternetExplorerMajorVersion()&lt;8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&amp;&amp;e.vendor===&quot;Apple Computer, Inc.&quot;&amp;&amp;/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&amp;&amp;e.vendor===&quot;Apple Computer, Inc.&quot;&amp;&amp;/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&amp;&amp;m.getInternetExplorerMajorVersion()&lt;8),hashEscape:Boolean(m.isInternetExplorer()&amp;&amp;m.getInternetExplorerMajorVersion()&lt;7)},m.isEmptyObject=function(a){for(var b in a)return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+&quot;//&quot;+(d.location.hostname||d.location.host);if(d.location.port||!1)a+=&quot;:&quot;+d.location.port;return a+=&quot;/&quot;,a},m.getBaseHref=function(){var a=d.getElementsByTagName(&quot;base&quot;),b=null,c=&quot;&quot;;return a.length===1&amp;&amp;(b=a[0],c=b.href.replace(/[^\/]+$/,&quot;&quot;)),c=c.replace(/\/+$/,&quot;&quot;),c&amp;&amp;(c+=&quot;/&quot;),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a=m.getState(!1,!1),b=(a||{}).url||d.location.href,c;return c=b.replace(/\/+$/,&quot;&quot;).replace(/[^\/]+$/,function(a,b,c){return/\./.test(a)?a:a+&quot;/&quot;}),c},m.getBasePageUrl=function(){var a=d.location.href.replace(/[#\?].*/,&quot;&quot;).replace(/[^\/]+$/,function(a,b,c){return/[^\/]$/.test(a)?&quot;&quot;:a}).replace(/\/+$/,&quot;&quot;)+&quot;/&quot;;return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b=typeof b==&quot;undefined&quot;?!0:b,/[a-z]+\:\/\//.test(a)||(d===&quot;/&quot;?c=m.getRootUrl()+a.replace(/^\/+/,&quot;&quot;):d===&quot;#&quot;?c=m.getPageUrl().replace(/#.*/,&quot;&quot;)+a:d===&quot;?&quot;?c=m.getPageUrl().replace(/[\?#].*/,&quot;&quot;)+a:b?c=m.getBaseUrl()+a.replace(/^(\.\/)+/,&quot;&quot;):c=m.getBasePageUrl()+a.replace(/^(\.\/)+/,&quot;&quot;)),c.replace(/\#$/,&quot;&quot;)},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&amp;&amp;(b=b.replace(c,&quot;&quot;)),b=b.replace(d,&quot;/&quot;),m.isTraditionalAnchor(b)&amp;&amp;(b=&quot;./&quot;+b),b=b.replace(/^(\.\/)+/g,&quot;./&quot;).replace(/\#$/,&quot;&quot;),b},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){typeof a==&quot;undefined&quot;&amp;&amp;(a=!0),typeof b==&quot;undefined&quot;&amp;&amp;(b=!0);var c=m.getLastSavedState();return!c&amp;&amp;b&amp;&amp;(c=m.createStateObject()),a&amp;&amp;(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var b=m.extractId(a.url),c;if(!b){c=m.getStateString(a);if(typeof m.stateToId[c]!=&quot;undefined&quot;)b=m.stateToId[c];else if(typeof m.store.stateToId[c]!=&quot;undefined&quot;)b=m.store.stateToId[c];else{for(;;){b=(new Date).getTime()+String(Math.random()).replace(/\D/g,&quot;&quot;);if(typeof m.idToState[b]==&quot;undefined&quot;&amp;&amp;typeof m.store.idToState[b]==&quot;undefined&quot;)break}m.stateToId[c]=b,m.idToState[b]=a}}return b},m.normalizeState=function(a){var b,c;if(!a||typeof a!=&quot;object&quot;)a={};if(typeof a.normalized!=&quot;undefined&quot;)return a;if(!a.data||typeof a.data!=&quot;object&quot;)a.data={};b={},b.normalized=!0,b.title=a.title||&quot;&quot;,b.url=m.getFullUrl(m.unescapeString(a.url||d.location.href)),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&amp;_suid.*/,&quot;&quot;),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data);if(b.title||c)b.hash=m.getShortUrl(b.url).replace(/\??\&amp;_suid.*/,&quot;&quot;),/\?/.test(b.hash)||(b.hash+=&quot;?&quot;),b.hash+=&quot;&amp;_suid=&quot;+b.id;return b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&amp;&amp;m.hasUrlDuplicate(b)&amp;&amp;(b.url=b.hashedUrl),b},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d),d},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c),d},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id,c},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash,c},m.extractId=function(a){var b,c,d;return c=/(.*)\&amp;_suid=([0-9]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||&quot;&quot;):&quot;&quot;,b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var c=null,d,e;return b=b||!1,d=m.extractId(a),d&amp;&amp;(c=m.getStateById(d)),c||(e=m.getFullUrl(a),d=m.getIdByUrl(e)||!1,d&amp;&amp;(c=m.getStateById(d)),!c&amp;&amp;b&amp;&amp;!m.isTraditionalAnchor(a)&amp;&amp;(c=m.createStateObject(null,null,e))),c},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var b=!1,c;return c=m.extractState(a.url),b=c&amp;&amp;c.id!==a.id,b},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var b=!1,c,d,e;return m.savedStates.length&amp;&amp;(c=a.id,d=m.getLastSavedState(),e=d.id,b=c===e),b},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return typeof a==&quot;undefined&quot;?b=m.savedStates[m.savedStates.length-1]:a&lt;0?b=m.savedStates[m.savedStates.length+a]:b=m.savedStates[a],b},m.getHash=function(){var a=m.unescapeHash(d.location.hash);return a},m.unescapeString=function(b){var c=b,d;for(;;){d=a.unescape(c);if(d===c)break;c=d}return c},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=m.unescapeString(b),b},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,&quot;&quot;).replace(/#.*/,&quot;&quot;);return b},m.setHash=function(a,b){var c,e,f;return b!==!1&amp;&amp;m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(c=m.escapeHash(a),m.busy(!0),e=m.extractState(a,!0),e&amp;&amp;!m.emulated.pushState?m.pushState(e.data,e.title,e.url,!1):d.location.hash!==c&amp;&amp;(m.bugs.setHash?(f=m.getPageUrl(),m.pushState(null,null,f+&quot;#&quot;+c,!1)):d.location.hash=c),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.escape(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,&quot;!&quot;).replace(/\%26/g,&quot;&amp;&quot;).replace(/\%3D/g,&quot;=&quot;).replace(/\%3F/g,&quot;?&quot;)),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,&quot;$2&quot;);return b=m.unescapeHash(b),b},m.setTitle=function(a){var b=a.title,c;b||(c=m.getStateByIndex(0),c&amp;&amp;c.url===a.url&amp;&amp;(b=c.title||m.options.initialTitle));try{d.getElementsByTagName(&quot;title&quot;)[0].innerHTML=b.replace(&quot;&lt;&quot;,&quot;&amp;lt;&quot;).replace(&quot;&gt;&quot;,&quot;&amp;gt;&quot;).replace(&quot; &amp; &quot;,&quot; &amp;amp; &quot;)}catch(e){}return d.title=b,m},m.queues=[],m.busy=function(a){typeof a!=&quot;undefined&quot;?m.busy.flag=a:typeof m.busy.flag==&quot;undefined&quot;&amp;&amp;(m.busy.flag=!1);if(!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(m.busy.flag)return;for(a=m.queues.length-1;a&gt;=0;--a){c=m.queues[a];if(c.length===0)continue;d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay)}};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return typeof a==&quot;function&quot;&amp;&amp;(a={callback:a}),typeof b!=&quot;undefined&quot;&amp;&amp;(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&amp;&amp;(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&amp;&amp;(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var b=m.extractState(d.location.href),c;if(!m.isLastSavedState(b))c=b;else return;return c||(c=m.createStateObject()),m.Adapter.trigger(a,&quot;popstate&quot;),m},m.back=function(a){return a!==!1&amp;&amp;m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&amp;&amp;m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a&gt;0)for(c=1;c&lt;=a;++c)m.forward(b);else{if(!(a&lt;0))throw new Error(&quot;History.go: History.go requires a positive or negative integer passed.&quot;);for(c=-1;c&gt;=a;--c)m.back(b)}return m};if(m.emulated.pushState){var o=function(){};m.pushState=m.pushState||o,m.replaceState=m.replaceState||o}else m.onPopState=function(b,c){var e=!1,f=!1,g,h;return m.doubleCheckComplete(),g=m.getHash(),g?(h=m.extractState(g||d.location.href,!0),h?m.replaceState(h.data,h.title,h.url,!1):(m.Adapter.trigger(a,&quot;anchorchange&quot;),m.busy(!1)),m.expectedStateId=!1,!1):(e=m.Adapter.extractEventData(&quot;state&quot;,b,c)||!1,e?f=m.getStateById(e):m.expectedStateId?f=m.getStateById(m.expectedStateId):f=m.extractState(d.location.href),f||(f=m.createStateObject(null,null,d.location.href)),m.expectedStateId=!1,m.isLastSavedState(f)?(m.busy(!1),!1):(m.storeState(f),m.saveState(f),m.setTitle(f),m.Adapter.trigger(a,&quot;statechange&quot;),m.busy(!1),!0))},m.Adapter.bind(a,&quot;popstate&quot;,m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&amp;&amp;m.emulated.pushState)throw new Error(&quot;History.js does not support states with fragement-identifiers (hashes/anchors).&quot;);if(e!==!1&amp;&amp;m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,&quot;popstate&quot;)),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&amp;&amp;m.emulated.pushState)throw new Error(&quot;History.js does not support states with fragement-identifiers (hashes/anchors).&quot;);if(e!==!1&amp;&amp;m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,&quot;popstate&quot;)),!0};if(f){try{m.store=k.parse(f.getItem(&quot;History.store&quot;))||{}}catch(p){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,&quot;beforeunload&quot;,m.clearAllIntervals),m.Adapter.bind(a,&quot;unload&quot;,m.clearAllIntervals),m.saveState(m.storeState(m.extractState(d.location.href,!0))),f&amp;&amp;(m.onUnload=function(){var a,b;try{a=k.parse(f.getItem(&quot;History.store&quot;))||{}}catch(c){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState){if(!m.idToState.hasOwnProperty(b))continue;a.idToState[b]=m.idToState[b]}for(b in m.urlToId){if(!m.urlToId.hasOwnProperty(b))continue;a.urlToId[b]=m.urlToId[b]}for(b in m.stateToId){if(!m.stateToId.hasOwnProperty(b))continue;a.stateToId[b]=m.stateToId[b]}m.store=a,m.normalizeStore(),f.setItem(&quot;History.store&quot;,k.stringify(a))},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,&quot;beforeunload&quot;,m.onUnload),m.Adapter.bind(a,&quot;unload&quot;,m.onUnload));if(!m.emulated.pushState){m.bugs.safariPoll&amp;&amp;m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval));if(e.vendor===&quot;Apple Computer, Inc.&quot;||(e.appCodeName||&quot;&quot;)===&quot;Mozilla&quot;)m.Adapter.bind(a,&quot;hashchange&quot;,function(){m.Adapter.trigger(a,&quot;popstate&quot;)}),m.getHash()&amp;&amp;m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,&quot;hashchange&quot;)})}},m.init()}(window)</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05625s from github-fe116-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-fe1dc1d9b25d6a0cda010576a3c4be01906c9fd2ac07462042e5fceda326d50c.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-aba45b8411f81a17de91f1837c70a8cb5d105fa6d6db2134e5b19f082a8049ce.js" type="text/javascript"></script>
      
      
  </body>
</html>

