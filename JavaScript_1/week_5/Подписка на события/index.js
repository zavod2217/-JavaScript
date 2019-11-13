module.exports = {

// Массив событий
  subscribers: {},

  /**
   * @param {String} event
   * @param {Object} subscriber
   * @param {Function} handler
   */
  on: function (event, subscriber, handler) {
    if (!this.subscribers[event]) this.subscribers[event] = []
    this.subscribers[event].push({subscriber, handler: handler.bind(subscriber)})
    return this
  },

  /**
   * @param {String} event
   * @param {Object} subscriber
   */
  off: function (event, subscriber) {
    if (this.subscribers[event]) {
      for(let i = this.subscribers[event].length - 1; i >=0; --i) {
        if (this.subscribers[event][i].subscriber === subscriber) {
          this.subscribers[event].splice(i, 1)
        }
      }
    }
    return this
  },

  /**
   * @param {String} event
   */
  emit: function (event) {
    if (this.subscribers[event]) this.subscribers[event].forEach(item => item.handler())
    return this
  }
};
