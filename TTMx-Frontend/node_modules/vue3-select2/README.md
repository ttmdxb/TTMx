# vue3-select2

## Related Versions

vue3-select2 is baseed on these plugins and libs(version):
- [vue(>= 3.0-beta)](https://github.com/vuejs/vue-next)
- [jQuery](https://jquery.com/)
- [select2](https://select2.github.io/)

## How to use 
---
### Install
``` cmd
// npm install
npm install vue3-select2 --save
```

### Use as component
1. import as global component.
``` javascript
import Select2 from 'vue3-select2';
// Create a Vue application
const app = Vue.createApp({})

// Define a new global component called button-counter
app.component('Select2', Select2)
```

2. import into a single component.
``` javascript
// import Select2Component
import Select2 from 'vue3-select2';

Note: You need to import jQuery globally
``` javascript
// import jQuery globally before creating App
import $ from 'jquery';
window.$ = window.jQuery = $;
import Select2 from 'vue3-select2'; // while using select2 as global component
const app = Vue.createApp({})
<template>
  <div>
    <Select2 v-model="myValue" :options="myOptions" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
    <h4>Value: {{ myValue }}</h4>
  </div>
</template>
<script>
export default {
    // declare Select2Component
    components: {Select2},
    data() {
        return {
            myValue: '',
            myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]
        }
    },
    methods: {
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        }
    }
}
</script>
```

### Options
- `options`: `option[]`
  - select options for select2
  - `option`: `{id: key, text: value}` or `string`
- `v-model`: option value that is selected
  - `id` or `string` while multiple is disable
  - `id[]` or `string[]` while multiple is enable
- `update:modelValue`
  - callback when option selected change
  - return value
  - parmas: same with `v-model`
- `select`
  - callback when option selected
  - parmas: `option`(`{id: value, text: key, selected: ifSelected}` or `string`)
- `disabled`
  - if select is disabled
- `placeholder`
  - placeholder attribute for select element
- `id`
  - id attribute for select element
- `id_field`: `other field name instead of id field`
- `name`
  - name attribute for select element
- `text_field`: `one or multiple field name to display as text. Example:name or ['name','phone']`
- `text_sep`: `text seperator for multiple field name to display as text`
- `settings`
  - configurable settings, see [Select2 options API](https://select2.org/configuration/options-api)
  - `setting`: `{ settingOption: value, settingOption: value }`
