import{_ as n,c as a,a as e,o as i}from"./app-C4vIvtX6.js";const l={};function c(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="common-services" tabindex="-1"><a class="header-anchor" href="#common-services"><span>Common Services</span></a></h1><h2 id="ssh-secure-shell" tabindex="-1"><a class="header-anchor" href="#ssh-secure-shell"><span>SSH (Secure Shell)</span></a></h2><ul><li>SSH is used for securely connecting to the remote systems.</li></ul><h4 id="common-commands" tabindex="-1"><a class="header-anchor" href="#common-commands"><span>Common Commands</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl start <span class="token function">ssh</span></span>
<span class="line"><span class="token function">sudo</span> systemctl stop <span class="token function">ssh</span></span>
<span class="line"><span class="token function">sudo</span> systemctl restart <span class="token function">ssh</span></span>
<span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">ssh</span></span>
<span class="line"><span class="token function">sudo</span> systemctl disable <span class="token function">ssh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Configuration file</strong>: <code>/etc/ssh/sshd_config</code></p><h2 id="web-servers-apache-nginx" tabindex="-1"><a class="header-anchor" href="#web-servers-apache-nginx"><span>Web Servers (Apache/NGINX)</span></a></h2><h3 id="apache" tabindex="-1"><a class="header-anchor" href="#apache"><span>Apache</span></a></h3><ul><li>Apache is widely used web server.</li></ul><h4 id="common-commands-1" tabindex="-1"><a class="header-anchor" href="#common-commands-1"><span>Common Commands</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl start apache2</span>
<span class="line"><span class="token function">sudo</span> systemctl stop apache2</span>
<span class="line"><span class="token function">sudo</span> systemctl restart apache2</span>
<span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> apache2</span>
<span class="line"><span class="token function">sudo</span> systemctl disable apache2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Configuration file</strong>: <code>/etc/apache2/apache2.conf</code></p><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>NGINX</span></a></h3><ul><li>NGINX is a very popular web server and reverse proxy server.</li></ul><h4 id="common-commands-2" tabindex="-1"><a class="header-anchor" href="#common-commands-2"><span>Common Commands</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl start nginx</span>
<span class="line"><span class="token function">sudo</span> systemctl stop nginx</span>
<span class="line"><span class="token function">sudo</span> systemctl restart nginx</span>
<span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx</span>
<span class="line"><span class="token function">sudo</span> systemctl disable nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Configuration file</strong>: <code>/etc/nginx/nginx.conf</code></p><h2 id="dhcp-dynamic-host-configuration-protocol" tabindex="-1"><a class="header-anchor" href="#dhcp-dynamic-host-configuration-protocol"><span>DHCP (Dynamic Host Configuration Protocol)</span></a></h2><ul><li>DHCP assigns IP addresses to devices on a network.</li></ul><h4 id="common-commands-3" tabindex="-1"><a class="header-anchor" href="#common-commands-3"><span>Common Commands</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl start isc-dhcp-server</span>
<span class="line"><span class="token function">sudo</span> systemctl stop isc-dhcp-server</span>
<span class="line"><span class="token function">sudo</span> systemctl restart isc-dhcp-server</span>
<span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> isc-dhcp-server</span>
<span class="line"><span class="token function">sudo</span> systemctl disable isc-dhcp-server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Configuration file</strong>: <code>/etc/dhcp/dhcpd.conf</code></p><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h2><ul><li>MySQL is a widely used relational database management system.</li></ul><h4 id="common-commands-4" tabindex="-1"><a class="header-anchor" href="#common-commands-4"><span>Common Commands</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl start mysql</span>
<span class="line"><span class="token function">sudo</span> systemctl stop mysql</span>
<span class="line"><span class="token function">sudo</span> systemctl restart mysql</span>
<span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> mysql</span>
<span class="line"><span class="token function">sudo</span> systemctl disable mysql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Configuration file</strong>: <code>/etc/mysql/my.cnf</code></p>`,27)]))}const r=n(l,[["render",c],["__file","common-services.html.vue"]]),d=JSON.parse('{"path":"/administrator-manual/services/common-services.html","title":"Common Services","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"SSH (Secure Shell)","slug":"ssh-secure-shell","link":"#ssh-secure-shell","children":[]},{"level":2,"title":"Web Servers (Apache/NGINX)","slug":"web-servers-apache-nginx","link":"#web-servers-apache-nginx","children":[{"level":3,"title":"Apache","slug":"apache","link":"#apache","children":[]},{"level":3,"title":"NGINX","slug":"nginx","link":"#nginx","children":[]}]},{"level":2,"title":"DHCP (Dynamic Host Configuration Protocol)","slug":"dhcp-dynamic-host-configuration-protocol","link":"#dhcp-dynamic-host-configuration-protocol","children":[]},{"level":2,"title":"MySQL","slug":"mysql","link":"#mysql","children":[]}],"git":{"updatedTime":1735475706000,"contributors":[{"name":"Jenil Gajjar","username":"Jenil Gajjar","email":"jenil20gajjar@gmail.com","commits":2,"url":"https://github.com/Jenil Gajjar"},{"name":"jenilgajjar20","username":"jenilgajjar20","email":"jenilgajjar@gmail.com","commits":1,"url":"https://github.com/jenilgajjar20"}]},"filePathRelative":"administrator-manual/services/common-services.md"}');export{r as comp,d as data};
