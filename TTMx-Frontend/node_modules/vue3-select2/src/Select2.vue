<template>
  <div>
    <select class="form-control" :id="id" :name="name" :disabled="disabled" :required="required"></select>
  </div>
</template>

<script>
import("select2/dist/js/select2.full").then(m => m.default());
import 'select2/dist/css/select2.min.css'
export default {
  name: 'Select2',
  data() {
    return {
      select2: null
    };
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: [String, Array], // previously was `value: String`
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    settings: {
      type: Object,
      default: () => {}
    },
    id_field: {                 //if option item has other identity key
      type: String,
      default: 'id'
    },
    text_field: {             //if option item has other text colum. May be one column or multiple column (will be join with seperator)
      type: [String,Array],
      default: 'text'
    },
    text_sep: {               // seperator for multiple text column
      type: String,
      default: ' - '
    },
  },
  watch: {
    options: {
      handler(val) {
        this.setOption(val);
      },
      deep: true
    },
    modelValue: {
      handler(val) {
        this.setValue(val);
      },
      deep: true
    },
  },
  methods: {
    getOptionDatas(values = []) {
  const { id_field, text_field, text_sep } = this; // Destructuring for efficiency

  return values.map(opt => {
    if (typeof opt !== 'object') return opt; // Early return for non-objects

    opt.id = opt.hasOwnProperty(id_field) ? opt[id_field] : opt.id; // Conditional assignment for id

    if (typeof text_field !== 'string') { // Handle single or multiple text fields
      const texts = [];
      for (const m of Object.keys(text_field)) { // Use Object.keys for iteration efficiency
        if (opt.hasOwnProperty(text_field[m])) {
          texts.push(opt[text_field[m]]);
        }
      }
      opt.text = texts.join(text_sep || ''); // Use default separator if not defined
    } else {
      opt.text = opt.hasOwnProperty(text_field) ? opt[text_field] : opt.text; // Conditional assignment for text
    }

    return opt;
  });
},
    setOption(val = []) {
      this.select2.empty();
      this.select2.select2({
        placeholder: this.placeholder,
        ...this.settings,
        minimumResultsForSearch:5,
        data: this.getOptionDatas(val)
      });
      this.setValue(this.modelValue);
    },
    setValue(val) {
      if (val instanceof Array) {
        this.select2.val([...val]);
      } else {
        this.select2.val([val]);
      }
      this.select2.trigger('change');
    }
  },
  mounted() {
    setTimeout(()=>{                        //delay to fix some issues
    this.select2 = $(this.$el)
      .find('select')
      .select2({
        placeholder: this.placeholder,
        ...this.settings,
        minimumResultsForSearch:10,
        data: this.getOptionDatas(this.options)
      })
      .on('select2:select select2:unselect', ev => {
        this.$emit('update:modelValue', this.select2.val());
        this.$emit('select', ev['params']['data']);
      });
    this.setValue(this.modelValue);
    },300);
  },
  beforeUnmount() {
    this.select2.select2('destroy');
  }
};
</script>
