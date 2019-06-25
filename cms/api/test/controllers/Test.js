'use strict';

/**
 * Test.js controller
 *
 * @description: A set of functions called "actions" for managing `Test`.
 */

module.exports = {

  /**
   * Retrieve test records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.test.search(ctx.query);
    } else {
      return strapi.services.test.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a test record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.test.fetch(ctx.params);
  },

  /**
   * Count test records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.test.count(ctx.query);
  },

  /**
   * Create a/an test record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.test.add(ctx.request.body);
  },

  /**
   * Update a/an test record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.test.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an test record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.test.remove(ctx.params);
  }
};
