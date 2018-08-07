import Vue from 'vue';
import gtext from './form/text'
import gradio from './form/radio'
import scroll from './scroll'
import header from '@/components/header'

Vue.component(gtext.name, gtext);
Vue.component(gradio.name, gradio);
Vue.component(scroll.name, scroll);
Vue.component(header.name, header);