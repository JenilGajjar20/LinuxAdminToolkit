import{_ as a,c as i,a as n,o as s}from"./app-C4vIvtX6.js";const t={};function r(c,e){return s(),i("div",null,e[0]||(e[0]=[n(`<h1 id="service-configuration" tabindex="-1"><a class="header-anchor" href="#service-configuration"><span>Service Configuration</span></a></h1><ul><li><p>Service configuration are located in the <code>/etc</code> directory. Each service has its own dedicated folder or files for managing its settings.</p></li><li><p>For example, Apache configuration files will be found in <code>/etc/apache2/</code>.</p></li></ul><h2 id="editing-service-configuration" tabindex="-1"><a class="header-anchor" href="#editing-service-configuration"><span>Editing Service Configuration</span></a></h2><ul><li>To edit a service configuration, we can use a text editor such as <code>nano</code> or <code>vim</code>.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/apache2/apache2.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="applying-changes" tabindex="-1"><a class="header-anchor" href="#applying-changes"><span>Applying Changes</span></a></h2><ul><li>After making changes to the configuration file, we need to restart the service to apply any changes.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> systemctl restart apache2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,8)]))}const o=a(t,[["render",r],["__file","service-configuration.html.vue"]]),d=JSON.parse('{"path":"/administrator-manual/services/service-configuration.html","title":"Service Configuration","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Editing Service Configuration","slug":"editing-service-configuration","link":"#editing-service-configuration","children":[]},{"level":2,"title":"Applying Changes","slug":"applying-changes","link":"#applying-changes","children":[]}],"git":{"updatedTime":1736063694000,"contributors":[{"name":"Jenil Gajjar","username":"Jenil Gajjar","email":"jenil20gajjar@gmail.com","commits":1,"url":"https://github.com/Jenil Gajjar"},{"name":"jenilgajjar20","username":"jenilgajjar20","email":"jenilgajjar@gmail.com","commits":2,"url":"https://github.com/jenilgajjar20"}]},"filePathRelative":"administrator-manual/services/service-configuration.md"}');export{o as comp,d as data};
