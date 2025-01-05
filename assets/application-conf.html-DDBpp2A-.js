import{_ as s,c as a,a as e,o as i}from"./app-C4vIvtX6.js";const l={};function t(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="application-configuration-files" tabindex="-1"><a class="header-anchor" href="#application-configuration-files"><span>Application Configuration Files</span></a></h1><h2 id="etc-nginx-nginx-conf" tabindex="-1"><a class="header-anchor" href="#etc-nginx-nginx-conf"><span>/etc/nginx/nginx.conf</span></a></h2><ul><li>This file configures the Nginx web server.</li></ul><p>Example:</p><div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx" data-title="nginx"><pre><code><span class="line"><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">server_name</span> mysite.com</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token directive"><span class="token keyword">root</span> /var/www/html</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="etc-mysql-my-cnf" tabindex="-1"><a class="header-anchor" href="#etc-mysql-my-cnf"><span>/etc/mysql/my.cnf</span></a></h2><ul><li>This file configures the MySQL.</li></ul><p>Example:</p><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre><code><span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span></span>
<span class="line"><span class="token key attr-name">bind-address</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span></span>
<span class="line"><span class="token key attr-name">max_connections</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dotfiles-bashrc-vimrc" tabindex="-1"><a class="header-anchor" href="#dotfiles-bashrc-vimrc"><span>Dotfiles (.bashrc, .vimrc)</span></a></h2><ul><li>These are user-specific configuration files located in the home directory.</li></ul><p>Example (<code>~/.bashrc</code>):</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/custom/path</span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -la&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Example (<code>~/.vimrc</code>):</p><div class="language-vim line-numbers-mode" data-highlighter="prismjs" data-ext="vim" data-title="vim"><pre><code><span class="line"><span class="token keyword">set</span> <span class="token keyword">number</span></span>
<span class="line"><span class="token builtin">syntax</span> <span class="token keyword">on</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const o=s(l,[["render",t],["__file","application-conf.html.vue"]]),r=JSON.parse('{"path":"/administrator-manual/configuration-files/application-conf.html","title":"Application Configuration Files","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"/etc/nginx/nginx.conf","slug":"etc-nginx-nginx-conf","link":"#etc-nginx-nginx-conf","children":[]},{"level":2,"title":"/etc/mysql/my.cnf","slug":"etc-mysql-my-cnf","link":"#etc-mysql-my-cnf","children":[]},{"level":2,"title":"Dotfiles (.bashrc, .vimrc)","slug":"dotfiles-bashrc-vimrc","link":"#dotfiles-bashrc-vimrc","children":[]}],"git":{"updatedTime":1735475706000,"contributors":[{"name":"Jenil Gajjar","username":"Jenil Gajjar","email":"jenil20gajjar@gmail.com","commits":2,"url":"https://github.com/Jenil Gajjar"},{"name":"jenilgajjar20","username":"jenilgajjar20","email":"jenilgajjar@gmail.com","commits":1,"url":"https://github.com/jenilgajjar20"}]},"filePathRelative":"administrator-manual/configuration-files/application-conf.md"}');export{o as comp,r as data};
