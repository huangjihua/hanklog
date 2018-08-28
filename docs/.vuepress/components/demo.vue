<template>
	<div class="demo">
		<div class="demo-box">
			<div class="demo-content">
				<div class="case dc-content">
					<strong v-if="title.length>0">
						<span>{{title}}</span>
					</strong>
					<div class="demo">
						<div v-html="codeHtml">
						</div>
					</div>
					<div class="interpretation" v-if="description.length>0">
						<div v-html="descriptionFn"></div>
					</div>
				</div>
			</div>
			<div class="demo-content dc-code "   :style="spreadStyle" >
				<div class="code" v-html="codeFn">
				</div>
				<a href="javascript:;" class="show-more" v-show="isShow" :class="spreadCss"  v-on:click="spreadClick"></a>
			</div>
		</div>
	</div>
</template>
<script>
	import mdit from 'markdown-it'
    import 'highlight.js/styles/darcula.css'
    export default {
	    props: {
            title: String,
            codeHtml: String,
			codeJs:String,
            description:String
        },
        data() {
            return {
                isShow:false,
                spreadCss:'',
                spreadStyle:{
                    height:'125px'
				}
			}
		},
		mounted:function(){
 			this.updateHeight();
		},
        computed:{
            descriptionFn:function () {
			 return	mdit({html:true}).render(this.description);
            },
            codeFn :function () {
			  const hljs = require('highlight.js');
			  const  md= mdit({
                  highlight: function (str, lang) {
                      let l_name= 'language-'+lang;
                      if (lang && hljs.getLanguage(lang)) {
                         
                          try {
                              return  '</div class="'+ l_name+'"><pre class="hljs"><code>' +
                                  hljs.highlight(lang, str, true).value +
                                  '</code></pre></div>';
                          } catch (__) {
                          }
                      }

                      return '</div class="'+ l_name+'"><pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre></div>';
                  }
              });
			  let codejs = this.codeJs?' \n```'+ '\n ```js \n'+this.codeJs+' \n```':'';
              return md.render(' ```html \n'+this.codeHtml+ codejs);
            }
		},
        methods:{
            spreadClick:function (event) {
                let caseHeight = event.currentTarget.parentNode.previousElementSibling.firstChild.offsetHeight+'px';
                this.spreadStyle.height=  this.spreadStyle.height==='auto'?caseHeight:'auto';
                this.spreadCss = this.spreadStyle.height==='auto'?'down':'';
            },
            updateHeight (){
                //获取 DEMO 展示content高度,父组件可调用
                let htmlHeight =  this.$vnode.elm.querySelector('.dc-content').offsetHeight;;
                let codeHeight = this.$vnode.elm.querySelector('.code').offsetHeight;
                this.spreadStyle.height= htmlHeight+'px';
                this.isShow = htmlHeight<codeHeight? true:false;
            }
		},
		watch: {
            spreadStyle:function (val,oldVal) {
				console.log('height',val,oldVal);
            }
		}
    }
</script>
<style>
</style>