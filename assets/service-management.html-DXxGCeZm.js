import{_ as a,c as s,a as n,o as i}from"./app-C4vIvtX6.js";const t={};function l(r,e){return i(),s("div",null,e[0]||(e[0]=[n(`<h1 id="service-management" tabindex="-1"><a class="header-anchor" href="#service-management"><span>Service Management</span></a></h1><h2 id="starting-a-service" tabindex="-1"><a class="header-anchor" href="#starting-a-service"><span>Starting a Service</span></a></h2><ul><li>To start a service, we need to use <strong>systemctl start</strong> command followed by the service name.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl start apache2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="stopping-a-service" tabindex="-1"><a class="header-anchor" href="#stopping-a-service"><span>Stopping a Service</span></a></h2><ul><li>To stop a service, we need to use <strong>systemctl stop</strong> command followed by the service name.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl stop apache2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="restarting-a-service" tabindex="-1"><a class="header-anchor" href="#restarting-a-service"><span>Restarting a Service</span></a></h2><ul><li>To restart a service, we need to use <strong>systemctl restart</strong> command.</li><li>This is useful for applying configuration changes without rebooting the system.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl restart apache2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="enabling-a-service" tabindex="-1"><a class="header-anchor" href="#enabling-a-service"><span>Enabling a Service</span></a></h2><ul><li>To enable a service to start automatically at boot, we need to use <strong>systemctl enable</strong> command.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> apache2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="disabling-a-service" tabindex="-1"><a class="header-anchor" href="#disabling-a-service"><span>Disabling a Service</span></a></h2><ul><li>To disable a service from starting automatically at boot, we need to use <strong>systemctl disable</strong> command.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl disable apache2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="checking-service-status" tabindex="-1"><a class="header-anchor" href="#checking-service-status"><span>Checking Service Status</span></a></h2><ul><li>To check the status of the service, we need to use <strong>systemctl status</strong> command.</li><li>This provides information about the service&#39;s current state and any error messages.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl status apache2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,19)]))}const d=a(t,[["render",l],["__file","service-management.html.vue"]]),o=JSON.parse('{"path":"/administrator-manual/services/service-management.html","title":"Service Management","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Starting a Service","slug":"starting-a-service","link":"#starting-a-service","children":[]},{"level":2,"title":"Stopping a Service","slug":"stopping-a-service","link":"#stopping-a-service","children":[]},{"level":2,"title":"Restarting a Service","slug":"restarting-a-service","link":"#restarting-a-service","children":[]},{"level":2,"title":"Enabling a Service","slug":"enabling-a-service","link":"#enabling-a-service","children":[]},{"level":2,"title":"Disabling a Service","slug":"disabling-a-service","link":"#disabling-a-service","children":[]},{"level":2,"title":"Checking Service Status","slug":"checking-service-status","link":"#checking-service-status","children":[]}],"git":{"updatedTime":1735475706000,"contributors":[{"name":"Jenil Gajjar","username":"Jenil Gajjar","email":"jenil20gajjar@gmail.com","commits":1,"url":"https://github.com/Jenil Gajjar"},{"name":"jenilgajjar20","username":"jenilgajjar20","email":"jenilgajjar@gmail.com","commits":1,"url":"https://github.com/jenilgajjar20"}]},"filePathRelative":"administrator-manual/services/service-management.md"}');export{d as comp,o as data};
