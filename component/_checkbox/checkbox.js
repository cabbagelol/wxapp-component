import Elui from '../baseComponent';
Elui({
  properties: {
    name: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    },
    ischeckbox: {
      type: Boolean,
      value: true
    }
  },

  relations: {
    '../_checkbox-group/checkbox-group': {
      type: 'parent',
      linked(target) {
        this.parent_ = target;
        target.onPull(this);
      }
    },
  },

  methods: {
    getValue() {
      return this.data.checked;
    },

    setValueChecked(e) {
      var that = this;
      if (that.data.disabled) {
        return;
      }
      that.setData({
        checked: that.data.checked != true
      })
      that.triggerEvent("change", {
        el: e,
        value: that.data.checked
      })
      if (that.parent_ && typeof this.parent_.onRadioGroup == 'function') {
        that.parent_.onRadioGroup();
      }
    },

    setValue(checked_) {
      var that = this;
      that.setData({
        checked: typeof checked_ === 'boolean' ? checked_ : false
      })
    }
  }
})