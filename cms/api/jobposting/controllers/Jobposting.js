'use strict';

/**
 * Jobposting.js controller
 *
 * @description: A set of functions called "actions" for managing `Jobposting`.
 */

module.exports = {

  /**
   * Retrieve jobposting records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.jobposting.search(ctx.query);
    } else {
      return strapi.services.jobposting.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a jobposting record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.jobposting.fetch(ctx.params);
  },

  /**
   * Count jobposting records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.jobposting.count(ctx.query, populate);
  },

  /**
   * Create a/an jobposting record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.jobposting.add(ctx.request.body);
  },

  /**
   * Update a/an jobposting record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.jobposting.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an jobposting record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.jobposting.remove(ctx.params);
  }
};
