    //Netlify Identity auth widget drop in and our login menu layout
    //called from themes\hugo-theme-learn\layouts\partials\menu-footer.html
        
    document.onload = function() {
        if (document.visibilityState === 'visible') {
            checkToken();
          } 
        };    
    
        netlifyIdentity.on('init', function() {        
            user = netlifyIdentity.currentUser();
            if (user) {           
                renderLogout(user);       
            }
            else {
                renderLogin();      
            }
        });
    
        netlifyIdentity.on('login', function(user) {
            //console.log('login', user);
            renderLogout(user);
            netlifyIdentity.refresh().then((jwt)=>console.log(''))
        });     
    
        netlifyIdentity.on('logout', function () {
            renderLogin();
        });
          
        window.onpageshow = (event) => {        
            checkToken();            
        };
    
        setInterval(checkToken, 10000);
    
        function checkToken() {
            user = netlifyIdentity.currentUser();
            if (user) {
                currentExpiry = netlifyIdentity.currentUser().token.expires_at - 300000;
                currentTime = Date.now();
    
                if (currentTime > currentExpiry) {
                //console.log('Token is about to expire. Attempting to refresh.');                                
                netlifyIdentity.refresh(true).then((jwt)=>console.log(''))                        
                }
    
                if (currentTime > netlifyIdentity.currentUser().token.expires_at) {
               // console.log('Token expired. Logging out.');
                renderLogin(); 
                netlifyIdentity.logout(); 
                netlifyIdentity.open();   
                }                    
            }
            else {
            renderLogin();
            }       
        }
    
        function renderLogin() {
                container = document.getElementById('auth-info-footer-container');
                document.getElementById('auth-info-footer').remove();
                document.getElementById('auth-info-status').remove();            
                            
                logicon = document.createElement('i');            
                logicon.className = "fas fa-exclamation-triangle";
                
                logstatus = document.createElement('p');
                logstatus.id = "auth-info-status"; 
                logstatus.textContent = " Not logged in";
    
                loglink = document.createElement('a');
                loglink.href = "#";
                loglink.onclick = function () { netlifyIdentity.open(); };
                loglink.id = "auth-info-footer";
                loglink.textContent = " Log in";
                
                container.append(logstatus);
                  logstatus.prepend(logicon);
                container.append(loglink);           
        }
    
        function renderLogout(user) {
           container = document.getElementById('auth-info-footer-container');
            document.getElementById('auth-info-footer').remove();
            document.getElementById('auth-info-status').remove();        
                
                logicon = document.createElement('i');            
                logicon.className = "fas fa-user-circle";
                
                logstatus = document.createElement('p');
                logstatus.id = "auth-info-status";
                var str = user.email;
                var name = str.split("@")[0]; 
                
                logstatus.textContent = " " + name;            
                
                loglink = document.createElement('a');
                loglink.href = "#";
                loglink.onclick = function () { netlifyIdentity.logout(); };
                loglink.id = "auth-info-footer"
                loglink.textContent = "Log out";
                           
                container.append(logstatus);
                logstatus.prepend(logicon);
                container.append(loglink);          
        }